<template>
  <div id="productComments">
  </div>
</template>

<script>
import { keepStay } from "../mixIns/keepStay.js";
export default {
  props: ["comments"],
  mixins: [keepStay],
};
</script>

<style scoped>
#productComments {
  margin-top: 50px;
}

</style>
