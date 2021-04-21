<template>
  <div class="row userPanel">
      <div id="userPanell">
        <form method="post" action="" class="w-100 p-3 form">
          <fieldset>
            <legend class="font-weight-bold mb-3">اطلاعات کاربری</legend>
            <div class="form-group">
              <label for="firstName">نام</label>
              <input type="text" class="form-control mr-2" id="firstName" name="firstName" v-model="firstName">
            </div>
            <div class="form-group">
              <label for="lastName">نام خانوادگی</label>
              <input type="text" required class="form-control mr-2" id="lastName" name="lastName" v-model="lastName">
            </div>
            <div class="form-group">
              <label for="username">نام کاربری</label>
              <input type="text" class="form-control mr-2" id="username" name="username" v-model="username">
            </div>
            <div class="form-group">
              <label for="company">نام شرکت</label>
              <input type="text" class="form-control mr-2" id="company" name="company" v-model="company">
            </div>
            <div class="form-group">
              <label for="phoneNumber">شماره تلفن</label>
              <input type="text" class="form-control mr-2" required id="phoneNumber" name="phoneNumber"
                     v-model="phoneNumber">
            </div>
            <input class="btn btn-success mr-3" type="submit" value="ثبت">
          </fieldset>
        </form>
      </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  props: ['user'],
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      company: '',
      phoneNumber: '',
      btnStatus: true
    }
  },
  computed: {
    userData() {
      return {
        firstname: 'ali',
        lastName: 'molari',
        company: 'konami',
        phoneNumber: ''
      }
    }
  },
  mounted() {
    console.log(this.user,'yjty')
  }
}
</script>

<style scoped>
*{
  direction: rtl;
  text-align: right;
}
.userPanel {
  background-color: whitesmoke;
}

#userPanell {
  width:85%;
  margin: 2% auto;
  padding: 10px;
}

.form {
  width: 100%;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
}
</style>
