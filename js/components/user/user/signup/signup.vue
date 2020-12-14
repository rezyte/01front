<template>
<div class="container" id="signup">
  <header>ثبت نام</header>
  <div class="progress-bar">
    <div class="step">
      <p>اطلاعات تماس</p>
      <div class="bullet">
        <span>1</span>

      </div>
      <div class="check"><tick></tick></div>
    </div>
    <div class="step">
      <p>نام</p>
      <div class="bullet">
        <span>2</span>

      </div>
      <div class="check"><tick></tick></div>
    </div>

    <div class="step">
      <p>زمینه کاری</p>
      <div class="bullet">
        <span>3</span>

      </div>
      <div class="check"><tick></tick></div>
    </div>
    <div class="step">
      <p>رمز</p>
      <div class="bullet">
        <span>4</span>

      </div>
      <div class="check"><tick></tick></div>
    </div>
<!--    <div class="step">-->
<!--      <p>محل</p>-->
<!--      <div class="bullet">-->
<!--        <span>4</span>-->

<!--      </div>-->
<!--      <div class="check"><tick></tick></div>-->
<!--    </div>-->
  </div>
  <div class="form-outer">
    <form action="" method="post">

      <div ref="slidePage" class="page slidepage">
        <div class="title">اطلاعات تماس</div>
        <div class="field">
          <div class="label">:شماره تلفن</div>
          <input title="شماره تلفن را وارد کنید" v-model="phone" @cut="phoneChanged" @keyup="phoneChanged" type="text" name="phone">
        </div>
        <div class="field">
          <div class="label">:ایمیل(اختیاری)</div>
          <input type="text" name="email">
        </div>
        <div class="field btns">
          <div class="tooltip">
            <div class="tooltipWrapper">
              <div class="message"><p>لطفا شماره تلفن خود را وارد کنید</p></div>
              <div class="tri"></div>
            </div>
          </div>
          <button class="submit phoneNext Next" @mouseleave="checkToolTipForPhoneLeave($event)" @mouseover="checkToolTipForPhone($event)" @click.prevent="firstNextClick($event)">بعدی</button>
        </div>
      </div>

      <div  class="page ">
        <div class="title">اطلاعات کاربری</div>
        <div class="field">
          <div class="label" >:نام(اختیاری)</div>
          <input type="text" name="name">
        </div>
        <div class="field">
          <div class="label">:نام کاربری(اختیاری)</div>
          <input type="text" name="username">
        </div>
        <div class="field">


          <button class="prev-1 prev" @click.prevent="prev1($event)">قبلی</button>
          <button class="submit next-1 next" @click.prevent="next1($event)">بعدی</button>
        </div>
      </div>





      <div class="page">
        <div class="title">زمینه کاری</div>
        <div class="field workFields">
          <div class="singleWorkField">
            <input type="radio" id="buyer" name="workField">
            <label for="buyer">خریدار</label>
          </div>
          <div class="singleWorkField">
            <input type="radio" id="producer" name="workField">
            <label for="producer">فروشنده</label>
          </div>
        </div>
        <div class="field btns">
          <div class="tooltip">
            <div class="tooltipWrapper">
              <div class="message"><p>لطفا شماره تلفن خود را وارد کنید</p></div>
              <div class="tri"></div>
            </div>
          </div>
          <button class="prev-2 prev" @click.prevent="prev2($event)">قبلی</button>
          <button class="submit next-1 next" @click.prevent="next2($event)">بعدی</button>
        </div>
      </div>
      <div class="page">
        <div class="title">رمز</div>
        <div class="field">
          <div class="label">:رمز</div>
          <input type="text" name="pass">
        </div>
        <div class="field">
          <div class="label">:تکرار رمز</div>
          <input type="text" name="pass2">
        </div>
        <div class="field btns">
          <div class="tooltip">
            <div class="tooltipWrapper">
              <div class="message"><p>لطفا شماره تلفن خود را وارد کنید</p></div>
              <div class="tri"></div>
            </div>
          </div>
          <button class="prev-2 prev" @click.prevent="prev3($event)">قبلی</button>
          <button class="submit next-3 next" type="submit">ثبت نام</button>
        </div>
      </div>



