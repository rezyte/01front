<template>
<pagination></pagination>
</template>

<script>
import Pagination from "./Pagination.vue";
export default {
name: "Index",
  components:{
  Pagination
  },
  mounted() {
    let previous=document.querySelector('.pagination .previous a');
    let next =document.querySelector('.pagination .next a');
    previous.innerHTML='قبلی';
    next.innerHTML='بعدی'
    // console.log(previous.style.innerHTML=!important قبلی")
    console.log(previous.style.nthChild(2))
    // const emojis = require("emojis-list");
    // console.log(emojis[0]);
  },
}
</script>

<style scoped>
.last{
  display: none!important;
}
.first{
  display: none!important;
}
</style>
