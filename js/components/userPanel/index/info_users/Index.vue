<template>
  <div class="row userPanel">
    <div id="userPanell">
      <form method="post" action="" class="w-100 p-3 form">
        <fieldset>
          <legend class="font-weight-bold mb-3">اطلاعات کاربری</legend>
          <div class="form-group">
            <label for="firstName">نام</label>
            <input
              type="text"
              :pattern="regEx.regName"
              title="نام درسا وارد نشده است"
              required
              placeholder="نام خودرا به فارسی وارد کنید"
              id="firstName"
              name="fname"
              ref="firstName"
              :class="[
                inValidate.firstName ? 'is-invalid' : null,
                validated.firstName ? 'is-valid' : null,
                'form-control mr-2 mt-1',
              ]"
              v-model="userData.first_name"
              @input="validate(userData.first_name, 'firstName')"
            />
          </div>
          <div class="form-group">
            <label for="lastName">نام خانوادگی</label>
            <input
              type="text"
              required
              :class="[
                inValidate.lastName ? 'is-invalid' : null,
                validated.lastName ? 'is-valid' : null,
                'form-control mr-2',
              ]"
              :pattern="regEx.regName"
              title="نام خانوادگی درست وارد نشده است"
              placeholder="نام خانوادگی به فارسی وارد شود"
              id="lastName"
              name="lastName"
              v-model="userData.last_name"
              ref="lastName"
              @input="validate(userData.last_name, 'lastName')"
            />
          </div>
          <div class="form-group">
            <label for="username">نام کاربری</label>
            <input
              type="text"
              required
              :class="[
                inValidate.username ? 'is-invalid' : null,
                validated.username ? 'is-valid' : null,
                'form-control mr-2 mt-1',
              ]"
              id="username"
              name="username"
              v-model="userData.username"
              ref="username"
              :pattern="regEx.regUsername"
              title="نام کاربری درست وارد نشده است"
              @input="validate(userData.username, 'username')"
            />
          </div>
          <div class="form-group">
            <label for="company">نام شرکت</label>
            <input
              type="text"
              :class="[
                inValidate.companyName ? 'is-invalid' : null,
                validated.companyName ? 'is-valid' : null,
                'form-control mr-2 mt-1',
              ]"
              id="company"
              name="company"
              v-model="userData.company_name"
              ref="company"
              @input="validate(userData.company_name, 'company')"
              :pattern="regEx.regName"
              title="نام شرکت درست وارد نشده است"
            />
          </div>
          <div class="form-group">
            <label for="phoneNumber">شماره تلفن</label>
            <input
              type="text"
              :class="[
                inValidate.phoneNumber ? 'is-invalid' : null,
                validated.phoneNumber ? 'is-valid' : null,
                'form-control mr-2 mt-1',
              ]"
              required
              id="phoneNumber"
              name="phoneNumber"
              :pattern="regEx.reg_phoneNumber"
              title="شماره تلفن اشتباه وارد شده است"
              ref="phoneNumber"
              v-model="userData.phone_number"
              placeholder="09xxxxxxxxx"
              @input="validate(userData.phone_number, 'phoneNumber')"
            />
          </div>
          <div class="form-group">
            <label for="email">ایمیل</label>
            <input
              type="email"
              :class="[
                inValidate.email ? 'is-invalid' : null,
                validated.email ? 'is-valid' : null,
                'form-control mr-2 mt-1',
              ]"
              required
              id="email"
              name="email"
              :pattern="regEx.regEmail"
              ref="email"
              v-model="userData.email"
              placeholder="ایمیل خود را وارد کنید"
              title="ایمل اشتباه وارد شده است"
              @input="validate(userData.email, 'email')"
            />
          </div>
        </fieldset>
      </form>
      <input
        class="btn btn-success mr-3"
        @click="sendForm()"
        :disabled="btnStatus"
        type="submit"
        value="ثبت"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  props: ["user"],
  data() {
    return {
      // userData:null,
      btnStatus: true,
      okDataForm: {
        firstName: 0,
        lastName: 0,
        username: 0,
        companyName: 0,
        phoneNumber: 0,
        email:0
      },
      validated: {
        firstName: false,
        lastName: false,
        username: false,
        companyName: false,
        phoneNumber: false,
        email:false
      },
      inValidate: {
        firstName: false,
        lastName: false,
        username: false,
        companyName: false,
        phoneNumber: false,
        email:false
      },
    };
  },
  computed: {
    userData() {
      return JSON.parse(this.user);
    },
    regEx() {
      return this.$store.state.regularExpression;
    },
  },
  created() {
    // console.log(JSON.parse(this.user))
    // this.userData=JSON.parse(this.user);
  },
  methods: {
    validate(x, id) {
      if (x === "") {
        let el = document.getElementById(id);
        el.classList.remove("is-invalid");
      } else {
        switch (x) {
          case this.userData.first_name: {
            let res = x.match(/^[ضصثقفغآ ژعهخحجچپشسیبلاتنمکگظطزرذدئو]{3,25}$/);
            if (res) {
              this.validated.firstName = true;
              this.inValidate.firstName = false;
              this.okDataForm.firstName = 1;
            } else {
              this.validated.firstName = false;
              this.inValidate.firstName = true;
              this.okDataForm.firstName = 2;
            }
            break;
          }
          case this.userData.last_name: {
            let res = x.match(/^[ضصثقفغآ ژعهخحجچپشسیبلاتنمکگظطزرذدئو]{3,25}$/);
            if (res) {
              this.validated.lastName = true;
              this.inValidate.lastName = false;
              this.okDataForm.lastName = 1;
            } else {
              this.validated.lastName = false;
              this.inValidate.lastName = true;
              this.okDataForm.lastName = 2;
            }
            break;
          }
          case this.userData.username: {
            // console.log(this.userData.uesrname)
            let res = x.match(
              /^[a-zA_Zضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئو0-9]{3,20}$/gi
            );
            if (res) {
              // console.log('userName')
              this.validated.username = true;
              this.inValidate.username = false;
              this.okDataForm.username = 1;
            } else {
              this.validated.username = false;
              this.inValidate.username = true;
              this.okDataForm.username = 2;
            }
            break;
          }
          case this.userData.company_name: {
            let res = x.match(
              /^[a-zA_Zضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئو0-9]{3,20}$/gi
            );
            if (res) {
              this.validated.companyName = true;
              this.inValidate.companyName = false;
              this.okDataForm.companyName = 1;
            } else {
              this.validated.companyName = false;
              this.inValidate.companyName = true;
              this.okDataForm.companyName = 2;
            }
            break;
          }
          case this.userData.phone_number: {
            let res = x.match(/^[0-9\u06F0-\u06F90-9]{11}$/gi);
            if (res) {
              this.validated.phoneNumber = true;
              this.inValidate.phoneNumber = false;
              this.okDataForm.phoneNumber = 1;
            } else {
              this.validated.phoneNumber = false;
              this.inValidate.phoneNumber = true;
              this.okDataForm.phoneNumber = 2;
            }
            break;
          }
          case this.userData.email: {
            let res = x.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if (res) {
              this.validated.email = true;
              this.inValidate.email = false;
              this.okDataForm.email = 1;
            } else {
              this.validated.email = false;
              this.inValidate.email = true;
              this.okDataForm.email = 2;
            }
            break;
          }
        }
      }
      this.btnStatus =!(
      (this.okDataForm.firstName === 1 || this.okDataForm.firstName===0 )&&
        (this.okDataForm.lastName === 1 || this.okDataForm.lastName===0) &&
        (this.okDataForm.username === 0 || this.okDataForm.username === 1) &&
        (this.okDataForm.companyName === 0 || this.okDataForm.companyName === 1) &&
        (this.okDataForm.phoneNumber === 0 || this.okDataForm.phoneNumber === 1) &&
        (this.okDataForm.email === 0 || this.okDataForm.email === 1)
      );
    },
    sendForm() {
      let form = document.querySelector("form");
      form.submit();
    },
  },
};
</script>

<style scoped>
* {
  direction: rtl;
  text-align: right;
}

.userPanel {
  background-color: whitesmoke;
}

#userPanell {
  width: 85%;
  margin: 2% auto;
  padding: 10px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
}

.form {
  width: 100%;
}

.is-invalid {
  border: 1px solid #e3356f;
}

.is-valid {
  border: 1px solid #34ce57 !important;
}
label {
  margin: 2px 0 4px 0;
  font-weight: 600;
}
legend {
  font-size: 19px;
}
</style>
