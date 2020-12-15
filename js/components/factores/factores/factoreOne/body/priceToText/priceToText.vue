<template>
  <div id="priceToText">
    <div id="priceToTextWrapper">
      <div class="price">
        <p><span>قیمت کل:</span> 19000000000000000 </p>
      </div>
        <div class="text">
          <p style="max-width: 360px;text-align: right"><span>قیمت کل به حروف:</span> یک میلیارد و نهصد میلیون ریال</p>
        </div>

      <div class="arrow-left"></div>

    </div>
  </div>
</template>

<script>
export default {
  name: "priceToText"
}
</script>

<style scoped>
#priceToText{
margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
#priceToTextWrapper{
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  width: 700px;
  position: relative;
  background: var(--blue);
}
p{
  color: white;
}
span{
  font-weight: bold;
}
.arrow-left {
  width: 0;
  height: 0;
  border-top: 23px solid transparent;
  border-bottom: 24px solid transparent;
  position: absolute;
  top: 0px;
  border-right: 25px solid var(--blue);
  left: -24px;

}
@media print {
  #priceToTextWrapper{
    width: calc(100% - 10%);
  }
  #priceToText{
    width: 700px !important;
  }
  .arrow-left {
    width: 0;
    height: 0;
    border-top: 24px solid transparent;
    border-bottom: 24px solid transparent;
    position: absolute;
    top: 0px;
    border-right: 25px solid var(--blue);
    left: -24px;
  }
}
</style>