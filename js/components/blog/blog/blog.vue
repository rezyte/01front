<template>
  <div id="blog">
    <div id="blogWrapper">
      <div class="blogPostWrapper">
        <div v-for="item in pageOfItems" :key="item.id">
          <a :href="'/blog/post/'+item.slug">
            <single-post
                :title="item.title"
                :descs="item.short_description"
                :author="item.author"
                :img="item.thumbnail"
                :avg_read="item.avg_read"
            ></single-post>
          </a>
        </div>
      </div>
      <div class="pag">
        <pagination class="m-auto" :items="items" @changePage="onChangePage" :styles="myStyle"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import singlePost from "./singlePost.vue";
import Pagination from './Pagination.vue';
// const exampleItems = [2, 9, 8, 52, 5, 7, 0, 6, 8, 9, 1, 5, 6, 5, 2, 5, 56, 89, 4, 5, 6, 0, 8, 6];
export default {
  components: {
    singlePost,
    Pagination,
  },
  props: ['posts', 'pagination', 'me'],
  mounted() {
    let last = document.querySelector('.pagination .last');
    last.style.display = "none";
    let first = document.querySelector('.pagination .first');
    first.style.display = "none";
    // let previous = document.querySelector('.pagination .previous a');
    // let next = document.querySelector('.pagination .next a');
    // previous.innerHTML = 'قبلی';
    // next.innerHTML = 'بعدی'
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
  created(){
    this.items=JSON.parse(this.posts)
    // console.log("pospaginationts", JSON.parse(this.pagination))
  },
  // mixins: [toggleBodyOverFlow, adjustElFromTop],
  data() {
    return {
      pageOfItems: [],
      items:null,
      myStyle:{
        li:{
          margin:'3px!important',
          padding:'3px!important',
        },
        a:{
          margin:'10px!important',
          padding:'5px!important',
        }
      }
    }
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
      var list = document.getElementsByClassName("pagination")[0];
      for (let i = 0; i < list.childElementCount; i++) {
        list.getElementsByClassName("page-item")[i].style.borderColor = 'white';
        list.getElementsByClassName("page-item")[i].style.paddingRight = '0!important';
        list.getElementsByClassName("page-item")[i].style.paddingLeft = '0important';
        let child = list.getElementsByClassName("page-item")[i].children[0]
        child.style.padding = '7px'
        list.getElementsByClassName("page-item page-number")[i].style.background = 'white';

      }
      let active = document.querySelector('.pagination .active');
      active.style.background = '#007BFF';
    },
    // handleMargins(pageNum) {
    //   window.location.href = "/blog/posts/?page=" + pageNum
    //   console.log(pageNum)
    //
    // },
    // startValidation(type, e) {
    //   const el = e.target;
    //
    //   const error = parentNode.nextElementSibling;
    //   if (el.id == "userPassword" && el.value.length < 8) {
    //     error.style.visibility = "visible";
    //     el.classList.remove("correct");
    //     el.classList.add("wrong");
    //     return;
    //   }
    //   const res = this.validateUserInput(type, e);
    //   if (res) {
    //     error.style.visibility = "hidden";
    //     return;
    //   }
    //   error.style.visibility = "visible";
    // },
    // preventDef(e) {
    //   e.stopPropagation()
    //   e.preventDefault()
    // },
    // adjustation() {
    //   this.showCats = true
    //   const el = document.querySelector('.allBlogCatsWrapper')
    //   const all = document.querySelector(".allCatsForBlog")
    //   all.style.display = "block"
    //   console.log("docdoc", el)
    //   this.toggleBodyOverFlow("hidden")
    //   this.adjustFromTop(el)
    //
    // },
    // closeMenu() {
    //   const all = document.querySelector(".allCatsForBlog")
    //   all.style.display = "none"
    //   this.toggleBodyOverFlow()
    // },
    // getSlugn(p) {
    //   return `/blog/post/${p.slug}`
    // },
  },

};
</script>


<style scoped>
* {
  direction: rtl;
  text-align: right;
}

a {
  text-decoration: none;
  color: black;
}

.allBlogCatsWrapper ul li {
  padding: 12px;
  text-align: right
}

#blog {
  margin-top: 60px;
  margin-bottom: 50px;
  width: 100%;
  background-color: white;
}

.blogPostWrapper {
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
}

.title p {
  color: rgb(236, 57, 68);
}
.pag{
  width: 100%;
  margin-top: 3%;
  text-align: center;
  padding-left: 5px;

}
.paginationWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

@keyframes comeRight {
  from {
    right: -100%
  }
  to {
    right: 0
  }
}

</style>
