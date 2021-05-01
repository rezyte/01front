<template>
  <div id="pagination">
    <div class="content">
      <div class="col-10 m-auto">
        <!--        <h3 class="title">عنوان</h3>-->
        <div id="content">
          <div v-for="item in pageOfItems" :key="item.id">
            <div class="item">
              <a :href="'/product/'+item.slug" class="link-item">
                <div class="item-origin">
                  <div class="pic">
                    <!--                                       <mg src="/static/public/images/shrink2.png" alt="تصویر ناقص است">-->
                    <img :src="item.product_image" alt="تصویر ناقص است">
                  </div>
                  <div class="text">
                    <h1 class="name" v-text="item.title">

                      <!--                      jdicbvmdjsikrjfhdmsjciqogldmsjcz.5pdloseuiloi526894253698710-->
                    </h1>
                    <p class="info mt-1" v-text="item.short_description">
                      <!--                      jifhguriopamvk111forqwjfiormbkshhhhhhhhhhhhhhhhhh75698hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhcskdclfvpdjflroewhnfkvpahskehdn,lashvkociejrfvhsqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq-->
                    </p>
                  </div>
                  <div class="cost2">
                    <p v-if="item.price|| item.second_price">
                      <span class="font-weight-bold">قیمت:</span>
                    <span
                        v-if="item.price && item.second_price"> {{
                        separate(item.price) + 'تومان'
                      }} تا {{ separate(item.second_price) + 'تومان' }}</span>
                      <span v-else>{{ separate(item.price) + 'تومان' }}</span>
                    </p>
                    <p v-else>
                      <span class="font-weight-bold">قیمت: </span>وارد نشده است
                    </p>
                  </div>
                </div>
                <div class="cost">
                  <!--                  /images/products/2021/02/None_VhXLXMd.webp-->
                  <p v-if="item.price|| item.second_price">
                    <span>قیمت:</span>
                    <span
                        v-if="item.price && item.second_price"> {{
                        separate(item.price) + 'تومان'
                      }} تا {{ separate(item.second_price) + 'تومان' }}</span>
                    <span v-else>{{ separate(item.price) + 'تومان' }}</span>
                  </p>
                  <p v-else>
                    <span class="font-weight-bold">قیمت: </span>وارد نشده است
                  </p>
                </div>
              </a>
            </div>
            <hr class="line">
            <!--            <div class="w-75 m-auto">-->
            <!--            </div>-->
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <jw-pagination class="m-auto" :items="products" @changePage="onChangePage"></jw-pagination>
    </div>
  </div>
</template>

<script>
import JwPagination from 'jw-vue-pagination';
// const exampleItems = [...Array(15).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
const exampleItems = [2, 9, 8, 52, 5, 7, 0, 6, 8, 9, 1, 5, 6, 5, 2, 5, 56, 89, 4, 5, 6, 0, 8, 6];
export default {
  name: "Pagination",
  props: ['products'],
  components: {
    JwPagination
  },
  data() {
    return {
      exampleItems,
      pageOfItems: []
    };
  },
  beforeCreate() {
    // this.exampleItems.push(this.products).bind(this)
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
      var list = document.getElementsByClassName("pagination")[0];
      for (let i = 0; i < list.childElementCount; i++) {
        list.getElementsByClassName("page-item")[i].style.borderColor = 'white';
        list.getElementsByClassName("page-item")[i].style.paddingRight = '0!important';
        list.getElementsByClassName("page-item")[i].style.paddingLeft = '0important';
        let child = list.getElementsByClassName("page-item")[i].children[0]
        child.style.padding = '7px'
        list.getElementsByClassName("page-item page-number")[i].style.background = 'white';

      }
      let active = document.querySelector('.pagination .active');
      active.style.background = '#007BFF';
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


  mounted() {
    // console.log(this.exampleItems.length)
  }
}
</script>

<style scoped>
* {
  text-align: right;
  direction: rtl;
}

#pagination {
  width: 100%;
  box-sizing: border-box;
}

