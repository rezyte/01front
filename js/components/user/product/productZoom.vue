<template>
  <div class="zoomIn" @click='closeZoomIn'>
    <div class="zoomInWrapper">
      <cross @closeZoom="closeZoomIn"></cross>
      <img @click='prevent($event)' src="" alt="">
    </div>
  </div>
</template>

<script>
import cross from "./cross.vue"

export default {
  components: {
    cross
  },
  methods: {
    closeZoomIn() {
      const zoomIn = document.querySelector(".zoomIn")
      const img = zoomIn.querySelector("zoomInWrapper")
      zoomIn.style.display = "none"
      document.body.style.overflowY = ''
    },
    prevent(e) {
      e.preventDefault()
      e.stopPropagation();
    }

  }
}
</script>

<style scoped>
.zoomIn {
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 680;
  background: rgba(0, 0, 0, 0.8);
  transition: all 1s linear;
}

.zoomInWrapper {
  position: absolute;
  z-index: 555;
  background: white;
  width: 90%;
  max-width: 900px;
  object-fit: contain;
  /* max-height: 700px; */
  left: 50%;
  margin-top: 0;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;

}

img {
  max-height: 100vh;
  user-select: none;
  width: 100%;
  object-fit: contain;
    height: max-content;
}
</style>