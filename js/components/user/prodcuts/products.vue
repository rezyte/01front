<template>
  <div id="products">
    <div dir="rtl" v-if="search_products !== ''">
      <div class="head_search">
        <h1>نتایج برای جست و جو:</h1>
      </div>
      <div v-if="JSON.parse(search_products).message">
        <div class="text-center">
          <p
            class="text-center text-danger empty_search_text"
            v-text="JSON.parse(search_products).message"
          ></p>
        </div>
      </div>
      <div v-else class="productsWrapper">
        <index2 :products="JSON.parse(search_products)" title="" />
      </div>
    </div>
    <div v-else>
      <h1 class="color">{{ getH1() }}</h1>
      <div
        class="seoPost first"
        v-if="
          JSON.parse(products).length > 0 &&
          JSON.parse(products)[0].category[0].upper_content !== ''
        "
      >
        <div
          class="seoPostContent longText"
          v-html="
            JSON.parse(products).length > 0
              ? JSON.parse(products)[0].category[0].upper_content
              : ''
          "
        ></div>
        <!--      <div class="showMore">-->
        <!--        <button @click="expandIt($event)">مشاهده ادامه</button>-->
        <!--      </div>-->
      </div>
      <div class="productsWrapper">
        <index2 :products="JSON.parse(products)" title="" />
        <!--      <div v-if="JSON.parse(products).length>0" class="singleProduct" v-for='p in JSON.parse(this.products)'-->
        <!--           :key='p.slug'>-->
        <!--        <div class="singleProductWrapper">-->
        <!--          <a :href="gethref(p.slug)">-->
        <!--            <div class="img">-->
        <!--              &lt;!&ndash; <img src="/images/1.jpg" alt=""> &ndash;&gt;-->
        <!--              <zoom-on-hover :img-normal="getImage(p.product_image)"></zoom-on-hover>-->
        <!--            </div>-->
        <!--          </a>-->
        <!--          <div class="title">-->

        <!--            <a :href="gethref(p.slug)"><h3>{{ p.title }}</h3></a>-->
        <!--            <div class="priceList" v-if="p.price || p.second_price">-->
        <!--              <p>قیمت:</p>-->
        <!--              <p class="price">-->
        <!--                {{p.price ? p.price.toLocaleString() : ''}} <span v-if="p.price && p.second_price">-</span> {{p.second_price ? p.second_price.toLocaleString() : ''}}-->

        <!--                <span>میلون تومان</span>-->
        <!--              </p>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div id="showProduct">-->
        <!--            <a :href="gethref(p.slug)">-->
        <!--              <button class="showProduct">مشاهده محصول</button>-->
        <!--            </a>-->
        <!--          </div>-->
        <!--&lt;!&ndash;          <div class="contactUs">&ndash;&gt;-->
        <!--&lt;!&ndash;            <button class="stelam" @click.prevent='showConsulate($event)'>مشاهده محصول</button>&ndash;&gt;-->
        <!--&lt;!&ndash;          </div>&ndash;&gt;-->
        <!--          <consulate :productId="p.slug"></consulate>-->
        <!--        </div>-->
        <!--      </div>-->
        <!--      <div style="width: 100%" v-if="JSON.parse(products).length==0">-->
        <!--        <div class="catsWrapper" >-->
        <!--          <ul v-for="cat in getCats">-->
        <!--            <li>{{ cat.title }}</li>-->
        <!--              <li v-for="subCat in cat.subs"><a :href="'/product-category/'+subCat.slug">{{subCat.title}}</a></li>-->

        <!--          </ul>-->

        <!--        </div>-->
        <!--      </div>-->
      </div>
      <!-- <template v-if='this.paginations!=null && this.paginations!=undefined && this.paginations!=""'>
        <div id="pagination" v-if="JSON.parse(this.paginations).number_of_pages>1 ">
          <pagination
              :currentPage=JSON.parse(this.pagination).current_page
              :padding=3
              :pageNums=JSON.parse(this.pagination).number_of_pages
              url="/blog/posts/?page="
              :perPage=null
              :items=null
          ></pagination>
        </div>
      </template> -->

      <div class="seoPost" v-if="JSON.parse(products).length > 0">
        <div
          class="seoPostContent longText"
          v-html="
            JSON.parse(products).length > 0
              ? JSON.parse(this.products)[0].category[0].seo_post
              : ''
          "
        ></div>
        <div class="showMore">
          <button @click="expandIt($event)">مشاهده ادامه</button>
        </div>
      </div>

      <comments-my :comments="JSON.parse(this.comments)"></comments-my>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import consulate from "./consulate.vue";
