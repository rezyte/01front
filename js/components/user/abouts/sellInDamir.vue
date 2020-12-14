<template>
  <div class="sellInDamir aboutsWidth maxIs"  v-html="JSON.parse(sellindamir).sell_in_damir">

  </div>
</template>

<script>
export default {
name: "sellInDamir",
  props:['sellindamir']
}
</script>

<style scoped>

</style>