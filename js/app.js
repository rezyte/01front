import Vue from 'vue'
import {store} from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue,IconsPlugin)
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
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
