<template>
  <a :href="'/blog/post/'+ blog.slug" class="bg-white">
    <div id="blog">
      <div class="pic">
        <img :src="blog.thumbnail" :alt="blog.image_alt">
      </div>
       <div class="content">
        <div class="text" id="text-top">
          <p class="info font-weight-bold" id="title" v-text="blog.title"></p>
          <p class="info pr-1" id="description" v-text="blog.short_description"></p>
        </div>
        <div class="text" id="text-bottom">
          <small class="info" id="avg_reading">میانگین زمان خواندن: <span v-text="blog.avg_read"></span>
          </small>
          <br>
          <small class="info" id="author">نویسنده:<span v-text="blog.author"></span>
          </small>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
name: "Blog",
props:['blog']
}
</script>

<style scoped>
*{
  font-family: iranSans !important;
  direction: rtl;
  text-align: right;
}
a{
  width: 300px;
  color: black;
  text-decoration: none!important;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  margin: 19px 0;
  transition: all 0.4s;
}
a:hover{
  color: black;
  transform: scale(1.04);
}
#blog{
  width: 100%;
  text-align: center;
  border-radius: 8px;
}
.pic{
  width: 100%;
  height: 270px;
  text-align: center;
  /*border-radius: 8px;*/
}
.pic img{
  width: 100%;
  height: 100%;
  border-radius: 8px;

}
.content{
  width: 100%;
}
.text{
  width: 100%;
  /* height: 150px; */
  padding:10px 5px 5px 5px;
}
.text p,.text small{
  direction: rtl;
  text-align: right;
}
#tex-top p{
  font-size: 17px;
}

.info{
  width: 260;
  overflow: hidden;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
}
#title{
  height: 45px;
}
#description{
  height:50px;
  padding-right: 3px;
}
#avg_reading,#author{
  height: 35px;
  padding-right: 3px;
}
</style>
