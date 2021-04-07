<template>
    <div class="comment_my">
        <div class="add_comment">
             <comment-add />
        </div>
        <div class="struct_comment" v-for="comment in comments.comments" v-bind:key="comment.id">
            <comment v-if="!comments.comments =='None'" :content="comment.content" :id="comment.id" :name="comment.name" />
        </div>
    </div>
</template>

<script>
import Comment from './Comment.vue';
import CommentAdd from './CommentAdd.vue';
export default {
    props:["id","comments"],
   components:{Comment,CommentAdd},
   computed:{
    //    comments(){
    //        return this.$store.state.comments
    //    }
   },
   mounted(){
       console.log(this.comments.comments,"hiii")
   }
}
</script>

<style scoped>
.comment_my{
    width: 100%;
    padding-top: 5px;
}
.struct_comment{
    padding: 10px;
    display: flex;
    flex-direction: column-reverse;
    position: relative;
}
.add_comment{
    width: 100%;
    position: relative;
    /* left: 25%; */
    top: 0;
    /* margin: auto; */
    float: right;
    opacity: 0.92;
    padding: auto;
    z-index: 5;
}
</style>