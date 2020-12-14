<template>
  <div ref="error" id="messages" v-if="messages.message!==''">
    <cross @closeNotf="closeNotf"></cross>
    <br>
    <div id="messagesWrapper">

      <ul>
        <li>{{messages.message}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
import cross from "./cross.vue"
export default {
name: "userPanelMesages",
  props:['messages'],
  components:{
    cross
  },
  created() {
    console.log("hooshang",this.messages)
  },
  methods:{
    closeNotf(){
      const error=this.$refs.error
      error.style.display='none'
    }
  }
}
</script>

<style scoped>
#messages{
  background: rgb(9,111,211);
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-bottom: 20px;
  flex-direction: column;
}
#messagesWrapper{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  max-width: 350px;
}
ul{
  list-style-type: disc;
  padding: 10px;
  font-size: 20px;
}
li{
  direction: rtl;
  color:white;
  text-align: right;
}
#messages >>> .svg{
  position: absolute;
  right: 0;
}
</style>