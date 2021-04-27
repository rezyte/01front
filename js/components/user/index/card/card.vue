<template>
  <div v-if="products.length>0" class="card maxIs">
    <div class="titleCard"><p>{{ cardTitle }}</p></div>
    <div :class="classr">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide" v-for="(p,index) in products" :key="index">
          <div class="singleSlide">
            <div class="singleSlideWrapper">
              <div class="img">
                <a :href="getSlug(p.slug)"><img class="lazyimages swiper-lazy" :data-src="getImage(p.product_thumbnail)"
                                                alt=""></a>
              </div>
              <div class="shareProduct">
                <share title="اشتراک گذاری" :slug="p.slug"></share>
              </div>
              <div class="descs">
                <div class="title">
                  <a class="link" :href="getSlug(p.slug)">{{ p.title }}</a>
                </div>
                <div dir="rtl" class="price text-right">
                  <p v-if="p.price|| p.second_price">
                    <span class="font-weight-bold">قیمت:</span>
                    <span
                        v-if="p.price && p.second_price"> {{
                        p.price + 'تومان'
                      }} تا {{ p.second_price + 'تومان' }}</span>
                    <span v-else>{{ p.price + 'تومان' }}</span>
                  </p>
                  <p v-else>
                    <span class="font-weight-bold">قیمت: </span>وارد نشده است
                  </p>
                </div>
                <div class="button">
                  <a :href="getSlug(p.slug)" class="submit">مشاهده محصول</a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <!-- If we need navigation buttons -->
      <div :class="['swiper-button-prev',classr]"></div>
      <div :class="['swiper-button-next',classr]"></div>

    </div>


  </div>
</template>
<script>
import share from "../share/share.vue";

export default {
  props: ['products', 'cardTitle', "id", 'classr'],
  components: {
    share
  },
  data() {
    return {
      swiper: null
    }
  },
  mounted() {

    // let options = {
    //   root: null,
    //   margin: "0px",
    //   threshold: 0.5
    // }
    // let callback = (ent, obs) => {
    //   ent.forEach(entry => {
    //     if (entry.isIntersecting
    //         && entry.target.className === "lazyimages") {
    //       let imageUrl = entry.target.getAttribute("data-src")
    //       let realSrc = entry.target.getAttribute("src")
    //       if (imageUrl && realSrc==null) {
    //         entry.target.src = imageUrl
    //         obs.unobserve(entry.target)
    //       }
    //     }
    //   })
    // }
    // let observer = new IntersectionObserver(callback, options)
    // const imgs = this.$el.querySelectorAll('img')
    // imgs.forEach(img => {
    //   observer.observe(img)
    // })


    let mySwiper = new Swiper(`.${this.classr}`, {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      preloadImages: false,
      // Enable lazy loading
      lazy: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: ".swiper-button-prev"
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
          slidesPerGroup: 2
        },
        1: {
          slidesPerView: 1, slidesPerGroup: 1
        }
      },
      on: {
        click: function (s, e) {
          e.preventDefault()
          const element = e.target
          if (element.classList.contains('swiper-button-prev')) {

            this.slidePrev()
          }
        }
      }
    })

    const el = document.querySelector(`.${this.classr}`)
    el.style.width = '100%'
    el.style.overflow = "hidden"
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
  margin: 30px;
}

.card {
  margin-top: 50px;
  overflow: auto;
  width: 100%;
  position: relative;
  display: flex;
  /* align-items: flex-end; */
  flex-direction: column;
}

img {
  width: 184px;
  height: 184px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.singleSlide {
  width: 100%;
  padding: 5px;
  margin-top: 10px;

}

.link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  direction: rtl;
  text-align: right;
  font-size: 14px;
  font-weight: bold;
  color: #707070;
  text-align: center;
}

.singleSlide img {
  width: 184px;
  height: 184px;
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
  font-weight: bold;
  font-size: 13px;
}

.title {
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-end;
  height: 90px;
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

.swiper-button-next, .swiper-button-prev {
  top: calc(50% - -25px);
}

.swiper-slide {
  display: flex;
  justify-content: center;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, .1);
  background: white;
  border-radius: 25px;
}

.swiper-wrapper {
  padding-bottom: 10px;
}

img {
  transition: all 0.2s;
}

img:hover {
  transform: scale(1.1);
}

.singleSlideWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

}

.titleCard p {
  position: relative;
}

.titleCard p:before {
  content: '';
  position: absolute;
  right: -13px;
  border-radius: 500px;
  background: var(--logoBlueUser);
  width: 5px;
  height: 31px;
  top: 50%;
  transform: translateY(-50%);
}

.submit {
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  background: #0074d9;
  border: 0;
  font-size: 10pt;
  font-weight: bold;
  color: white;
  font-family: 'yekan';
  cursor: pointer;
  margin-top: 30px;
}

.descs {
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.button {
  position: relative;
  left: 10px;
}

.shareProduct {
  position: relative;
  left: 10px;
  width: 100%;
}
</style>
