<template>
  <div class="container-fluid pt-5">
    <div class="row">
      <div class="col-10 m-auto">
        <div class="row">
         <div class="w-100 d-flex flex-column align-items-end">
           <div class="main-top">
             <div class="main-category">
               <div class="top-main-category text-center bg-white">
                 Slider/text
               </div>
               <div class="center-main-category mt-4 bg-white">
                 <div class="items-categories">
                   <category />
                   <category />
                   <category />
                   <category />
                   <category />
                   <!--                  <category />-->
                 </div>
               </div>
             </div>
             <div class="categories bg-white">
               <div class="title-category">
                 <h1>دسته بندی ها</h1>
               </div>
               <div class="menu">
                 <a href="" @mouseover="show_subCategories(1)" @mouseout="show_subCategories(0)">
                   <div class="items-menu">
                     <p>خط تولید کمپوت</p>
                   </div>
                 </a>
                 <a href="">
                   <div class="items-menu">
                     <p>خط تولید بیسکوئیت</p>
                   </div>
                 </a>
                 <a href="">
                   <div class="items-menu">
                     <p>خط توبید ترشی</p>
                   </div>
                 </a>
                 <a href="">
                   <div class="items-menu">
                     <p>خط تولید پاستیل</p>
                   </div>
                 </a>
               </div>
             </div>
             <div class="subCategories" ref="subCategories"></div>
           </div>
         </div>
          <div class="main-center">
            <div class="w-100 p-2">
              <div class="title-blog">
                <h2>عنوان برای بلاگ ها</h2>
              </div>
              <div id="blogs" class="mt-3">
                <blog />
                <blog />
                <blog />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Category from "./categories/Category.vue";
import Blog from "./blogs/Blog.vue";
export default {
  name: "index",
  components:{
    Category,
    Blog
  },
  methods:{
    show_subCategories(x){
      if (x===1){
        this.$refs.subCategories.style.opacity='1';
      }else {
        this.$refs.subCategories.style.opacity='0';
      }
    }
  }
}
</script>

<style scoped>
{
  direction: rtl;
}
.container-fluid{
  background-color: #f5f5f5;
}
.main-top {
  width: 100%;
  position: relative;
  display: flex;

}

.main-category {
  width: 900px;
  height: 500px;
  border-radius: 8px;
  position: relative;
  box-sizing: border-box;
  /*background-color: red;*/
}

.categories {
  width: 220px;
  height: 500px;
  margin-left: 1%;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  box-sizing: border-box;

  /*background-color: blue;*/
}
.subCategories{
  width: 220px;
  height: 500px;
  position: absolute;
  right: 19.5%;
  border-radius: 8px;
  opacity: 0;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  background-color: white;
}
.title-category {
  width: 100%;
  text-align: right;
  padding: 2px 10px;
  /*background-color: rgba(112,161,116,0.89);*/
}

.title-category > h1 {
  margin-top: 10px;
  font-size: 19px;
  font-weight: 500;
}

.menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /*align-items: ;*/
}

.menu a {
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: black;
}

.items-menu {
  width: 100%;
  height: 40px;
  margin: 2px 0;
  /*background-color: rgba(153,87,161,0.89);*/
  text-align: right;
  padding: 5px 8px;
  transition: all 0.2s;
}

.items-menu p {
  font-size: 17px;
}

.items-menu:hover {
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  cursor: pointer;
}

.items-menu:hover p {
  color: var(--blue);
}
/*.items-menu:hover .subCategories{*/
/*  opacity: 1!important;*/
/*}*/

.top-main-category {
  width: 100%;
  height: 260px;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  border-radius: 8px;
  /*background-color: rgba(20, 141, 120, 0.89);*/
}

.center-main-category {
  width: 100%;
  height: 216px;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  /*background-color: #fff585;*/
}
.items-categories{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
}
.main-center{
  width:100%;
  margin-top: 5%;
  border-radius: 8px;
  position: relative;
  /*box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);*/
}
#blogs{
  width: 100%;
  /*height: 300px;*/
  /*background-color: #79ffe0;*/
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.title-blog{
  text-align: right;
  padding: 10px;
}
.title-blog h2{
  font-size: 17px;
  font-weight: bold;
  color: var(--blue);
}


</style>
