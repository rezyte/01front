<template>
  <div id="logoAndTitle">
    <div id="logoAndTitleWrapper">

      <div class="title">
        <h1>پیش فاکتور</h1>
      </div>


      <div class="logo">
        <img src="/images/mehri.png" alt="">
      </div>

    </div>
  </div>
</template>

<script>
export default {
name: "logoAndTitle"
}
</script>

<style scoped>
.logo{
  width: 300px;
}
#logoAndTitle{
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
}
img{
  width: 100%;
}
#logoAndTitleWrapper{
  display: flex;
  width: 100%;
  justify-content: space-between;
}
h1{
  font-size: 36pt;
  font-weight: 700;
}
.title{
  position: relative;
  left: 100px;
  top: 30px;
  height: max-content;
}
.logo{
  position: relative;
  right: 50px;
  top: 27px;
}



@media print {
  .title{
    position: relative;
    left: 100px;
    top: 27px;
  }
  .logo{
    position: relative;
    right: 50px;
    top: 27px;
  }
}
</style>