<template>
  <div class="user">
<!--    <comment-wrapper />-->
    <slot></slot>

    <foot></foot>
    <buttom-icons></buttom-icons>
  </div>
</template>

<script>

import footer from "./template/footer/footer.vue";
import buttomIcons from "./template/bottomIconsforPhones/bottomIconsForPhones.vue";
export default {
  name: "user",
  components: {
    foot: footer,
    buttomIcons
  },
};
</script>

<style scoped>
*{
  font-family: iranSans !important;
}
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.is-invalid {
  border: 1px solid #e3356f;
}
.is-valid {
  border: 1px solid #34ce57 !important;
}
</style>
