import Vue from 'vue';
import {store} from './store'
import Index from './components/test/Index.vue'

new Vue({
   el:"#app",
   render: h => h(Index),
   store,
   // compon

});
