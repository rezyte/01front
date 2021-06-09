<template>
  <div class="container-fluid pt-5">
    <div class="row">
      <div class="col-10 m-auto">
        <div class="row">
          <div class="w-100">
            <div class="main-top">
              <div class="main-category">
                <div class="top-main-category bg-white">
                  <carousel />
                </div>
                <div class="center-main-category bg-white">
                  <div class="items-categories">
                    <category
                      v-for="category in categories"
                      :name="category.title"
                      v-bind:key="category.index"
                    />
                  </div>
                </div>
              </div>
              <div class="categories bg-white">
                <div class="title-category">
                  <h1>دسته بندی ها</h1>
                </div>
                <div class="menu">
                  <a
                    v-for="category in categories"
                    :key="category.id"
                    :href="'/product-category/' + category.slug"
                    @mouseover="show_subCategories(1, category.id)"
                    @mouseout="show_subCategories(0)"
                  >
                    <div class="items-menu">
                      <!--                     <i class="far fa-angle-left"></i>-->
                      <!--                     <i class="fal fa-angle-left"></i>-->
                      <i id="arrow-left" class="fas fa-angle-left"></i>
                      <p v-text="category.title"></p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="subCategories" ref="subCategories">
                <nav>
                  <ul>
                    <li v-for="sub in subCategories">
                      <a href="" v-text="sub"></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="main-center">
            <div class="w-100 p-2">
              <div class="title-blog">
                <h2>عنوان برای بلاگ ها</h2>
              </div>
              <div class="blogs">
                <div id="blogs">
                  <blog
                    v-for="post in pageOfItems"
                    v-bind:key="post.id"
                    :blog="post"
                  />
                </div>
              </div>
               <div class="text-center">
                  <pagination
                    class="m-auto"
                    :items="posts"
                    @changePage="onChangePage"
                    :styles="myyStyle"
                  ></pagination>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Category from "./categories/Category.vue";
import Blog from "./blogs/Blog.vue";
import Carousel from "./carousel/Carousel.vue";
import Pagination from "./pagination/Pagination.vue";
export default {
  name: "index",
  props: ["categories2"],
  data() {
    return {
      subCategories: "",
      pageOfItems: [],
      myyStyle: {
        li: {
          margin: "3px!important",
          padding: "3px!important",
        },
        a: {
          margin: "10px!important",
          padding: "5px!important",
        },
      },
    };
  },
  components: {
    Category,
    Blog,
    Carousel,
    Pagination,
  },
  methods: {
    show_subCategories(x, y = null) {
      if (x === 1) {
        if (y !== null) {
          // let d=JSON.parse(this.categories2).subs
          // d=this.categories2;
          let cat = this.categories.find((category) => category.id === y);
          let data = JSON.stringify(cat);
          this.subCategories = JSON.parse(data).sub_category_of;
        }
        // y!=null ? this.id_subCategory=y : y='';
        this.$refs.subCategories.style.display = "block";
      } else {
        this.$refs.subCategories.style.display = "none";
      }
    },
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
      var list = document.getElementsByClassName("pagination")[0];
      for (let i = 0; i < list.childElementCount; i++) {
        list.getElementsByClassName("page-item")[i].style.borderColor = "#F5F5F5";
        list.getElementsByClassName("page-item")[i].style.paddingRight =
          "0!important";
        list.getElementsByClassName("page-item")[i].style.paddingLeft =
          "0important";
        let child = list.getElementsByClassName("page-item")[i].children[0];
        child.style.padding = "7px";
        list.getElementsByClassName("page-item page-number")[
          i
        ].style.background = "#F5F5F5";
      }
      let active = document.querySelector(".pagination .active");
      active.style.background = "#F5F5F5";
      let products = document.getElementById("products");
      window.scrollTo(0, products.offsetTop);
    },
  },
  computed: {
    categories() {
      return JSON.parse(this.categories2).subs;
    },
    posts() {
      let array = [];
      let subs = JSON.parse(this.categories2).subs;
      subs.forEach(function (sub) {
        //  console.log(sub)
        //  console.log(sub.posts[0])

        for (let i = 0; i < sub.posts.length; i++) {
          let post = sub.posts[i];
          array.push(post);
          //  console.log(sub.posts[i])
        }
      });
      return array;
    },
    // subCategories(id){
    //   let cat= this.categories.find(
    //       category => category.id===id
    //   )
    //   console.log(cat)
    //   return cat.sub_categories;
    // }
  },
  created() {
    console.log(JSON.parse(this.categories2), "oo");
  },
  mounted() {
    let last = document.querySelector(".pagination .last");
    last.style.display = "none";
    let first = document.querySelector(".pagination .first");
    first.style.display = "none";
    let previous = document.querySelector(".pagination .previous a");
    let next = document.querySelector(".pagination .next a");
    previous.innerHTML = "قبلی";
    next.innerHTML = "بعدی";
    var list = document.getElementsByClassName("pagination")[0];
    for (let i = 0; i < list.childElementCount; i++) {
      list.getElementsByClassName("page-item")[i].style.borderColor = "#F5F5F5";
      list.getElementsByClassName("page-item")[i].style.paddingRight =
        "0!important";
      list.getElementsByClassName("page-item")[i].style.paddingLeft =
        "0important";
      let child = list.getElementsByClassName("page-item")[i].children[0];
      child.style.padding = "7px";
    }
    let active = document.querySelector(".pagination .active");
    active.style.background = "#F5F5F5";
  },
};
</script>

