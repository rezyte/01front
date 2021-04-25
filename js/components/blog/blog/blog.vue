<template>
  <div id="blog">
    <div id="blogWrapper">
      <div class="blogPostWrapper">
        <div v-for="(p,i) in JSON.parse(posts)" :key="i">
          <a :href="getSlugn(p)">
              <single-post

              :title="p.title"
              :descs="p.short_description"
              :author="p.author"
              :img="p.thumbnail"
              :avg_read="p.avg_read"
            ></single-post>
          </a>

        </div>
      </div>
      <div class="paginationWrapper" v-if="JSON.parse(this.pagination).number_of_pages>1">
<!--        <paginate-->
<!--          :value="JSON.parse(this.pagination).current_page"-->
<!--          :page-count="JSON.parse(this.pagination).number_of_pages"-->
<!--          :page-range="3"-->
<!--          :margin-pages="2"-->
<!--          :click-handler="handleMargins"-->
<!--          :prev-text="'قبل'"-->
<!--          :next-text="'بعد'"-->
<!--          :container-class="'pagination'"-->

<!--        ></paginate>-->
        <pagination
            :currentPage=JSON.parse(this.pagination).current_page
            :padding=3
            :pageNums=JSON.parse(this.pagination).number_of_pages
            url="/blog/posts/?page="
            :perPage=null
            :items=null
        ></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import singlePost from "./singlePost.vue";
import {adjustElFromTop} from '../../user/mixIns/adjustElFromTop.js'
import {toggleBodyOverFlow} from '../../user/mixIns/toggleBodyOverFlow.js'
// import Paginate from 'vuejs-paginate'

import pagination from "../../pagination/pagination.vue";
export default {
  components: {
    singlePost,
    pagination
  },
  props:['posts','pagination','me'],
  mounted(){
    // console.log(this.me)
    const href=window.location.href.split("/")
    console.log()
    this.page=+href[href.length-1]
    console.log("blogs",JSON.parse(this.posts))
  },
  computed:{
    getPage(){
      return this.page
    }
  },
  created(){
    console.log("pospaginationts",JSON.parse(this.pagination))
  },
  mixins:[toggleBodyOverFlow,adjustElFromTop],
  data(){
      return{
          showCats:false,
          page:2
      }
  },
  methods: {
    handleMargins(pageNum){
      window.location.href="/blog/posts/?page="+pageNum
      console.log(pageNum)

    },
    startValidation(type, e) {
      const el = e.target;

      const error = parentNode.nextElementSibling;
      if (el.id == "userPassword" && el.value.length < 8) {
        error.style.visibility = "visible";
        el.classList.remove("correct");
        el.classList.add("wrong");
        return;
      }
      const res = this.validateUserInput(type, e);
      if (res) {
        error.style.visibility = "hidden";
        return;
      }
      error.style.visibility = "visible";
    },
    preventDef(e){
      e.stopPropagation()
      e.preventDefault()
    },
    adjustation(){
        this.showCats=true
        const el=document.querySelector('.allBlogCatsWrapper')
        const all=document.querySelector(".allCatsForBlog")
        all.style.display="block"
        console.log("docdoc",el)
        this.toggleBodyOverFlow("hidden")
        this.adjustFromTop(el)

    },
    closeMenu(){
        const all=document.querySelector(".allCatsForBlog")
        all.style.display="none"
        this.toggleBodyOverFlow()
    },
    getSlugn(p){
      return `/blog/post/${p.slug}`
    }
  },

};
</script>


<style scoped>
*{
  direction: rtl;
  text-align: right;
}
a{
  text-decoration: none;
  color: black;
}
.allBlogCatsWrapper ul li{
    padding:12px;
    text-align:right
}

#blog {
  margin-top: 60px;
  margin-bottom: 50px;
  width: 100%;
}
.blogPostWrapper {
  display: flex;
  max-width:1200px;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
}

.title p {
  color: rgb(236, 57, 68);
}
.paginationWrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
@keyframes comeRight{
  from{
    right:-100%
  }
  to{
    right:0
  }
}

</style>
