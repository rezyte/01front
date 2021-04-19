<template>
  <pagination :products="products"></pagination>
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
    let last = document.querySelector('.pagination .last');
    last.style.display = "none";
    let first = document.querySelector('.pagination .first');
    first.style.display = "none";
    let previous = document.querySelector('.pagination .previous a');
    let next = document.querySelector('.pagination .next a');
    previous.innerHTML = 'قبلی';
    next.innerHTML = 'بعدی'
    // console.log(previous.style.innerHTML=!important قبلی")
    // console.log(previous.style.nthChild(2))
    // console.log(previous.style.all)
    // const emojis = require("emojis-list");
    // console.log(emojis[0]);
  },
}
</script>

<style scoped>

</style>
