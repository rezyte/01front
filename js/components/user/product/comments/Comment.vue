<template>
  <!-- <transition name="fade" enter-to-class="animate__animated animate__bounceIn"> -->
  <div id="comments">
    <div id="info">
      <div class="profile"></div>
      <div class="name" v-text="name"></div>
      <div class="replay" @click="replay(id)">پاسخ</div>
    </div>
    <div id="body">
      <p v-text="content"></p>
    </div>
    <div class="subComments" v-for="subComment in subComments" v-bind:key="subComment.id">
      <comments-replay :id="subComment.id" :body="subComment.body" :name="subComment.name" :id_comment="id"/>
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
  props: ["content","id","name"],
  components: {commentsReplay},
  data() {
    return {
      replayStatus: false,
    };
  },
  computed:{
    subComments(){
      return this.$store.getters.get_subComments(this.id);
    }
  },
  methods: {
    replay(id) {
      // console.log(id)
      let comment_box=document.getElementById("commentBox");
      comment_box.focus();
      comment_box.value='@'+(id)+ ': '; 
      // this.replayStatus = true;
      // this.$store.commit("CHANGE_CLOSE_REPLAY_COMMENT", true);
    },
  },
};
</script>

<style scoped>
#comments {
  width: 100%;
  /* background-color: gainsboro; */
  color: rgba(0, 0, 0, 0.808);
  padding: 10px;
  margin-right: 3%;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  text-align: right;
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
  background-color: black;
  border-radius: 50%;
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
.subComments{
  width: 94%;
  margin: auto;
}
</style>