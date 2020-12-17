<template>
  <div id="sideBar">
    <div id="sidBarWrapper">
      <off></off>
      <tax></tax>
    </div>
  </div>
</template>

<script>
import off from "./off/off.vue";
import tax from "./tax/tax.vue"

export default {
  name: "sideBar",
  components: {
    off,
    tax
  }
}
</script>

<style scoped>
#sideBar{
  top: 70px;
  position: fixed;
}
@media (max-width: 1250px) {
  #sideBar{
    position: static;
  }
}
</style>