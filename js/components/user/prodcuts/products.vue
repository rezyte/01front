<template>
  <div id="products" class='shouldCollapse maxIs'>
    <h1>{{getH1()}}</h1>
    <div id="productsWrapper">


      <div v-if="JSON.parse(products).length>0" class="singleProduct" v-for='p in JSON.parse(this.products)'
           :key='p.slug'>
        <div class="singleProductWrapper">
          <a :href="gethref(p.slug)">
            <div class="img">
              <!-- <img src="/images/1.jpg" alt=""> -->
              <zoom-on-hover :img-normal="getImage(p.product_image)"></zoom-on-hover>
            </div>
          </a>
          <div class="title">

            <a :href="gethref(p.slug)"><p>{{ p.title }}</p></a>
          </div>
          <div class="contactUs">
            <button class="stelam" @click.prevent='showConsulate($event)'>مشاوره و استعلام قیمت</button>
          </div>
          <consulate :productId="p.slug"></consulate>
        </div>
      </div>
      <div style="width: 100%" v-if="JSON.parse(products).length==0">
        <div class="catsWrapper" >
          <ul v-for="cat in getCats">
            <li>{{ cat.title }}</li>
              <li v-for="subCat in cat.subs"><a :href="'/product-category/'+subCat.slug">{{subCat.title}}</a></li>


          </ul>

        </div>
      </div>


    </div>
    <template v-if='this.paginations!=null && this.paginations!=undefined && this.paginations!=""'>
      <div id="pagination" v-if="JSON.parse(this.paginations).number_of_pages>1 ">
        <paginate
            page-class="firstClass"
            :page-range="3"
            :margin-pages="2"
            :value="JSON.parse(paginations).current_page"
            :page-count="JSON.parse(paginations).number_of_pages"
            :container-class="'pagination'"
            :click-handler="changePage"
            page-link-class="paginationLink"

        ></paginate>
      </div>
    </template>

    <div class="seoPost" v-if="JSON.parse(products).length>0">
      <div class="seoPostContent"  v-html="JSON.parse(products).length>0 ? JSON.parse(this.products)[0].category[0].seo_post : ''"></div>
    </div>


  </div>
</template>

<style scoped>
#products {
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: right;
  font-size: 20px !important;
  font-weight: bold !important;
}

#productsWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.singleProduct {
  width: 23%;
  margin: 10px;
  width: 200px;
  background: white;
  border:1px solid #d9d9d8;
  padding-bottom: 5px;
}

.singleProductWrapper {
  /*padding: 10px;*/
}

img {
  height: 200px;
  width: 300px;

}

.title {
  height: 80px;
  padding-right: 5px;
}

.contactUs {
  display: flex;
  justify-content: center;
  margin-top: 5px;
}

#pagination {
  margin-top: 50px;
}

.title a p {
  color: #3b73cc;
}

.title p {
  margin-top: 20px;
}

.seoPost {
  margin-top: 100px;
  width: 100%;
  font-size: 16px;
  padding: 10px;
  background: white;
  min-height: 100px;
}
h1{
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
.catsWrapper{
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-end;
}
.catsWrapper ul{
  width:max-content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-end;
  margin-top: 20px;
  justify-content: flex-end;
  align-items: flex-end;
}
.catsWrapper li{
  text-align: right;
  margin:15px;
  width: 180px;

}
.catsWrapper ul li a{
  color: rgb(9,111,211);
  font-size: 17px;
  font-weight: bold;
}
.seoPostContent *{
  max-width: 100%;
  font-size: 16px;
}
.seoPostContent img{
  object-fit: contain;

}

.stelam{
  font-size: 15px;
  font-weight: bold;
}


</style>

<script>
import {mapActions} from 'vuex'
import consulate from "./consulate.vue"
import filtering from "./filtering.vue"
import {adjustElFromTop} from "../../user/mixIns/adjustElFromTop.js"
import {toggleBodyOverFlow} from "../../user/mixIns/toggleBodyOverFlow.js"
import Paginate from 'vuejs-paginate'

export default {
  props: ['products', "paginations"],
  computed:{
    getCats(){
      return this.$store.state.catsWithSubs
    }
  },
  mounted() {
    console.log("pppp", this.paginations=="")
    const allImages = document.querySelectorAll(".normal")
    allImages.forEach(img => {
      img.style.width = '100%'
      img.style.height = "300px"
      const zoom = img.nextElementSibling
      zoom.style.width = "200%";
      zoom.style.width = "200%"
    })
  },
  // metaInfo() {
  //   if(JSON.parse(this.products).length>0)
  //   {
  //     const title = JSON.parse(this.products)[0].category[0].title
  //     const description = JSON.parse(this.products)[0].category[0].meta_description
  //     const keyWords = JSON.parse(this.products)[0].category[0].meta_keywords
  //     console.log('metainfo', title)
  //     // if no subcomponents specify a metaInfo.title, this title will be used
  //     return {
  //       title: title + "-دمیرکو",
  //       meta: [
  //         {vmid: 'description', name: "description", content: description},
  //         {name: "keywords", content: keyWords},
  //         {name: "robots", content: 'index,follow'},
  //       ],
  //     }
  //   }
  //
  //   // all titles will be injected into this template
  // },

  components: {
    consulate,
    filtering,
    Paginate
  },
  mixins: [adjustElFromTop],
  created() {
    window.addEventListener("click", e => {
      const target = e.target
      const address = window.location.pathname
      if (e.target.classList.contains("firstClass")) {
        const a = target.querySelector("a")
        const href = a.innerText
        document.location.href = `${address}?page=${href}`
      } else if (e.target.classList.contains("paginationLink")) {
        const href = target.innerText
        document.location.href = `${address}?page=${href}`
      }
    })
  },
  methods: {
    getH1(){

      if(JSON.parse(this.products).length>0){
        return JSON.parse(this.products)[0].category[0].title
      }
      return "محصولی وجود ندارد شما میتواند از دسته بندی های زیر انتخاب کنید"
    },
    getPrice(p) {
      if (p.second_price == null && p.price == null) {
        return '-'
      }


      if (p.second_price !== null) {
        return p.second_price.toLocaleString() + ' - ' + p.price.toLocaleString() + " (میلیون تومان) "
      }
      return p.price + "میلیون تومان"
    },
    ...mapActions([
      'toggleFiltering',
      'toggleConsulate'
    ]),
    getDescs(txt) {
      if (txt == undefined) {
        return "بدون توضیحات"
      }
      return txt.length > 75 ? txt.substring(0, 75) + '...' : txt
    },
    adjustConsulateTop() {
      const consulate = document.querySelector("#consulateWrapper")
      consulate.style.top = window.scrollY + 100 + "px"
      document.body.style.overflow = 'hidden'
      const done = document.querySelector("#doneMessage")
      done.style.display = 'none'
    },
    shoudShow() {
      return this.$store.state.isShowFiltering
    },
    showConsulate(e) {
      const el = e.target;
      const parent = el.closest(".singleProduct")
      const consulate = parent.querySelector(".consulate")
      const wrap = consulate.querySelector(".consulateWrapper")
      consulate.style.display = "flex"
      this.adjustFromTop(wrap, false, true)
      this.toggleBodyOverFlow("hidden")

    },
    getImage(img) {
      if (img == null) {
        return '/static/public/images/ours1.png'
      }
      return img
    },
    gethref(slug) {
      return `/product/${slug}`
    }
  }
}
</script>
