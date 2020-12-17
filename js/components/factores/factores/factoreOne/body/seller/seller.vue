<template>
  <div id="seller">
    <div id="sellerWrapper">
      <p>مدیر فروش:{{$store.state.factoreItems.from.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "seller"
}
</script>

<style scoped>
#seller{
  margin-top: 100px;
  border-top:1px solid rgb(58,59,64);
  width: max-content;
  position: relative;
  left: 50px;
}
</style>