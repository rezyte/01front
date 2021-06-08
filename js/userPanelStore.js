import Vue from 'vue'
import Vuex from 'vuex'
import EventService from './services/EventService.js';
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        regularExpression: {
            regName: /^[ ضصثقفغآعهخحجچپشسیبلاتنمکگظطزرذدئو]{3,20}$/,
            regUsername: /^[a-zA_Zضصثقفغعهخحجچآپشسیبلاتنمکگظطزرذدئو0-9]{3,20}$/gi,
            regPassword: /^[\u06F0-\u06F90-9a-zA-Z0-9ضصثقفغعهخحجچپشسیبلآاتنمکگظطزرذدئو ]{4,20}$/g,
            reg_phoneNumber: /^[0-9\u06F0-\u06F90-9]{11}$/gi,
            regEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        },
        sideMenuOpen: false,
        vars: [],
        taxOptions: {affect: false, mount: 0, title: "تخفیف"},
        installEvent: false,
        showInstallAppBanner: false,
        factoreItems: {
            title: "پیش فاکتور",
            logo: "",
            from: {
                name: "",
                componyName: "",
                phone: "",
                adress: ""
            },
            to: {
                name: "",
                componyName: "",
                phone: ""
            },
            factoreDetails: {
                productName: "",
                factoreNumber: ""
            },
            tableItems: null,
            off: {
                affect: false,
                mount: "0",
                title: "تخفیف"
            },
            tax: {
                affect: false,
                mount: "0",
                title: "مالیات"
            },
            wholePrice: 0,
            realPrice: 0,
            persianPrice: "",
            factorDescs: ""
        },
        getPhoneId: {id: null, el: null}
    },
    getters: {
        isSubMenuOpen: state => {
            return state.sideMenuOpen
        },
        getCatsFromCreaeProduct: state => {
            return state.vars
        }
    },
    mutations: {
        toggleSideMenu: state => {
            state.sideMenuOpen = !state.sideMenuOpen
        },
        fillCatsFromCreaeProduct: (state, payload) => {
            state.vars = payload
        }
    },
    actions: {
        toggleSubMenu: ({commit}) => {
            commit("toggleSideMenu")
        },
        fillCatsFromCreaeProduct: ({commit}, payload) => {
            commit("fillCatsFromCreaeProduct", payload)
        },
        select_default_msg({commit},payload){
            EventService.select_default_msg(payload)
            .then(response =>{
                console.log(response)
            })
            .catch(error =>[
                console.log('e',error.response)
            ])
        }
        
    }
})
