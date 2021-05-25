import Vue from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store'
import Company from "./components/landingRegisterSupplierPage/Company.vue";
import Product from "./components/landingRegisterSupplierPage/Product.vue";
import Register from "./components/landingRegisterSupplierPage/Register.vue";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import CKEditor from 'ckeditor4-vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use( CKEditor );
import App from "./components/App.vue";
// import Index from './components/test/Index.vue'
import LandingLent from './components/test/LandingLent.vue'
new Vue({
    el: '#app',
    store,
    components: {
        App,
        LandingLent,
        Company,
        Product,
        Register
        // UserPanel
    },
})
