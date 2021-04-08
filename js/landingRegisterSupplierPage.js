import Vue from 'vue';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { store } from './store'
import Company from "./components/landingRegisterSupplierPage/Company.vue";
import Product from "./components/landingRegisterSupplierPage/Product.vue";
import Register from "./components/landingRegisterSupplierPage/Register.vue";

new Vue({
    el:'#app',
    store,
    components:{
        company:Company,
        register:Register,
        product:Product
    }
})
