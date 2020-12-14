<template>
  <div id="productImg" class="productSection">
    <div class="creatProductTitle">
      <div class="createProductTitleWrapper">
        <svg
            style="
            height: 20px;
            transform: rotate(270deg);
            margin-right: 10px;
            cursor: pointer;
          "
            viewBox="0 0 100 100"
            @click="toggleWrapperMethod($event)"
        >
          <path
              d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"
              class="arrow"
          ></path>
        </svg>
        <p>عکس شاخص</p>
      </div>
    </div>
    <div id="productImgWrapper" class="hiddenAtDisPlay">
      <div id="images">

        <div class="allImagesWrapper">
          <!-- <single-image></single-image> -->
          <single-main-picture
              :single_id="'mainImage'"
          ></single-main-picture>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import singleMainPicture from "./singleMainPicture.vue";
export default {
  components: {
    singleMainPicture,
  },
  methods: {

    clickImage() {
      const imageInput = document.querySelector("#productImgInput");
      imageInput.click();
    }
  },
};
</script>

<style scoped>
#productImgWrapper > label {
  width: 100%;
  display: flex;
  justify-content: center;
}
#productImg {
  padding: 10px;
}
.imgDetails p {
  font-size: 14pt;
  padding: 5px;
  width: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.imgName p {
  max-width: 100px;
  overflow: hidden;
  font-size: 11pt;
  text-align: left;
  white-space: nowrap;
}

#images {
  display: flex;
  width: 100%;
  margin-top: 10px;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}

.allImagesWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.increaseImgNum .submit {
  margin-top: 10px;
}
@media (max-width: 850px) {
  #images {
    flex-direction: column;
    align-items: center;
  }
}
</style>
