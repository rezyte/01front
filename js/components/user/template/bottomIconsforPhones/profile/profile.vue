<template>
    <div class="bottomIconsWrapper" >

      <div class="logedAlso" v-if="user.is_logined">
        <a href="/users/profile/orders/">
          <img :src="user.picture" >
          <p>پروفایل</p>
        </a>
      </div>

      <div class="logedAlso" v-else>
        <a href="/users/entry/">
          <profile-svg ></profile-svg>
          <p>ورود</p>
        </a>
      </div>

    </div>
</template>
<style scoped>
.logedAlso a{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logedAlso a:hover{
  /* tex */
}
</style>
<script>
import profileSvg from "./profileSvg.vue"
export default {
    components:{
        profileSvg
    },
  created() {
      console.log(this.user)
  },
  data(){
        return{
            user:userInfo
        }
    },
    methods:{
        openOptions(){
            if(this.user.is_logined){
                this.$store.dispatch("toggleOptions")
            }
        }
    }
    
}
</script>