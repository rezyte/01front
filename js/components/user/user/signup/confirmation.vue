<template>
  <div id="confirmation" class="maxIs">
    <div id="confirmationWrapper">
      <form action="" method="post">
        <label for="signupConfirmation">کد را وارد کنید</label>
        <input name="token" id="signupConfirmation" type="text" placeholder="کد را وارد کنید">
        <p v-if="!isShow">  کد را دریافت نکرده اید؟ بعد از {{wait}} ثانیه دوباره تلاش کنید</p>
        <button v-if="isShow" type="submit" class="submit">ارسال مجدد کد</button>
      </form>

    </div>
  </div>
</template>

<script>
export default {
name: "confirmation",
  data(){
  return{
    wait:null,
    isShow:false
    }
  },
  mounted() {
    this.wait=60
    const timer=setInterval(()=>{
        if(this.wait===0){
          clearInterval(timer)
          this.isShow=true
          return
        }
        this.wait--

    },1000)
  }
}
</script>

<style scoped>
p{
  margin-top:20px
}
#confirmation{
  width: 90%;
  margin-top:50px;
  border:1px solid #b4b4b4;
}
#confirmationWrapper{
  padding: 10px;

}
input{
  padding:10px;
  border:1px solid #b4b4b4
}
form{
  display: flex;
  flex-direction: column;
  align-items: center;
}
label{
  width: max-content;
  font-size: 20pt;
}
input{
  width: max-content;
  border: 1px solid #b4b4b4;
}

</style>