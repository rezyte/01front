<template>
  <div v-if="userInfo.is_superuser" class="row" style="display: flex;justify-content: center;flex-direction: column;align-items: flex-end">
    <label style="order: -4" for="">:کلمات کلیدی را وارد کنید</label>
    <vue-tags-input
        v-model="tag"
        :tags="tags"
        @tags-changed="newTags($event)"
    />
    <input type="hidden" name="tags" v-model="allTags">
  </div>
</template>

<script>

import VueTagsInput from '@johmun/vue-tags-input';
export default {
name: "tags",
  components:{
    VueTagsInput
  },
  props:['redi'],
  data(){
    return{
      tag: '',
      tags: [],
      allTags:[]
    }
  },
  mounted(){
    if(this.redi.product_keyword){
      let tags=this.redi.product_keyword
      tags=tags.split(",")
      this.tags=tags

    }
  },
        methods:{
      newTags(e){
        this.allTags=[]
        e.forEach(r=>{
          this.allTags.push(r.text)
        })
        console.log(this.allTags)
      }
    }


}
</script>

<style scoped>
.row {
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: flex-start;
}
</style>