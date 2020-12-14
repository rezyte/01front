<template>
  <div :id="single_id" class="imagesInput" ref="imagesInput">
    <div class="singleImgInputWrapper">
      <div class="mainImg field">
        <img ref="img" v-if="src!==null && src!==undefined" :id="'image'+single_id" :src="src" class="realImg" alt="" @click="$emit('changeInside',$event)">
        <img ref="img" v-else :id="'image'+single_id" src="" class="realImg" alt="" @click="$emit('changeInside',$event)">
      </div>


      <input v-if="alt==''" type="hidden" class="imageAlt" :name="'imageAlt'+index">
      <input v-else :value="alt" type="hidden" class="imageAlt" :name="'imageAlt'+index">

        <div class="unuse">
          <label :for="'label'+single_id" :id="single_id+'label'" class="upload"></label>
          <input  class="files" accept="image/*"  @change="imageChanged($event)" :id="'input'+single_id" type="file" name="slider">
        </div>

    </div>


  </div>
</template>

<script>
import trash from "./icons/trash.vue";
export default {
  mounted() {
    if(this.src!==undefined){
      console.log("kir khar",this.src)
      const img=this.$refs.img
      const imagesInput=this.$refs.imagesInput
      imagesInput.style.display="flex"
      img.style.display="flex"
    }
  },
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
  props:['single_id','index','src',"alt"],

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