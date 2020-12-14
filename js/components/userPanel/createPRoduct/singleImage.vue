<template>
  <div :id="single_id" class="imagesInput">
    <div class="singleImgInputWrapper">
      <div class="mainImg field">
        <img :id="single_id+'image'" src="" class="realImg" alt="" @click="$emit('changeInside',$event)">
      </div>


      <input type="hidden" class="imageAlt" :name="'imageAlt'+index">

        <div class="unuse">
          <label :for="single_id+'label'" :id="single_id+'label'" class="upload"></label>
          <input class="files" accept="image/*"  @change="imageChanged($event)" :id="single_id+'input'" type="file" name="slider">
        </div>

    </div>


  </div>
</template>

<script>
import trash from "./icons/trash.vue";
export default {
  components:{
    trash
  },
  methods: {
    deleteField(e) {
      console.log(e)
      this.$emit("imageWasDeleted",e);
    },

    imageChanged(e) {
      const clickedInput = e.target;
      var reader = new FileReader();
      let output = clickedInput.closest(".imagesInput")
      output=output.querySelector(".realImg")
      reader.onload = function () {
        output.src = reader.result;
      };
      reader.readAsDataURL(e.target.files[0]);
      output.style.display = "block";
      const image=document.querySelector(`#${this.single_id}image`)
      image.click()

    },

  },
  created(){
    console.log(this.single_id)

  },
  props:['single_id','index'],

  data() {
    return {
      el: null,
      id:null
    };
  },
};
</script>

<style scoped>
.singleImgInputWrapper{
  display: flex;
  flex-direction: column;

  justify-content: space-between;

}
img{
  width: 50px;
  height: 50px;
  border-radius: 5px;
}
.realImg{
  display: none;
  width: 50px;
  height: 50px;
}
.mainImg{
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.unuse{
  height: 0;
  overflow: hidden;
}
.imagesInput{
  display: none;
  width: 50px;
  height: 50px;
  margin: 5px;
}

.imagesInput:hover img{
  outline:3px dashed #3a72ce
}
</style>