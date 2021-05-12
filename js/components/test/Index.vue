<template>
<div class="row ">
  <div class="col col-sm-10 m-auto bg-primary">
    <div class="order">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "index",
  props:['order'],
  data(){
    return{
    }
  },
  components:{
   
  },
  methods:{
    
  },
  mounted(){
    console.log('order',this.order)
  },
  computed:{
    // subCategories(id){
    //   let cat= this.categories.find(
    //       category => category.id===id
    //   )
    //   console.log(cat)
    //   return cat.sub_categories;
    // }
  }
}
</script>

<style scoped>

</style>
