<template>
  <div id="myProducts" class="panelItem">
    <div v-if="shoeMessage" class="message">
      <p>محصول با موفقیت حذف شد</p>
    </div>
    <div id="myProductsWrapper" class="vue">
      <single-product
          v-for="(i,ind) in getProducts"
          :status="i.is_confirmed"
          :descs="i.title"
          :sees="i.hit_count"
          :cat="i.category[0].title"
          :key='ind'
          :id="i.id"
          :slug="i.slug"
          :product_image="i.product_image"
          :image_alt="i.image_alt"
          @removeProduct="removeProduct"
      ></single-product>
    </div>
  </div>
</template>

<script>
import singleProduct from "./signleProduct/singleProduct.vue";
export default {
name: "myProducts",
  components: {singleProduct},
  data(){
    return {
      allProds:JSON.parse(this.products),
      shoeMessage:false
    }
  },
  methods:{
    // removeProduct(id){
    //   console.log("deleteing",id)
    //   const index=this.allProds.findIndex(product=>{
    //     return product.id==id
    //   })
    //   this.allProds.splice(index,1)
    //   this.shoeMessage=true
    //   setTimeout(()=>{
    //     this.shoeMessage=false
    //   },5000)
    // }
  },
    props:['products'],
    created() {
        console.log(this.allProds)
    },
  computed:{
    getProducts(){
      return this.allProds
    }
  },
  created(){
    console.log(JSON.parse(this.products))
  }
}
</script>

<style scoped>
.message{
  width: 100%;
}
  #myProductsWrapper{
    display: flex;
    flex-direction: row-reverse;
    padding:10px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .message{
    margin-top: 10px;
    background: #0061af;
  }
  .message p{
    color: white;
    /* font-weight: bold; */
    text-align: center;
    padding: 10px;
  }
</style>