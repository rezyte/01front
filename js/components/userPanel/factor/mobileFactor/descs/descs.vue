<template>
  <div id="descs">
    <div id="descsWrapper">
      <div class="title"><p>:توضیحات</p></div>
      <textarea name="" v-model="$store.state.factoreItems.factorDescs" id="" cols="30" rows="10"></textarea>
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
#descsWrapper{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
textarea{
  border: 1px solid var(--grayBorderColor);
  width: 100%;
  resize: none;
  font-size: 12pt;
  padding-right: 5px;
  direction: rtl;
  text-align: right;
  height: 200px;
}
.title{
  font-size: 25px;
  font-weight: bold;
}
</style>