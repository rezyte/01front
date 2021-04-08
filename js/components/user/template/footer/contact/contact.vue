<template>
  <div id="contactUsSection">
    <div id="contactUsSectionWrapper">
      <div class="contatUsItems">
        <div class="detail">
          <div class="detailWrapper">
            <div class="singlePhone">
              <p><a href="tel:02177569156">021-77569156</a> <br> <a href="tel:02177542719">021-77542719</a></p>
              <p>تماس با ما</p>
            </div>
            <div class="singlePhone">
              <p>
                09107545479
<!--                <a href="https://api.whatsapp.com/send?phone=989124242066"></a>-->
              </p>
              <p>واتس اپ</p>

            </div>
            <div class="singlePhone">
              <p><a href="mailto:info@damirco.com">info@damirco.com</a></p>
            </div>
          </div>
        </div>
        <div class="icons">
          <div class="iconsWrapper">
            <a href="https://www.instagram.com/damir_co/"><inst></inst></a>
            <a href="#"><linkd></linkd></a>
            <a href="https://api.whatsapp.com/send/?phone=989124242066&text&app_absent=0"><watsapp></watsapp></a>
          </div>
        </div>
<!--        <div class="subscribe">-->
<!--          <div class="subscribeWrapper">-->
<!--            <p>برای دریاف اخرین قیمت ها ایمیل خود را وارد کنید</p>-->
<!--            <form>-->
<!--              <div id="email" class="inputs">-->
<!--                <div class="formInputsWrapper">-->
<!--                  <input-->
<!--                    autocomplete="off"-->
<!--                    @blur="focusOut($event), startValidation('email', $event)"-->
<!--                    class="signupFormInputs inputWithLabelThatShouldStay"-->
<!--                    id="FooteruserEmail"-->
<!--                    type="text"-->
<!--                  />-->
<!--                  <label class="comeUpLabel" for="FooteruserEmail">ایمیل</label>-->
<!--                </div>-->
<!--                <p class="inputError">فرمت ایمیل اشتباه است</p>-->
<!--              </div>-->
<!--              <button class="submit">تایید</button>-->
<!--            </form>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>
<style scoped>
.subscriveWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.subscribeWrapper > p {
  width: 205px;
  text-align: center;
  margin: 20px;
  font-size: 18px;
}
.detailWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.detailWrapper p{
  text-align: center;
}
.icons {
  display: flex;
  width: 100%;
  margin-top: 20px;
}
.singleIcon {
  width: 50px;
  height: 50px;
}
.contatUsItems {
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  line-height: 2rem;
  font-size: 18px;
}
.iconsWrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formInputsWrapper {
  margin-top: -15px;
}
.singlePhone{
  display: flex;
  justify-content:space-between;
}
#contactUsSection {
  width: 220px;
}
.singlePhone{
  width: 100%;
}
.detail{
  width: 100%;
}
.singlePhone:not(:first-child){
  margin-top: 20px;
}
.singlePhone p a{
  color:rgb(9,111,211);
}
</style>

<script>
import inst from "./instagram.vue";
import linkd from "./linkdin.vue";
import watsapp from "./watsApp.vue";
import { keepStay } from "../../../mixIns/keepStay.js";
import { validationRules } from "../../../mixIns/validationMixIn.js";
export default {
  name: "contact",
  mixins: [keepStay, validationRules],
  components: {
    inst,
    linkd,
    watsapp,
  },
  methods: {
    startValidation(type, e) {
      const el = e.target;
      const parentNode = e.target.parentElement;

      const error = parentNode.nextElementSibling;
      const res = this.validateUserInput(type, e);

      if (res) {
        error.style.display = "none";
        return;
      }
      error.style.display = "block";
    },
  },
};
</script>
