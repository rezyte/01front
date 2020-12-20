<template>
  <div ref="customer" id="myCustomersPopUp">
    <div id="myCustomersPopUpWrapper">
      <info></info>
      <p> توجه : با فشردن دکمه تایید قبول میکنید که این مشتری توسط دمیرکو به شما معرفی شده است</p>
      <div class="btns">
        <button class="cancel" @click="cancel">رد</button>
        <button class="submit" @click="emitGetPhone">تایید</button>

      </div>
    </div>
  </div>
</template>

<script>
import eventBus from "../eventBus.js";
import info from "./info.vue"
import axios from "axios";

export default {
  name: "accept",
  components: {
    info
  },
  methods: {
    emitGetPhone() {
      eventBus.$emit("nowGetPhone",true)
    },
    cancel() {
      this.$refs.customer.style.display="none"
    }
  }
}
</script>

<style scoped>
#myCustomersPopUp {
  position: fixed;
  background: rgba(0, 0, 0, 0.85);
  width: 100vw;
  z-index: 999;
  height: 100vh;
  display: none;
}

#myCustomersPopUpWrapper {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  max-width: 450px;

}

p {
  text-align: center;
  font-weight: bold;
}

.btns {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.btns button {
  cursor: pointer;
}

.cancel {
  background: transparent;
  border: 2px solid #242424;
  padding: 10px 20px 10px 20px;
  font-weight: bold;
}
</style>