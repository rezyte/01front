<template>
  <div id="body">
    <div id="bodyWrapper">
      <top></top>
      <rows></rows>
      <price-to-text></price-to-text>
      <descs></descs>
      <seller></seller>
    </div>
  </div>
</template>

<script>
import top from "./top/top.vue";
import rows from "./rows/rows.vue"
import priceToText from "./priceToText/priceToText.vue";
import descs from "./descs/descs.vue";
import seller from "./seller/seller.vue";
export default {
  name: "factorBody",
  components:{
    top,
    rows,
    priceToText,
    descs,
    seller
  }
}
</script>

<style scoped>

</style>