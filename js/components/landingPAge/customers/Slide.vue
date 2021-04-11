<template>
  <div class="example-3d">
    tjr
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img alt="گلرنگ" title="گلرنگ" src="/static/public/images/ours1.png">
      </swiper-slide>
      <swiper-slide>
        <img alt="شرکت نفتت" title="شرکت نفتت" src="/static/public/images/ours2.png">
      </swiper-slide>
      <swiper-slide>
        <img alt="سایپا" title="سایپا" src="/static/public/images/ours3.png">
      </swiper-slide>
      <swiper-slide>
        <img alt="شیرین عسل" title="شیرین عسل" src="/static/public/images/ours4.png">
      </swiper-slide>
      <swiper-slide>
        <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/ours5.png">
      </swiper-slide>
      <swiper-slide>
        <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/pakshoo.png">
      </swiper-slide>
      <swiper-slide>
        <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/pishgaman.png">
      </swiper-slide>
      <swiper-slide>
        <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/delveseh.png">
      </swiper-slide>
      <swiper-slide>
        <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/mina.png">
      </swiper-slide>
      <!--      <swiper-slide>-->
      <!--        <img alt="شرکت نفتت" title="شرکت نفتت" src="/static/public/images/ours2.png">-->
      <!--      </swiper-slide>-->
      <!--        <swiper-slide>-->
      <!--&lt;!&ndash;          <img src="../../../assets/images/slides/sl-6.jpg" alt="">&ndash;&gt;-->
      <!--      </swiper-slide>-->
      <!--      <swiper-slide>-->
      <!--&lt;!&ndash;          <img src="../../../assets/images/slides/sl-2.jpg" alt="">&ndash;&gt;-->
      <!--      </swiper-slide>-->
      <!--      <swiper-slide>-->
      <!--&lt;!&ndash;          <img src="../../../assets/images/slides/sl-4.jpg" alt="">&ndash;&gt;-->
      <!--      </swiper-slide>-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  name: 'Slide',
  title: '3D Coverflow effect',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.example-3d {
  width: 100%;
  height: 400px;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
}

.swiper {
  height: 80%;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    background-color: #2C8DFB;
    background-position: center;
    background-size: cover;
    color: white;
    //margin: 2%;

    img {
      width: 100px;
      height:100px;
      background-size: 100% 100%;
      //background-position: ;
    }
  }

  .swiper-pagination {
    /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: white;
    }
  }
}
</style>
