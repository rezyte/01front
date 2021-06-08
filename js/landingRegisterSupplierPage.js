import Vue from 'vue';
import "./css/reset.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store'
import Company from "./components/landingRegisterSupplierPage/Company.vue";
import Product from "./components/landingRegisterSupplierPage/Product.vue";
import Register from "./components/landingRegisterSupplierPage/Register.vue";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import CKEditor from 'ckeditor4-vue';
Vue.use( CKEditor );
new Vue({
    el:'#app',
    store,
    components:{
        company:Company,
        register:Register,
        product:Product
    }
})
