<template>
  <div id="descs">
    <div id="descsWrapper">
      <p v-text="$store.state.factoreItems.factorDescs"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "descs"
}
</script>

<style scoped>
#descs{
  margin-top: 20px;
}
ul{
  direction: rtl;

}
li{
  list-style-type: none;
  line-height: 2rem;
  display: flex;
  align-items: center;

}
span{
  font-weight: bold;
  font-size: 14pt;
}
p{
  text-align: rtl;
  text-align: right;
}
</style>