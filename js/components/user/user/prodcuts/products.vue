<template>
    <div id="products" class='shouldCollapse maxIs'>
        <div id="productsWrapper">
            <div class="singleProduct" v-for='p in JSON.parse(this.products)' :key='p.slug'>
                <div class="img">
                    <!-- <img src="/images/1.jpg" alt=""> -->
                    <zoom-on-hover :img-normal="getImage(p.product_image)"></zoom-on-hover>
                </div>
                <div class="title">
                    <a :href="gethref(p.slug)"><p>{{p.title}}</p></a>
                    <p>{{getDescs(p.short_discription)}}</p>
                </div>
                <div class="price">
                    <p>{{p.price}} تومان</p>
                    <p>کشور ساخت:{{p.made_in}}</p>
                </div>
                <div class="contactUs">
                    <button class="stelam" @click.prevent='showConsulate($event)'>استعلام قیمت</button>
                </div>
                <consulate :productId="p.slug"></consulate>
            </div>
        </div>
      <div id="pagination" v-if="JSON.parse(this.pagination).number_of_pages>1">
        <paginate
            :page-range="3"
            :margin-pages="2"
            :click-handler="handleMargins"
            :value="JSON.parse(pagination).current_page"
            :page-count="JSON.parse(pagination).number_of_pages"
            :container-class="'pagination'"

        ></paginate>
      </div>


    </div>
</template>

<style scoped>
#products{
    margin-top:50px
}
#productsWrapper{
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
}
.singleProduct{
    width:23%;
    margin:10px;
    width:300px
}
img{
    height:300px;
    width:300px;

}
.title{
    height:100px
}
.contactUs{
    display:flex;
    justify-content: center;
    margin-top:5px;
}
img.normal{
    width: 100%;
    height: 300px !important;
}
#pagination{
  margin-top: 30px;
}

</style>

<script>
    import {mapActions} from 'vuex'
    import consulate from "./consulate.vue"
    import filtering from "./filtering.vue"
     import {adjustElFromTop} from "../../user/mixIns/adjustElFromTop.js"
     import {toggleBodyOverFlow} from "../../user/mixIns/toggleBodyOverFlow.js"
    import Paginate from 'vuejs-paginate'
    export default{
        props:['products',"pagination"],
        mounted(){
          console.log('semememm',this.products)
            const allImages=document.querySelectorAll(".normal")
            allImages.forEach(img=>{
                img.style.width='100%'
                img.style.height="300px"
                const zoom=img.nextElementSibling
                zoom.style.width="200%"
                zoom.style.width="200%"
            })
        },

        components:{
            consulate,
            filtering,
          Paginate
        },
        mixins:[adjustElFromTop],
        methods:{
            ...mapActions([
               'toggleFiltering',
               'toggleConsulate'
            ]),
            getDescs(txt){
              if(txt==undefined){
                return "بدون توضیحات"
              }
                return txt.length>100 ?txt.substring(0,200)+'...' :txt
            },
            adjustConsulateTop(){
                const consulate=document.querySelector("#consulateWrapper")
                consulate.style.top=window.scrollY+100+"px"
                document.body.style.overflow='hidden'
                const done=document.querySelector("#doneMessage")
                done.style.display='none'
            },
            shoudShow(){
                return this.$store.state.isShowFiltering
            },
            showConsulate(e){
                const el=e.target;
                const parent=el.closest(".singleProduct")
                const consulate=parent.querySelector(".consulate")
                const wrap=consulate.querySelector(".consulateWrapper")
                consulate.style.display="flex"
                this.adjustFromTop(wrap,false,true)
                this.toggleBodyOverFlow("hidden")

            },
            getImage(img){
                if(img==null){
                    return '/static/public/images/ours1.png'
                }
                return img
            },
            gethref(slug){
                return `/products/product-detial/${slug}`
            }
        }
    }
</script>
