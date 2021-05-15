<template>
  <div class="category">
    <div class="title">
      <h2>
        <a :href="'/categories/' + category.slug" v-text="category.title"></a>
      </h2>
    </div>
    <div class="subCategories">
      <ul>
        <li class="item-category" v-for="sub in subCategories" :key="sub.id">
          <a :href="'/product-category/'+sub.slug" v-text="sub.title"></a>
        </li>
        <!-- <li class="item-category"><a href=""> لقلقدستگاه تولید قثلاثق خط نوع دوم</a></li>
                <li class="item-category"><a href=""> لقلقدستگاه تولید قثلاثق خط نوع دوم</a></li>
                <li class="item-category"><a href=""> دستگاه تولید خط نوع دوم</a></li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    category: {
      type: Object,
      required: true,
      // default:{
      //     id:1,
      //     title:'damirco'
      // }
    },
  },
  computed: {
    subCategories() {
      return this.category.subs;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none !important;
}
.category {
  width: 210px;
  margin-top: 40px;
  text-align: right;
  /* background-color: cyan; */
  /* margin-right: 10px; */
  /* padding: 5px; */
}
.title,
.subCategories {
  width: 100%;
}
.title h2 {
  font-size: 17px;
  font-weight: 600;
  border-bottom: 1px dashed #dddddda2;
  padding-bottom: 5px;
}
/* .title h2 a{
    text-decoration: none;
} */
.subCategories {
  margin-top: 10px;
}
.subCategories ul {
  width: 100%;
  margin: 0;
  padding: 0;
}
.item-category {
  width: 100%;
  list-style: none;
  /* background-color: coral; */
  margin-top: 10px;
  box-sizing: border-box;
}
</style>