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
    get_mainCategory(){
        return apiClient.get('mainCategories')
    }
}