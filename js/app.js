import Vue from 'vue'
import {store} from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import App from "./components/App.vue";
import Index from './components/test/Index.vue'
new Vue({
    el: '#app',
    store,
    components: {
        App,
        Index
        // UserPanel
    },
})
