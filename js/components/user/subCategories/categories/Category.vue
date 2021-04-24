<template>
  <a id="category" href="">
    <div class="category">
      <div class="pic">
        <img :src="picture" alt="تصویر ناقص است">
      </div>
      <div class="text">
        <p v-text="name"></p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "Category",
  props:['name','picture'],
  created() {
    // this.$emit('subCategories',)
  },
  methods:{

  }
}
</script>

<style scoped>
#category{
  width:auto ;
  height: 150px;
  text-decoration: none!important;
  color: black;
  margin: 10px;
  cursor: pointer;
}
.category{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
}
.category:hover .text p{
  color: var(--blue);
}
.category:hover .pic img{
  transform: scale(1.03,1.03);
}
.pic{
  width: 100%;
  height: 100px;
  border-radius: 30px;
  text-align: center;
  display: inline-block;
  overflow: hidden;
  /*border-style: none;*/
}
.pic img{
  width: 100px;
  height:100px;
  /*position: absolute;*/
  /*display: block;*/
  border-radius: 30px;
  background-position: center;
  background-repeat: no-repeat;
  /*background-size: 100% 100%;*/
  /*border-style: none;*/
}
.text{
  width: 100%;
  height: 50px;
  /*background-color: #5bf3ff;*/
  text-align: center;
  padding-top: 15px;
}
.text p{
  width: auto;
  font-size: 16px;
}
</style>
