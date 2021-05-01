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
    for (let i=0; i < list.childElementCount ;i++){
      list.getElementsByClassName("page-item")[i].style.borderColor = 'white';
      list.getElementsByClassName("page-item")[i].style.paddingRight = '0!important';
      list.getElementsByClassName("page-item")[i].style.paddingLeft = '0important';
      let child=list.getElementsByClassName("page-item")[i].children[0]
      child.style.padding='7px'
    }
    let active=document.querySelector('.pagination .active');
    active.style.background='white';
  },
}
</script>

<style scoped>
/*@media screen and (max-width: 890px) {*/
/*  ul{*/
/*    width: 99%;*/
/*    margin: 1px!important;*/
/*    padding: 1px!important;*/
/*    text-align: center;*/
/*  }*/
/*  li{*/
/*    width: 46px;*/
/*    margin-right: 5px!important;*/
/*    padding: 1px!important;*/
/*    text-align: center!important;*/
/*  }*/
/*  a{*/
/*    width: 100%!important;*/
/*    !*margin: 1px!important;*!*/
/*    padding: 1px!important;*/
/*    text-align: center!important;*/
/*  }*/
/*  ul.pagination li{*/
/*    margin: 0!important;*/
/*  }*/
/*}*/
</style>
