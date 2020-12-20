<template>
  <div id="priceToText">
    <div id="priceToTextWrapper">
      <div class="price">
        <p> {{$store.state.factoreItems.realPrice}} <span> : قیمت کل</span></p>
      </div>
        <div class="text radif">

          <p>{{$store.state.factoreItems.persianPrice}}</p>
          <p>&nbsp;: &nbsp;</p>
          <p>قیمت کل به حروف</p>
        </div>

<!--      <div class="arrow-left"></div>-->

    </div>
    <div class="offAndTax radif">
      <p style="font-weight: bold"> {{($store.state.factoreItems.wholePrice-($store.state.factoreItems.wholePrice-($store.state.factoreItems.wholePrice*($store.state.factoreItems.off.mount/100)))).toLocaleString('fi-FI')}} &nbsp; تومان</p>
      <p>&nbsp; : &nbsp;</p>
      <p>تخفیف</p>
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
  flex-direction: column;
  align-items: flex-end;
}
.offAndTax{
  margin-top: 20px;
}
.offAndTax p{
  color: black;
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
.price p{
  display: flex;
}
span{
  font-weight: bold;
  width: max-content;
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
.radif{
  display: flex;

}
p{
  direction: rtl
;
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