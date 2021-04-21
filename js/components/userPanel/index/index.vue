<template>
  <div id="dashboardIndex" class="panelItem">
    <div id="dashboardIndexWrapper">
      <menu-items></menu-items>
      <div class="w-100 bg-danger">
        <info-user :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import signleProgressBar from "./progressBar/signleProgressBar.vue";
import menuItems from "./menuitems/menuItems.vue"
import InfoUser from './info_users/Index.vue';
export default {
name: "index",
  props:['user'],
  components:{
    signleProgressBar,
    menuItems,
    InfoUser
  },
  created() {
  console.log(this.user,'11')
  }

}
</script>

<style scoped>
#dashboardIndex{

  width: 100%;

}
</style>
