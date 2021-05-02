<template>
  <div class="my_carousel">
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="3000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <a href="">
        <b-carousel-slide class="my_carousel">
        <template #img>
          <img
              class="d-block img-fluid w-100"
              width="1024"
              height="271"
              src="/static/public/images/slider1.webp"
              alt="image slot"
          >
        </template>
      </b-carousel-slide>
      </a>
       <a href="">
        <b-carousel-slide class="my_carousel">
        <template #img>
          <img
              class="d-block img-fluid w-100"
              width="1024"
              height="271"
              src="/static/public/images/slider2.webp"
              alt="image slot"
          >
        </template>
      </b-carousel-slide>
      </a>
       <a href="">
        <b-carousel-slide class="my_carousel">
        <template #img>
          <img
              class="d-block img-fluid w-100"
              width="1024"
              height="271"
              src="/static/public/images/slider3.webp"
              alt="image slot"
          >
        </template>
      </b-carousel-slide>
      </a>
    </b-carousel>
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>


<style scoped>
/* div *{
   border-top-right-radius: 8px!important;
  border-top-left-radius: 8px!important;
} */
#my_carousel{
  border-radius:8px;
  height: 100%;
}
.carousel-control-next,.carousel-control-next{
  border-radius: 8px!important;
  /*border-top-right-radius: 8px!important;*/
  /*border-top-left-radius: 8px!important;*/
}
.my_carousel,#carousel-1,.img-fluid{
  border-top-right-radius: 8px!important;
  border-top-left-radius: 8px!important;
}
.img-fluid{
  height: 271px!important;
}
</style>