import filtering from "./filtering.vue";
import { adjustElFromTop } from "../../user/mixIns/adjustElFromTop.js";
import { toggleBodyOverFlow } from "../../user/mixIns/toggleBodyOverFlow.js";
import longText from "../mixIns/longText";
import Index2 from "./product-me/Index2.vue";
import CommentsMy from "../product/comments/CommentMy.vue";
// import Paginate from 'vuejs-paginate'
export default {
  props: ["products", "search_products", "pagination", "comments"],
  computed: {
    getCats() {
      return this.$store.state.catsWithSubs;
    },
  },
  mounted() {
    // console.log()
    // console.log("productsmmmm", JSON.parse(this.search_products));
    const allImages = document.querySelectorAll(".normal");
    allImages.forEach((img) => {
      img.style.width = "100%";
      img.style.height = "300px";
      const zoom = img.nextElementSibling;
      zoom.style.width = "200%";
      zoom.style.width = "200%";
    });
    longText();
  },
  components: {
    consulate,
    filtering,
    Index2,
    CommentsMy,
    // Paginate
  },
  mixins: [adjustElFromTop],
  created() {
    window.addEventListener("click", (e) => {
      const target = e.target;
      const address = window.location.pathname;
      if (e.target.classList.contains("firstClass")) {
        const a = target.querySelector("a");
        const href = a.innerText;
        document.location.href = `${address}?page=${href}`;
      } else if (e.target.classList.contains("paginationLink")) {
        const href = target.innerText;
        document.location.href = `${address}?page=${href}`;
      }
    });
    // console.log('comments',this.comments)
  },
  methods: {
    expandIt(e) {
      const element = e.target;
      const parent = element.parentElement;
      const seoPost = element.closest(".seoPost");
      console.log(seoPost, parent);
      parent.style.display = "none";
      seoPost.style.maxHeight = "max-content";
    },
    getH1() {
      if (JSON.parse(this.products).length > 0) {
        return JSON.parse(this.products)[0].category[0].title;
      }
      return "محصولی وجود ندارد شما میتواند از دسته بندی های زیر انتخاب کنید";
    },
    getPrice(p) {
      if (p.second_price == null && p.price == null) {
        return "-";
      }

      if (p.second_price !== null) {
        return (
          p.second_price.toLocaleString() +
          " - " +
          p.price.toLocaleString() +
          " (میلیون تومان) "
        );
      }
      return p.price + "میلیون تومان";
    },
    ...mapActions(["toggleFiltering", "toggleConsulate"]),
    getDescs(txt) {
      if (txt == undefined) {
        return "بدون توضیحات";
      }
      return txt.length > 75 ? txt.substring(0, 75) + "..." : txt;
    },
    adjustConsulateTop() {
      const consulate = document.querySelector("#consulateWrapper");
      consulate.style.top = window.scrollY + 100 + "px";
      document.body.style.overflow = "hidden";
      const done = document.querySelector("#doneMessage");
      done.style.display = "none";
    },
    shoudShow() {
      return this.$store.state.isShowFiltering;
    },
    showConsulate(e) {
      const el = e.target;
      const parent = el.closest(".singleProduct");
      const consulate = parent.querySelector(".consulate");
      const wrap = consulate.querySelector(".consulateWrapper");
      consulate.style.display = "flex";
      this.adjustFromTop(wrap, false, true);
      this.toggleBodyOverFlow("hidden");
    },
    getImage(img) {
      if (img == null) {
        return "/static/public/images/ours1.png";
      }
      return img;
    },
    gethref(slug) {
      return `/product/${slug}`;
    },
  },
};
</script>

<style scoped>
#products {
  margin-top: 40px;
  width: 100%;
    background-color: #f5f5f5;
  /*display: flex;*/
  /*flex-direction: column;*/
}

h1 {
  text-align: right;
  font-size: 20px !important;
  font-weight: bold !important;
}

.productsWrapper {
  width: 100%;
  padding-top: 10px;
  /* background-color: white; */
  /* background-color: blue; */
}

.singleProduct {
  width: 23%;
  margin: 10px;
  width: 270px;
  background: white;
  border: 1px solid #d9d9d8;
  padding-bottom: 5px;
}

img {
  height: 200px;
  width: 300px;
}

.title {
  height: 180px;
  padding-right: 5px;
}

.title a h3 {
  color: #3b73cc;
  direction: rtl;
  height: 60px;
}

.title a {
  height: 100px;
}

#pagination {
  margin-top: 50px;
}

.seoPost {
  margin-top: 100px;
  width: 100%;
  font-size: 16px;
  padding: 10px;
  background: white;
  min-height: 100px;
  max-height: 600px;
  position: relative;
  overflow: hidden;
}

.showMore {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(to top, white, transparent);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.showMore button:hover {
  color: var(--logoBlueUser);
}

.seoPost button {
  width: max-content;
  background: white;
  padding: 10px 30px;
  border: 2px solid var(--logoBlueUser);
  border-radius: 500px;
  position: absolute;
  bottom: 10px;
  font-size: 13pt;
  font-weight: bold;
}

h1 {
  padding-right: 20px;
}

.seoPost > div {
  padding: 30px;
}

.seoPost div {
  display: flex;
  flex-direction: column;
  text-align: right;
}

.catsWrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-end;
}

.catsWrapper ul {
  width: max-content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-end;
  margin-top: 20px;
  justify-content: flex-end;
  align-items: flex-end;
}

.catsWrapper li {
  text-align: right;
  margin: 15px;
  width: 180px;
}

.catsWrapper ul li a {
  color: rgb(9, 111, 211);
  font-size: 17px;
  font-weight: bold;
}

.contactUs {
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin: auto;
  /*background-color: cadetblue;*/
}

.showProduct {
  width: 150px;
  height: 45px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 20px;
  border: #5da0de 2px solid;
  background-color: #92b4dd;
  transition: all 0.2s;
}

.showProduct:hover {
  border: #0969d3 2px solid;
  background-color: var(--blue);
  color: white;
}

#showProduct {
  width: auto;
  position: relative;
  bottom: 40px;
  right: 19%;
}

.first {
  margin-top: 20px;
  max-height: max-content;
  height: max-content;
  overflow: visible;
}

.priceList {
  margin-top: 20px;
}

.priceList > p {
  font-weight: bold;
}

.price {
  font-size: 18px;
  font-weight: 700;
  color: #707070;
  padding-top: 18px;
  height: 36px;
}

.color {
  color: var(--blue);
}

.head_search {
  width: 100%;
  text-align: right;
  padding: 10px;
}

.head_search h1 {
  font-size: 17px;
  color: var(--blue);
}
.empty_search_text {
  font-size: 17px;
}

strong{
  font-weight: bold!important;
}
</style>
