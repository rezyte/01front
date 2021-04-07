import vue from "vue"
import index from "./components/landingPAge/index.vue"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { store } from './store'

const landing=new vue({
    el:'#app',
    store,
    components:{
        landingPage:index
    }
})
import "./css/landing/shared.css";
 