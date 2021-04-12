<template>
  <carousel adjustableHeight="true" perPage="3" class="mt-3" paginationColor="#047EFF">
    <slide class="slideMe">
      <img alt="گلرنگ" title="گلرنگ" src="/static/public/images/ours1.png">
    </slide>
    <slide class="slideMe">
      <img alt="شرکت نفتت" title="شرکت نفتت" src="/static/public/images/ours2.png">
    </slide>
    <slide class="slideMe">
      <img alt="شرکت نفتت" title="شرکت نفتت" src="/static/public/images/ours3.png">
    </slide>
    <slide class="slideMe">
      <img alt="شرکت نفتت" title="شرکت نفتت" src="/static/public/images/ours4.png">
    </slide>
    <slide class="slideMe">
      <img alt="شرکت نفتت" title="شرکت نفتت" src="/static/public/images/ours5.png">
    </slide>
    <slide class="slideMe">
      <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/pakshoo.png">
    </slide>
    <slide class="slideMe">
      <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/pishgaman.png">
    </slide>
    <slide class="slideMe">
      <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/delveseh.png">
      <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/mina.png">
    </slide>
    <slide class="slideMe">
      <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/mina.png">
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
name: "Slider",
  components: {
    Carousel,
    Slide
  }
}
</script>

<style scoped>
.slideMe{
  width: 18%;
  /*background-color: rgba(161,52,21,0.89);*/
  margin-left: 80px;
  text-align: center;
  padding: 10px;
}
.slideMe img{
  width: 85%;
  height: 130px;
  background-position: center;
  background-repeat: no-repeat;
  /*background-size: 100% 100%;*/
}
</style>
