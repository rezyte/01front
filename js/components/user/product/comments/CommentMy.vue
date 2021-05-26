<template>
  <div class="comment_my">
    <div class="add_comment">
      <comment-add :is_staff="false"/>
    </div>
    <div
      v-if="comments !== 'None'"
      class="struct_comment"
      v-for="comment in comments"
      v-bind:key="comment.id"
    >
      <comment :comment="comment" />
    </div>
  </div>
</template>

<script>
import Comment from "./Comment.vue";
import CommentAdd from "./CommentAdd.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  props: ["id", "comments"],
  components: { Comment, CommentAdd },
  computed: {
    //    comments(){
    //        return this.$store.state.comments
    //    }
  },
  created() {
      console.log(this.comments)
  },
};
</script>

<style scoped>
.comment_my {
  width: 100%;
  padding-top: 5px;
  /*background-color: whitesmoke;*/
}
.struct_comment {
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
}
.add_comment {
  width: 100%;
  position: relative;
  /* left: 25%; */
  top: 0;
  /* margin: auto; */
  float: right;
  opacity: 0.92;
  z-index: 5;
  margin-bottom: 15px;
}
</style>
