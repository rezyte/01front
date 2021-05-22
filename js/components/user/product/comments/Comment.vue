<template>
  <!-- <transition name="fade" enter-to-class="animate__animated animate__bounceIn"> -->
  <div id="comments" :class="comment.is_buyers ? 'buyer' : null">
    <div id="info">
      <div class="profile">
        <img src="/static/public/images/profile_fake.jpg" alt="تصویر ناقص است">
      </div>
      <div class="name" v-text="comment.username"></div>
      <div class="replay" @click="replay(comment.id)">پاسخ</div>
    </div>
    <div id="body" class="p-1 pr-5">
      <p v-text="comment.content"></p>
    </div>
<!--    <div>-->
<!--      {{sub_comments(comment.id)}}-->
<!--    </div>-->
    <div class="subComments" v-if="comment.subs !=='None'" v-for="subComment in comment.subs" v-bind:key="subComment.id">
      <comments-replay :subComment="subComment" />
    </div>
  </div>
  <!-- <transition name="fade" enter-to-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__bounceOut">
      <div class="replay"  v-if="replayStatus" >
         <comment-replay-my />
      </div>

    </transition> -->
  <!-- </transition> -->
</template>

<script>
import commentsReplay from './CommentReplay.vue';

export default {
  props: ["comment"],
  components: {commentsReplay},
  data() {
    return {
      replayStatus: false,
    };
  },
  computed: {

    // subComments() {
    //   return this.$store.getters.get_subComments(this.id);
    // }
  },
  created() {
    // console.log(this.comment.is_buyers)
  },
  methods: {
    replay(id) {
      // console.log(id)
      let comment_box = document.getElementById("commentBox");
      let tag=document.getElementById("tag");
      tag.value=id;
      console.log('Valueeeeeeeeee',comment_box.value);
      comment_box.focus();
      comment_box.value = '@' + (Math.floor(Math.random() * 1000) + 1) + ': ';
      // this.replayStatus = true;
      // this.$store.commit("CHANGE_CLOSE_REPLAY_COMMENT", true);
    },
    // sub_comments(id){
    //
    // }
  },
};
</script>

<style scoped>
#comments {
  width: 100%;
  /* background-color: #F0E68C ; */
  /* background-color: #f0e68c65 ; */
  color: rgba(0, 0, 0, 0.808);
  padding: 10px;
  margin-right: 3%;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  text-align: right;
  background-color: white ;
}

#info {
  width: 100%;
  height: 100px;
  /* background-color: chartreuse; */
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
}

#body {
  width: 100%;
  /* padding: 10px; */
  padding-right: 15px;
  box-sizing: border-box;
}

.profile {
  width: 70px;
  height: 70px;
  /*background-color: black;*/
  border-radius: 50%;
  text-align: center;

}
.profile img{
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  box-shadow: 0 4px 12px 0 #C6D5D0;
  /*border: 1px solid #DBEAE5;*/
}

.name {
  width: 100px;
  height: 50px;
  text-align: right;
  padding: 2px;
  /* background-color: green; */
  margin-right: 1%;
}

.replay {
  width: auto;
  /* margin:4px 20px; */
  position: absolute;
  /* background-color: crimson; */
  left: 2.5%;
  top: 10%;
  padding: 3px;
  text-align: center;
  color: rgba(0, 0, 0, 0.815);
  font-size: 16px;
}

.replay:hover {
  cursor: pointer;
  color: black;
  font-weight: bold;
}

.subComments {
  width: 94%;
  margin: auto;
}
.buyer{
  background-color: rgb(240, 230, 140,0.27)!important;
  /* background-colorgba(3, 3, 3, 0.549)c8c!important; */

}
</style>
