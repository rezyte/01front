import vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex'

import userPanelHeader from "./components/userPanel/template/userPanelHeeader/userPanelHeader.vue";
import sideMenu from "./components/userPanel/template/sideMenu/sideMenu.vue";
import userPanelWrapper from "./components/userPanel/userPanelWrapper.vue";
import installPrompt from "./components/user/template/installPrompt/installPrompt.vue";
import stickMenu from "./components/userPanel/template/stickMenu/stickMenu.vue";
import MiniOrder from "./components/userpanel/miniorder/Index2.vue"
vue.use(BootstrapVue)
vue.use(IconsPlugin)
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
		// accept,
		stickMenu,
		installPrompt,
		userPanelHeader,
		sideMenu,
		userPanelWrapper,
		MiniOrder,
		'index':()=>import("./components/userPanel/index/index.vue"),
		'createProduct':()=>import("./components/userPanel/createPRoduct/createProduct.vue"),
		'editProduct':()=>import("./components/userPanel/editProducts/editProduct.vue"),
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
