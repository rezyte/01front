import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store=new Vuex.Store({
	state:{
		isSubMenuOpen:false,
		url:null,
		categoriesTop:null,
		isShowFiltering:false,
		isShowUserPanelNavigation:false,
		currentComponentUserPanelNavigation:"profile",
		isShowConsulate:false,
		catsWithSubs:null,
		catsFromCreaeProduct:[],
		user:{},
		csrf:null,
		showingPrePageItems:{pre:false,searchBar:true,logo:true},
		showInstallAppBanner:false,
		installEvent:null,
		showProfileOptions:false,
		shareLink:null
	},
	getters:{
		isSubMenu:state=>{
			return state.isSubMenuOpen
		},
		getCatsWithSubs:state=>{
			return state.catsWithSubs
		},
		getCatsFromCreaeProduct:state=>{
			return state.catsFromCreaeProduct
		},
		isOptionsOpen:state=>{
			return state.showProfileOptions
		}
	},
	mutations:{
		toggleSubMenu:state=>{
			state.isSubMenuOpen=!state.isSubMenuOpen
		},
		toggleFiltering:state=>{
			state.isShowFiltering=!state.isShowFiltering
		},
		toggleUserPanelNavigation:state=>{
			state.isShowUserPanelNavigation=!state.isShowUserPanelNavigation
		},
		swapUserPanelComponent:(state,payload)=>{
			state.currentComponentUserPanelNavigation=payload
		},
		toggleConsulate:state=>{
			state.isShowConsulate=!state.isShowConsulate
		},
		fillCatsWithSubs:(state,payload)=>{
			state.catsWithSubs=payload
		},
		fillCatsFromCreaeProduct:(state,payload)=>{
			state.catsFromCreaeProduct=payload
		},
		changePrePageStates:(state,payload)=>{
			state.pre=payload[0]
			state.searchBar=payload[1]
			state.logo=payload[2]
		},
		toggleOptions:state=>{
			state.showProfileOptions=!state.showProfileOptions
		}
	},
	actions:{
		toggleSubMenu:({commit})=>{
			commit('toggleSubMenu')
		},
		toggleFiltering:({commit})=>{
			commit("toggleFiltering")
		},
		toggleUserPanelNavigation:({commit})=>{
			commit('toggleUserPanelNavigation')
		},
		swapUserPanelComponent:({commit},payload)=>{
			commit('swapUserPanelComponent',payload)
		},
		toggleConsulate:({commit})=>{
			commit("toggleConsulate")
		},
		fillCatsWithSubs:({commit},payload)=>{
			
			commit("fillCatsWithSubs",payload)
		},
		fillCatsFromCreaeProduct:({commit},payload)=>{
			commit('fillCatsFromCreaeProduct',payload)
		},
		changePrePageStates:({commit},payload)=>{
			commit('changePrePageStates',payload)
		},
		toggleOptions:({commit})=>{
			commit("toggleOptions")
		}

	}
})