<!--      <div class="page">-->
<!--        <div class="title">محل شرکت</div>-->
<!--        <div class="field">-->
<!--          <div class="label">:استان</div>-->
<!--          <select name="" id="">-->
<!--            <option value="">1</option>-->
<!--            <option value="">1</option>-->
<!--            <option value="">1</option>-->
<!--          </select>-->
<!--        </div>-->
<!--        <div class="field">-->
<!--          <div class="label">:شهر</div>-->
<!--          <select name="" id="">-->
<!--            <option value="">1</option>-->
<!--            <option value="">1</option>-->
<!--            <option value="">1</option>-->
<!--          </select>-->
<!--        </div>-->
<!--        <div class="field btns">-->
<!--          <button class="prev-3 prev" @click.prevent="prev3($event)">قبلی</button>-->
<!--          -->
<!--        </div>-->
<!--      </div>-->



    </form>
  </div>
</div>
</template>

<style scoped>
.Next{
  background: rgba(0,116,223,0.6);
}
.tooltip{
  position: absolute;
  top: -75px;
  display: none;
}
.message{
  background: #181818;
  padding:5px 10px 5px 10px
}
.message p{
  color:white;
  border-radius: 10px;
}
.tri{
  width: 0;
  height: 0;
  top:-1px;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 22px solid #181818;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
#signup{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.container{
  width: 300px;
  border-radius: 5px;
  text-align: center;
}
header{
  font-size: 35px;
  font-weight: 600;
  margin: 0 0 30px 0;
}
.form-outer{
  width: 100%;
}
form{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 400%;
}
.page{
  width: 25%;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
}
.title{
  text-align: right;
  font-size: 25px;
  font-weight: 500;
}
.field{
  height: 45px;
  width: 300px;
  margin: 45px 0;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
input{
  width: 200px;
  height: 100%;
  border: 1px solid #b4b4b4;
  border-radius: 5px;
  padding-left: 15px;
}
.label{
  position: absolute;
  top:-30px;
  right: 10px;
  font-weight: 500;
}
button{
  width: 100%;
  height: calc(100% + 5px);
  margin-top: -20px !important;
}
.prev{
  margin-right: 3px;
}
.next{
  margin-left: 3px;
}
select{
  width: 100%;
  padding-left: 10px;
  font-size: 17px;
  font-weight: 500;
}
.form-outer{
  overflow: hidden;
}
.progress-bar{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 40px 0;
}
.step{
  text-align: center;
  position: relative;
  width: 100%;
}
.progress-bar p{
  width: 76px;
  font-size: 13px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 8px;
}
.bullet{
  height: 25px;
  width: 25px;
  border:2px solid black;
  display: inline-block;
  border-radius: 50%;
  position: relative;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.bullet.active{
  /*border-color:#d43f8d*/
  background: black;
}
span{
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}
.bullet.active span{
  display: none;
}
.check{
  position: absolute;
  left: 29px;
  top: 34px;
  display: none;
}
.check.active{
  display: block;
}
.bullet:before,.bullet:after{
  position: absolute;
  content: "";
  height: 3px;
  width: 44px;
  background: black;
  bottom: 11px;
  right: -50px;
}
.progress-bar .step:last-child .bullet:before,.progress-bar .step:last-child .bullet:after{
  display: none;
}
.step .bullet.active:after{
  background: rgb(9,111,211);
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transform-origin: left;
  -ms-transform-origin: left;
  transform-origin: left;
  -webkit-animation: fill 0.5s forwards;
  animation: fill 0.5s forwards;
}
@-webkit-keyframes fill {
  100%{
    -webkit-transform: scale(1);
    transform: scale(1);
  }

}
@keyframes fill {
  100%{
    -webkit-transform: scale(1);
    transform: scale(1);
  }

}
.step p.active{
  color:rgb(9,111,211)
}
.prev{
  font-size: 18px;
  background: transparent;
  border-radius: 5px;
  border: 1px solid black;
}
.workFields{
  display: flex;
  flex-direction: column;
}
.singleWorkField{
  margin-top: 10px;
}
input[type=radio]{
  width: max-content;
}
.singleWorkField label{
  width: 100px;
  text-align: right;
}
.singleWorkField{
  display: flex;
  justify-content: flex-end;
}


</style>


<script>
import {validationRules} from "../mixIns/validationMixIn.js"
import {keepStay} from "../mixIns/keepStay.js"
import tick from "./tick.vue"
export default{
  components:{
    tick
  },
  data(){
    return{
      progressText:null,
      bullet:null,
      progressCheck:null,
      max:4,
      current:1,
      phone:""
    }
  },
  methods:{
    goToNext(e){
      const slide=document.querySelector(".slidePage")
      slide.style.marginRight="210px"
    },
    firstNextClick(e){
      if(this.phone.length<11){
        return
      }
      const slide=this.$refs.slidePage
      slide.style.marginLeft="-25%"
      this.bullet[this.current-1].classList.add('active')
      this.progressText[this.current-1].classList.add('active')
      this.progressCheck[this.current-1].classList.add('active')
      this.current+=1
    },
    prev1(e){
      const slide=this.$refs.slidePage
      slide.style.marginLeft="0%"
      this.bullet[this.current-2].classList.remove('active')
      this.progressText[this.current-2].classList.remove('active')
      this.progressCheck[this.current-2].classList.remove('active')
      this.current-=1
    },
    next1(e){
      const slide=this.$refs.slidePage
      slide.style.marginLeft="-50%"
      this.bullet[this.current-1].classList.add('active')
      this.progressText[this.current-1].classList.add('active')
      this.progressCheck[this.current-1].classList.add('active')
      this.current+=1
    },
    prev2(e){
      const slide=this.$refs.slidePage
      slide.style.marginLeft="-25%"
      this.bullet[this.current-2].classList.remove('active')
      this.progressText[this.current-2].classList.remove('active')
      this.progressCheck[this.current-2].classList.remove('active')
      this.current-=1
    },
    next2(e){
      const slide=this.$refs.slidePage
      slide.style.marginLeft="-75%"
      this.bullet[this.current-1].classList.add('active')
      this.progressText[this.current-1].classList.add('active')
      this.progressCheck[this.current-1].classList.add('active')
      this.current+=1
    },
    prev3(e){
      const slide=this.$refs.slidePage
      slide.style.marginLeft="-50%"
      this.bullet[this.current-2].classList.remove('active')
      this.progressText[this.current-2].classList.remove('active')
      this.progressCheck[this.current-2].classList.remove('active')
      this.current-=1
    },
    next3(e){
      const slide=this.$refs.slidePage
      slide.style.marginLeft="-100%"
      this.bullet[this.current-1].classList.add('active')
      this.progressCheck[this.current-1].classList.add('active')
      this.current+=1
    },
    phoneChanged(){
      const el=document.querySelector(".phoneNext")
      if(this.phone.length==11){

        return el.style.background="#0074d9"
      }
      el.style.background="rgba(0,116,223,0.6)"
    },
    checkToolTipForPhone(e){
      if(this.phone.length==11){
        return
      }
      const el=e.target
      const par=el.closest('.field')
      const tooltip=par.querySelector('.tooltip')
      tooltip.style.display="block"
      console.log(tooltip)

    },
    checkToolTipForPhoneLeave(e){
      const el=e.target
      const par=el.closest('.field')
      const tooltip=par.querySelector('.tooltip')
      tooltip.style.display="none"
    }
  },
  mounted() {
    this.progressText=document.querySelectorAll('.step p')
    this.bullet=document.querySelectorAll('.bullet')
    this.progressCheck=document.querySelectorAll('.check')
  },
  computed:{

  }
}
</script>