<template>
  <div id="register">
    <div class="register">
      <div id="logo">
        <img
          src="/static/public/images/logo.png"
          width="200"
          height="40"
          alt="تصویر ناقص است"
        />
      </div>
      <div id="form">
        <form method="post" action="">
          <fieldset>
            <legend align="right" class="font-weight-bold">ثبت نام</legend>
            <div class="p-2">
              <div class="form-group">
                <label>نام کاربری</label>
                <input
                  id="username"
                  name="username"
                  ref="username"
                  type="text"
                  maxlength="20"
                  minlength="3"
                  placeholder="نام کاربری خود را وارد کنید"
                  @input="changest('username'),check_user_exist('username')"
                  :class="[
                    messages_response.exist_user.username ?['is-invalid', validated.username=false] : null,
                    notValidated.username ? 'is-invalid' : null,
                    validated.username ? 'is-valid' : null,
                    'form-control mt-2',
                  ]"
                />
                <small
                  class="disable text-danger"
                  v-show="messages_response.exist_user.username"
                  v-text="messages_response.exist_user.username"
                ></small>
              </div>
              <div class="form-group">
                <label for="phoneNumber">شماره تلفن</label>
                <input
                  type="text"
                  id="phoneNumber"
                  maxlength="11"
                  name="phoneNumber"
                  ref="phoneNumber"
                  placeholder="09xxxxxxxxx"
                  @input="changest('phoneNumber'),check_user_exist('phoneNumber')"
                  :class="[
                    messages_response.exist_user.phoneNumber ? ['is-invalid', validated.phoneNumber=false] : null,
                    notValidated.phoneNumber ? 'is-invalid' : null,
                    validated.phoneNumber ? 'is-valid' : null,
                    'form-control mt-2',
                  ]"
                />
                <small
                  class="disable text-danger"
                  v-show="messages_response.exist_user.phoneNumber"
                  v-text="messages_response.exist_user.phoneNumber"
                ></small>
              </div>
              <div class="form-group">
                <label>رمز عبور</label>
                <input
                  id="password"
                  name="password"
                  ref="password"
                  type="password"
                  maxlength="20"
                  minlength="4"
                  placeholder="رمز عبورتان را وارد کنید"
                  @input="changest('password')"
                  :class="[
                    notValidated.password ? 'is-invalid' : null,
                    validated.password ? 'is-valid' : null,
                    'crept form-control mt-1',
                  ]"
                />
                <eye class="eye" @decrypt="decrypt($event)"></eye>
              </div>
              <div class="form-group">
                <label>تکرار رمز عبور</label>
                <input
                  id="password2"
                  name="password2"
                  ref="password2"
                  type="password"
                  maxlength="20"
                  minlength="4"
                  placeholder="تکرار رمز عبور"
                  @input="changest('password2')"
                  :class="[
                    notValidated.password2 ? 'is-invalid' : null,
                    validated.password2 ? 'is-valid' : null,
                    'crept2 form-control mt-2',
                  ]"
                />
                <eye
                  class="eye"
                  @encrypt="encrypt($event)"
                  @decrypt="decrypt2($event)"
                ></eye>
              </div>
              <div>
                <input
                  :disabled="this.btnStatus"
                  :class="[
                    btnStatus ? 'disabled' : null,
                    'form-control w-50 m-auto btn-re text-dark',
                  ]"
                  type="submit"
                  value="ثبت"
                />
              </div>
              <div class="p-3">
                <p>
                  با ورود و ثبت نام در دمیرکو شما الزاما شرایط و قوانین استفاده
                  از دمیرکو را میپذیرید
                </p>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import eye from "./eyeIcon.vue";
