import Vue from 'vue';
import {store} from './store';
// import Index from './components/test/Index.vue';
import Index from './components/test/paginate/Index.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';


new Vue({
   el:"#app",
   render: h => h(Index),
   store,
   components:{
      // Index,
      // IndexPaginate
   },
   mounted() {
   }

});
