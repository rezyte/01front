<template>
  <div id="customers">
    <div id="customersWrapper">
      <div class="title">
        <p>مشتریان ما</p>
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
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
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
  background: #ffffff;
  margin-top: 50px;
}

#customersWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 100%;
}

.title p {
  text-align: center;
  font-size: 29px;
  font-weight: 800;
  color: var(--blue);
}

.cusImgs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.cusImgs img {
  filter: grayscale(1);
  width: 200px;
  transition: all 0.4s;
  margin: 10px;
}

@media (max-width: 400px) {
  .cusImgs {
    justify-content: center;
  }
}

@media (max-width: 425px) {
  .cusImgs {
    justify-content: center;
  }
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

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 150px;
}

.swiper-slide img {
  width: 150px;
  height: 150px;
}
.swiper-button-next, .swiper-button-prev {
  top: calc(40% - -25px);
}
</style>
