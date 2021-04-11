<template>
  <div id="customers">
    <div id="customersWrapper">
      <div class="title m-auto">
        <h2>مشتریان ما</h2>
      </div>
      <div class="swiper-container-customers">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img alt="گلرنگ" title="گلرنگ" src="/static/public/images/ours1.png">
          </div>
          <div class="swiper-slide">
            <img alt="شرکت نفتت" title="شرکت نفتت" src="/static/public/images/ours2.png">
          </div>
          <div class="swiper-slide">
            <img alt="سایپا" title="سایپا" src="/static/public/images/ours3.png">
          </div>
          <div class="swiper-slide">
            <img alt="شیرین عسل" title="شیرین عسل" src="/static/public/images/ours4.png">
          </div>
          <div class="swiper-slide">
            <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/ours5.png">
          </div>
          <div class="swiper-slide">
            <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/pakshoo.png">
          </div>
          <div class="swiper-slide">
            <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/pishgaman.png">
          </div>
          <div class="swiper-slide">
            <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/delveseh.png">
          </div>
          <div class="swiper-slide">
            <img alt="ایران خودرو" title="ایران خودرو" src="/static/public/images/mina.png">
          </div>
        </div>
        <!--         Add Arrows-->
        <!--                <div class="swiper-button-next"></div>-->
        <!--
                     <div class="swiper-button-prev"></div>-->
      </div>
    </div>
  </div>

</template>

<script>
export default {
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
        // // when window width is >= 480px
        1000: {
          slidesPerView: 4,
          spaceBetween: 30,
          slidesPerGroup: 4
        },
        // // when window width is >= 640px
        660: {
          slidesPerView: 3,
          spaceBetween: 10,
          slidesPerGroup: 3
        },
        430: {
          slidesPerView: 2,
          spaceBetween: 10,
          slidesPerGroup: 3
        },
        1: {
          slidesPerView: 1, slidesPerGroup: 1
        }
      }
    });
  }
}
</script>

<style scoped>
#customers {
  width: 100%;
  background-color: whitesmoke;
  margin-top: 50px;
}

#customersWrapper {
  width: 100%;
  /*display: flex;*/
  /*flex-direction: column;*/
  /*justify-content: center;*/
  padding: 10px;

}

.title h2 {
  text-align: center;
  /*font-size: 29px;*/
  font-weight: 700;
  color: var(--blue);
}

img:hover {
  filter: grayscale(0)
}

.swiper-container-customers {
  width: 100%;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
}

.swiper-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /*overflow: hidden;*/
  flex-wrap: wrap;
}

.swiper-slide {
  width: 150px;
  height: 150px;
  margin: 40px;
  text-align: center;
}

.swiper-slide img {
  width: 150px;
  height: 150px;
  margin-right: auto;
  margin-left: auto;
}

.swiper-button-next, .swiper-button-prev {
  top: calc(40% - -25px);
}
</style>
