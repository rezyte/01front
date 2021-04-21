<template>
  <div class="row userPanel">
    <div id="userPanel">
      <div class="col">
        <div class="row">
          <form method="post" action="" class="w-100 p-3 form">
            <fieldset>
              <legend>اطلاعات کاربری</legend>
              <div class="form-group">
                <label for="fullName">نام کامل</label>
                <input type="text" class="form-control mr-2" id="fullName" name="fullName" v-model="fullName">
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
                <input type="text" class="form-control mr-2" id="phoneNumber" name="phoneNumber" v-model="phoneNumber">
              </div>
              <input class="btn btn-success mr-3" type="submit" value="ثبت">
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index.vue",
  data() {
    return {
      fullName: '',
      username:'',
      company:'',
      phoneNumber:''
    }
  }
}
</script>

<style scoped>
.userPanel {
  background-color: whitesmoke;
}

#userPanel {
  width: 80%;
  margin: 7% auto;
  padding: 10px;
}
.form{
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
}
</style>
