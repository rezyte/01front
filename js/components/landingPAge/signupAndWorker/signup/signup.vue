<template>
  <div id="signup">
    <errors :errors="errors"></errors>
    <div id="signupWrapper">
      <div class="freeSignUp">
        <div class="freeSignUpWrapper">
          <p> ثبت نام رایگان </p>

          <svg id="Capa_1" height="451.847px" style="enable-background:new 0 0 451.847 451.847;" version="1.1"
               viewBox="0 0 451.847 451.847" width="451.847px"
               x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               y="0px"><g>	<path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g></svg>

        </div>
      </div>
      <form ref="signForm" action="" autocomplete="off" method="post">
        <div class="name">
          <div class="fname inputs singleInput">
            <label for="">:نام خانوادگی</label>
            <input ref="lname" v-model="fname" class="inputName" name="lname" style="direction: rtl;text-align: right"
                   type="text">
          </div>
          <div class="lname inputs singleInput">
            <label for="">:نام</label>

            <div class="inputWrapper">
              <input ref="fname" v-model="name" class="inputName" name="fname" style="direction: rtl;text-align: right"
                     type="text">
              <p ref="nameOrFnameError">نام و نام خانوادگی را وارد کنید</p>
            </div>
          </div>
        </div>


        <div class="phone row singleInput">
          <label for="">:نام کاربری(به انگلیسی)</label>
          <div class="inputWrapper">
            <input ref="userName" v-model="userName" class="userName" name="username"
                   placeholder="ali:مثلا"
                   type="text" @input="checkUserNameLang($event)">
            <p ref="userNameError">نام کاربری فقط میتواند شامل عدد و حروف انگلیسی و _ و - باشد</p>
          </div>
        </div>


        <div class="name">
          <div class="lname inputs singleInput" style="margin-right: 10px">
            <label for="">:نام شرکت</label>
            <input name="compony" style="direction: rtl;text-align: right" type="text">
          </div>
          <div class="inputs singleInput">
            <label for="">:زمینه کاری</label>
            <input name="field" style="direction: rtl;text-align: right" type="text">

          </div>


        </div>
        <div class="phone row singleInput">
          <label for="">:شماره تلفن</label>

          <div class="inputWrapper">
            <input ref="phone" v-model="phone" class="phoneInput" name="phone" type="text">
            <p ref="phoneError">شماره تلفن را وارد کنید</p>
          </div>
        </div>

        <div class="phone row singleInput">
          <label for="">:ایمیل(اختیاری)</label>
          <input name="email" type="text">
        </div>
        <button class="submit" @click.prevent="submit">ثبت نام</button>
      </form>
    </div>
  </div>
</template>

<script>
import errors from "../../errors/errors.vue";

export default {
  props: ['errors'],
  methods: {
    checkUserNameLang(e) {
      const userName = this.$refs.userName
      const allows = ['-', '_', "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", '0']
      if (e.inputType == 'deleteContentBackward') {
        userName.nextElementSibling.style.display = "none"
        return
      }
      if (!allows.includes(e.data)) {
        userName.nextElementSibling.style.display = "block"
        userName.classList.add("error")
        return
      }
      userName.classList.remove("error")
      this.$refs.userName.nextElementSibling.style.display = "none"
    },
    submit() {
      const userName = this.$refs.userName
      const fname = this.$refs.fname
      const lname = this.$refs.lname
      const phone = this.$refs.phone
      const nameOrFnameError = this.$refs.nameOrFnameError
      const phoneError = this.$refs.phoneError
      const userNameError = this.$refs.userNameError
      const inputs = [fname, lname, phone,userName]
      let ok = true
      inputs.forEach(input => {
        input.classList.remove("error")
        phoneError.style.display = "none"
        nameOrFnameError.style.display = "none"
        userNameError.style.display = "none"
      })
      inputs.forEach(input => {

        if (input.value == "") {
          ok = false
          input.classList.add("error")
          console.log(input)
          if (input.classList.contains('userName')) {
            input.classList.add("error")
            userNameError.style.display = 'block'
          }


          if (input.classList.contains('phoneInput')) {
            phoneError.style.display = 'block'
          }


          if (input.classList.contains('inputName')) {
            nameOrFnameError.style.display = 'block'
          }

        }
      })
      if(ok){
        const form=this.$refs.signForm
        form.submit()
      }
    },

    isEnglish(charCode) {
      return (charCode >= 97 && charCode <= 122)
          || (charCode >= 65 && charCode <= 90);
    },
    sPersian(key) {
      var p = /^[\u0600-\u06FF\s]+$/;
      return p.test(key) && key != ' ';
    }
  },
  name: "signup",
  data() {
    return {
      name: "",
      fname: "",
      phone: "",
      userName: ""
    }
  },
  watch: {
    userName: function () {
      this.userName = this.userName.replace(/[^A-Za-z1-9_-]/ig, '')
    }
  },
  components: {
    errors
  },
  created() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const fname = urlParams.get('fname');
    const phone = urlParams.get('phone');
    if (name != null) {
      this.name = name
    }
    if (fname != null) {
      this.fname = fname
    }
    if (phone != null) {
      this.phone = phone
    }
  }
}
</script>

<style scoped>
#signup {
  margin: 20px;
}

.name {
  display: flex;
}

#signupWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inputs {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.fname {
  margin-right: 10px;
}

label {
  color: var(--logoBlue);
  font-size: 17px;
}

.row {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.row input {
  width: 100%;
}

input {
  border: 1px solid rgb(210, 210, 210);
  width: 100%;
  height: 35px;
  padding: 2px;
}

svg {
  width: 35px;
  height: 35px;
}

path {
  fill: var(--logoBlue);
}

.freeSignUpWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.freeSignUpWrapper p {
  color: var(--logoBlue);
  font-weight: bold;
}

.singleInput {
  margin-top: 20px;
}

button {
  width: 100%;
  background: var(--logoBlue);
  color: white;
  padding: 10px 20px 10px 20px;
  border: 0;
  margin-top: 20px;
  border-radius: 7px;
}

.inputWrapper {
  width: 100%;
}

.inputWrapper p {
  text-align: right;
  color: red;
  font-size: 12px;
  margin-top: 10px;
  font-weight: bold;
  display: none;
}

.error {
  box-shadow: 1px 1px 5px rgba(255, 0, 0, 0.5), 0px -1px 5px rgba(255, 0, 0, 0.7)
}
button{
  cursor: pointer;
}
</style>