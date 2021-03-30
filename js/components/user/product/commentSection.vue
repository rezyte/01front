<template>
  <div id="productComments">
    <comment-my />
  </div>
</template>

<script>
import CommentMy from './comments/CommentMy.vue';
import { keepStay } from "../mixIns/keepStay.js";
export default {
  props: ["comments"],
  mixins: [keepStay],
  components:{CommentMy}
};
</script>

<style scoped>
#productComments {
  margin-top: 50px;
}

</style>
