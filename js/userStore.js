import Vue from 'vue'
import Vuex from 'vuex'
import EventService from './services/EventService.js';
Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		regularExpression: {
            regName: /^[ ضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئو]{3,20}$/,
            regUsername: /^[a-zA_Zضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئو0-9]{3,20}$/gi,
            regPassword: /^[\u06F0-\u06F90-9a-zA-Z0-9ضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئو ]{4,20}$/g,
            reg_phoneNumber: /^[0-9\u06F0-\u06F90-9]{11}$/gi,
            regEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			regNameCompany: /^[ًٌٍ،؛َُِّۀآـ«»,:"ةيژؤإأء<> -؟ضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئو./a-zA-z0-9\u06F0-\u06F90-9]{3,100}$/,
        },
		isSubMenuOpen: false,
		url: null,
		categoriesTop: null,
		isShowFiltering: false,
		isShowUserPanelNavigation: false,
		currentComponentUserPanelNavigation: "profile",
		isShowConsulate: false,
		catsWithSubs: null,
		catsFromCreaeProduct: [],
		user: {},
		csrf: null,
		showingPrePageItems: { pre: false, searchBar: true, logo: true },
		showInstallAppBanner: false,
		installEvent: null,
		showProfileOptions: false,
		shareLink: null,
	},
	getters: {
		isSubMenu: state => {
			return state.isSubMenuOpen
		},
		getCatsWithSubs: state => {
			return state.catsWithSubs
		},
		getCatsFromCreaeProduct: state => {
			return state.catsFromCreaeProduct
		},
		isOptionsOpen: state => {
			return state.showProfileOptions
		},
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
			let obj = Object.assign({}, newarr)
			return obj;
		},
		regularExpression:state =>{
			return state.regularExpression
		}
	},
	mutations: {
		toggleSubMenu: state => {
			state.isSubMenuOpen = !state.isSubMenuOpen
		},
		toggleFiltering: state => {
			state.isShowFiltering = !state.isShowFiltering
		},
		toggleUserPanelNavigation: state => {
			state.isShowUserPanelNavigation = !state.isShowUserPanelNavigation
		},
		swapUserPanelComponent: (state, payload) => {
			state.currentComponentUserPanelNavigation = payload
		},
		toggleConsulate: state => {
			state.isShowConsulate = !state.isShowConsulate
		},
		fillCatsWithSubs: (state, payload) => {
			state.catsWithSubs = payload
		},
		fillCatsFromCreaeProduct: (state, payload) => {
			state.catsFromCreaeProduct = payload
		},
		changePrePageStates: (state, payload) => {
			state.pre = payload[0]
			state.searchBar = payload[1]
			state.logo = payload[2]
		},
		toggleOptions: state => {
			state.showProfileOptions = !state.showProfileOptions
		},
		RECORD_COMMENTS(state,payload){
			state.comments.push(payload)
		},
		RECORD_REPLAY_COMMENT(state,payload){
			state.subComments.push(payload);
		},
		SET_MAINCATEGORY(state,payload){
			// console.log(payload)
			Vue.set(state,'mainCategories',payload)
		}
	},
	actions: {
		toggleSubMenu: ({ commit }) => {
			commit('toggleSubMenu')
		},
		toggleFiltering: ({ commit }) => {
			commit("toggleFiltering")
		},
		toggleUserPanelNavigation: ({ commit }) => {
			commit('toggleUserPanelNavigation')
		},
		swapUserPanelComponent: ({ commit }, payload) => {
			commit('swapUserPanelComponent', payload)
		},
		toggleConsulate: ({ commit }) => {
			commit("toggleConsulate")
		},
		fillCatsWithSubs: ({ commit }, payload) => {

			commit("fillCatsWithSubs", payload)
		},
		fillCatsFromCreaeProduct: ({ commit }, payload) => {
			commit('fillCatsFromCreaeProduct', payload)
		},
		changePrePageStates: ({ commit }, payload) => {
			commit('changePrePageStates', payload)
		},
		toggleOptions: ({ commit }) => {
			commit("toggleOptions")
		},
		record_comment({commit},payload){
			commit('RECORD_COMMENTS',payload);
		},
		record_replay_comment({commit},payload){
			let mount=payload.split(":")[1];
			console.log(mount);
			commit('RECORD_REPLAY_COMMENT',mount);
		},
		get_mainCategory({commit}){
			EventService.get_mainCategory()
			.then(response =>{
				// console.log(response.data.main_categories)
				let data=JSON.parse(response.data.main_categories)
				commit("SET_MAINCATEGORY",data);
			})
			.catch(error =>{
				console.log(error)
			})
		},

	}
})