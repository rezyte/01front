<template>
  <div id="componyInfo">
    <div class="title"><p>مشخصات شرکت</p></div>
    <div id="componyInfoWrapper">
      <div class="row">
        <label for="">:نام شرکت</label>
        <input name="company_name" :value="profile.company_name" type="text" placeholder="نام شرکت">
      </div>


      <div class="row">
        <label for="">:وبسایت شرکت</label>
        <input name="web_site" :value="profile.web_site" type="text" placeholder="وبسایت شرکت">
      </div>


      <div class="row2">

        <div class="city order1">
          <select name="city" id="">
            <option v-for="(state,i) in loadedCitiesNow"  :selected="state.name===profile.city" :value="state.name" :key="i">{{state.name}}</option>
          </select>
          <label for="">:شهر</label>
        </div>
        <div class="state order2">
          <select ref="province" @change="pushCities($event)" name="province" id="province">
            <option v-for="(state,i) in loadStates" :selected="state.name===profile.province" :value="state.name" :key="i">{{state.name}}</option>

          </select>
          <label for="">:استان</label>
        </div>
      </div>

        <div class="row">
          <label for="">:ادرس شرکت</label>
          <textarea name="company_address">{{profile.company_address}}</textarea>
        </div>
      <div v-if="userInfo.is_producer" class="row">
        <label for="">:توضیح شرکت</label>
        <textarea name="introduce_yourself">{{profile.introduce_yourself}}</textarea>
      </div>
    </div>
  </div>
</template>

<script>
import cities from "./cities.json"
export default {
name: "componyInfo",
  data(){
    return{
      loadedCities:[],
        allC:cities
    }
  },
    mounted() {
        if(this.profile.province!==null){
            this.loadStatic(this.profile.province)
        }
    },
    props:['profile'],
  methods:{
    pushCities(e){
        this.allC.forEach(c=>{
        if(c.name===e.target.value){
          this.loadedCities=c.cities
        }
      })
    },
      loadStatic(city){
        const el=document.querySelector('#province')
          this.allC.forEach(c=>{
              if(c.name===el.value.trim()){
                  this.loadedCities=c.cities
              }
          })
      }
  },
  computed:{
  loadStates(){
    return this.allC
  },
    loadedCitiesNow(){
    return this.loadedCities
    }

  }
}
</script>

<style scoped>


.city{

  margin-right: 10px;
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
    min-width: 120px;
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

@media (max-width: 550px) {
  .city{
    margin-right: 0;
  }
}

</style>