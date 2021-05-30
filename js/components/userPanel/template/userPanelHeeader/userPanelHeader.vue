<template>
  <div id="userPanelHeader">
    <div id="userPanelHeaderWrapper" class="maxIs">
      <div id="profile">
        <div id="image">
          <img :src="userInfo.picture" alt="">
        </div>
        <p>{{userInfo.username}}</p>
      </div>
      <div id="hamMenu" @click="toggleSubMenu">
        <div class="sikh1"></div>
        <div class="sikh2"></div>
        <div class="sikh3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import  {mapActions} from "vuex"
export default {
name: "userPanelHeader",
  methods:{
    ...mapActions([
        // 'toggleSubMenu'
    ]),
    toggleSubMenu(){
      const stickMenu=document.querySelector('.stickMenu')
        stickMenu.style.transition="all 0.3s linear"
        stickMenu.style.right='0'
    },
    watchInner(){
      const stickMenu=document.querySelector('.stickMenu')
      if( window.innerWidth <= 1000){
        // stickMenu.style.display="block"
        this.$store.state.sideMenuOpen=false
      }else{
        this.$store.state.sideMenuOpen=true
      }
    }
  },
  mounted() {
  this.watchInner()
    window.addEventListener("resize",()=>{
    const sideMenu=document.querySelector('#sideMenu')
      if( window.innerWidth <= 1100){
        this.$store.state.sideMenuOpen=false
      }else{
        this.$store.state.sideMenuOpen=true
        // sideMenu.style.right='0'
        // sideMenu.style.width="17%"
      }
    })
  },
  created() {
    window.addEventListener("beforeinstallprompt",async (event)=>{
      event.preventDefault()
      if (window.matchMedia('(display-mode: standalone)').matches) {
      }else{
        if(sessionStorage.getItem("say")!=="true")
        {
          this.$store.state.installEvent=event
          this.$store.state.showInstallAppBanner=true
        }
      }
      sessionStorage.setItem("say","true")
      return false
    })
  }
}
</script>

<style scoped>
#image{
  width: 50px;
  height: 50px;
}
img{
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
#profile{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
}
p{
  margin-left: 20px;
  color:rgb(108,108,108)
}
  #userPanelHeader{
    width: 100%;
    height: max-content;
    position: relative;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,.5);
    background: rgb(255,255,255);
      display: flex;
      justify-content: center;
  }
  #userPanelHeaderWrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
      width: 100%;
  }
  #hamMenu{
    margin-right: 20px;
    cursor: pointer;
  }
  .sikh1,.sikh2,.sikh3{
    width: 40px;
    height: 5px;
    background: #0061af;
    margin-top: 4px;
  }
  @media (min-width: 1000px) {
      #hamMenu{
          display: none;
      }
  }
</style>