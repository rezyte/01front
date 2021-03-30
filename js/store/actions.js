
export default{
    record_comment({commit},payload){
        commit('RECORD_COMMENTS',payload);
    },
    record_replay_comment({commit},payload){
        let mount=payload.split(":")[1];
        console.log(mount);
        commit('RECORD_REPLAY_COMMENT',mount);
    }
}