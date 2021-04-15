import axios from "axios";
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
        axios.get('/check-user-exists/?username='+payload)
        .then(response =>{
           console.log("ttt")

            // commit("CHECK_USER_EXIST",JSON.parse(response.data));
        }).catch(error=>{
            console.log(error.response);
            if (error.response.data.is_taken_username === true){
                commit('EXIST_USER',error.response.data.error_msg);
            }
            if (error.response.data.is_taken_phoneNumber === true){
                commit('EXIST_USER_PHONE',error.response.data.error_msg);
            }
        })
    },
    loadTrans(context){
        axios.get('https://my-json-server.typicode.com/Sunpacker/vue_pagination/db').then((response) =>{
            let reversed=response.data.transactions.reverse();
            context.commit('loadTransactions',reversed)
        })
    }

}
