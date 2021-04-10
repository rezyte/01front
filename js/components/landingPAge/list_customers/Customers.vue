<template>
  <div class="customers">
    <div class="p-2 text-center">
      <p>لیست مشتریان</p>
    </div>
    <!--    <div class="items">-->
    <!--      <div>-->
    <!--        <img alt="گلرنگ" title="گلرنگ" src="/static/public/images/ours1.png" >-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        <img alt="شرکت نفتت" title="شرکت نفتت" src="/static/public/images/ours2.png" >-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        <img alt="سایپا" title="سایپا" src="/static/public/images/ours3.png" >-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        <img alt="شیرین عسل" title="شیرین عسل" src="/static/public/images/ours4.png" >-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/ours5.png" >-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/pakshoo.png" >-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/pishgaman.png" >-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/delveseh.png" >-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/mina.png" >-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div class="swiper-container-customers">-->
    <!--      <div class="swiper-wrapper">-->
    <!--        <div class="swiper-slide">-->
    <!--          <img alt="گلرنگ" title="گلرنگ" src="/static/public/images/ours1.png">-->
    <!--        </div>-->
    <!--        <div class="swiper-slide">-->
    <!--          <img alt="شرکت نفت" title="شرکت نفتت" src="/static/public/images/ours2.png">-->
    <!--        </div>-->
    <!--        <div class="swiper-slide">-->
    <!--          <img alt="سایپا" title="سایپا" src="/static/public/images/ours3.png">-->
    <!--        </div>-->
    <!--        <div class="swiper-slide">-->
    <!--          <img alt="شیرین عسل" title="شیرین عسل" src="/static/public/images/ours4.png">-->
    <!--        </div>-->
    <!--        <div class="swiper-slide">-->
    <!--          <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/ours5.png">-->
    <!--        </div>-->
    <!--        <div class="swiper-slide">-->
    <!--          <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/pakshoo.png">-->
    <!--        </div>-->
    <!--        <div class="swiper-slide">-->
    <!--          <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/pishgaman.png">-->
    <!--        </div>-->
    <!--        <div class="swiper-slide">-->
    <!--          <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/delveseh.png">-->
    <!--        </div>-->
    <!--        <div class="swiper-slide">-->
    <!--          <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/mina.png">-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      &lt;!&ndash; Add Arrows &ndash;&gt;-->
    <!--      <div class="swiper-button-next"></div>-->
    <!--      <div class="swiper-button-prev"></div>-->
    <!--    </div>-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img :title="getAlt(productDet.image_alt)" :alt="getAlt(productDet.image_alt)" class="ShouldZoomImage"
               :src="productDet.product_image">
        </div>
        <div v-if="productDet.sliders!='None'" class="swiper-slide" v-for="(img,index) in productDet.sliders"
             :key='index'>
          <img :title="getAlt(img.image_alt)" :alt="getAlt(img.image_alt)" class="ShouldZoomImage" :src="img.image">
        </div>
      </div>
      <!-- Add Arrows -->
      <div @click="prevent($event)" class="swiper-button-next"></div>
      <div @click="prevent($event)" class="swiper-button-prev"></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Customers",
  mounted() {
    var swiper = new Swiper('.swiper-container-customers', {
      slidesPerView: 3,
      loopAdditionalSlides: 100,
      loop: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        1500: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 20
        },
        // // when window width is >= 480px
        1100: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3
        },
        // // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
          slidesPerGroup: 2
        },
        1: {
          slidesPerView: 1, slidesPerGroup: 1
        }
      }
    });

    window.addEventListener('click', e => {
      if (e.target.classList.contains('ShouldZoomImage')) {
        this.zoomInOnPhoto()
      }
    })
  }
};
</script>

<style scoped>
.customers {
  width: 100%;
  /* height: 200px; */
  background-color: whitesmoke;
}

.customers div p {
  color: var(--logoBlue);
  font-size: 24px;
  font-weight: bold;
}

.swiper-container{
  width: 100%;
  height: 150px;
  margin-top:20px;
  margin-bottom: 20px;
}
.swiper-slide{
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
}
.swiper-slide{
  height: 350px;
  position: relative;
}
.swiper-slide img{
  position: absolute;
  top:50%;
  transform: translateY(-50%);
}
.swiper-button-next,.swiper-button-prev{
  align-items: center !important;
  top: calc(40% - -25px);
  /*background: rgba(0,0,0,0.4) !important;*/
}
.swiper-button-next:after,.swiper-button-prev:after{
  content: '';
}
.swiper-slide{
  width: 100% !important;
}

/*.items {*/
/*  width: 100%;*/
/*  display: flex;*/
/*  flex-wrap: wrap;*/
/*  flex-direction: row-reverse;*/
/*  justify-content: start;*/
/*}*/

/*.items div {*/
/*  width: 150px;*/
/*  height: 150px;*/
/*  !*border-radius: 5px;*!*/
/*  margin: 40px;*/
/*}*/

/*.items > div > img {*/
/*  width: 150px;*/
/*  height: 150px;*/


/*}*/
</style>
