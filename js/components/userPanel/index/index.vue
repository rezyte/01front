<template>
  <div id="dashboardIndex" class="panelItem">
    <div id="dashboardIndexWrapper">
      <menu-items></menu-items>
    </div>
  </div>
</template>

<script>
import signleProgressBar from "./progressBar/signleProgressBar.vue";
import menuItems from "./menuitems/menuItems.vue"
export default {
name: "index",
  components:{
    signleProgressBar,
    menuItems
  }

}
</script>

<style scoped>
#dashboardIndex{

  width: 100%;

}
</style>