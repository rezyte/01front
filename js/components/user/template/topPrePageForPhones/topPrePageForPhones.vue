<template>
  <div id="prePageForPhones">
    <div id="prePageForPhonesWrapper">
      <div v-if="shouldShow" id="preArrow">
        <pre-arrow></pre-arrow>
      </div>
      <search-bar></search-bar>
      <div class="logo">
        <img src="/static/public/images/logo.png" alt="">
      </div>
    </div>
      <transition name="comeOn">
          <side-menu v-if="isSubMenuOpen"></side-menu>
      </transition>
  </div>
</template>

<script>
import searchBar from "./searchBar.vue";
import preArrow from "./preArrow.vue";
import { mapGetters } from 'vuex'
import sideMenu from "../sideMenu/sideMenu.vue";
export default {
  components:{
    searchBar,
      sideMenu,
    preArrow
  },
  computed:{
    shouldShow(){
      return window.location.pathname!=="/"
    },
          ...mapGetters([
              'isSubMenu'
          ]),
          isSubMenuOpen(){
              return this.isSubMenu
          }
  },
    name: "topPrePageForPhones"
}
</script>

<style scoped>
#prePageForPhones{
  display: none;
}
#prePageForPhones #prePageForPhonesWrapper{
  position: absolute;
  top: 0;
  padding:5px;
  width: 100%;
  max-width: 100vw;
  box-shadow: 1px 1px 10px rgba(0,0,0,.6);
  height: 70px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#prePageForPhonesWrapper{
  padding: 50px 0;
}
.logo{
  display: flex;
  justify-content: center;
  max-width: 250px;
  width: 40vw;
}
.logo img{
    height: 100%;
  width: 100%;
}
#preArrow{
  width: 30px;
  height: 30px;
}
@media (max-width: 800px) {
  #prePageForPhones{
    display: flex;
  }
}
.comeOn-enter-active,
.comeOn-leave-active
{
    transition: transform 0.2s ease;
}

.comeOn-enter,
.comeOn-leave-to {
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s
}
</style>