import vue from "vue"
import signup from "./components/signup/signup.vue"
import signupView from "./components/signup/signupView.vue";
import verifacation from "./components/signup/verifacation.vue"
import notSignUp from "./components/signup/notSignUp.vue";
import choose from "./components/signup/choose.vue"
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
        notSignUp
    }
})
import "./css/signup/shared.css"
import "./css/reset.css";
import "./css/buttons.css";