<template>
  <a href="" class="bg-white">
    <div id="blog">
      <div class="pic">
        <img src="/static/public/images/عکس-کمپوت-1.jpg" alt="تصویر ناقص است">
      </div>
      <div class="content">
        <div class="text" id="text-top">
          <p>;hdvgsdbvgdsu;fgusbcao
            ;ug;suivbsjkdbvsdvs</p>
        </div>
        <div class="text " id="text-bottom">
          <small class="float-right">rhgerhgoirh</small>
        </div>
      </div>
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
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  transition: all 0.4s;
}
a:hover{
  color: black;
  transform: translateY(-10px);
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.text{
  width: 100%;
  padding: 15px;
}
.text p,.text small{
  direction: rtl;
  text-align: right;
}
#text-top{
  height: 80px;
}
#tex-top p{
  font-size: 17px;
}
#text-bottom{
  height: 60px;
}
</style>
