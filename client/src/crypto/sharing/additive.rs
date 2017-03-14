use super::*;
use super::batched::BatchShareGenerator;

use rand::{Rng, OsRng};
use ::std::iter::repeat;

pub struct AdditiveSecretSharing {
    share_count: usize,
    modulus: i64,
    rng: OsRng,
}

impl AdditiveSecretSharing {
    pub fn new(share_count: usize, modulus: i64) -> AdditiveSecretSharing {
        AdditiveSecretSharing {
            share_count: share_count,
            modulus: modulus,
            rng: OsRng::new().unwrap(), // TODO not nice
        }
    }
}

impl BatchShareGenerator for AdditiveSecretSharing {

    fn batch_input_size(&self) -> usize {
        1
    }

    fn batch_output_size(&self) -> usize {
        self.share_count
    }

    fn generate_for_batch(&mut self, batch_input: &[Secret]) -> Vec<Share> {
        assert_eq!(batch_input.len(), 1);
        let secret = batch_input[0];

        // NOTE
        // we assume that the values are really i32 to prevent overflow -- make this explicit!!
        // specifically, that self.modulus fits within i32

        // pick share_count - 1 random values from group
        let mut shares: Vec<Share> = (0..self.share_count - 1)
            .map(|_| self.rng.gen_range(0_i64, self.modulus))
            .collect();

        // compute the last share as the secret minus the sum of all other shares
        let last_share = shares.iter().fold(secret, |sum, &x| { (sum - x) % self.modulus });
        shares.push(last_share);

        shares
    }

}

impl SecretReconstructor for AdditiveSecretSharing {
    fn reconstruct(&self, indexed_shares: &Vec<(usize, Vec<Share>)>) -> Vec<Secret> {
        let dimension: usize = match indexed_shares.get(0) {
            None => 0,
            Some(head) => head.1.len()
        };

        let mut result: Vec<Share> = repeat(0).take(dimension).collect();
        for &(_, ref shares) in indexed_shares {
            assert!(shares.len() == dimension);
            for (ix, share) in shares.iter().enumerate() {
                result[ix] += *share;
                result[ix] %= self.modulus;
            }
        }

        result
    }
}
