<template>
  <div v-if="products.length>0" class="card maxIs">
    <div class="titleCard"><p>{{cardTitle}}</p></div>
    <div class="swiper-container-for-index">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide" v-for="(p,index) in products" :key="index">
          <div class="singleSlide">
            <div class="singleSlideWrapper">
              <div class="img">
                <img :src="getImage(p.product_image)" alt="">
              </div>
              <div class="descs">
                <div class="title">
                  <a class="link" :href="getSlug(p.slug)">{{p.title}}</a>
                </div>
                <div class="descsP">
                  <p v-html="getDescription(p.description)"></p>
                </div>
                <div class="link">
                  <p>{{p.price || 0}}  تومان</p>
                  <a class="submit" :href="getSlug(p.slug)">مشاهده</a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

    </div>


  </div>
</template>
<script>
export default {
  props: ['products', 'cardTitle', "id"],
  data() {
    return {
      container: null,
      isDown: false,
      startX: null,
      scrollLeft: null,
      glide: null
    }
  },
  data() {
    return {
      perShow: 2
    }
  },
  mounted() {
    var mySwiper = new Swiper('.swiper-container-for-index', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView:3,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      breakpoints: {
        // when window width is >= 320px
        1500: {
          slidesPerView: 4,
          slidesPerGroup:4,
          spaceBetween: 20
        },
        // // when window width is >= 480px
        1100: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup:3
        },
        // // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
          slidesPerGroup:2
        },
        1:{
          slidesPerView:1,slidesPerGroup:1
        }
      }
    })
  },
  methods: {
    getDescription(desc) {
      return desc.length > 130 ? desc.substring(0, 130) + "...." : desc
    },
    getSlug(slug) {
      return `/products/product-detial/${slug}`
    },
    getUrl(p) {
      return p.url
    },
    getDesc(desc) {
      return desc.length > 30 ? desc.substring(0, 100) + "..." : desc
    },
    getImage(img) {
      return img
    },
    getClass() {
      return `splide ${this.id}`
    }
  }
}

</script>


<style scoped>
.titleCard p {
  font-size: 24px;
  font-weight: 100;
  margin: 10px;
}

.card {
  box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.2);
  background: #ffffff;
  margin-top: 50px;
  overflow: auto;
  width: 100%;
  position: relative;
  display: flex;
  /* align-items: flex-end; */
  flex-direction: column;
}

img {
  width: 250px;
  height: 230px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.singleSlide {
  width: 260px;
  padding: 5px;
  margin-top: 10px;
}

.link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  direction: rtl;
  text-align: right;
  height: 70px;
}

.singleSlide img {
  width: 260px;
}

.img {
  display: flex;
  justify-content: center;
}

.singleSlide .descsP {
  height: 120px;
}

.descsP p {
  color: #707070;
  font-weight: bold
}

.title {
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-end;
}

.splide--draggable > .splide__track > .splide__list > .splide__slide {
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px
}
.swiper-container-for-index {
  width: 100%;
  overflow: hidden;
  /*height: 300px;*/
}
.swiper-button-next,.swiper-button-prev{
  top: calc(40% - -25px);
}
.swiper-slide{
  display: flex;
  justify-content: center;
}
</style>