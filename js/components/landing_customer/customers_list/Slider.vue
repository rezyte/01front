<template>
  <carousel adjustableHeight="true" perPage="4" class="mt-3" paginationColor="#047EFF">
    <slide class="slideMe">
      <img alt="گلرنگ" title="گلرنگ" src="/static/public/images/ours1.png">
    </slide>
    <slide class="slideMe1">
      <img alt="شرکت نفتت" title="شرکت نفتت" src="/static/public/images/ours2.png">
    </slide>
    <slide class="slideMe1">
      <img alt="شرکت نفتت" title="سایپا" src="/static/public/images/ours3.png">
    </slide>
    <slide class="slideMe1">
      <img alt="شرکت نفتت" title="شیرین عسل" src="/static/public/images/ours4.png">
    </slide>
    <slide class="slideMe" id="ta">
<!--      ///-->
      <img alt="شرکت نفتت" title="ایران خودرو" src="/static/public/images/ours5.png">
    </slide>
    <slide class="slideMe1">
      <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/pakshoo.png">
    </slide>
    <slide class="slideMe1">
      <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/pishgaman.png">
    </slide>
    <slide class="slideMe1">
      <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/delveseh.png">
    </slide>
<!--    <slide class="slideMe1">-->
<!--      <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/mina.png">-->
<!--    </slide>-->
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
*{
direction: ltr;
}
.slideMe{
  width: 13%;
  text-align: center;
  padding: 10px;
  margin-left: 12%;
}
.slideMe1{
  width: 13%;
  margin-left:12.3%;
  text-align: center;
  padding: 10px;
  /*background-color: red;*/
}
.slideMe img,.slideMe1 img{
  width: 100%;
  height: 133px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
