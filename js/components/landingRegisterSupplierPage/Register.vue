<template>
  <div class="w-100">
      <div class="w-50 m-auto p-3">
        <progress-bar text-position="middle" size="huge" val="58" text="58%"></progress-bar>
      </div>
    <form action="" method="post">
      <fieldset>
        <legend>ثبت اطلاعات شخصی</legend>
        <div class="form-group">
          <label for="firstname">نام</label>
          <input
              type="text"
              class="form-control"
              id="firstname"
              name="firstname"
              ref="firstname"
              maxlength="12"
              @input="validate('firstname')"
              placeholder="نام خودرا وارد کنید"
              :class="[
                inValidated.firstname ? 'is-invalid' : null,
                validated.firstname ? 'is-valid' : null,
                'form-control',
              ]"
          />
          <!-- <small id="name" class="form-text text-danger"
          >We'll never share your email with anyone else.</small
        > -->
        </div>
        <div class="form-group">
          <label for="lastname">نام خانوادگی</label>
          <input
              type="text"
              class="form-control"
              id="lastname"
              name="lastname"
              ref="lastname"
              @input="validate('lastname')"
              maxlength="15"
              placeholder="نام خانوادگی خودرا وارد کنید"
              :class="[
                inValidated.lastname ? 'is-invalid' : null,
                validated.lastname ? 'is-valid' : null,
                'form-control',
              ]"
          />
          <!-- <small id="name" class="form-text text-muted text-danger"
          >We'll never share your email with anyone else.</small
        > -->
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
              @input="validate('phoneNumber')"
              :class="[
                inValidated.phoneNumber ? 'is-invalid' : null,
                validated.phoneNumber ? 'is-valid' : null,
                'form-control',
              ]"
          />
          <!-- <small
          class="form-text text-danger pr-2"

        >
        tyjkytfgjhnrfj
        </small> -->
        </div>
        <button type="submit" class="btn btn-primary" :disabled="btnStatus">
          ثبت
        </button>
      </fieldset>
    </form>
  </div>
</template>


<script>
import ProgressBar from 'vue-simple-progress';

export default {
  name: "Register",
  data() {
    return {
      btnStatus: true,
      validated: {
        firstname: false,
        lastname: false,
        phoneNumber: false,
      },
      inValidated: {
        firstname: false,
        lastname: false,
        phoneNumber: false,
      },
    };
  },
  components: {
    ProgressBar
  },
  computed: {
    messages_response() {
      return "yjkryuk";
    },
  },
  methods: {
    validate(id) {
      let el = document.getElementById(id).value;
      if (el === "") {
        let tag = document.getElementById(id);
        tag.classList.remove("is-invalid");
      } else {
        switch (id) {
          case "firstname": {
            // this.$store.commit("RESET_EXIST_USER",'username');
            let firstname = this.$refs.firstname.value;
            let res = firstname.match(
                this.$store.state.regularExpression.regName
            );
            if (res) {
              this.validated.firstname = true;
              this.inValidated.firstname = false;
            } else {
              this.validated.firstname = false;
              this.inValidated.firstname = true;
            }
            break;
          }
          case "lastname": {
            // this.$store.commit("RESET_EXIST_USER",'phoneNumber');
            let lastname = this.$refs.lastname.value;
            let res = lastname.match(
                this.$store.state.regularExpression.reglastName
            );
            if (res) {
              this.validated.lastname = true;
              this.inValidated.lastname = false;
            } else {
              this.validated.lastname = false;
              this.inValidated.lastname = true;
            }
            break;
          }
          case "phoneNumber": {
            // this.$store.commit("RESET_EXIST_USER",'phoneNumber');
            let phoneNumber = this.$refs.phoneNumber.value;
            let res = phoneNumber.match(
                this.$store.state.regularExpression.reg_phoneNumber
            );
            if (res) {
              this.validated.phoneNumber = true;
              this.inValidated.phoneNumber = false;
            } else {
              this.validated.phoneNumber = false;
              this.inValidated.phoneNumber = true;
            }
            break;
          }
        }
      }
      this.btnStatus = !(
          this.validated.firstname &&
          this.validated.lastname &&
          this.validated.phoneNumber
      );
    },
  },
};
</script>

<style scoped>
form {
  direction: rtl;
  text-align: right;
  padding: 20px;
}
.pro-bar{
  /*padding-left: 100%;*/
  /*margin: auto!important;*/
  margin-left: 33% !important;
}
</style>
