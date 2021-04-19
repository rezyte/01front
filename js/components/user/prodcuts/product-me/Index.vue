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
    var list = document.getElementsByClassName("pagination")[0];
    // console.log(list.childElementCount)
    // list.getElementsByClassName("page-item")[3].innerHTML = "Milk";
    for (let i=0; i < list.childElementCount ;i++){
      list.getElementsByClassName("page-item")[i].style.borderColor = 'white';
      // list.getElementsByClassName("page-item")[i].style.width = '50px';
      list.getElementsByClassName("page-item")[i].style.paddingRight = '0!important';
      list.getElementsByClassName("page-item")[i].style.paddingLeft = '0important';
      let child=list.getElementsByClassName("page-item")[i].children[0]
      child.style.padding='7px'
      // child.style.margin='2px!important'
      // list.getElementsByClassName("page-item page-link")[i].style.paddingValue='0';
      // list.getElementsByClassName("page-item")[i].style.paddingTop = "";
    }

    // pageItem.style.width="10%";
    // previous.style.borderColor="white";
    // pageNumber.style.borderColor="white";
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
