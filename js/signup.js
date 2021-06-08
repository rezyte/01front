import vue from "vue"
import "./css/reset.css";
import signup from "./components/signup/signup.vue"
import signupView from "./components/signup/signupView.vue";
import verifacation from "./components/signup/verifacation.vue"
import notSignUp from "./components/signup/notSignUp.vue";
import choose from "./components/signup/choose.vue";
import Register from "./components/signup/Register.vue";
import {store} from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
vue.mixin({
    data: function() {
        return {
            csrf:csrf
        }
    }
})
const sign=new vue({
    el:"#signup",
    components:{
        signup,
        signupView,
        verifacation,
        choose,
        notSignUp,
        Register
    },
    store
})
import "./css/signup/shared.css"
import "./css/reset.css";
import "./css/buttons.css";