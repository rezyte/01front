<template>
  <div class="privacy aboutsWidth maxIs" v-html="JSON.parse(privacy).privacy_and_policy">

  </div>
</template>

<script>
export default {
name: "privacy",
  props:['privacy']
}
</script>

<style scoped>

</style>