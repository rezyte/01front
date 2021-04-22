import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        regularExpression: {
            regName: /^[ ضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئو]{3,20}$/,
            regUsername: /^[a-zA_Zضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئو0-9]{3,20}$/gi,
            regPassword: /^[\u06F0-\u06F90-9a-zA-Z0-9ضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئو ]{4,20}$/g,
            reg_phoneNumber: /^[0-9\u06F0-\u06F90-9]{11}$/gi,
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
        }
    }
})