export default {
  name: "Login",
  props: ["errors"],
  data() {
    return {
      btnStatus: true,
      validated: {
        username: false,
        phoneNumber: false,
        password: false,
        password2: false,
      },
      notValidated: {
        username: false,
        phoneNumber: false,
        password: false,
        password2: false,
      },
    };
  },
  components: {
    eye,
  },
  computed: {
    regularExpression() {
      return this.$store.state.getters.regularExpression;
    },
    messages_response(){
      return this.$store.getters.messages_response
    },
    exist_user(){
      return this.$store.state.exist_user;
    }
  },
  methods: {
    changest(id) {
      let el = document.getElementById(id).value;
      if (el === "") {
        let tag = document.getElementById(id);
        tag.classList.remove("is-invalid");
      } else {
        switch (id) {
          case "username": {
            this.$store.commit("RESET_EXIST_USER",'username');
            let username = this.$refs.username.value;
            let res = username.match(
              this.$store.state.regularExpression.regUsername
            );
            if (res) {
              this.validated.username = true;
              this.notValidated.username = false;
            } else {
              this.validated.username = false;
              this.notValidated.username = true;
            }
            break;
          }
          case "phoneNumber": {
            this.$store.commit("RESET_EXIST_USER",'phoneNumber');
            let phoneNumber = this.$refs.phoneNumber.value;
            let res = phoneNumber.match(
              this.$store.state.regularExpression.reg_phoneNumber
            );
            if (res) {
              this.validated.phoneNumber = true;
              this.notValidated.phoneNumber = false;
            } else {
              this.validated.phoneNumber = false;
              this.notValidated.phoneNumber = true;
            }
            break;
          }
          case "password": {
            let password = this.$refs.password.value;
            let res = password.match(
              this.$store.state.regularExpression.regPassword
            );
            if (res) {
              this.validated.password = true;
              this.notValidated.password = false;
            } else {
              this.validated.password = false;
              this.notValidated.password = true;
            }
            break;
          }
          case "password2": {
            let password2 = this.$refs.password2.value;
            let res = password2.match(
              this.$store.state.regularExpression.regPassword
            );
            if (res) {
              this.validated.password2 = true;
              this.notValidated.password2 = false;
            } else {
              this.validated.password2 = false;
              this.notValidated.password2 = true;
            }
            break;
          }
        }
      }

      this.btnStatus = !(
        this.validated.username &&
        this.validated.phoneNumber &&
        this.validated.password &&
        this.validated.password2
      );
    },
    decrypt() {
      const pre = document.querySelector(".crept");
      const status = pre.getAttribute("type");
      if (status == "password") {
        pre.setAttribute("type", "text");
      } else {
        pre.setAttribute("type", "password");
      }
    },
    decrypt2() {
      const pre = document.querySelector(".crept2");
      const status = pre.getAttribute("type");
      if (status == "password") {
        pre.setAttribute("type", "text");
      } else {
        pre.setAttribute("type", "password");
      }
    },
    check_user_exist(id) {
      // let form=new FormData;
      if (id === "username") {
        if (this.validated.username) {
          let username = this.$refs.username.value;
          // form.append('username',username)
          this.$store.dispatch("check_user_exist",username);
        }
      } else {
        if (this.validated.phoneNumber) {
          let phoneNumber = this.$refs.phoneNumber.value;
          this.$store.dispatch("check_user_exist", phoneNumber);
        }
      }
    },
  },
};
</script>

<style scoped>
#register {
  width: 100%;
  direction: rtl;
  text-align: right;
  margin-top: 20px;
}
.register {
  width: 430px;
  margin: auto;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.192);
}
#logo {
  width: 100%;
  margin-top: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#form {
  width: 100%;
  margin-top: 2%;
  /* background-color: darkgray; */
}
#form form {
  padding: 10px;
}
legend{
  font-size: 17px;
}
.form-control {
  /* height: 40px !important; */
  border-radius: 10px !important;
}
.is-invalid {
  border: 1px solid #e3356f;
}
.is-valid {
  border: 1px solid #34ce57 !important;
}
.disabled {
  background-color: #419dff !important;
}
.eye {
  position: relative;
  float: left;
  bottom: 31px;
  left: 7px;
  cursor: pointer;
}
.disable {
  pointer-events: none;
  opacity: 0.94;
  padding-right: 10px;
}
.btn-re{
  background-color: rgb(9,111,211);
}
</style>
