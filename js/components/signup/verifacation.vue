<template>
  <div id="verifacation" class="signView">
    <div id="verifacationWrapper" class="signViewWrapper">
      <div class="logo">
        <img src="/static/public/images/logo.png" alt="">
        <a href="" class="svg"><arrow></arrow></a>
      </div>
      <div class="title">
        <h1>رمز عبور را وارد کنید</h1>
      </div>
      <div class="outerForm">
        <form action="" method="post">
          <input type="hidden" name="csrfmiddlewaretoken" :value="csrf">
          <div class="input">
            <p>کد شش رقمی ارسال شده به شماره موبایل خود را وارد کنید</p>
            <input ref="ver" type="text" name="token-number">
              <p v-if="showError" ref="error" class="error">
                  لطفا اطلاعات را درست وارد کنید
              </p>
          </div>
          <div class="button">
            <button class="submit">ورود به دمیرکو</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import arrow from "./arrow.vue";
export default {
  name: "verifacation",
  components:{
    arrow
  },
    props:["error"],
    data(){
        return{
            showError:false
        }
    },
    mounted() {
      console.log('eeeee',this.error)
        if(this.error!==""){
            this.showError=true
            this.$refs.ver.style.border="1px solid red"
        }
    }
}
</script>

<style scoped>

.logo{
  position: relative;
}
.logo img{
  width: 150px;
}
.svg{
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  height: 30px;
}
.error{
    text-align: right;
    color: #ff3131;
    font-size: 14px;
    margin-top: 10px;
}
</style>