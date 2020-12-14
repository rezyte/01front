<template>
  <div class="aboutDamir aboutsWidth maxIs" v-html="JSON.parse(aboutdamir).about_damir_content">
  <h1>test</h1>
  </div>
</template>

<script>
export default {
name: "aboutDamir",
  props:['aboutdamir'],
  created() {
  console.log(this.aboutdamir)
  }
}
</script>

<style scoped>

</style>