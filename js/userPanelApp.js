import vue from 'vue'
import userPanelHeader from "./components/userPanel/template/userPanelHeeader/userPanelHeader.vue";
import sideMenu from "./components/userPanel/template/sideMenu/sideMenu.vue";
import userPanelWrapper from "./components/userPanel/userPanelWrapper.vue";
import installPrompt from "./components/user/template/installPrompt/installPrompt.vue";
import Vuex from 'vuex'
import stickMenu from "./components/userPanel/template/stickMenu/stickMenu.vue";
import accept from "./components/userPanel/miniOrders/accept.vue";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
vue.component('stickMenu', stickMenu);
vue.use(Vuex)
import {store} from "./userPanelStore"

import {toggleWrapper} from "./components/userPanel/mixIns/toggleCreateProductWrapper"
vue.mixin(toggleWrapper)
vue.mixin({
	data: function() {
		return {
			// csrf:csrf,
			userInfo:userInfo,
			install:null
		}
	}
})
const eventBus=new vue()
const app=new vue({
	el:"#userPanel",
	components:{
		accept,
		stickMenu,
		installPrompt,
		userPanelHeader,
		sideMenu,
		userPanelWrapper,
		'index':()=>import("./components/userPanel/index/index.vue"),
		'createProduct':()=>import("./components/userPanel/createPRoduct/createProduct.vue"),
		'editProduct':()=>import("./components/userPanel/editProducts/createProduct.vue"),
		'createBlogPost':()=>import('./components/userPanel/createBlogPost/createBlogPost.vue'),
		'addCategory':()=>import('./components/userPanel/addCategory/addCategory.vue'),
		'editVariations':()=>import("./components/userPanel/editCategoryVariations/editVariations.vue"),
		'ticket':()=>import("./components/userPanel/ticket/ticket.vue"),
		'ticketReps':()=>import("./components/userPanel/ticketReps/ticketReps.vue"),
		'myProducts':()=>import('./components/userPanel/myProducts/myProducts.vue'),
		'profile':()=>import('./components/userPanel/profile/producer/producer.vue'),
		'miniOrders':()=>import('./components/userPanel/miniOrders/miniOrders.vue'),
		'finishedPrice':()=>import('./components/userPanel/finishedPrice/finishedPrice.vue'),
		'catalogOrder':()=>import('./components/userPanel/catalogOrder/catalogOrder.vue'),
		'makeCatalog':()=>import("./components/userPanel/makeCatalog/makeCatalog.vue"),
		'wareHouse':()=>import("./components/userPanel/wareHouse/wareHouse.vue"),
		'customerOrganize':()=>import("./components/userPanel/customerOrganization/customerOrganization.vue"),
		'factor':()=>import("./components/userPanel/factor/factor.vue"),
		'mobileFactor':()=>import("./components/userPanel/factor/mobileFactor/mobileFactor.vue")


	},
	store
	// Router
})
import "vue-select/dist/vue-select.css";
import './css/userPanelCss/shared.css'
import "./css/reset.css";
import "./css/buttons.css";
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
// import './css/userPanelCss/profile.css'
// import {imageOverlay} from "leaflet/dist/leaflet-src.esm";
import './css/userPanelCss/tinyStyles.css'
