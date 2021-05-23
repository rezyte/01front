<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <slot> </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
};
</script>

<style scoped>
*{
  direction: rtl;
  text-align: right;
  font-family: iranSans!important;
}
.container-fluid {
  background-color: #f5f5f5;
}

.color-damirco {
  color: var(--blue);
}
</style>
