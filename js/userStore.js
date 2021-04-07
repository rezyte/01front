import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
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
		comments: [
			{
				id: 1,
				name: 'احمد',
				body: 'خهالذسمنیارسهاثلرنستیرذثبلتسرذسعل88888888888888888ا'
			},
			{
				id: 2,
				name: 'رضا',
				body: 'خهالذسمنیارسهاثلرنستیرذثبلتسرذسعلقسرذتسیبتممذریسمیذرمسبرذستنیرذسنتذا'
			}
		],
		subComments: [
			{
				id: 1,
				comment_id: 1,
				name: 'mohamad',
				body: 'eihaslkdhfowgsd'
			},
			{
				id: 2,
				comment_id: 2,
				name: 'reza',
				body: 'srgssdghtrjyrdsf'
			},
			{
				id: 3,
				comment_id: 1,
				name: 'jafar',
				body: 'eihaslkljhlkgfdhfowgsd'
			}
		],
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

	}
})