<template>
  <div class="container-fluid pt-5">
    <div class="row">
      <div class="col-10 m-auto">
        <div class="row bg-white">
          <div class="main-top">
            <div class="main-category">
              <div class="top-main-category text-center">
                Slider/text
              </div>
              <div class="center-main-category mt-4">
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
            <div class="categories">
              <div class="title-category">
                <h1>دسته بندی ها</h1>
              </div>
              <div class="menu">
                <a href="">
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
          </div>
          <div class="main-center">
            <div class="w-100">
              <div class="title-blog">
                <h2>عنوان برای بلاگ ها</h2>
              </div>
              <div id="blogs">
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
  display: flex;
}

.main-category {
  width: 80%;
  height: 500px;
  border-radius: 8px;
  /*background-color: red;*/
}

.categories {
  width: 18.9%;
  height: 500px;
  margin-left: 1%;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  /*background-color: blue;*/
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
  transition: all 0.1s;
}

.items-menu p {
  font-size: 17px;
}

.items-menu:hover {
  box-shadow: 0 1px 1px 1px rgba(136, 140, 141, 0.89);
  cursor: pointer;
}

.items-menu:hover p {
  color: var(--blue);
}

.top-main-category {
  width: 100%;
  height: 240px;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  border-radius: 8px;
  /*background-color: rgba(20, 141, 120, 0.89);*/
}

.center-main-category {
  width: 100%;
  height: 236px;
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
  height: 400px;
  background-color: #c1ffb3;
  margin-top: 5%;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
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
