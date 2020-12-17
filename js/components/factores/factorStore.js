import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        factoreItems:{
            title:"پیش فاکتور",
            logo:"",
            from:{
                name:"",
                componyName:"",
                phone:"",
                adress:""
            },
            to:{
                name:"",
                componyName:"",
                phone:""
            },
            factoreDetails:{
                productName:"",
                factoreNumber:""
            },
            tableItems:null,
            off:{
                affect:false,
                mount:"0",
                title:"تخفیف"
            },
            wholePrice:0,
            realPrice:0,
            persianPrice:"",
            factorDescs:""
        }
    },
    getters:{
    }
})