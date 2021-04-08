
export default{
    record_comment({commit},payload){
        commit('RECORD_COMMENTS',payload);
    },
    record_replay_comment({commit},payload){
        let mount=payload.split(":")[1];
        console.log(mount);
        commit('RECORD_REPLAY_COMMENT',mount);
    },
    check_user_exist({commit},payload){
        axios.post('/users/checkExist',payload)
        .then(response =>{
            commit("CHECK_USER_EXIST",JSON.parse(response.data));
        }).catch(error=>{
            console.log(error.response);
        })
    }

}
