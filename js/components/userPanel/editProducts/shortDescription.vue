<template>
  <div id="shortDescs">
    <div id="shortDescsWrapper">
      <label for="">یک توضیح مختصر در مورد محصول بنویسید</label>
      <textarea
        v-model="text"
        :maxlength="max"
        name="short-description"
        cols="30"
        rows="10"
        v-text="productt.short_discription !=='None' ? productt.short_discription :''"
      ></textarea>
      <div class="input-group-addon" v-text="max -text.length"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      max: 80,
      text: "",
    };
  },
  props: ["productt"],
  methods: {},
  created() {
   console.log(this.productt.short_discription)
  },
};
</script>



<style scoped>
textarea {
  direction: rtl;
  text-align: right;
  margin-top: 10px;
}
#shortDescsWrapper {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
#shortDescs {
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
textarea {
  max-width: 350px;
  width: 100%;
  height: 150px;
  resize: none;
}
label {
  text-align: center;
  display: block;
  order: 0;
  width: 100%;
  max-width: 350px;
}
.input-group-addon {
  order: 2;
}
</style>

