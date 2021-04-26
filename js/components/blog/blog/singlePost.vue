<template>
  <div class="singleBlogPost">
    <div class="singlePostWrapper">
      <div class="img">
        <img :src="img">
      </div>
      <div class="descs p-1">
        <!--                <p class="title">{{getTitle(title)}}</p>-->
        <h1 class="font-weight-bold mt-3 title">{{ getTitle(title) }}</h1>
        <h2 class="font-weight-bold mt-4 mr-1">{{ getTitle(descs) }}</h2>

        <div class="mt-4 pr-1">
          <p>میانگین زمان خواندن:{{ avg_read }} دقیقه</p>
          <p>نویسنده:{{ author.username }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
*{
  direction: rtl;
  text-align: right;
}

/*.title {*/
/*  color: rgb(9, 111, 211)*/
/*}*/


.singleBlogPost {
  width: 300px;
  height: 410px;
  margin: 20px;
  margin-top: 40px;
  transition: all 0.5s;
  background-color: white;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  border-radius: 8px;
}

.singleBlogPost:hover {
  transform: scale(1.05)
}
.singleBlogPost:hover .title{
  color: var(--blue);
}
.singlePostWrapper {
  width: 100%;
}
.title p {
  color: rgb(236, 57, 68)
}

.img {
  width: 300px;
  height: 200px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;


}

.descs {
  height: 230px;
}

img {
  width: 100%;
  height: 200px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}
h1{
  font-size: 18px;
}
h2{
  font-size: 16px;
}
</style>

<script>
export default {
  props: ['title', 'img', 'descs', 'author', "avg_read", "msg"],
  methods: {
    getDescs(txt) {
      return txt.length > 100 ? `${txt.slice(0, 100)}...` : txt
    },
    getTitle(title) {
      return title.length > 70 ? title.substring(0, 70) + "..." : title
    },

  },
  mounted() {
    console.log("MSG", this.msg)
  }
}
</script>
