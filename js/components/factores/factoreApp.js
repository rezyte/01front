import vue from "vue"
import factoreOne from "./factores/factoreOne/factoreOne.vue";
import Vuex from 'vuex'
vue.use(Vuex)
import {store} from "./factorStore"
const factoreApp=new vue({
    el:"#app",
    components:{
        factoreOne
    },
    store

})

// import "./css/shared.css"