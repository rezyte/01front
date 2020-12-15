<template>
  <div id="bottomOfHeader">
    <div id="bottomOfHeaderWrapper">
      <date></date>
        <factor-num></factor-num>

    </div>
  </div>
</template>

<script>
import date from "./date/date.vue";
import factorNum from "./factoNum/factorNum.vue";
export default {
name: "bottomOfHeader",
  components:{
    factorNum,
    date
  }
}
</script>

<style scoped>
#bottomOfHeader{
  position: absolute;
  bottom: 0;
  width: 100%;
}
#bottomOfHeaderWrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media print {
  #bottomOfHeader{
    margin-top: 40px;
  }
}
</style>