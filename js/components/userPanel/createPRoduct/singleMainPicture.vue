<template>
  <div class="imagesInput">
    <label for="mainPicture" class="uploadImage">
      <i class="fas fa-plus"></i>
      انتخاب عکس

      <input
          @change="imageChanged($event)"
          :name="getName()"
          type="file"
          class="prodctImg"
          id="mainPicture"
      />
    </label>

    <div class="imageUrl">
      <img class="userProductImg" src="" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getName(){
      if(this.name!=null || this.name!=undefined){
        return this.name
      }
      return 'product-image'
    },
    imageChanged(e) {
      const clickedInput = e.target;
      var reader = new FileReader();
      let output = clickedInput.parentNode.nextElementSibling.childNodes[0];

      reader.onload = function () {
        output.src = reader.result;
      };
      reader.readAsDataURL(e.target.files[0]);
      output.style.display = "block";
    },

  },
  created(){
    console.log(this.single_id)

  },
  props:['single_id','name'],

  data() {
    return {
      el: null,
      id:null
    };
  },
};
</script>

<style scoped>
.imagesInput {
  width: 200px;
  display: flex;
  margin: 10px;
  flex-direction: column;
  align-items: center;
}
.imagesInput input {
  display: none;
}
.imageUrl {
  width: 200px;
  height: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: 2px dashed #0061af;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.userProductImg:hover + div {
  display: block;
}
.uploadImage {
  display: flex;
  align-items: center;
}
.imageUrl img {
  display: none;
  width: 120px;
  height: 120px;
  border-radius: 20px;
}
</style>
