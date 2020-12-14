<template>
  <div id="generalInfo">
    <div id="generalInfoWrapper">



      <div class="row2">

        <div class="city order1">
          <input type="text" name="username" :value="profile.user.username" placeholder="نام کاربری">
          <label for="">:نام کاربری</label>
        </div>
        <div class="state order2">
          <input type="text" name="name" :value="profile.user.first_name" placeholder="نام">
          <label for="">:نام</label>
        </div>
      </div>

      <div v-if="userInfo.is_producer" class="row2">

        <div class="city order1">
          <input type="text" name="department" :value="profile.department" placeholder="واحد اداری">
          <label for="">:واحد اداری</label>
        </div>
        <div class="state order2">
          <input name="job_title" type="text" :value="profile.job_title" placeholder="عنوان کاری">
          <label for="">:عنوان کاری</label>
        </div>
      </div>

      <div class="row">
        <label for="">:جنسیت</label>
        <select name="gender" id="">
          <option :selected="profile.gender==1" value="1">مرد</option>
          <option value="2" :selected="profile.gender==2">زن</option>
        </select>
      </div>

      <div class="row">
        <label for="">:نوع کسب</label>
        <select name="business_type" id="">
          <option :selected="profile.business_type==1" value="1">تولید کننده</option>
          <option :selected="profile.business_type==2" value="2">پخش کننده</option>
          <option :selected="profile.business_type==3" value="3">وارد کننده</option>
          <option :selected="profile.business_type==4" value="4">خدمات</option>
          <option :selected="profile.business_type==5" value="5">بنک دار</option>
          <option :selected="profile.business_type==6" value="6">دولتی</option>
          <option :selected="profile.business_type==7" value="7">متفرقه</option>
        </select>
      </div>

    </div>
  </div>
</template>

<script>
export default {
name: "generalnfo",
  data(){
    return{
      name:'برای وارد کردن نام کلیک کنید'
    }
  },
    props:['profile']
}
</script>

<style scoped>
p,input{
  direction: rtl;
  text-align: right;
}
.title{
  font-weight: bold;
  color: rgb(60,79,94);
}
.bigFont{
  font-size: 18pt;
}

input,select{
  border:1px solid #b4b4b485;
  border-radius: 10px; width: 200px;

}
#profileImage{
    grid-area: profileImage;
}
#componyInfo{
    grid-area: componyInfo;
}

#contact{
    grid-area: contact;
}
#information{
    grid-area: information;
}
#producerWrapper{
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-gap: 60px;
    grid-template-areas:
        'information information information information information information information information information profileImage profileImage profileImage'
;
}
.title{
    font-weight: bold;
    text-align: right;
    color: rgb(60,79,94);
}
input,select,textarea{
    border:1px solid #b4b4b4c7;
    border-radius: 10px; width: 200px;
    resize: none;
    margin-right: 10px;

}
label,p,input,textarea{
    text-align:right;
}
textarea{
    height: 150px;
}
label{
    min-width: 100px;
    width: max-content;
    font-size: 18px !important;
    color: rgb(60,79,94);
}
.row{
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}
.row label{
    order: 2;
}
.row input{
    order: 1;
}
.row2{
    display: flex;
    margin-top: 20px;
    justify-content: flex-end;
}
.order2,.order1{
    display: flex;
    align-items: center;
    justify-content: center;
}
.order1{
    margin-right: 10px;
}
@media (max-width: 500px) {
    .row2{
        flex-direction: column;
    }
    .order1{
        order: 2;
        margin-top: 10px;
    }
    .order2{
        order: 1;
    }
    .city{
        margin-right: 0;
    }
}

@media (max-width: 1250px) {
    #producerWrapper{
        grid-template-columns: repeat(1,1fr);
        grid-template-areas:
        'profileImage'
        'information'
    ;
    }

}
label{
    min-width: 120px;
    display: inline-block;
}
.longLabel{
    min-width: 160px;
}

</style>