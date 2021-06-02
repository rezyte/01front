<template>
  <div class="row resetPassword">
    <div id="resetPassword">
      <form name="reset_password" method="post" action="/user/reset_password">
        <fieldset>
          <legend>بازنشنانی رمز عبور</legend>
          <div class="form-group mt-2">
            <label for="password">رمز عبور فعلی:</label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              ref="password"
              pattern=" /^[\u06F0-\u06F90-9a-zA-Z0-9ضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئو ]{4,20}$/g"
              title="رمز نباید شامل کاراکترهای خاص باشد"
              @input="validate"
            />
            <!-- <small class="wrong_password">رمز عبور فعلی اشتباه است</small> -->
          </div>
          <div class="form-group">
            <label for="r_password1">رمز عبور جدید:</label>
            <input
              type="password"
              class="form-control"
              id="r_password1"
              name="r_password1"
              ref="r_password1"
              pattern="/^[\u06F0-\u06F90-9a-zA-Z0-9ضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئو ]{4,20}$/g"
              title="رمز نباید شامل کاراکترهای خاص باشد"
              @input="validate"
            />
          </div>
          <div class="form-group">
            <label for="r_password2">تکرار رمز عبور جدید:</label>
            <input
              type="password"
              class="form-control"
              id="r_password2"
              name="r_password2"
              ref="r_password2"
              pattern=" /^[\u06F0-\u06F90-9a-zA-Z0-9ضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئو ]{4,20}$/g"
              title="رمز نباید شامل کاراکترهای خاص باشد"
              @input="validate"
            />
          </div>
        </fieldset>
      </form>
      <input
        class="btn btn-success mr-3"
        :disabled="btnStatus"
        @click="resetPassword()"
        type="submit"
        value="ثبت"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnStatus: true
    }
  },
  methods: {
    resetPassword() {
      document.forms["reset_password"].submit();
    },
    validate(e) {
      let value = e.target.value;
      if (value === "") {
        e.target.classList.remove('is-invalid','is-valid')
      } else {
        let res = value.match(
          /^[\u06F0-\u06F90-9a-zA-Z0-9ضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئو ]{4,20}$/g
        );
        if (res) {
          e.target.classList.remove('is-invalid')
          e.target.classList.add('is-valid')
        }else{
          e.target.classList.remove('is-valid')
          e.target.classList.add('is-invalid') 
        }
      }
      let item1=this.$refs.password
      let item2=this.$refs.r_password1
      let item3=this.$refs.r_password2
      this.btnStatus=!(item1.classList.contains('is-valid')
       && item2.classList.contains('is-valid') && item3.classList.contains('is-valid')
      )

    },
  },
};
</script>

<style scoped>
.resetPassword {
  background-color: whitesmoke;
  text-align: right;
  direction: rtl;
}
#resetPassword {
  width: 85%;
  margin: 2% auto;
  padding: 10px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
}
label {
  margin: 2px 0 4px 0;
  font-weight: 700;
}
legend {
  font-size: 19px;
  font-weight: bold;
}
.wrong_password {
  color: tomato;
  font-size: 14px;
  margin: 3px 3px 1px 0;
}
.is-invalid {
  border: 1px solid #e3356f;
}

.is-valid {
  border: 1px solid #34ce57 !important;
}
</style>