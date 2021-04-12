import Vue from 'vue';
import {store} from './store'
import Index from './components/test/Index.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

new Vue({
   el:"#app",
   render: h => h(Index),
   store,
   components:{Index}
   // compon

});
