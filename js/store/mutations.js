
export default{
    RECORD_COMMENTS(state,payload){
        state.comments.push(payload)
    },
    RECORD_REPLAY_COMMENT(state,payload){
        state.subComments.push(payload);
    },
    
}