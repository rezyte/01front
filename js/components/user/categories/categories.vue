<template>
  <div id="allCategories"></div>
</template>

<script>
export default {
name: "categories",
  props:['categories'],
  created() {
    console.log(this.categories)
  }
}
</script>

<style scoped>

</style>