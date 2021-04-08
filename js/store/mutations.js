
export default{
    RECORD_COMMENTS(state,payload){
        state.comments.push(payload)
    },
    RECORD_REPLAY_COMMENT(state,payload){
        state.subComments.push(payload);
    },
    CHECK_USER_EXIST(state,payload){
        if(payload==='نام کاربری از قبل انتخاب شده است'){
            state.messages_response.exist_user.username=payload
        }else{
            state.messages_response.exist_user.phoneNumber=payload;
        }
    },
    RESET_EXIST_USER(state,payload){
        if(payload==='username'){
            state.messages_response.exist_user.username=null;
        }
        if(payload==='phoneNumber'){
            state.messages_response.exist_user.phoneNumber=null;
        }
    },
    EXIST_USER(state,payload){
        console.log('username')
        state.messages_response.exist_user.username=payload
    },
    EXIST_USER_PHONE(state,payload){
        state.messages_response.exist_user.phoneNumber=payload
    }

}