<style scoped>
.container-fluid {
  background-color: #f5f5f5;
}
.main-top {
  width: 100%;
  position: relative;
  display: flex;
}

.main-category {
  width: 950px;
  height: 500px;
  border-radius: 8px;
  position: relative;
  box-sizing: border-box;
}

.categories {
  width: 220px;
  height: 500px;
  background-color: green;
  margin-left: 1%;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  box-sizing: border-box;
  overflow: hidden;

  /*background-color: blue;*/
}
.subCategories {
  width: 220px;
  height: 500px;
  position: absolute;
  z-index: 5;
  right: 18.7%;
  border-radius: 8px;
  display: none;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  background-color: white;
}
.subCategories:hover {
  display: block !important;
}
.subCategories ul {
  width: 100%;
  /*background-color: red;*/
  padding: 0;
  margin: 0;
}
.subCategories ul li {
  width: 100%;
  /*height: 30px;*/
  /*margin: 5px 0;*/
  padding: 5px;
  /*background-color: #13ff7f;*/
  text-align: right;
  list-style: none;
}
.subCategories ul li a {
  width: 100%;
  height: 100%;
  color: black;
  text-decoration: none;
}
.subCategories ul li a:hover {
  color: var(--blue);
  /*text-decoration:underline;*/
  /*text-decoration-color: var(--blue)!important;*/
  /*text-decoration-style:dashed;*/
}
.title-category {
  width: 100%;
  text-align: right;
  margin: 4px;
  padding: 2px 10px;
  /*background-color: rgba(112,161,116,0.89);*/
}

.title-category > h1 {
  margin-top: 10px;
  font-size: 19px;
  font-weight: bold;
}

.menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /*align-items: ;*/
}

.menu a {
  width: 100%;
  height: 45px;
  text-decoration: none;
  color: black;
}

.items-menu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  padding: 5px 8px;
  transition: all 0.2s;
}

.items-menu p {
  padding-top: 5px;
  font-size: 17px;
}

.items-menu:hover {
  box-shadow: 6px 4px 12px 1px rgba(175, 179, 180, 0.89);
  cursor: pointer;
}
#arrow-left {
  margin-top: 2%;
}
.items-menu:hover p,
.items-menu:hover #arrow-left {
  color: var(--blue) !important;
}
.top-main-category {
  width: 100%;
  height: 271px;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  border-radius: 8px;
  /*background-color: rgba(20, 141, 120, 0.89);*/
}

.center-main-category {
  width: 100%;
  height: 216px;
  border-radius: 8px;
  margin-top: 1.4%;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  overflow: hidden;
  /*background-color: #fff585;*/
}
.items-categories {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
}
.main-center {
  width: 100%;
  margin-top: 5%;
  border-radius: 8px;
  position: relative;
  /* box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89); */
}
.blogs{
  width: 100%;
  border-radius: 8px;
  /* background-color: white;
   box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89); */
}
#blogs {
  width: 100%;
  /*height: 300px;*/
  /* background-color: #79ffe0; */
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top:20px;
  padding:20px;
  box-sizing: border-box;  
}

.title-blog {
  text-align: right;
}
.title-blog h2 {
  font-size: 17px;
  font-weight: bold;
  color: var(--blue);
}
</style>
