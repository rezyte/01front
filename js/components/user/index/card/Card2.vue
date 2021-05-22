<template>
  <div id="item">
    <div id="itemWrapper">
      <div class="titleCard">
        <h1>{{ cardTitle }}</h1>
      </div>
      <div class="swiper-container-item">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="p in products" :key="p.id">
            <div class="item">
              <div class="image">
                <a :href="'/products/product-detial/' + p.slug">
                  <img :src="p.product_thumbnail" alt="" />
                </a>
              </div>
              <div class="description">
                <div dir="rtl" class="title text-right">
                  <a class="link" :href="'/products/product-detial/' + p.slug"
                    ><h2 class="rape">{{ p.title }}</h2></a
                  >
                </div>
                <div dir="rtl" class="price text-right mt-2">
                  <p class="mt-2 mr-1 rape" v-if="p.price || p.second_price">
                    <span class="font-weight-bold">قیمت:</span>
                    <span v-if="p.price && p.second_price">
                      {{ separate(p.price) + "تومان" }} تا
                      {{ separate(p.second_price) + "تومان" }}</span
                    >
                    <span v-else>{{ separate(p.price) + "تومان" }}</span>
                  </p>
                  <p v-else class="mt-2 mr-1 rape">
                    <span class="font-weight-bold">قیمت: </span>وارد نشده است
                  </p>
                </div>
                <div class="share_item mr-1">
                  <share title="اشتراک گذاری" :slug="p.slug"></share>
                </div>
                <div>
                  <a :href="'/products/product-detial/' + p.slug">
                    <button class="show_product">مشاهده محصول</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next arrow">
          <!-- <i id="arrow-left" class="fas fa-angle-left"></i> -->
        </div>
        <div class="swiper-button-prev arrow"></div>
      </div>
    </div>
  </div>
</template>

<script>
import share from "../share/share.vue";
export default {
  name: "Card2",
  props: ["products", "cardTitle"],
  components: {
    share,
  },
  mounted() {
    let swiper = new Swiper(".swiper-container-item", {
      slidesPerView: "auto",
      slidesPerView: 3,
      loopAdditionalSlides: 100,
      loop: false,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          slidesPerGroup: 1,
        },
        // when window width is >= 480px
        // 480: {
        //   slidesPerView: 2,
        //   spaceBetween: 5,
        //   slidesPerGroup: 2,
        // },
        // when window width is >= 640px
        680: {
          slidesPerView: 2,
          spaceBetween: 0,
          slidesPerGroup: 2,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 0,
          slidesPerGroup: 3,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 0,
          slidesPerGroup: 4,
        },
      },
    });
  },
  methods: {
    separate(Number) {
      Number += "";
      Number = Number.replace(",", "");
      let x = Number.split(".");
      let y = x[0];
      let z = x.length > 1 ? "." + x[1] : "";
      var rgx = /(\d+)(\d{3})/; //ینی چهار رقم وجودداشته باشد
      while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
      return y + z;
    },
  },
};
</script>

<style scoped>
#item {
  background: #ffffff;
  margin: 20px 0 0 0;
  /* margin-top: 50px; */
}

#itemWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 10px; */
  width: 100%;
}

.titleCard h1 {
  font-size: 24px;
  font-weight: 100;
  margin: 30px;
  position: relative;
}
.titleCard h1:before {
  content: "";
  position: absolute;
  right: -13px;
  border-radius: 500px;
  background: var(--logoBlueUser);
  width: 5px;
  height: 31px;
  top: 50%;
  transform: translateY(-50%);
}
.swiper-container-item {
  width: 100%;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
}
.swiper-wrapper {
  /* background-color: darkcyan; */
  margin: auto;
  padding-bottom: 15px;
  padding-top: 15px;
  /* padding-right: 45px; */
  /* padding-left: 23px; */
  /* background-color: seagreen; */
}
.swiper-slide {
  /* background-color: darkorchid; */
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* padding-right: 28px;
  padding-left: 28px; */
  padding-right: 2.1%;
  padding-left: 2.1%;
  /* margin: 5px 10px 0 0; */
}
.item {
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-top: 16px;
  padding-bottom: 10px;
  /* background-color: red; */
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);

  /* justify-content: space-around; */
}
.swiper-slide img {
  width: 200px;
  height: 200px;
  transition: all 0.8s;
}
.swiper-slide img:hover {
  transform: scale(1.15);
}
.swiper-button-next,
.swiper-button-prev {
  top: calc(46% - -25px);
}
.swiper-button-next{
  right: 3px!important;
}
.swiper-button-prev{
  left: 3px!important;
}
.link {
  text-decoration: none;
}
.link h2 {
  color: var(--blue);
  font-size: 17px;
  font-weight: bold;
}
.description {
  width: 100%;
  padding: 5px;
  margin-top: 8px;
}
.show_product {
  width: auto;
  height: 45px;
  background-color: #4c93df;
  border-radius: 4px;
  color: black;
  font-size: 16px;
  font-weight: 400;
  border: none;
  transition: all 0.3s;
  padding: 5px;
}
.show_product:hover {
  background-color: var(--blue);
  color: rgba(255, 255, 255, 0.932);
}
.rape {
  display: block;
  width: 220px;
  height: 45px;
  overflow: hidden;
  /* white-space: pre-wrap; */
  /* overflow-wrap: break-word; */
  text-overflow: ellipsis;
}
/* .arrow{
  color: red!important;
  background-color: var(--blue)!important;
} */
/* .image{
  width
} */
/* .swiper-button-next{
  bacolo
} */
</style>
