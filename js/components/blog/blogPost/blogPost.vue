<template>
    <div id="singleBlogPostItem">
        <feed-back :msgs="msg"></feed-back>
            <div class="signleBlogPostItemWrapper maxIs">
                <h1>{{JSON.parse(post).title}}</h1>
              <div style="margin-top: 50px;margin-bottom: 50px">
                <img :src="JSON.parse(post).thumbnail" :alt="JSON.parse(post).image_alt" >
              </div>
                <div v-html="JSON.parse(post).content" class="postText">
                </div>
                <suggestin :latests="JSON.parse(latest_posts)"></suggestin>

                <comment-section :comments='JSON.parse(post).comments'></comment-section>
            </div>
    </div>
</template>

<style scoped>
h1{
    font-weight: 800;
    text-align: right
}
    .comments{
        margin-top:50px
    }
    .commentsWrapper{
        display:flex;
        flex-direction:column;
        align-items: center;
    }
    .writeComment{
        display:flex;
        flex-direction:column;
        align-items: center;
        width:100%
    }
    .writeComment button{
        width:max-content
    }
    textarea{
        margin-bottom:20px;
        width:80%;
        height:200px;
        resize: none;
        direction:rtl;
        font-size:14pt;
        font-family:'yekan';
        box-shadow: 0 5px 30px;
    }
    #singleBlogPostItem{
        display:flex;
        flex-direction: column;
        margin-top:50px;
        width:100%;  
        align-items: center;
    }
    .signleBlogPostItemWrapper{
        width: 90%;
    }


    p{
        text-align: justify;
    }
    .postText{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      background: white;
      padding:20px;
    }
    .postText *{
      max-width: 100%;
      font-family: 'iranSans' !important;
    }
    .postText img{
      object-fit: contain;
      max-width:100% !important;
    }

img{
  max-width: 100%;
  width: 100%;
  height: auto;
  max-height: 550px;
  object-fit: contain;
}
</style>

<script>
    import suggestin from "./suggestin.vue"
    import commentSection from "../../user/product/commentSection.vue"
    import feedBack from "../../user/template/feedback/feddback.vue"
    export default {
        components:{
            suggestin,
            commentSection,
            feedBack
        },
        props:['post',"msg","latest_posts"],
        metaInfo(){
            const product=JSON.parse(this.post)
            console.log('ppp',product)
              return{
                  title: product.title + "-دمیرکو",
                  titleTemplate: null,
                  htmlAttrs: {
                    lang: 'en',
                    amp: true
                  },
                   meta: [
                      { charset: 'utf-8' },
                      { name: 'description', content: product.short_description },
                    ]
              }
            },
        created(){
            console.log('msg',JSON.parse(this.post))
        }
    }
</script>
