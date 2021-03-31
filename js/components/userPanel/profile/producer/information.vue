<template>
  <div id="information">
    <div id="informationWrapper">
      <generalnfo :profile="profile"></generalnfo>
      <hr>
      <compony-info :profile="profile"></compony-info>
      <hr>
      <contact :profile="profile"></contact>
    </div>
  </div>
</template>

<script>
import contact from "./contact.vue";
import componyInfo from "./componyInfo.vue"
import generalnfo from "./generalnfo.vue";
export default {
name: "information",
  components:{
  contact,
    componyInfo,
    generalnfo
  },
    props:['profile'],
  created() {
  console.log(userInfo);
  }
}
</script>

<style scoped>
hr{
  width: 100%;
  margin-top: 10px;
}
#informationWrapper{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
#information{
    grid-area: information;
}
</style>