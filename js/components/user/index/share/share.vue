<template>
  <div class="share" @click="openPopUp">
    <div class="shareWrapper">
      <div class="shareLogo">
        <div class="shareLogoWrapper">
          <share-icon></share-icon>
          <p class="pr-1">{{ title }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import shareIcon from "./shareIcon.vue";
import {adjustElFromTop} from "../../user/mixIns/adjustElFromTop.js";
import {keepStay} from "../../mixIns/keepStay";

export default {
  name: "share",
  props: [
    'title',
    'slug'
  ],
  mixins: [adjustElFromTop],
  components: {
    shareIcon,
  },
  methods:{
    openPopUp(){
      this.$store.state.shareLink='www.damirco.com/products/product-detial/'+this.slug
      const popUp=document.querySelector('.sharePopUp')
      popUp.style.display="flex"
      this.adjustFromTop(popUp, false, false)
      document.body.style.overflow='hidden'
    }
  }
}
</script>

<style scoped>
*{
  direction: rtl;
  text-align: right;
}
.share {
  cursor: pointer;
}

.shareProduct {
  width: 100%;
}

.shareLogoWrapper {
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
}

p {
  font-size: 13px;
  margin-left: 5px;
  font-weight: bold;
}
</style>