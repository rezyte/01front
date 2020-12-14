import vue from "vue"
import index from "./components/landingPAge/index.vue"
const landing=new vue({
    el:'#app',
    components:{
        landingPage:index
    }
})

import "./css/landing/shared.css";