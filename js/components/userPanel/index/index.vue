<template>
  <div id="dashboardIndex" class="panelItem">
    <div id="dashboardIndexWrapper">
      <!-- <menu-items></menu-items> -->
      <div class="w-100">
        <info-user :user="user" />
      </div>
      <div class="w-100">
        <ResetPassword />
      </div>
    </div>
  </div>
</template>

<script>
import signleProgressBar from "./progressBar/signleProgressBar.vue";
import menuItems from "./menuitems/menuItems.vue"
import InfoUser from './info_users/Index.vue';
import ResetPassword from './reset_password/ResetPassword.vue'
export default {
name: "index",
  props:['user'],
  components:{
    signleProgressBar,
    menuItems,
    InfoUser,
    ResetPassword
  },
  created() {
  }

}
</script>

<style scoped>
#dashboardIndex{
  width: 100%;
}
</style>
