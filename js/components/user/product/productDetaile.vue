<template>
  <div id="productDetail">
    <div class="productDetailWrapper">
      <div class="prodcuctName">
        <h1 class="color">{{ productDet.title }}</h1>
      </div>
      <div class="productDetails">
        <div class="productDetailsWrap">
          <div class="productImgAndOther">
            <div class="productImg">
              <div id="actualImage">
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img :title="getAlt(productDet.image_alt)" :alt="getAlt(productDet.image_alt)"
                           class="ShouldZoomImage" :src="productDet.product_image">
                    </div>
                    <div v-if="productDet.sliders!=='None'" class="swiper-slide"
                         v-for="(img,index) in productDet.sliders" :key='index'>
                      <img :title="getAlt(img.image_alt)" :alt="getAlt(img.image_alt)" class="ShouldZoomImage"
                           :src="img.image">
                    </div>
                  </div>
                  <!-- Add Arrows -->
                  <div @click="prevent($event)" class="swiper-button-next"></div>
                  <div @click="prevent($event)" class="swiper-button-prev"></div>
                </div>
              </div>

            </div>
          </div>
          <div class="productSingleDetailWrapper">
            <div class="justReadableDetailWrapper">
              <div class="price singleDetail">
                <div class="order1"><p>قیمت:</p></div>
                <div class="order2">
                  <p v-if="productDet.price || productDet.second_price">
                    <span
                        v-if="productDet.price && productDet.second_price"> {{ separate(productDet.price) + 'تومان' }} تا {{ separate(productDet.second_price) + 'تومان' }}</span>
                    <span v-else>{{separate(productDet.price) + 'تومان'}}</span>
                  </p>
                  <p v-else>
                    وارد نشده است
                  </p>
                </div>
              </div>
              <!--                            <div class="price singleDetail">-->
              <!--                                <div class="order1"><p>حداقل تعداد قابل خرید:</p></div>-->
              <!--                                <div class="order2">-->
              <!--                                    <p>{{getData(productDet.minimum_order)  }}</p>-->
              <!--                                </div>-->
              <!--                            </div>-->
              <div class="price singleDetail">
                <div class="order1"><p>ارائه نمونه:</p></div>
                <div class="order2">
                  <p>{{ getData(productDet.sample) }}</p>
                </div>
              </div>
              <div class="price singleDetail">
                <div class="order1"><p>امتیاز:</p>
                  <div class="order2">
                    <p>{{ getData(productDet.average_rating) }}</p>
                  </div>
                </div>
                <div class="price singleDetail">
                  <div class="order1"><p>ساخت:</p></div>
                  <div class="order2">
                    <p>{{ getData(productDet.made_in) }}</p>
                  </div>
                </div>
                <!-- <div class="rating">
                                      <div class="star">
                                          <star-rating :fixed-points="2" :increment="0.01"></star-rating>
                                      </div>
                                  </div> -->
                <input type="hidden" :value="payWay"/>
                <input type="hidden" :value="packetType"/>
                <input type="hidden" :value="sendWay"/>
              </div>
              <div class="contactUs">
                <div class="contactUsWrapper">
                  <button class="stelam" @click.prevent="getPriceRequest">
                    استعلام قیمت
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <done-message></done-message>
      <consulate :productId="productDet.slug" :title="productDet.title"></consulate>
    </div>
  </div>
</template>

<script>
// import ImageZoom from 'js-image-zoom'
import doneMessage from "../../user/template/doneMessage/doneMessage.vue";
import consulate from "../prodcuts/consulate.vue";
import {keepStay} from "../../user/mixIns/keepStay.js";
import {adjustElFromTop} from "../../user/mixIns/adjustElFromTop.js";

