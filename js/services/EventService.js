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
        return apiClient.post('userpanel/'+msg)
    }
}