<template>
  <div id="calculateAll">
    <div id="calculateAllWrapper">
      <p>محاسبه قیمت کل</p>
      <div class="res">
        <div class="resWrapper">
          <div class="singleRow">
            <p>جمع قیمت کل:</p>
            <p>{{ getWholePrice }}</p>
          </div>

          <div class="singleRow">
            <p>{{ this.$store.state.factoreItems.off.title }}:</p>
            <p>      {{calcOff.toLocaleString('fi-FI')}} تومان   </p>
          </div>

          <div class="singleRow">
            <p>{{ this.$store.state.factoreItems.tax.title }}:</p>
            <p>  {{calcTax}} تومان </p>
          </div>

          <div class="singleRow sumWrapper">
            <p>حاصل:</p>
            <p> {{ calcRealPrice}} تومان </p>
          </div>

          <div class="singleRow">
            <p>معادل فارسی:</p>
            <p>{{ NumToText }}</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Num2persian from 'num2persian';
import axios from "axios"
export default {
  name: "calculateAll",
  data() {
    return {
      wholePrice: 0
    }
  },
  props: ['rows'],
  methods:{
    sendFactor(){
      axios.post("/userpanel/prefactore/upload",{factor:this.$store.state.factoreItems})
      .then(res=>{
        // console.log(JSON.parse(res.data))
      })
    }
  },
  computed: {
    calcTax(){
      if(!this.$store.state.factoreItems.tax.affect){
        return 0
      }
      const taxPercent=this.$store.state.factoreItems.tax.mount
      let res
      res=this.wholePrice
      res=res+(res*(taxPercent/100))
      res=res-this.wholePrice
      return res.toLocaleString('fi-FI')
    },
    calcOff(){
      if(!this.$store.state.factoreItems.off.affect){
        return 0
      }
      const offPercent=this.$store.state.factoreItems.off.mount
      let res
      res=this.wholePrice
      res=res+(res*(offPercent/100))
      res=res-this.wholePrice
      return res.toLocaleString('fi-FI')
    },
    getWholePrice() {
      let wholePrice = 0
      this.rows.forEach(row => {
        const count = row.count
        const singlePrice = row.singlePrice
        wholePrice += +count * (+singlePrice)
      })
      if (wholePrice > Number.MAX_SAFE_INTEGER) {
        return wholePrice = "عدد بسیار بزرگ است"

      }
      this.wholePrice = wholePrice
      this.$store.state.factoreItems.wholePrice = wholePrice
      return wholePrice.toLocaleString('fi-FI')
    },
    calcRealPrice(text) {
      let off = this.$store.state.factoreItems.off.affect ? this.$store.state.factoreItems.off.mount : 0
      let tax = this.$store.state.factoreItems.tax.affect ? this.$store.state.factoreItems.tax.mount : 0
      const wholePrice = this.wholePrice
      let result
        result = wholePrice - (wholePrice * (off / 100)) + (wholePrice * (tax / 100))
      this.$store.state.factoreItems.realPrice=result
      return result.toLocaleString('fi-FI')

    },
    NumToText() {
      const off = this.$store.state.factoreItems.off.mount
      let tax = this.$store.state.factoreItems.tax.affect ? this.$store.state.factoreItems.tax.mount : 0

      const wholePrice = this.$store.state.factoreItems.wholePrice
      let result
      if (this.$store.state.factoreItems.off.affect) {
        result = wholePrice - (+wholePrice * (+off / 100)) + (+wholePrice * (+tax / 100))
      } else {
        result = wholePrice
      }
      this.$store.state.factoreItems.persianPrice=Num2persian(+result) + " " + "تومان"
      return Num2persian(+result) + " " + "تومان"

    }
  }
}
</script>

<style scoped>
#calculateAllWrapper > p {
  font-weight: bold;
  font-size: 25px;
  font-weight: bold;
}

p {
  text-align: right;
  direction: rtl;
  font-weight: bold;
}

.sumWrapper {
  border-top: 2px solid var(--fontColorGray);
}
.submit{
  margin-top: 20px;
  padding: 5px 10px 5px 10px;

}
.resWrapper{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.singleRow span{
  display: flex;
}
</style>