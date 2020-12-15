<template>
  <div id="header">
    <div id="headerWrapper">
      <logo-and-title></logo-and-title>
      <bottom-of-header></bottom-of-header>
    </div>
  </div>
</template>

<script>
import bottomOfHeader from "./bottomOfHeader/bottomOfHeader.vue";
import logoAndTitle from "./logoAndTitle/logoAndTitle.vue";
export default {
  name: "heading",
  components:{
    logoAndTitle,
    bottomOfHeader
  }
}
</script>

<style scoped>
#header{
  height: 200px;
  background: rgb(230,230,230);
}
#headerWrapper{
  position: relative;
  height: 100%;
}

@media print {
  #header{

    background: rgb(230,230,230);
  }
}
</style>