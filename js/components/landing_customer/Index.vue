<template>
  <div>
    <div class="landing row">
      <header>
        <div class="img">
          <img src="/static/public/images/لندینگ-مشتری.webp" alt="">
        </div>
      </header>
    </div>
    <div class="row">
      <div id="body">
        <div class="info-damirco">
          <h1>
              <span class="text-damirco">دمیرکو چیست؟</span>
            دمیرکو یک پلتفرم خرید و فروش ماشین آلات صنعتی است، در 150 حوزه مختلف فعالیت دارد و شما را به تولید کنندگان و وارد کنندگان معتبر و تائید شده ارتباط می دهد. رسالت ما ایجاد ارتباط مستقیم و حذف دلالی است.
          </h1>
        </div>
        <div class="title_category">
          <h1>لیست دسته بندی ها</h1>
        </div>
        <div class="categories mt-4 bg-white">
          <div class="items-categories">
            <category v-for="category in categories" :name="category.name" v-bind:key="category.index"
                      :picture="category.picture"/>
          </div>
        </div>
        <div class="customers mt-4 bg-white">
          <div class="text-center p-3 ">
            <h2>مشتریان ما</h2>
          </div>
          <div class="slider">
            <slider class="grab"></slider>
          </div>
        </div>
        <div id="inf-_contact" class="col">
          <div class="row">
            <div class="w-100 address">
              <address-me/>
            </div>
          </div>
          <div class="row">
            <div class="m-auto text-center">
              <h3 class="display-6">تمام حقوق این سایت متعلق به دمیر کو میباشد 2020</h3>
            </div>
          </div>
        </div>
        <div id="map"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel';
import Slider from './customers_list/Slider.vue'
import Category from "../test/categories/Category.vue";
import AddressMe from './address/address.vue'

export default {
  name: "Index",
  components: {
    Slider,
    Category,
    Carousel, Slide,
    AddressMe
  },
  data() {
    return {
      categories: [
        {
          name: 'dvdb',
          picture: '/static/public/images/startFrame.jpg',
        },
        {
          name: 'ddfhthvdb',
          picture: '/static/public/images/startFrame.jpg',
        },
        {
          name: 'mpqdvcsru',
          picture: '/static/public/images/htest2.jpg',
        }, {
          name: 'mp8dvcsru',
          picture: '/static/public/images/htest2.jpg',
        }
        , {
          name: 'mp8dvcsru',
          picture: '/static/public/images/startFrame.jpg',
        }
        , {
          name: 'mp8dvcsru',
          picture: '/static/public/images/htest2.jpg',
        },
      ]
    }
  },
  mounted() {
    let first = document.querySelector('.VueCarousel-inner').firstChild;
    first.style.marginLeft = '6%';
    console.log(first);
    let grab=document.querySelector('.grab');
    grab.onmousedown=function (){
      grab.style.cursor='grabbing';
    }
    grab.onmouseup=function (){
      grab.style.cursor='grab';
    }
  }
}
</script>

<style scoped>
.landing {
  background-color: #F6F6F6;
}

header {
  width: 100%;
  height: 250px;
  background-color: #7BFF75;
  text-align: center;
}
.img{
  width: 100%;
  height: 100%;
  text-align: center;
}
.img img{
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
#body {
  width: 100%;
}

footer {
  width: 100%;
  height: 200px;
  background-color: #2F79FF;
  text-align: center;
}

h1 {
  font-size: 21px;
  font-weight: bold;
}

.categories {
  width: 90%;
  margin: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  /*background-color: #fff585;*/
}
.customers{
  width: 90%;
  margin: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
}
.items-categories {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
}

h2 {
  color: var(--blue);
}
h3{
  font-size: 16px;
  padding: 10px;
}
.address {
  text-align: right;
}
.slider{
  width: 100%;
}
.grab {
  cursor: grab;
}
.text-damirco{
  color: var(--blue);
  font-size: 18px!important;
  font-weight: bold;
}
.info-damirco{
  width: 90%;
  margin: auto;
  padding: 15px 0;
}
.info-damirco h1{
  font-size: 18px;
  line-height:30px ;
}
.title_category{
  font-size: 17px;
  font-weight: bold;
  color: var(--blue);
  margin-right: 5.2%;
  margin-top: 5px;
}
/*#products{*/
/*  width: 100%;*/
/*  background-color: #E9ECEF;*/
/*  margin-bottom: 2.2%;*/
/*}*/
/*.title{*/
/*  width: 100%;*/
/*  text-align: right;*/
/*  padding: 30px;*/
/*}*/
</style>
