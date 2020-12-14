<template>
  <div id="pagination">
    <div id="paginationWrapper">
      <ul>
        <li v-for="i in pageNum"><a :href="getLink"></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "pagination",
  props:['pageNum','link','data'],
  getLink(){
  const link=this.link.split("here")

  }
}
</script>

<style scoped>

</style>