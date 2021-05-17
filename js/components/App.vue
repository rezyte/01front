<template>
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <slot>
      </slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "App",
  components:{
  }
}
</script>

<style scoped>
*{
   font-family: iranSans!important;
}
.container-fluid{
  background-color: #F5F5F5;
}

*{
  direction: rtl;
  text-align: right;
}
.color-damirco{
  color: var(--blue);
}
</style>
