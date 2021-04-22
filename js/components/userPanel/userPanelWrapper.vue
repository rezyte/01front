<template>
  <div id="userPanelWrapper" class="userPanelSingleItem">
    <user-panel-mesages></user-panel-mesages>
    <div id="userPanelWrapperWrapper">

      <slot></slot>


    </div>

  </div>
</template>

<script>
import sideMenu from "./template/sideMenu/sideMenu.vue"
import userPanelMesages from "./template/userPanelMesages.vue";
import stickMenu from "./template/stickMenu/stickMenu.vue";
export default {
name: "userPanelWrapper",
    components:{
        sideMenu,
        stickMenu,
      userPanelMesages
    },
  props:['allmessages','user'],
  mounted() {
  // console.log(this.user,'888')
  }
}
</script>

<style scoped>
  #userPanelWrapper{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #ffffff;
    min-height: calc(100vh - 70px);
    padding-bottom: 1px;
  }
  #userPanelWrapperWrapper{
    width: 100%;
    display: flex;
      height: 100%;
    position: relative;
    justify-content: flex-end;
  }
  @media (max-width: 1000px) {
      #userPanelWrapperWrapper{
          justify-content: center;
      }

  }
</style>
