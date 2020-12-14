<template>
  <div id="error" v-if="check">
    <div id="errorWrapper">
      <ul>
        <li v-for="error in JSON.parse(errors)">{{error}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "error",
  props:["errors"],
  created() {
    console.log("errors",JSON.parse(this.errors))
  },
  computed:{
    check(){
      if(this.errors==undefined || this.errors==null){
        return false
      }
      if(JSON.parse(this.errors).length==0){
        return false
      }
      return true

    }
  }
}
</script>

<style scoped>
  ul{
    list-style: disc !important;
  }
  li{
    direction: rtl;
    text-align: right;
    font-size: 18px;
    color: white;
  }
  #error{
    margin-top: 50px;
    background: #396fd3;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  #errorWrapper{
    padding: 20px;
  }
</style>