<template>
  <div id="factorNum">
    <div id="factorNumWrapper">
      <p>شماره پیش فاکتور : ت/34weq1</p>
    </div>
    <div class="arrow-left"></div>
  </div>
</template>

<script>
export default {
  name: "factorNum"
}
</script>

<style scoped>

#factorNum{
  background: var(--blue);
  position: relative;
}
p{
  color: white;
  font-weight: bold;
  font-size: 16pt;
  padding: 2px 5px;
  direction: rtl;
  text-align: right;
}
.arrow-left {
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 19px solid transparent;
  position: absolute;
  top: 0;
  border-right: 25px solid var(--blue);
  left: -25px;
}

@media print {
  p{
    padding: 5px 10px
  }
  .arrow-left {
    border-bottom: 23px solid transparent;
    border-top: 22px solid transparent;
    border-right: 25px solid var(--blue);
    top: 0px;
  }
}
</style>