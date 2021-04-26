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
               <div class="center-main-category bg-white">
                 <div class="items-categories">
                   <category v-for="category in categories" :name="category.title" v-bind:key="category.index"/>
                 </div>
               </div>
             </div>
             <div class="categories bg-white">
               <div class="title-category">
                 <h1>دسته بندی ها</h1>
               </div>
               <div class="menu">
                 <a v-for="category in categories" :href="'/product-category/'+category.slug" @mouseover="show_subCategories(1,category.id)" @mouseout="show_subCategories(0)">
                   <div class="items-menu">
<!--                     <i class="far fa-angle-left"></i>-->
<!--                     <i class="fal fa-angle-left"></i>-->
                     <i id="arrow-left" class="fas fa-angle-left"></i>
                     <p v-text="category.title"></p>
                   </div>
                 </a>
               </div>
             </div>
             <div class="subCategories" ref="subCategories">
               <nav>
                 <ul>
                   <li v-for="sub in subCategories">
                     <a href="" v-text="sub"></a>
                   </li>
                 </ul>
               </nav>
             </div>
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
  props:['categories2'],
  data(){
    return{
      // categories:[
      //   {
      //     id:1,
      //     name:'خط تولید کمپوت',
      //     picture: '/static/public/images/startFrame.jpg',
      //     sub_categories:[
      //       {
      //         name:'خط تولید کمپوت درجه یک'
      //       },
      //       {
      //         name:'خط تولید کمپوت درجه دو'
      //       }
      //     ]
      //   },
      //   {
      //     id:2,
      //     name:'خط تولید بیسکوئیت',
      //     picture: '/static/public/images/startFrame.jpg',
      //     sub_categories:[
      //       {
      //         name:'خط تولید بیسکوئیت درجه یک'
      //       },
      //       {
      //         name:'خط تولید بیسکوئیت درجه دو'
      //       },
      //       {
      //         name:'خط تولید بیسکوئیت درجه سه'
      //       }
      //     ]
      //   },
      //   {
      //     id:3,
      //     name:'خط تولید ترشی',
      //     picture: '/static/public/images/startFrame.jpg',
      //     sub_categories:[
      //       {
      //         name:'خط تولید ترشی درجه یک'
      //       }
      //     ]
      //   },
      //   {
      //     id:4,
      //     name:'خط تولید توتن و تنباکو',
      //     picture: '/static/public/images/startFrame.jpg',
      //     sub_categories:[
      //       {
      //         name:'خط تولید توتن درجه یک'
      //       }
      //     ]
      //   }
      // ],
      subCategories:''
    }
  },
  components:{
    Category,
    Blog
  },
  methods:{
    show_subCategories(x,y=null){
      if (x===1){
        if (y!==null){
          // let d=JSON.parse(this.categories2).subs
          // d=this.categories2;
          let cat= this.categories.find(
              category => category.id===y
          )
         let data=JSON.stringify(cat)
          this.subCategories=JSON.parse(data).sub_category_of
        }
        // y!=null ? this.id_subCategory=y : y='';
        this.$refs.subCategories.style.display='block';
      }else {
        this.$refs.subCategories.style.display='none';
      }
    }
  },
  computed:{
    categories(){
      return JSON.parse(this.categories2).subs;
    }
    // subCategories(id){
    //   let cat= this.categories.find(
    //       category => category.id===id
    //   )
    //   console.log(cat)
    //   return cat.sub_categories;
    // }
  },
  created() {
    console.log(JSON.parse(this.categories2),'oo')
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
  right: 19.2%;
  border-radius: 8px;
  display: none;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  background-color: white;
}
.subCategories:hover{
  display: block!important;
}
.subCategories ul{
  width: 100%;
  /*background-color: red;*/
  padding: 0;
  margin: 0;
}
.subCategories ul li{
  width: 100%;
  /*height: 30px;*/
  /*margin: 5px 0;*/
  padding:5px;
  /*background-color: #13ff7f;*/
  text-align: right;
  list-style: none;
}
.subCategories ul li a{
  width: 100%;
  height: 100%;
  color: black;
  text-decoration: none;
}
.subCategories ul li a:hover{
  color: var(--blue);
  /*text-decoration:underline;*/
  /*text-decoration-color: var(--blue)!important;*/
  /*text-decoration-style:dashed;*/
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
  font-weight: bold;
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
  height: 45px;
  text-decoration: none;
  color: black;
}

.items-menu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  padding: 5px 8px;
  transition: all 0.2s;
}

.items-menu p {
  padding-top: 5px;
  font-size: 17px;
}

.items-menu:hover {
  box-shadow: 6px 4px 12px 1px rgba(175, 179, 180, 0.89);
  cursor: pointer;
}
#arrow-left{
  margin-top: 2%;
}
.items-menu:hover p ,.items-menu:hover #arrow-left {
  color: var(--blue)!important;
}
.top-main-category {
  width: 100%;
  height: 271px;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  border-radius: 8px;
  /*background-color: rgba(20, 141, 120, 0.89);*/
}

.center-main-category {
  width: 100%;
  height: 216px;
  border-radius: 8px;
  margin-top: 1.4%;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  overflow: hidden;
  /*background-color: #fff585;*/
}
.items-categories{
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
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