export default {
  props: ["productDet"],
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
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
      preventClicksPropagation: false,
      preventClicks: false,
    })

    window.addEventListener('click', e => {
      if (e.target.classList.contains('ShouldZoomImage')) {
        this.zoomInOnPhoto()
      }
    })
  },
  mixins: [keepStay, adjustElFromTop],
  components: {
    doneMessage,
    consulate,
  },
  data() {
    return {
      payWay: null,
      packetType: null,
      sendWay: null,
      user: userInfo
    };
  },
  methods: {
    getAlt(alt) {
      if (alt == null) {
        return this.productDet.title
      }
      return alt
    },
    getData(data) {
      if (data == null) {
        return "-"
      }
      return data
    },
    zoomIn() {
      const photo = document.querySelector(".photo");
      const url = photo.getAttribute("src");
      const scrollFromTop = document.body.scrollTop + 10;
      this.$store.state.url = url;
      const zoom = document.querySelector(".zoomIn");
      const wrapper = zoom.querySelector(".zoomInWrapper");
      const img = wrapper.querySelector("img")
      wrapper.style.top = window.scrollY + "px";
      img.setAttribute("src", url);
      zoom.style.display = "block";
    },
    zoomInOnPhoto(e) {
      let el = document.querySelector('.swiper-slide-active img');
      console.log("el", el)
      // // if(!el.classList.contains('ShouldZoomImage')){
      // //     el=el.querySelector('img')
      // // }
      const src = el.getAttribute("src");
      // // // console.log('src',el)
      // // // if(src===""){
      // // //   return
      // // // }
      this.$store.state.url = src;
      const zoom = document.querySelector(".zoomIn");
      const wrapper = zoom.querySelector(".zoomInWrapper");
      const img = zoom.querySelector("img");
      wrapper.style.top = window.scrollY + "px";
      img.setAttribute("src", src);
      zoom.style.display = "block";
    },
    changeButtonColor(e) {
      const targetBtn = e.target;
      const nextEl = targetBtn.nextElementSibling;
      const preEl = targetBtn.previousElementSibling;
      if (nextEl != null) {
        nextEl.style.border = "2px solid black";
        nextEl.style.color = "black";
      } else if (preEl != null) {
        preEl.style.border = "2px solid black";
        preEl.style.color = "black";
      }
      targetBtn.style.border = "2px solid orangered";
      targetBtn.style.color = "orangered";
    },
    getPriceRequest() {
      const consulet = document.querySelector(".consulate");
      const wrapper = document.querySelector(".consulateWrapper");
      consulet.style.display = "block";
      this.adjustFromTop(wrapper, false, true);
      // document.body.style.overflow = "hidden";
    },
    sendPriceRequest() {
      const done = document.querySelector("#doneMessage");
      done.style.display = "block";
      setTimeout(() => {
        done.style.display = "none";
      }, 5000);
    },
    closeConsulate() {
      const consulet = document.querySelector(".productConsulate");
      consulet.style.display = "none";
    },
    changeImage(e) {
      const el = e.target;
      const img = el.querySelector("img");
      const src = el.getAttribute("src");
      const photo = document.querySelector(".photo")
      photo.setAttribute("src", src);
    },
    getImgSrc() {
      return this.productDet.product_image;
    },
    prevent(e) {
      e.stopPropagation()
      e.preventDefault()
    },
    separate(Number) {
      Number += '';
      Number = Number.replace(',', '');
      let x = Number.split('.');
      let y = x[0];
      let z = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;//ینی چهار رقم وجودداشته باشد
      while (rgx.test(y))
          // console.log()
          // console.log(rgx)
        y = y.replace(rgx, '$1' + ',' + '$2');
      return y + z;
    }

  },
};
</script>

<style scoped>
.glider.draggable .glider-slide img {
  user-select: none;
  padding: 5px;
  pointer-events: none;
  padding: 5px;
}

.photo:hover {
  cursor: pointer;
}

.splide img {
  width: 100px !important;
}

.glider img {
  user-select: inherit;
  pointer-events: all !important;
  height: 150px;
}

.contactUsWrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5px;
}

.productImgAndOther {
  width: 45%;
}

.writeAbleSignleItemBtns button {
  width: 80px;
  margin: 10px;
}

.productImg img {
  width: 100%;
}

.productImg {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.productImg div {
  display: flex;
  align-items: flex-end;
}

.zoomSign {
  cursor: pointer;
}

.productImg div p {
  font-size: 14px;
  font-family: serif;
}

.zoomSign {
  max-width: 15px;
  max-height: 15px;
  margin-top: 5px;
  margin-right: 5px;
}

.prodcuctName {
  text-align: left;
  width: 100%;
}

.prodcuctName h1 {
  width: 100%;
  text-align: right;
  padding-bottom: 10px;
  font-size: 17pt;
  font-weight: bold;
  direction: rtl;
}

.productDetailWrapper {
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: flex-start;
}

.productSingleDetailWrapper {
  width: 55%;
  display: flex;
  flex-direction: column;
}

.justReadableDetailWrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.productDetails {
  display: flex;
  justify-content: flex-start;
}

.productDetailsWrap {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.singleDetail {
  display: flex;
  width: 100%;
  justify-content: flex-start;
}

.singleDetail p {
  max-width: max-content;
}

.order1 {
  order: 2;
  min-width: 70px;
  display: flex;
  justify-content: flex-end;
}

.order2 {
  order: 1;
  display: flex;
  justify-content: flex-end;
  word-wrap: break-word;
}

.order2 p {
  margin-right: 5px;
  font-weight: bold;
}

.singleDetail {
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  margin-left: 5px;
}

.productSingleDetailWrapper .singleDetail:nth-child(odd) {
  background: #eeeeee;
}

.rating {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rating div:nth-child(1) {
  margin-top: 5px;
}

.rating {
  width: 90%;
}

.rating div:nth-child(2) {
  margin-top: 5px;
}

.point p {
  font-size: 20pt;
}

.numbers {
  margin-top: 20px;
}

.numbers p {
  font-size: 18pt !important;
}

.numbers span {
  color: rgb(240, 48, 48);
}

@media (max-width: 1200px) {
  .productDetailsWrap {
    flex-direction: column;
    align-items: center;
  }

  .productImg {
    display: flex;
    align-items: center;
  }

  .productImgAndOther {
    width: 100%;
  }

  .productSingleDetailWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}

.price .order2 p {
  text-align: right;
}

.sliderImgs {
  max-width: 150px;
}

div#actualImage img {
  max-height: 350px;
  object-fit: contain;
}

.swiper-container {
  width: 100%;
  height: 150px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.swiper-slide {
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
}

#actualImage {
  width: 100%;
}

.swiper-container {
  width: 100%;
  height: 100%;
  margin-top: 0;
}

.swiper-slide {
  height: 350px;
  position: relative;
}

.swiper-slide img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.swiper-button-next, .swiper-button-prev {
  align-items: center !important;
  /*background: rgba(0,0,0,0.4) !important;*/
}

.swiper-button-next:after, .swiper-button-prev:after {
  content: '';
}

.swiper-slide {
  width: 100% !important;
}

.swiper-button-next, .swiper-button-prev {
  top: calc(40% - -25px);
}

.ShouldZoomImage {
  height: 100%;
}

.color {
  color: var(--blue);
}
</style>
