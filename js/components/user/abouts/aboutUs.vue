<template>
  <div class="aboutUs aboutsWidth maxIs" v-html="JSON.parse(aboutus).about_us_content">

  </div>
</template>

<script>
export default {
name: "aboutUs",
  props:['aboutus'],
  created() {
    console.log(this.aboutus)
  }
}
</script>

<style scoped>

</style>