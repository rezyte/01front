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
    select_default_msg(msg){
        let f=new FormData()
        f.set('note',msg)
        return apiClient.post('userpanel/msg',f)
    }
}