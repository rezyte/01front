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
          <a :href="'/product-category/' + sub.slug" v-text="sub.title"></a>
        </li>
        <!-- <li class="item-category"><a href=""> لقلقدستگاه تولید قثلاثق خط نوع دوم</a></li>
                <li class="item-category"><a href=""> لقلقدستگاه تولید قثلاثق خط نوع دوم</a></li>
                <li class="item-category"><a href=""> دستگاه تولید خط نوع دوم</a></li> -->
      </ul>
    </div>
    <div class="mt-2">
      <ul>
        <li class="more" v-if="subCategories.length >= 8">
          <a :href="'/categories/' + category.slug">بیشتر...</a>
        </li>
        <!-- <li class="more" v-else>
          <a :href="'/categories/' + category.slug">بیشتر...</a>
        </li> -->
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
  color: black !important;
  transition: all 0.1s;
}
a:hover {
  color: var(--blue) !important;
}

.category {
  width: 210px;
  margin-top: 40px;
  margin-bottom: 20px;
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
.more {
  width: 60px;
  /* padding: 2px 10px; */
  padding:3.5px 4px 2px 1px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 2px 5px 1px rgba(175, 179, 180, 0.89);
  transition: all 0.1s;
}
.more:hover {
  cursor: pointer;
  box-shadow: 0 4px 6px 3px rgba(175, 179, 180, 0.89);
}
</style>