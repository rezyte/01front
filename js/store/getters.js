

export default{
    get_subComments:(state)=> (id) =>{
        let arr = new Array();
        state.subComments.forEach(function (item, index) {
            if (item.comment_id == id) {
                arr[index] = item
            }
        })
        let newarr = arr.filter(() => {
            return true;
        })
        return Object.assign({}, newarr);
    },
    regularExpression:state=>{
        return state.regularExpression
    },
    messages_response:state =>{
        return state.messages_response
    }
}
