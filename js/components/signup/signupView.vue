<template>
  <div id="signupView" class="signView">
    <div id="signupViewWrapper" class="signViewWrapper">
      <div class="logo">
        <img src="/static/public/images/logo.png" alt="تصویر ناقص است">
      </div>
      <div class="title">
        <h1>ورود</h1>
      </div>
      <div class="outerForm">
        <form action="" method="post">
          <input type="hidden" name="csrfmiddlewaretoken" :value="csrf">
          <div class="input">
            <p>نام کاربری یا شماره تلفن  خود را وارد کنید</p>
            <input ref="email" type="text" name="username">
          </div>

          <div class="input">
            <p>رمز خود را وارد کنید</p>
            <input ref="email" type="password" name="password">
            <eye @encrypt="encrypt($event)" @decrypt="decrypt($event)"></eye>
          </div>
          <p class="error">{{JSON.parse(error).message}}</p>
          <div class="button">
            <button class="submit">ورود به دمیرکو</button>
          </div>

        </form>
      </div>
      <div class="descs">
        <p>با ورود و ثبت نام در دمیرکو شما الزاما شرایط و قوانین استفاده از دمیرکو را میپذیرید</p>
      </div>
    </div>
  </div>
</template>

<script>
import eyeIcon from "./eyeIcon.vue";
import eye from "./eyeIcon.vue";
export default {
  name: "signupView",
  components:{
    eye,
    eyeIcon
  },
    props:['error'],
    data(){
        return{
            showError:false
        }
    },
  methods:{
    decrypt(e){
      const target=e.target
      const pre=target.closest('.input').querySelector('input')
      const status=pre.getAttribute('type')
      if(status=='password'){
        pre.setAttribute('type',"text")
      }else{
        pre.setAttribute('type',"password")
      }

      console.log(pre)
    }
  }
}
</script>

<style scoped>

.error{
    text-align: right;
    color: #ff3131;
    font-size: 14px;
    margin-top: 10px;
}
.input{
  position: relative;
}

.input svg{
  position: absolute;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
}



.descs{
  margin-top: 20px;
}
.descs p{
  text-align: center;
  font-size: 13px;
}
.error{
  color: #ff2a2a;
  font-size: 16px;
  font-weight: bold;
}
</style>