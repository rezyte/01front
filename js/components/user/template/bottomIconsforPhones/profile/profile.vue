<template>
    <div class="bottomIconsWrapper" >
        <profile-svg v-if="!user.is_logined"></profile-svg>
        <img v-else :src="user.picture" >
        <p>پروفایل</p>
    </div>
</template>

<script>
import profileSvg from "./profileSvg.vue"
export default {
    components:{
        profileSvg
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