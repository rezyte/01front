import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        sideMenuOpen:false,
        vars:[],
        taxOptions:{affect:false,mount:0,title:"تخفیف"},
        installEvent:false,
        showInstallAppBanner:false,
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
            tax:{
                affect:false,
                mount:"0",
                title:"مالیات"
            },
            wholePrice:0,
            realPrice:0,
            persianPrice:"",
            factorDescs:""
        },
        getPhoneId:{id:null,el:null}
    },
    getters:{
        isSubMenuOpen:state=>{
            return state.sideMenuOpen
        },
        getCatsFromCreaeProduct:state=>{
            return state.vars
        }
    },
    mutations:{
        toggleSideMenu:state=>{
            state.sideMenuOpen=!state.sideMenuOpen
        },
        fillCatsFromCreaeProduct:(state,payload)=>{
            state.vars=payload
        }
    },
    actions:{
        toggleSubMenu:({commit})=>{
            commit("toggleSideMenu")
        },
        fillCatsFromCreaeProduct:({commit},payload)=>{
            commit("fillCatsFromCreaeProduct",payload)
        }
    }
})