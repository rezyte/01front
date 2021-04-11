<template>
  <!--  <div id="customers">-->
  <!--    <div id="customersWrapper">-->
  <!--      <div class="title m-auto">-->
  <!--        <h2>مشتریان ما</h2>-->
  <!--      </div>-->
  <div>
    <div class="example-3d">
      <swiper ref="mySwiper" class="swiper" :options="swiperOptions">
        <swiper-slide>
          <img alt="گلرنگ" title="گلرنگ" src="/static/public/images/ours1.png">
        </swiper-slide>
        <swiper-slide>
<!--          4-->
                    <img alt="شرکت نفتت" title="شرکت نفتت" src="/static/public/images/ours2.png">
        </swiper-slide>
        <swiper-slide>
          4
          <!--          <img alt="سایپا" title="سایپا" src="/static/public/images/ours3.png">-->
        </swiper-slide>
        <swiper-slide>
          4
          <!--          <img alt="شیرین عسل" title="شیرین عسل" src="/static/public/images/ours4.png">-->
        </swiper-slide>
        <swiper-slide>
          4
          <!--          <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/ours5.png">-->
        </swiper-slide>
        <swiper-slide>
          4
          <!--          <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/pakshoo.png">-->
        </swiper-slide>
        <swiper-slide>
          4
          <!--          <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/pishgaman.png">-->
        </swiper-slide>
        <swiper-slide>
          4
          <!--          <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/delveseh.png">-->
        </swiper-slide>
        <swiper-slide>
          4
          <!--          <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/mina.png">-->
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

// import styles from 'styles.scss'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        // Some Swiper option/callback...
      }
    }
  },
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.$swiper
    // }
  },
  mounted() {
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="scss" scoped>
.example-3d {
  width: 100%;
  height: 400px;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .swiper-slide {
    //display: flex;
    //justify-content: center;
    //align-items: center;
    width: 400px;
    height: 300px;
    text-align: center;
    font-weight: bold;
    font-size: 17px;
    background-color: #2C8DFB;
    background-position: center;
    background-size: cover;
    color: white;
    margin: 2%;

    img{
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      //background-position: ;
    }
  }

  .swiper-pagination {
    /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: #ffffff;
    }
  }
}
</style>
