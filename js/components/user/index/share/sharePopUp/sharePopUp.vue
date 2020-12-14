<template>
  <div class="sharePopUp" @click="closePopUp">
    <div class="sharePopUpWrapper" @click="prevent($event)">
        <div class="cross">
          <cross></cross>
        </div>
      <div class="shareItemsWrapper">
        <h1>اشتراک گذاری با دیگران</h1>
        <div class="icons">
          <a :href="`whatsapp://send?text=`+$store.state.shareLink"><whats-app></whats-app></a>
          <a :href="'https://telegram.me/share/url?url='+$store.state.shareLink"><telegram></telegram></a>

        </div>

        <div class="shareInput">
          <button class="submit" @click="copy">کپی</button>
          <input type="text" id="linkInput" v-model="$store.state.shareLink">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import whatsApp from "./whatsApp.vue";
import telegram from "./telegram.vue";
import cross from "./cross.vue"
export default {
name: "sharePopUp",
  components:{
    cross,
    whatsApp,
    telegram
  },
  methods:{
    closePopUp(){
      const popUp=document.querySelector('.sharePopUp')
      popUp.style.display="none"
      document.body.style.overflow=''
    },
    copy(){
      var copyText = document.getElementById("linkInput");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /*For mobile devices*/

      /* Copy the text inside the text field */
      document.execCommand("copy");
    },
    prevent(e){
      const target=e.target
      const father=target.closest('.icons')
      if(father==null){
        e.preventDefault()
        e.stopPropagation()
      }

    }
  }
}
</script>

<style scoped>
.sharePopUp{
  position: absolute;
  background: rgba(0,0,0,0.6);
  width: 100vw;
  height: 100vh;
  z-index: 9999999;
  display: none;
  align-items: center;
  justify-content: center;
}
.sharePopUpWrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 20px;
  width: 95%;
  margin:20px;
  max-width:600px;
  position: absolute;
  /*top: 50%;*/
  /*left: 50%;*/
  /*transform: translate(-50%,-50%);*/
}
.shareItemsWrapper{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cross{
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
h1{
  color: #707070;
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
}
.icons{
  display: flex;
  justify-content: space-evenly;
  width: 250px;
  margin-top: 30px;
}
.icons svg{
  width: 60px;
  height: 60px;
}
.shareInput{
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.submit{
  margin:0;
  margin-right: 10px;
  padding: 8px 20px 8px 20px
}
input{
  border: 1px solid #d0d0d0;
  height: 35px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  direction: ltr;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
}
</style>