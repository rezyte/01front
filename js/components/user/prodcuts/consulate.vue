
<template>
  <div class="consulate" @click="closeConsulate()">
    <div @click="prevent($event)" class="consulateWrapper">
      <div id="close">
        <div class="close" @click="closeConsulate()">
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
      </div>
      <div id="title_pro">
        <p v-text="title"></p>
      </div>
      <form class="consulateForm" action="/merchandise/miniorder" method="post">
        <input type="hidden" name="csrfmiddlewaretoken" :value="csrf" />
        <!-- <div id="email" class="inputs">
          <div class="formInputsWrapper">
            <input
              v-model="email"
              autocomplete="off"
              name="email"
              @blur="focusOut($event), startValidation('email', $event)"
              class="inputWithLabelThatShouldStay signupFormInputs"
              id="userEmailConsulate"
              type="text"
            />
            <label class="comeUpLabel" for="userEmailConsulate">ایمیل</label>
          </div>
          <p class="inputError">فرمت ایمیل اشتباه است</p>
        </div>
        <div id="name" class="inputs">
          <div class="formInputsWrapper">
            <input
              style="direction: rtl"
              v-model="username"
              autocomplete="off"
              name="username"
              @blur="focusOut($event)"
              class="inputWithLabelThatShouldStay signupFormInputs"
              id="userNameConsulate"
              type="text"
            />
            <label class="comeUpLabel" for="userNameConsulate">نام</label>
          </div>
          <p class="inputError">فرمت شماره اشتباه است</p>
        </div>
        <div id="phone" class="inputs">
          <div class="formInputsWrapper">
            <input
              v-model="phone_number"
              name="phone_number"
              @blur="focusOut($event), startValidation('phone', $event)"
              class="inputWithLabelThatShouldStay signupFormInputs"
              id="userPhoneConsulate"
              type="text"
            />
            <label class="comeUpLabel" for="userPhoneConsulate"
              >شماره تلفن</label
            >
          </div>
          <p class="inputError">فرمت شماره تلفن اشتباه است</p>
        </div>
        <div id="descs" class="inputs">
          <div class="formInputsWrapper">
            <textarea
              style="direction: rtl"
              v-model="extra_discription"
              placeholder="توضیحات اضافه"
              name="extra_discription"
              class="inputWithLabelThatShouldStay signupFormInputs"
              id="userDescs"
            ></textarea>
          </div>
        </div> -->
        <div class="form-group w-100 text-right ">
          <label for="description" class="my-2">توضیحات:</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="توضیحات خود را وارد کنید"
          ></textarea>
        </div>
        <div>
          <button id="submitConsulate" type="submit" class="submit">ثبت</button>
        </div>
        <input type="hidden" :value="productId" name="product_slug" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { validationRules } from "../mixIns/validationMixIn.js";
import axios from "axios";
import { keepStay } from "../mixIns/keepStay.js";
export default {
  mixins: [validationRules, keepStay],
  props: ["productId", "title"],
  methods: {
    ...mapActions(["toggleConsulate"]),
    prevent(e) {
      if (e.target.classList.contains("comeUpLabel")) {
        const pre = e.target.closest(".formInputsWrapper");
        pre.childNodes[0].focus();
      }
      e.preventDefault();
      e.stopPropagation();
      if (e.target.id == "submitConsulate") {
        const form = document.querySelector(".consulateForm");
        form.submit();
      }
    },
    closeConsulate(e) {
      document.querySelector(".consulate").style.display = "none";
      // document.body.style.overflow=""
      // cons.style.display='none'
    },
    consulateRequest() {
      const doneMessage = document.querySelector("#doneMessage");
      doneMessage.style.display = "block";
      setTimeout(() => {
        doneMessage.style.display = "none";
      }, 5000);
    },
    startValidation(type, e) {
      const el = e.target;
      const parentNode = e.target.parentElement;

      const error = parentNode.nextElementSibling;
      const res = this.validateUserInput(type, e);
      console.log(error);

      if (res) {
        error.style.visibility = "hidden";
        return;
      }
      error.style.visibility = "visible";
    },
  },
  data() {
    return {
      username: "",
      email: "",
      extra_discription: "",
      phone_number: "",
    };
  },
  computed: {
    shoudIShow() {
      return this.$store.state.isShowConsulate;
    },
  },
  created() {
    console.log("titleeeee", this.title);
  },
};
</script>

<style scoped>
.consulate {
  position: absolute;
  width: 100%;
  height: 100%;
  display: none;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgb(0, 0, 0, 0.6);
  z-index: 667;
  transition: all 0.3s;
  animation: fadeIn 0.3s linear;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.consulateWrapper {
  flex-direction: column;
  align-items: center;
  position: absolute;
  background: rgb(233, 233, 233);
  padding: 20px 40px;
  left: 50%;
  transform: translateX(-50%);
  direction: rtl;
}
.submit {
  margin-top: 20px;
}
.input {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input label,
.input input {
  padding: 10px;
  color: black;
}
.input:nth-child(:first-child) input {
  direction: rtl;
}
.input:nth-child(2) input {
  direction: ltr;
}
.inputs {
  margin-top: 5px;
}
textarea {
  width: 215.31px;
  resize: none;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: chartreuse; */
}
#description {
  width: 100%;
}
textarea {
  padding: 10px;
}
#title_pro {
  padding-top: 5px;
  box-sizing: border-box;
  text-align: center;
}
#title_pro p {
  font-size: 19px;
  font-weight: bold;
}
#close {
  width: 100%;
  height: 30px;
  text-align: left;
}
.close {
  width: 24px;
  height: 24px;
  float: left;
  position: relative;
  bottom: 10px;
  right: 20px;
  /* text-align: left; */
  /* float: left; */
}
label{
    font-weight: bold;
}
</style>
