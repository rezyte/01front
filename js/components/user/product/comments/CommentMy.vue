<template>
    <div class="comment_my">
        <div class="struct_comment" v-for="comment in comments" v-bind:key="comment.id">
            <comment :body="comment.body" :id="comment.id" :name="comment.name" />
        </div>
        <div class="add_comment">
             <comment-add />
        </div>
    </div>
</template>

<script>
import Comment from './Comment.vue';
import CommentAdd from './CommentAdd.vue';
export default {
    props:["id"],
   components:{Comment,CommentAdd},
   computed:{
       comments(){
           return this.$store.state.comments
       }
   },
}
</script>

<style scoped>
.comment_my{
    width: 100%;
}
.struct_comment{
    padding: 10px;
    display: flex;
    flex-direction: column-reverse;
    position: relative;
}
.add_comment{
    width: 100%;
    position: fixed;
    /* left: 25%; */
    bottom: 0;
    margin: auto;
    opacity: 0.92;
    padding: auto;
    z-index: 5;
}
</style>