<template>
  <div class="singleBlogPost">
    <div class="singlePostWrapper">
      <div class="img">
        <img :src="img">
      </div>
      <div class="descs">
        <!--                <p class="title">{{getTitle(title)}}</p>-->
        <h1 class="font-weight-bold mt-3">{{ getTitle(title) }}</h1>
        <h2 class="font-weight-bold mt-5">{{ getTitle(descs) }}</h2>

        <div class="extraDetail">
          <h3>میانگین زمان خواندن:{{ avg_read }} دقیقه</h3>
          <h3>نویسنده:{{ author.username }}</h3>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.extraDetail {
  display: flex;
  flex-direction: column;
  align-items: flex-end
}

.title {
  color: rgb(9, 111, 211)
}


.singleBlogPost {
  width: 300px;
  height: 430px;
  margin: 20px;
  margin-top: 40px;
  transition: all 0.5s
}

.singleBlogPost:hover {
  transform: scale(1.05)
}

.singlePostWrapper {
  width: 100%;
}

.title {
  margin-bottom: 5px
}

.title p {
  color: rgb(236, 57, 68)
}

.img {
  width: 300px;
  height: 200px
}

.descs {
  background: rgb(235, 242, 248);
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.descs p {
  text-align: justify;
  padding: 10px;
}

img {
  width: 100%;
  height: 200px;
}

.timeAndCat, .author {
  font-size: 15px;
  font-weight: 800;
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
