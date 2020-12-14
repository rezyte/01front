<template>
    <div id="comments">
        <div id="commentsWrapper">


                <marquee-text :paused="isStop" :duration='60'>
                    <div class="marquee" >
                        <template v-for="(comment,index) in getComments">
                            <div class="singleTwinComment">
                                <div @mouseover="stop" @mouseleave="cont" class="singleComment"  v-for="subC in comment">
                                    <div class="singleCommentWrapper">
                                        <p class="name">{{subC.username}}</p>
                                        <a :href="getHref(subC)"><p class="categorie">{{subC.item.title}}</p></a>
                                        <p>{{subC.content}}</p>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>

                </marquee-text>
            </div>
            
            
           
        </div>

</template>
<script>
import MarqueeText from "vue-marquee-text-component"
import _ from "lodash"

export default {
    components: {
    MarqueeText
  },
  props:['comments'],
  methods:{
      stop(){
          this.isStop=true
      },
      cont(){
          this.isStop=false
      },
      
      getHref(comment){
        return `/products/product-detial/${comment.item.slug}`
      },
      validate(index){
        return true ? (index+1)%2==0 : false
      }
  },
  computed:{
    getComments(){
        const comment=JSON.parse(this.comments)
        const mustReturn=_.chunk(comment,2)
        return mustReturn
      }
  },
  data(){
      return{
          isStop:false,
          counter:0
      }
  }
    
}
</script>


<style scoped>
#comments{
    background:#ffffff;
    margin-top:50px;
    width: 100%
}
    .marquee{
        display:flex;
    }
    .singleTwinComment{ 
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .singleTwinComment{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 200px;
        /*max-width: 400px;*/
        margin:8px;        
    }
    .singleComment{
        width:100%;
        border:1px solid #d9d8d8;
        margin:5px;
        padding:5px;
    }
    .categorie{
        font-size: 13px;
        margin-top: 5px;
        margin-bottom: 5px;
        color: rgb(9,111,211);
        font-weight: 800;
    }
    .marquee{
        position: relative;
        /* left:100%; */
        /* animation: moveIt 300s linear infinite */
    }
    @keyframes moveIt{
        from {
            transform: translateX(0);
            left:100%;
        }to{
            left:0;
            transform: translateX(-5320px);
        }
    }
    .marquee:hover{
        animation-play-state: paused;
    }
</style>