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
                    <!--                    <img src="/static/public/images/shrink2.png" alt="تصویر ناقص است">-->
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
                </div>
                <div class="cost">
                  <!--                  /images/products/2021/02/None_VhXLXMd.webp-->
                  <p>
                    <span>قیمت:</span>
                    {{ item.cost }} تومان
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
      <jw-pagination class="m-auto" :items="exampleItems" @changePage="onChangePage"></jw-pagination>
    </div>
  </div>
</template>

<script>
import JwPagination from 'jw-vue-pagination';
// const exampleItems = [...Array(15).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
const exampleItems = [2, 9, 8, 52, 5, 7, 0, 6, 8, 9, 1, 5, 6, 5, 2, 5, 56, 89, 4, 5, 6, 0, 8, 6]
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
    },
    // getDescription(e){
    //   console.log(e)
    //   let m=e.split('<p>');
    //   return m[1].split('<')[0]
    //
    //   // let one=m[1].split('</')[0];
    //   // return m;
    // }
  },
  // computed:{
  // },
  mounted() {
    console.log(this.exampleItems.length)
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
  /*background-color: rgba(255,11,189,0.44);*/
  margin-right: 2%;
  text-align: right;
  padding-top: 7px;
}

.cost span {
  font-size: 17px;
  font-weight: bold;
}

.line {
  width: 95.3%;
  /*background-color: #a7ceff;*/
}

.pagination {
  display: inline-flex !important;
  text-align: right;
  overflow: hidden !important;
  margin: 0!important;
  padding: 0!important;
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
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .text {
    padding: 10px;
    margin: 0;
  }

  .name {
    /*width: 350px;*/
    height: 85px;
    padding: 0;
    margin: 0;
  }

  .info {
    width: 350px;
    padding: 10px;
    margin: 0;
  }
}

@media screen  and (max-width: 564px) {
  .cost {
    display: none;
  }
}

@media screen and (max-width: 459px) {
  .name, .info {
    width: 220px;
  }
}
</style>
