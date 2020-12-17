<template>
  <div id="logoAndTitle">
    <div id="logoAndTitleWrapper">
<!--{{factor}}-->
      <div class="title">
        <h1>{{$store.state.factoreItems.title}}</h1>
      </div>


      <div class="logo" >
        <img v-if="$store.state.factoreItems.logo!==''" :src="factor.logo"     alt="">

      </div>

    </div>
  </div>
</template>

<script>
export default {
name: "logoAndTitle",
  props:['factor'],
  created() {
  console.log(this.factor,'dss')
  }
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