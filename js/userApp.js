import vue from "vue";
import { store } from "./userStore.js";
import slicer from "./components/user/template/slicer/slicer.vue";
// import footer from "./components/user/template/footer/footer.vue";
import productZoom from "./components/user/product/productZoom.vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { toggleDisplayAndArrow } from "./components/user/mixIns/toggleDisplayAndArrow";
import heading from "./components/user/template/header/header.vue"
import navigation from "./components/user/template/navigation/navigation.vue"
import error from "./components/user/template/error/error.vue";
import topPrePageForPhones from "./components/user/template/topPrePageForPhones/topPrePageForPhones.vue";
import installPrompt from "./components/user/template/installPrompt/installPrompt.vue";
import buttomIcons from "./components/user/template/bottomIconsforPhones/bottomIconsForPhones.vue"
import sharePopUp from "./components/user/index/share/sharePopUp/sharePopUp.vue";
import breadCrumb from "./components/user/breadCrunb/breadCrumb.vue";
import user from "./components/user/user.vue";
import loadingSpinner from "./components/user/template/loadingSpinner/loadingSpinner.vue";
// import SubCategories from "./components/user/mainCategories/Index.vue"
import SubCategories from "./components/user/mainCategories/Index2.vue"
import AboutSupplier from "./components/user/about_supplier/Index.vue"
// import '/assets/sass/styles.scss'
vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
});
vue.use(BootstrapVue)
vue.use(IconsPlugin)
vue.mixin(toggleDisplayAndArrow);
vue.mixin({
  data: function() {
    return {
      csrf:csrf,
      userInfo:userInfo,
      install:null
    }
  },
  methods:{
    changePreStates(paylaod){
      this.$store.dispatch("changePrePageStates",paylaod)
    }
  }
})
import ZoomOnHover from "vue-zoom-on-hover";

vue.use(ZoomOnHover);
const app = new vue({
  el: "#app",
  components: {
    user,
    loadingSpinner,
    topPrePageForPhones,
    heading,
    buttomIcons,
    'indexUserPanel':()=>import("./components/userPanel/index/index.vue"),
    'index':()=>import("./components/user/index/index.vue"),
    navigation,
    SubCategories,
    slicer,
    installPrompt,
    // foot: footer,
    'product':()=>import("./components/user/product/product.vue"),
    productZoom,
    breadCrumb,
    'signin':()=>import("./components/user/signup/signin.vue"),
    'signup':()=>import("./components/user/signup/signup.vue"),
    'products':()=>import("./components/user/prodcuts/products.vue"),
    'filtering':()=>import("./components/user/prodcuts/filtering.vue"),
    // 'category':()=>import("./components/user/category/category.vue"),
    'blog':()=>import("./components/blog/blog/blog.vue"),
    'singleBlogPost':()=>import("./components/blog/blogPost/blogPost.vue"),
    'feedBack':()=>import("./components/user/template/feedback/feddback.vue"),
    'miniOrders':()=>import("./components/userPanel/miniOrders/miniOrders.vue"),
    'confirmation':()=>import("./components/user/signup/confirmation.vue"),
    'aboutUs':()=>import('./components/user/abouts/aboutUs.vue'),
    'aboutDamir':()=>import("./components/user/abouts/aboutDamir.vue"),
    'buyInDamir':()=>import('./components/user/abouts/buyInDamir.vue'),
    'sellInDamir':()=>import('./components/user/abouts/sellInDamir.vue'),
    'rulesToUse':()=>import('./components/user/abouts/rulesToUse.vue'),
    'privacy':()=>import('./components/user/abouts/privacy.vue'),
    error,
    sharePopUp,
    AboutSupplier
  },
  store,
  // Router
});

export const eventBus = new vue();
import 'swiper/swiper-bundle.css'
import "./css/reset.css";
import "./css/buttons.css";
import "./css/shared.css";
import "./css/leaflet.css";
import "./css/longText.css";
// import "./css/prettyCheckbox.css";
