<template>
  <!-- <transition name="fade" enter-to-class="animate__animated animate__bounceIn"> -->
  <div id="comments" :class="subComment.is_buyers ? 'buyer' : null">
    <div class="info">
      <div id="info">
        <div class="profile">
          <img
            src="/static/public/images/profile_fake.jpg"
            alt="تصویر ناقص است"
          />
        </div>
        <div id="username_date">
          <div class="name">
            <p v-text="subComment.username"></p>
            <p v-if="subComment.is_buyers">(خریدار)</p>
          </div>
          <div class="date">
            <p v-text="comment.timestamp"></p>
          </div>
        </div>
      </div>
    </div>
    <div id="body" class="p-1 pr-5">
      <p v-text="subComment.content"></p>
    </div>
    <!-- <div class="subComment" v-for="comment in subComments" v-bind:key="comment.id">
      <comment :body="comment.body" :id="comment.id" :name="comment.name" />
    </div> -->
  </div>
  <!-- </transition> -->
</template>

<script>
export default {
  props: ["subComment"],
  data() {
    return {};
  },
  methods: {
    replay(id_comment) {
      let comment_box = document.getElementById("comment");
      comment_box.focus();
      comment_box.value = "@" + id_comment + ": ";
    },
  },
  created() {
    console.log("subbbs", this.subComment);
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
  /* box-shadow: 0px 0px 1px 0px; */
  display: flex;
  flex-direction: column;
  text-align: right;
  background-color: white;
}
.info {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
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
.profile img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  box-shadow: 0 4px 12px 0 #c6d5d0;
  /*border: 1px solid #DBEAE5;*/
}
.date {
  width: 100%;
}
#username_date {
  width: 200px;
  display: flex;
  flex-direction: column;
}
.name p,
.date p {
  padding: 5px 10px;
}
.name {
  width: 100%;
  height: 40px;
  text-align: right;
  padding: 2px;
  margin-right: 1%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: start;
  align-items: center;
}
.rep {
  width: auto;
  padding: 3px;
  text-align: center;
  color: rgba(0, 0, 0, 0.815);
  font-size: 16px;
}
.rep:hover {
  cursor: pointer;
  color: black;
  font-weight: bold;
}
.subComments {
  width: 94%;
  margin: auto;
}
.buyer {
  background-color: rgb(240, 230, 140, 0.27) !important;
}
</style>
