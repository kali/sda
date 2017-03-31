var searchIndex = {};
searchIndex["sda_server"] = {"doc":"This crates contains the aggregation workflow implementation, regardless transport and storage. It is the real implementation of the SDAService trait, the other ones are proxies.","items":[[3,"SdaServer","sda_server","",null,null],[12,"agents_store","","",0,null],[12,"auth_tokens_store","","",0,null],[12,"aggregation_store","","",0,null],[12,"clerking_job_store","","",0,null],[3,"SdaServerService","","",null,null],[12,"0","","",1,null],[5,"new_jfs_server","","",null,{"inputs":[{"name":"p"}],"output":{"name":"sdaresult"}}],[0,"errors","","",null,null],[3,"SdaServerError","sda_server::errors","The Error type.",null,null],[12,"0","","The kind of the error.",2,null],[4,"SdaServerErrorKind","","The kind of an error.",null,null],[13,"Msg","","A convenient variant for String.",3,null],[13,"Io","","",3,null],[13,"Sda","","",3,null],[6,"SdaServerResult","","Convenient wrapper around `std::Result`.",null,null],[8,"SdaServerResultExt","","Additional methods for `Result`, for easy interaction with this crate.",null,null],[10,"chain_err","","If the `Result` is an `Err` then `chain_err` evaluates the closure, which returns *some type that can be converted to `ErrorKind`*, boxes the original error to store as the cause, then returns a new error containing the original error.",4,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",2,{"inputs":[{"name":"sdaservererrorkind"},{"name":"state"}],"output":{"name":"sdaservererror"}}],[11,"from_kind","","",2,null],[11,"with_chain","","",2,{"inputs":[{"name":"e"},{"name":"k"}],"output":{"name":"self"}}],[11,"kind","","",2,null],[11,"iter","","",2,{"inputs":[{"name":"self"}],"output":{"name":"errorchainiter"}}],[11,"backtrace","","",2,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"from_kind","","Constructs an error from a kind, and generates a backtrace.",2,{"inputs":[{"name":"sdaservererrorkind"}],"output":{"name":"sdaservererror"}}],[11,"with_chain","","Constructs a chained error from another error and a kind, and generates a backtrace.",2,{"inputs":[{"name":"e"},{"name":"k"}],"output":{"name":"sdaservererror"}}],[11,"kind","","Returns the kind of the error.",2,{"inputs":[{"name":"self"}],"output":{"name":"sdaservererrorkind"}}],[11,"iter","","Iterates over the error chain.",2,{"inputs":[{"name":"self"}],"output":{"name":"errorchainiter"}}],[11,"backtrace","","Returns the backtrace associated with this error.",2,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"description","","",2,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",2,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",2,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"from","","",2,{"inputs":[{"name":"sdaerror"}],"output":{"name":"self"}}],[11,"from","","",2,{"inputs":[{"name":"sdaservererrorkind"}],"output":{"name":"self"}}],[11,"from","","",2,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",2,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"deref","","",2,null],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","A string describing the error kind.",3,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"from","","",3,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"sdaservererror"}],"output":{"name":"self"}}],[11,"ping","sda_server","",0,{"inputs":[{"name":"self"}],"output":{"name":"sdaserverresult"}}],[11,"create_agent","","",0,{"inputs":[{"name":"self"},{"name":"agent"}],"output":{"name":"sdaserverresult"}}],[11,"get_agent","","",0,{"inputs":[{"name":"self"},{"name":"agentid"}],"output":{"name":"sdaserverresult"}}],[11,"upsert_profile","","",0,{"inputs":[{"name":"self"},{"name":"profile"}],"output":{"name":"sdaserverresult"}}],[11,"get_profile","","",0,{"inputs":[{"name":"self"},{"name":"agentid"}],"output":{"name":"sdaserverresult"}}],[11,"create_encryption_key","","",0,{"inputs":[{"name":"self"},{"name":"signedencryptionkey"}],"output":{"name":"sdaserverresult"}}],[11,"get_encryption_key","","",0,{"inputs":[{"name":"self"},{"name":"encryptionkeyid"}],"output":{"name":"sdaserverresult"}}],[11,"list_aggregations","","",0,{"inputs":[{"name":"self"},{"name":"option"},{"name":"option"}],"output":{"name":"sdaserverresult"}}],[11,"get_aggregation","","",0,{"inputs":[{"name":"self"},{"name":"aggregationid"}],"output":{"name":"sdaserverresult"}}],[11,"get_committee","","",0,{"inputs":[{"name":"self"},{"name":"aggregationid"}],"output":{"name":"sdaserverresult"}}],[11,"create_aggregation","","",0,{"inputs":[{"name":"self"},{"name":"aggregation"}],"output":{"name":"sdaserverresult"}}],[11,"delete_aggregation","","",0,{"inputs":[{"name":"self"},{"name":"aggregationid"}],"output":{"name":"sdaserverresult"}}],[11,"suggest_committee","","",0,{"inputs":[{"name":"self"},{"name":"aggregationid"}],"output":{"name":"sdaserverresult"}}],[11,"create_committee","","",0,{"inputs":[{"name":"self"},{"name":"committee"}],"output":{"name":"sdaserverresult"}}],[11,"create_participation","","",0,{"inputs":[{"name":"self"},{"name":"participation"}],"output":{"name":"sdaserverresult"}}],[11,"get_aggregation_status","","",0,{"inputs":[{"name":"self"},{"name":"aggregationid"}],"output":{"name":"sdaserverresult"}}],[11,"create_snapshot","","",0,{"inputs":[{"name":"self"},{"name":"snapshot"}],"output":{"name":"sdaserverresult"}}],[11,"poll_clerking_job","","",0,{"inputs":[{"name":"self"},{"name":"agentid"}],"output":{"name":"sdaserverresult"}}],[11,"get_clerking_job","","",0,{"inputs":[{"name":"self"},{"name":"agentid"},{"name":"clerkingjobid"}],"output":{"name":"sdaserverresult"}}],[11,"create_clerking_result","","",0,{"inputs":[{"name":"self"},{"name":"clerkingresult"}],"output":{"name":"sdaserverresult"}}],[11,"get_snapshot_result","","",0,{"inputs":[{"name":"self"},{"name":"aggregationid"},{"name":"snapshotid"}],"output":{"name":"sdaserverresult"}}],[11,"upsert_auth_token","","",0,{"inputs":[{"name":"self"},{"name":"authtoken"}],"output":{"name":"sdaresult"}}],[11,"check_auth_token","","",0,{"inputs":[{"name":"self"},{"name":"authtoken"}],"output":{"name":"sdaresult"}}],[11,"delete_auth_token","","",0,{"inputs":[{"name":"self"},{"name":"agentid"}],"output":{"name":"sdaresult"}}],[11,"ping","","",1,{"inputs":[{"name":"self"}],"output":{"name":"sdaresult"}}],[11,"create_agent","","",1,{"inputs":[{"name":"self"},{"name":"agent"},{"name":"agent"}],"output":{"name":"sdaresult"}}],[11,"get_agent","","",1,{"inputs":[{"name":"self"},{"name":"agent"},{"name":"agentid"}],"output":{"name":"sdaresult"}}],[11,"upsert_profile","","",1,{"inputs":[{"name":"self"},{"name":"agent"},{"name":"profile"}],"output":{"name":"sdaresult"}}],[11,"get_profile","","",1,{"inputs":[{"name":"self"},{"name":"agent"},{"name":"agentid"}],"output":{"name":"sdaresult"}}],[11,"create_encryption_key","","",1,{"inputs":[{"name":"self"},{"name":"agent"},{"name":"signedencryptionkey"}],"output":{"name":"sdaresult"}}],[11,"get_encryption_key","","",1,{"inputs":[{"name":"self"},{"name":"agent"},{"name":"encryptionkeyid"}],"output":{"name":"sdaresult"}}],[11,"list_aggregations","","",1,{"inputs":[{"name":"self"},{"name":"agent"},{"name":"option"},{"name":"option"}],"output":{"name":"sdaresult"}}],[11,"get_aggregation","","",1,{"inputs":[{"name":"self"},{"name":"agent"},{"name":"aggregationid"}],"output":{"name":"sdaresult"}}],[11,"get_committee","","",1,{"inputs":[{"name":"self"},{"name":"agent"},{"name":"aggregationid"}],"output":{"name":"sdaresult"}}],[11,"create_aggregation","","",1,{"inputs":[{"name":"self"},{"name":"agent"},{"name":"aggregation"}],"output":{"name":"sdaresult"}}],[11,"delete_aggregation","","",1,{"inputs":[{"name":"self"},{"name":"agent"},{"name":"aggregationid"}],"output":{"name":"sdaresult"}}],[11,"suggest_committee","","",1,{"inputs":[{"name":"self"},{"name":"agent"},{"name":"aggregationid"}],"output":{"name":"sdaresult"}}],[11,"create_committee","","",1,{"inputs":[{"name":"self"},{"name":"agent"},{"name":"committee"}],"output":{"name":"sdaresult"}}],[11,"get_aggregation_status","","",1,{"inputs":[{"name":"self"},{"name":"agent"},{"name":"aggregationid"}],"output":{"name":"sdaresult"}}],[11,"create_snapshot","","",1,{"inputs":[{"name":"self"},{"name":"agent"},{"name":"snapshot"}],"output":{"name":"sdaresult"}}],[11,"get_snapshot_result","","",1,{"inputs":[{"name":"self"},{"name":"agent"},{"name":"aggregationid"},{"name":"snapshotid"}],"output":{"name":"sdaresult"}}],[11,"create_participation","","",1,{"inputs":[{"name":"self"},{"name":"agent"},{"name":"participation"}],"output":{"name":"sdaresult"}}],[11,"get_clerking_job","","",1,{"inputs":[{"name":"self"},{"name":"agent"},{"name":"agentid"}],"output":{"name":"sdaresult"}}],[11,"create_clerking_result","","",1,{"inputs":[{"name":"self"},{"name":"agent"},{"name":"clerkingresult"}],"output":{"name":"sdaresult"}}],[0,"stores","","",null,null],[6,"AuthToken","sda_server::stores","",null,null],[8,"BaseStore","","",null,null],[10,"ping","","",5,{"inputs":[{"name":"self"}],"output":{"name":"sdaserverresult"}}],[8,"AuthTokensStore","","",null,null],[10,"upsert_auth_token","","Save an auth token",6,{"inputs":[{"name":"self"},{"name":"authtoken"}],"output":{"name":"sdaserverresult"}}],[10,"get_auth_token","","Retrieve an auth token",6,{"inputs":[{"name":"self"},{"name":"agentid"}],"output":{"name":"sdaserverresult"}}],[10,"delete_auth_token","","Delete an auth token",6,{"inputs":[{"name":"self"},{"name":"agentid"}],"output":{"name":"sdaserverresult"}}],[8,"AgentsStore","","",null,null],[10,"create_agent","","Create an agent",7,{"inputs":[{"name":"self"},{"name":"agent"}],"output":{"name":"sdaserverresult"}}],[10,"get_agent","","Retrieve the agent description.",7,{"inputs":[{"name":"self"},{"name":"agentid"}],"output":{"name":"sdaserverresult"}}],[10,"upsert_profile","","Register the given public profile; updates any existing profile.",7,{"inputs":[{"name":"self"},{"name":"profile"}],"output":{"name":"sdaserverresult"}}],[10,"get_profile","","Retrieve the associated public profile.",7,{"inputs":[{"name":"self"},{"name":"agentid"}],"output":{"name":"sdaserverresult"}}],[10,"create_encryption_key","","Register new encryption key for agent.",7,{"inputs":[{"name":"self"},{"name":"signedencryptionkey"}],"output":{"name":"sdaserverresult"}}],[10,"get_encryption_key","","Retrieve agent encryption key.",7,{"inputs":[{"name":"self"},{"name":"encryptionkeyid"}],"output":{"name":"sdaserverresult"}}],[10,"suggest_committee","","FIXME: very temporary interface. As logic needs to be adapted to each store capabilities, no real need to abstract this in server, but we do need to give more information about what is needed (supported keys, liveliness, number, ...)",7,{"inputs":[{"name":"self"}],"output":{"name":"sdaserverresult"}}],[8,"AggregationsStore","","",null,null],[10,"list_aggregations","","Search for aggregations by title and/or by recipient.",8,{"inputs":[{"name":"self"},{"name":"option"},{"name":"option"}],"output":{"name":"sdaserverresult"}}],[10,"create_aggregation","","Create a new aggregation on the service (without any associated result). If successful, the original id has been replaced by the returned id.",8,{"inputs":[{"name":"self"},{"name":"aggregation"}],"output":{"name":"sdaserverresult"}}],[10,"get_aggregation","","Retrieve an aggregation and its description.",8,{"inputs":[{"name":"self"},{"name":"aggregationid"}],"output":{"name":"sdaserverresult"}}],[10,"delete_aggregation","","Delete all information (including results) regarding an aggregation.",8,{"inputs":[{"name":"self"},{"name":"aggregationid"}],"output":{"name":"sdaserverresult"}}],[10,"get_committee","","Retrieve the associated committee.",8,{"inputs":[{"name":"self"},{"name":"aggregationid"}],"output":{"name":"sdaserverresult"}}],[10,"create_committee","","",8,{"inputs":[{"name":"self"},{"name":"committee"}],"output":{"name":"sdaserverresult"}}],[10,"create_participation","","",8,{"inputs":[{"name":"self"},{"name":"participation"}],"output":{"name":"sdaserverresult"}}],[10,"create_snapshot","","",8,{"inputs":[{"name":"self"},{"name":"snapshot"}],"output":{"name":"sdaserverresult"}}],[10,"list_snapshots","","",8,{"inputs":[{"name":"self"},{"name":"aggregationid"}],"output":{"name":"sdaserverresult"}}],[10,"get_snapshot","","",8,{"inputs":[{"name":"self"},{"name":"aggregationid"},{"name":"snapshotid"}],"output":{"name":"sdaserverresult"}}],[10,"count_participations","","",8,{"inputs":[{"name":"self"},{"name":"aggregationid"}],"output":{"name":"sdaserverresult"}}],[10,"snapshot_participations","","",8,{"inputs":[{"name":"self"},{"name":"aggregationid"},{"name":"snapshotid"}],"output":{"name":"sdaserverresult"}}],[10,"iter_snapped_participations","","",8,{"inputs":[{"name":"self"},{"name":"aggregationid"},{"name":"snapshotid"}],"output":{"name":"sdaserverresult"}}],[11,"count_participations_snapshot","","",8,{"inputs":[{"name":"self"},{"name":"aggregationid"},{"name":"snapshotid"}],"output":{"name":"sdaserverresult"}}],[11,"iter_snapshot_clerk_jobs_data","","",8,{"inputs":[{"name":"self"},{"name":"aggregationid"},{"name":"snapshotid"},{"name":"usize"}],"output":{"name":"sdaserverresult"}}],[10,"create_snapshot_mask","","",8,{"inputs":[{"name":"self"},{"name":"snapshotid"},{"name":"vec"}],"output":{"name":"sdaserverresult"}}],[10,"get_snapshot_mask","","",8,{"inputs":[{"name":"self"},{"name":"snapshotid"}],"output":{"name":"sdaserverresult"}}],[8,"ClerkingJobsStore","","",null,null],[10,"enqueue_clerking_job","","",9,{"inputs":[{"name":"self"},{"name":"clerkingjob"}],"output":{"name":"sdaserverresult"}}],[10,"poll_clerking_job","","",9,{"inputs":[{"name":"self"},{"name":"agentid"}],"output":{"name":"sdaserverresult"}}],[10,"get_clerking_job","","",9,{"inputs":[{"name":"self"},{"name":"agentid"},{"name":"clerkingjobid"}],"output":{"name":"sdaserverresult"}}],[10,"create_clerking_result","","",9,{"inputs":[{"name":"self"},{"name":"clerkingresult"}],"output":{"name":"sdaserverresult"}}],[10,"list_results","","",9,{"inputs":[{"name":"self"},{"name":"snapshotid"}],"output":{"name":"sdaserverresult"}}],[10,"get_result","","",9,{"inputs":[{"name":"self"},{"name":"snapshotid"},{"name":"clerkingjobid"}],"output":{"name":"sdaserverresult"}}],[0,"jfs_stores","sda_server","",null,null],[3,"JfsAgentsStore","sda_server::jfs_stores","",null,null],[3,"JfsAuthTokensStore","","",null,null],[3,"JfsAggregationsStore","","",null,null],[3,"JfsClerkingJobsStore","","",null,null],[11,"new","","",10,{"inputs":[{"name":"p"}],"output":{"name":"sdaserverresult"}}],[11,"ping","","",10,{"inputs":[{"name":"self"}],"output":{"name":"sdaserverresult"}}],[11,"create_agent","","",10,{"inputs":[{"name":"self"},{"name":"agent"}],"output":{"name":"sdaserverresult"}}],[11,"get_agent","","",10,{"inputs":[{"name":"self"},{"name":"agentid"}],"output":{"name":"sdaserverresult"}}],[11,"upsert_profile","","",10,{"inputs":[{"name":"self"},{"name":"profile"}],"output":{"name":"sdaserverresult"}}],[11,"get_profile","","",10,{"inputs":[{"name":"self"},{"name":"agentid"}],"output":{"name":"sdaserverresult"}}],[11,"create_encryption_key","","",10,{"inputs":[{"name":"self"},{"name":"signedencryptionkey"}],"output":{"name":"sdaserverresult"}}],[11,"get_encryption_key","","",10,{"inputs":[{"name":"self"},{"name":"encryptionkeyid"}],"output":{"name":"sdaserverresult"}}],[11,"suggest_committee","","",10,{"inputs":[{"name":"self"}],"output":{"name":"sdaserverresult"}}],[11,"new","","",11,{"inputs":[{"name":"p"}],"output":{"name":"sdaserverresult"}}],[11,"ping","","",11,{"inputs":[{"name":"self"}],"output":{"name":"sdaserverresult"}}],[11,"list_aggregations","","",11,{"inputs":[{"name":"self"},{"name":"option"},{"name":"option"}],"output":{"name":"sdaserverresult"}}],[11,"create_aggregation","","",11,{"inputs":[{"name":"self"},{"name":"aggregation"}],"output":{"name":"sdaserverresult"}}],[11,"get_aggregation","","",11,{"inputs":[{"name":"self"},{"name":"aggregationid"}],"output":{"name":"sdaserverresult"}}],[11,"delete_aggregation","","",11,{"inputs":[{"name":"self"},{"name":"aggregationid"}],"output":{"name":"sdaserverresult"}}],[11,"get_committee","","",11,{"inputs":[{"name":"self"},{"name":"aggregationid"}],"output":{"name":"sdaserverresult"}}],[11,"create_committee","","",11,{"inputs":[{"name":"self"},{"name":"committee"}],"output":{"name":"sdaserverresult"}}],[11,"create_participation","","",11,{"inputs":[{"name":"self"},{"name":"participation"}],"output":{"name":"sdaserverresult"}}],[11,"create_snapshot","","",11,{"inputs":[{"name":"self"},{"name":"snapshot"}],"output":{"name":"sdaserverresult"}}],[11,"count_participations","","",11,{"inputs":[{"name":"self"},{"name":"aggregationid"}],"output":{"name":"sdaserverresult"}}],[11,"snapshot_participations","","",11,{"inputs":[{"name":"self"},{"name":"aggregationid"},{"name":"snapshotid"}],"output":{"name":"sdaserverresult"}}],[11,"list_snapshots","","",11,{"inputs":[{"name":"self"},{"name":"aggregationid"}],"output":{"name":"sdaserverresult"}}],[11,"get_snapshot","","",11,{"inputs":[{"name":"self"},{"name":"aggregationid"},{"name":"snapshotid"}],"output":{"name":"sdaserverresult"}}],[11,"iter_snapped_participations","","",11,{"inputs":[{"name":"self"},{"name":"aggregationid"},{"name":"snapshotid"}],"output":{"name":"sdaserverresult"}}],[11,"create_snapshot_mask","","",11,{"inputs":[{"name":"self"},{"name":"snapshotid"},{"name":"vec"}],"output":{"name":"sdaserverresult"}}],[11,"get_snapshot_mask","","",11,{"inputs":[{"name":"self"},{"name":"snapshotid"}],"output":{"name":"sdaserverresult"}}],[11,"new","","",12,{"inputs":[{"name":"p"}],"output":{"name":"sdaserverresult"}}],[11,"ping","","",12,{"inputs":[{"name":"self"}],"output":{"name":"sdaserverresult"}}],[11,"upsert_auth_token","","",12,{"inputs":[{"name":"self"},{"name":"authtoken"}],"output":{"name":"sdaserverresult"}}],[11,"get_auth_token","","",12,{"inputs":[{"name":"self"},{"name":"agentid"}],"output":{"name":"sdaserverresult"}}],[11,"delete_auth_token","","",12,{"inputs":[{"name":"self"},{"name":"agentid"}],"output":{"name":"sdaserverresult"}}],[11,"new","","",13,{"inputs":[{"name":"p"}],"output":{"name":"sdaserverresult"}}],[11,"ping","","",13,{"inputs":[{"name":"self"}],"output":{"name":"sdaserverresult"}}],[11,"enqueue_clerking_job","","",13,{"inputs":[{"name":"self"},{"name":"clerkingjob"}],"output":{"name":"sdaserverresult"}}],[11,"poll_clerking_job","","",13,{"inputs":[{"name":"self"},{"name":"agentid"}],"output":{"name":"sdaserverresult"}}],[11,"get_clerking_job","","",13,{"inputs":[{"name":"self"},{"name":"agentid"},{"name":"clerkingjobid"}],"output":{"name":"sdaserverresult"}}],[11,"create_clerking_result","","",13,{"inputs":[{"name":"self"},{"name":"clerkingresult"}],"output":{"name":"sdaserverresult"}}],[11,"list_results","","",13,{"inputs":[{"name":"self"},{"name":"snapshotid"}],"output":{"name":"sdaserverresult"}}],[11,"get_result","","",13,{"inputs":[{"name":"self"},{"name":"snapshotid"},{"name":"clerkingjobid"}],"output":{"name":"sdaserverresult"}}]],"paths":[[3,"SdaServer"],[3,"SdaServerService"],[3,"SdaServerError"],[4,"SdaServerErrorKind"],[8,"SdaServerResultExt"],[8,"BaseStore"],[8,"AuthTokensStore"],[8,"AgentsStore"],[8,"AggregationsStore"],[8,"ClerkingJobsStore"],[3,"JfsAgentsStore"],[3,"JfsAggregationsStore"],[3,"JfsAuthTokensStore"],[3,"JfsClerkingJobsStore"]]};
initSearch(searchIndex);
