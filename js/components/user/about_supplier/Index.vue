<template>
  <div id="about_supplier">
    <div id="main_top">
      <div class="title">
        <h1>شرکت نوین گستر فلان</h1>
      </div>
      <div id="description">
        <div id="desc">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            esse nostrum aperiam nisi praesentium aut, assumenda ducimus labore,
            voluptates totam quo? Quae, incidunt. Dolores libero culpa deleniti
            expedita quos pariatur.
          </p>
        </div>
        <div id="information">
          <div id="title_desc">
            <h2>اطلاعات شرکت</h2>
          </div>
          <div>
            <table class="table">
              <tr>
                <th>آدرس</th>
                <th>شماره تلفن</th>
              </tr>
              <tr>
                <td>کوچه تهه تلخی</td>
                <td>0464654648</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div id="main">
      <div class="title">
        <h1>محصولات این شرکت</h1>
      </div>
      <div id="product_company">
        <div class="products">
          <div v-for="item in pageOfItems" :key="item.id">
            <div class="item">
              <a :href="'/product/' + item.slug" class="link-item">
                <div class="item-origin">
                  <div class="pic">
                    <!-- <img src="/static/public/images/shrink2.png" alt="تصویر ناقص است"> -->
                    <img :src="item.product_image" alt="تصویر ناقص است" />
                  </div>
                  <div class="text">
                    <h1 class="name" v-text="item.title">
                      <!-- jdicbvmdjsikrjfhdmsjciqogldmsjcz.5pdloseuiloi526894253698710 -->
                    </h1>
                    <p class="info mt-1" v-text="item.short_description">
                      <!--                      jifhguriopamvk111forqwjfiormbkshhhhhhhhhhhhhhhhhh75698hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhcskdclfvpdjflroewhnfkvpahskehdn,lashvkociejrfvhsqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq-->
                    </p>
                  </div>
                  <div class="cost2">
                    <p v-if="item.price || item.second_price">
                      <span class="font-weight-bold">قیمت:</span>
                      <span v-if="item.price && item.second_price">
                        {{ separate(item.price) + "تومان" }} -
                        {{ separate(item.second_price) + "تومان" }}</span
                      >
                      <span v-else>{{ separate(item.price) + "تومان" }}</span>
                    </p>
                    <p v-else>
                      <span class="font-weight-bold">قیمت: </span>
                      وارد نشده است
                    </p>
                  </div>
                </div>
                <div class="cost">
                  <!--                  /images/products/2021/02/None_VhXLXMd.webp-->
                  <p v-if="item.price || item.second_price">
                    <span>قیمت:</span>
                    <span v-if="item.price && item.second_price">
                      {{ separate(item.price) + "تومان" }} تا
                      {{ separate(item.second_price) + "تومان" }}</span
                    >
                    <span v-else>{{ separate(item.price) + "تومان" }}</span>
                  </p>
                  <p v-else>
                    <span class="font-weight-bold">قیمت: </span>
                    وارد نشده است
                  </p>
                </div>
              </a>
            </div>
            <hr class="line" />
            <!--            <div class="w-75 m-auto">-->
            <!--            </div>-->
          </div>
        </div>
      </div>
      <div class="text-center">
        <paginate
          class="m-auto"
          :items="exampleItems"
          @changePage="onChangePage"
          :styles="myStyle"
        ></paginate>
      </div>
    </div>
    <div id="main_bottom">
      <div class="title">
        <h1>نظریات مشتریان</h1>
      </div>
      <div
        class="comments"
        v-for="comment in comments"
        v-bind:key="comment.id"
      >
        <comment />
      </div>
    </div>
  </div>
</template>