.content {
  width: 100%;
}

#content {
  width: 100%;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
}

.item {
  width: 100%;
}

.item a {
  color: black;
  text-decoration: none;

  /*transition: color 5s;*/
}

.item a:hover .name {
  color: var(--blue);
}

.link-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
}

.name {
  font-size: 17px;
  font-weight: bold;
  display: block;
  width: 520px;
  /*height: 60px;*/
  /*background-color: blue;*/
  overflow: hidden;
  white-space: nowrap;
  /*overflow-wrap: break-word;*/
  text-overflow: ellipsis;
}

.info {
  display: block;
  width: 400px;
  height: 110px;
  /*line-break: anywhere;*/
  padding: 5px 8px;
  /*background-color: orange;*/
  overflow: hidden;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
}

.item-origin {
  width: 750px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: self-start;
  margin-right: 2%;
  padding: 25px 2px;
  box-sizing: border-box;
  /*background-color: red;*/

}

.pic {
  width: 200px;
  height: 160px;
  text-align: center;
}

.pic img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
}

.text {
  height: 160px;
  margin-right: 5%;
  font-size: 17px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.cost {
  width: auto;
  position: relative;
  right: 0;
  /*background-color: rgba(255,11,189,0.44);*/
  margin-right: 2%;
  text-align: right;
  padding-top: 7px;
}

.cost span, .cost2 span {
  font-size: 17px;
  font-weight: bold;
}

.cost2 {
  display: none;
}

.line {
  width: 95.3%;
  /*background-color: #a7ceff;*/
}

.pagination {
  display: inline-flex !important;
  text-align: right;
  overflow: hidden !important;
  margin: 0 !important;
  padding: 0 !important;
}

@media screen and (max-width: 1018px) {
  .name {
    /*background-color: rgba(46,255,41,0.44);*/
    width: 350px;
    height: 60px;
    white-space: normal;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    /*white-space: pre-wrap;*/
  }
}

@media screen and (max-width: 868px) {
  .item-origin {
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .pic {
    width: 90%;
    height: 240px;
  }

  .text {
    width: 90%;
    text-align: center;
    margin: 0;
  }

  .name {
    width: 100%;
    /*width: 350px;*/
    text-align: center;
    height: 85px;
    padding-top: 10px;
    margin: auto;
  }

  .cost {
    width: auto;
    display: none;
  }

  .cost2 {
    display: block;
  }

  .info {
    width: 100%;
    padding: 10px;
    margin: 0;
  }
}
/*@media screen and (max-width: 890px) {*/
/*  .pagination{*/
/*    width: 99%;*/
/*    margin: 1px!important;*/
/*    padding: 1px!important;*/
/*    text-align: center;*/
/*    !*background-color: red;*!*/
/*  }*/
/*  .pagination li{*/
/*    width: 46px;*/
/*    margin-right: 5px!important;*/
/*    padding: 1px!important;*/
/*    text-align: center!important;*/
/*  }*/
/*  .pagination li a{*/
/*    width: 100%!important;*/
/*    !*margin: 1px!important;*!*/
/*    padding: 1px!important;*/
/*    text-align: center!important;*/
/*  }*/
/*  ul.pagination li{*/
/*    margin: 0!important;*/
/*  }*/
/*}*/
/*@media screen and (max-width: 690px){*/
/*  .page-number{*/
/*    display: none!important;*/
/*  }*/
/*  .pagination{*/
/*    padding: 10px!important;*/
/*  }*/
/*  .pagination li{*/
/*    width: 60px;*/
/*    margin:10px!important;*/
/*    padding: 5px!important;*/
/*    text-align: center!important;*/
/*  }*/
/*  .paginationa{*/
/*    padding: 5px!important;*/
/*    text-align: center!important;*/
/*  }*/
/*}*/

</style>
