<template>
  <div>
    <pagination :products="products"></pagination>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";

export default {
  name: "Index",
  props:['products'],
  components: {
    Pagination
  },
  mounted() {
    let li=document.querySelector('.pagination li');
    li.style.border="red";
    let last = document.querySelector('.pagination .last');
    last.style.display = "none";
    let first = document.querySelector('.pagination .first');
    first.style.display = "none";
    let previous = document.querySelector('.pagination .previous a');
    let next = document.querySelector('.pagination .next a');
    previous.innerHTML = 'قبلی';
    next.innerHTML = 'بعدی'
    let pr=document.querySelector('.pagination .previous');
    pr.style.border="white";
    let ne=document.querySelector('.pagination .next');
    ne.style.border="white";
    let pageNu=document.querySelector('.pagination .page-number');
    pageNu.style.border="white";
    let pageNuA=document.querySelector('.pagination .page-number .active');
    pageNuA.style.border="white";
    // console.log(previous.style.innerHTML=!important قبلی")
    console.log(previous.style.nthChild(2))
    // const emojis = require("emojis-list");
    // console.log(emojis[0]);
  },
}
</script>

<style scoped>
</style>
