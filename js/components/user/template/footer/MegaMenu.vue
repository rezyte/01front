<template>
  <div class="mega-menu">
    <div class="header">
      <div class="title">
        <h1>لیست دسته بندی ها</h1>
      </div>
    </div>
    <div class="content">
      <Category
        v-for="category in mainCategories"
        :key="category.id"
        :category="category"
      />
    </div>
  </div>
</template>

<script>
import Category from "./Category.vue";
import {mapState} from 'vuex';
export default {
  name: "MegaMenu",
  data() {
    return {
      // categories: "",
    };
  },
  components: {
    Category,
  },
  mounted(){
    
  },
  computed:{
      ...mapState(['mainCategories'])
  },
  created() {
    // axios
    //   .get("http://localhost:3000/categories")
    //   .then((response) => {
    //     console.log(response);
    //     this.categories = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>

<style scoped>
* {
  direction: rtl;
}
.mega-menu {
  width: 100%;
  /* background-color: aquamarine; */
}
.header,
.content {
  width: 100%;
}
.title {
   width:max-content;
  height: 60px;
  text-align: right;
  /* background-color: white; */
  /* margin: auto; */
}
.title h1 {
  font-size: 24px;
  font-weight: bold;
  color: var(--blue);
  padding: 20px 0 0 0;
}
.content {
  display: flex;
  justify-content: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: space-around;
  justify-content: space-between;
  background-color: white;
  padding-right: 3px;
  /* padding-top: 20px; */
  /* padding:0 2px 10px 0; */
}
</style>