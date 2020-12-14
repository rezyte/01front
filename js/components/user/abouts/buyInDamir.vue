<template>
  <div class="buyInDamir aboutsWidth maxIs" v-html="JSON.parse(buyindamir).buy_from_damir">

  </div>
</template>

<script>
export default {
name: "buyInDamir",
  props:['buyindamir']
}
</script>

<style scoped>

</style>