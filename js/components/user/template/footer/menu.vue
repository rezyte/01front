<template>
  <div id="mega">
    <div id="megaWrapper">

      <div class="headWrapper">
                <div  class="headMenuWrapper">
                  <div  v-for="(cat,ind) in getCats" class="singleMenu"  v-if="ind<6">
                    <div class="title">{{cat.title}}</div>
                      <ul >
                        <li v-for="(sub,index) in cat.subs" v-if="index<5"><a :href='getHref(sub.slug)'>{{sub.title}}</a></li>
                      </ul>
                  </div>
                </div>


<!--                <div  class="headMenuWrapper" >-->
<!--                  <div v-for="(cat,ind) in getCats" class="singleMenu" v-if="ind>=3 && ind<6">-->
<!--                    <div class="title">{{cat.title}}</div>-->
<!--                      <ul>-->
<!--                        <li v-for="(sub,index) in cat.subs" v-if="index<5"><a :href='getHref(sub.title)'>{{sub.title}}</a></li>-->
<!--                      </ul>-->
<!--                  </div>-->
<!--                </div>-->


      </div>
	  
    </div>
  </div>
</template>

<style scoped>
.headWrapper{
  width:100%;
	display:flex;
}
#megaWrapper{
  width:100%;
	display: flex;
    flex-wrap: wrap;
    justify-content: center;
  padding: 20px;
  background: #e5e5e5;
  border-radius: 12px;
}
#mega {
  margin-top: 50px;
}
ul {
  list-style: none;
    line-height: 1.4rem;
}
li a {
  font-size: 18px;
  text-align:right;
}
li {
    text-align: right;
    line-height:2rem;
}
.headMenuWrapper{
  display:flex;
  justify-content:space-around;
  width:100%;

}
.title{
  text-align:right;
  font-weight:bold;
  font-size:18px;
}
@media (max-width:800px){
  #mega{
    /*padding-right: 10px;*/
  }
  .headWrapper{
    flex-direction:column
  }
  .headMenuWrapper{
    flex-direction:column;
    align-items:space-between
  }
  .singleMenu:not(:first-child){
    margin-top:30px
  }
}
</style>

<script>
export default {
  methods: {
    getHref(cat) {
      return `/product-category/${cat}`;
    }
  },
  computed:{
    getCats(){
      
      return this.$store.getters.getCatsWithSubs
      
    },
  }
};
</script>