<template>
  <div v-if="shouldShow" ref="installPrompt" id="installPrompt">
    <div id="installPromptWrapper">
      <p>برای راحتی بیشتر در مشاهده این صفحه برنامه ما را نصب کنید</p>
      <div class="buttons">
        <div class="no">
          <button class="later" @click="close()">بعدا</button>
        </div>
        <div class="yes">
          <button class="submit" @click="installApp">نصب</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "installPrompt",
  date(){
  return{
      shouldShow:false
    }
  },
  methods:{
    installApp(){
      console.log(this.$store.state.installEvent)
      if(this.$store.state.installEvent){
        this.$store.state.installEvent.prompt()
        this.$store.state.installEvent.userChoice.then(choice=>{
          if(choice.outcome==='dismissed'){
            this.$store.state.showInstallAppBanner=false
          }else{
            this.$store.state.showInstallAppBanner=false
          }
        })
        this.$store.state.installEvent=null
      }
    },
    close(){
      this.$store.state.showInstallAppBanner=false
    }
  },
  computed:{
    shouldShow(){
      return this.$store.state.showInstallAppBanner
    }
  }
}
</script>

<style scoped>
.later{
  padding: 10px 20px 10px 20px;
  border:1px solid black;
  font-size: 15pt;
  color: black;
  font-family: 'yekan',serif;
  cursor: pointer;
  background: white;
  margin-right: 20px;
}
p{
  font-size: 18px !important;
  font-weight: bold;
}
#installPrompt{
  position: fixed;
  z-index: 5555555555555555555555;
  width: 100%;
  top: 0;
  bottom: 0;
  height: 100%;
  background: white;
  padding-bottom: 20px;
  box-shadow: 0 1px 17px black;
  background: rgba(0,0,0,0.7);

}
#installPromptWrapper{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: max-content;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background: white;
}
#installPromptWrapper p{
  text-align: center;
}
.buttons{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.submit{
  margin-top: 0;
}
button{
  border-right: 10px;
}
</style>