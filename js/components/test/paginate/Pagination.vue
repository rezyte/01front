<template>
  <div id="pagination">
    <h3 class="title">عنوان</h3>
    <div class="content">
      <div class="item" v-for="item in pageOfItems" :key="item.id">{{item}}</div>
    </div>
    <div class="pt-3">
      <jw-pagination :items="exampleItems" @changePage="onChangePage"></jw-pagination>
    </div>
  </div>
</template>

<script>
import JwPagination from 'jw-vue-pagination';
// const exampleItems = [...Array(15).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
const exampleItems=[ 2,9,8,52,56,89,4,5,6,0,8,7,3,1,5,8,4,9,6,45]
export default {
name: "Pagination",
  components:{
  JwPagination
  },
  data() {
    return {
      exampleItems,
      pageOfItems: []
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    }
  }
}
</script>

<style scoped>
*{
  text-align: right;
  direction: rtl;
}
#pagination{
  width: 100%;
}
.item{
  width: 30%;
  background-color: red;
}
.last{
  display: none!important;
}
.first{
  display: none;
}
</style>
