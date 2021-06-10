import axios from 'axios'

const apiClient=axios.create({
    baseURL:'/',
    // baseURL:'http://damirco.com',
    withCredentials:false,
    headers:{
        'Accept':'application/json',
    //    'Content-Type':'applications/json'
    }
}) 

export default{
    // apiClient,
    get_mainCategory(){
        return apiClient.get('mainCategories')
    },
    select_default_msg(payload){
        console.log(payload.csrf)
        let f=new FormData()
        f.set('note',payload.id)
        // f.set('csrf_token',payload.csrf)
        return apiClient.post('userpanel/msg',f,{
            headers:{
                'X-CSRFToken':payload.csrf
            }
        })
    }
}