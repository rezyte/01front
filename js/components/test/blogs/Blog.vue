<template>
  <a href="">
    <div id="blog">
      <div class="pic">
        <img src="/static/public/images/عکس-کمپوت-1.jpg" alt="تصویر ناقص است">
      </div>
      <div class="content"></div>
<!--      <p>-->
<!--        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ex-->
<!--        facilis maxime quas reiciendis voluptate voluptatum! Deleniti excepturi exercitationem-->
<!--        , explicabo facilis fuga id illum odit placeat saepe suscipit! Optio, sit.-->
<!--      </p>-->
    </div>
  </a>
</template>

<script>
export default {
name: "Blog"
}
</script>

<style scoped>
a{
  width: 28%;
  color: black;
  text-decoration: none!important;
  /*border-radius: 8px;*/

}
#blog{
  width: 100%;
  height: 300px;
  background-color: #8fffdb;
  text-align: center;
  /*border-radius: 8px;*/

}
.pic{
  width: 100%;
  height: 200px;
  text-align: center;
  /*border-radius: 8px;*/
}
.pic img{
  width: 100%;
  height: 100%;
  border-radius: 8px;

}
.blog p{
  text-align: right;
  direction: rtl;
  font-size: 17px;

}
</style>