<script>
const exampleItems = [
  {
    id: 1,
    slug: "rherhe",
    product_image: "lihiohriob",
    title: "euogfawuilfgwp89egvb",
    short_description: "weugsdbv",
    price: 54651,
    second_price: 3546546,
  },
];
import Paginate from "../mainCategories/paginate/Paginate.vue";
import Comment from "../product/comments/Comment.vue";
export default {
  data() {
    return {
      exampleItems,
      pageOfItems: [],
       myStyle: {
        li: {
          margin: "3px!important",
          padding: "3px!important",
        },
        a: {
          margin: "10px!important",
          padding: "5px!important",
        },
      },
      comments:'None'
    };
  },
  components: {
    Paginate,
    Comment,
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
    separate(Number) {
      Number += "";
      Number = Number.replace(",", "");
      let x = Number.split(".");
      let y = x[0];
      let z = x.length > 1 ? "." + x[1] : "";
      var rgx = /(\d+)(\d{3})/; //ینی چهار رقم وجودداشته باشد
      while (rgx.test(y))
        // console.log()
        // console.log(rgx)
        y = y.replace(rgx, "$1" + "," + "$2");
      return y + z;
    },
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
#about_supplier {
  width: 100%;
  text-align: right;
  direction: rtl;
}
.title {
  /* background-color: blueviolet; */
  padding: 20px 20px 10px 0;
  box-sizing: border-box;
}
.title h1 {
  font-size: 19px;
  font-weight: bold;
  color: var(--blue);
}
#description {
  width: 90%;
  margin: auto;
  padding: 20px 10px;
  box-sizing: border-box;
  /* background-color: coral; */
}
#information {
  width: 100%;
  margin: 20px 0 10px 0;
  /* background-color: darksalmon; */
}
#title_desc {
  padding: 8px 0;
  box-sizing: border-box;
}
#title_desc h2 {
  font-size: 17px;
  font-weight: bold;
}
table {
  width: max-content;
  padding: 10px;
  box-sizing: border-box;
  /* background-color: darkgoldenrod; */
  margin-right: 5px;
}
#product_company {
  width: 100%;
  margin-top: 10px;
}
.products {
  width: 90%;
  background-color: white;
  margin: auto;
}
item {
  width: 100%;
}

.item a {
  color: black;
  text-decoration: none;

  /*transition: color 5s;*/
}

.item a:hover .name {
  color: var(--blue);
}

.link-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
}

.name {
  font-size: 17px;
  font-weight: bold;
  display: block;
  width: 520px;
  /*height: 60px;*/
  /*background-color: blue;*/
  overflow: hidden;
  white-space: nowrap;
  /*overflow-wrap: break-word;*/
  text-overflow: ellipsis;
}

.info {
  display: block;
  width: 400px;
  height: 110px;
  /*line-break: anywhere;*/
  padding: 5px 8px;
  /*background-color: orange;*/
  overflow: hidden;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
}

.item-origin {
  width: 750px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: self-start;
  margin-right: 2%;
  padding: 25px 2px;
  box-sizing: border-box;
  /*background-color: red;*/
}

.pic {
  width: 200px;
  height: 160px;
  text-align: center;
}

.pic img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
}

.text {
  height: 160px;
  margin-right: 5%;
  font-size: 17px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.cost {
  width: auto;
  position: relative;
  right: 0;
  /*background-color: rgba(255,11,189,0.44);*/
  margin-right: 2%;
  text-align: right;
  padding-top: 7px;
}

.cost span,
.cost2 span {
  font-size: 17px;
  font-weight: bold;
}

.cost2 {
  display: none;
}

.line {
  width: 95.3%;
  /*background-color: #a7ceff;*/
}

.pagination {
  display: inline-flex !important;
  text-align: right;
  overflow: hidden !important;
  margin: 0 !important;
  padding: 0 !important;
}
@media screen and (max-width: 1150px) {
  .item-origin {
    width: 640px;
  }
}
@media screen and (max-width: 954px) {
  .item-origin {
    width: 540px;
  }
}
@media screen and (max-width: 1018px) {
  .name {
    /*background-color: rgba(46,255,41,0.44);*/
    width: 350px;
    height: 60px;
    white-space: normal;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    /*white-space: pre-wrap;*/
  }
}

@media screen and (max-width: 868px) {
  .item-origin {
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .pic {
    width: 90%;
    height: 240px;
  }

  .text {
    width: 90%;
    text-align: center;
    margin: 0;
  }

  .name {
    width: 100%;
    /*width: 350px;*/
    text-align: center;
    height: 85px;
    padding-top: 10px;
    margin: auto;
  }

  .cost {
    width: auto;
    display: none;
  }

  .cost2 {
    display: block;
  }

  .info {
    width: 100%;
    padding: 10px;
    margin: 0;
  }
}
#main_bottom {
  width: 100%;
}
.comments {
  width: 90%;
  margin: auto;
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
}
</style>