<template>
  <div class="rulesToUse aboutsWidth maxIs" v-html="JSON.parse(rulestouse).terms_and_conditions">

  </div>
</template>

<script>
export default {
name: "rulesToUse",
  props:["rulestouse"]
}
</script>

<style scoped>

</style>