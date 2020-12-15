<template>
  <div id="calculateAll">
    <div id="calculateAllWrapper">
      <p>محاسبه قیمت کل</p>
      <div class="res">
        <div class="resWrapper">
          <div class="singleRow">
            <p>:جمع قیمت کل</p>
            <p>{{ getWholePrice }}</p>
          </div>

          <div class="singleRow">
            <p>:{{ this.$store.state.factoreItems.off.title }}</p>
            <p>{{ this.$store.state.factoreItems.off.affect ? this.$store.state.factoreItems.off.mount : 0 }}%</p>
          </div>

          <div class="singleRow sumWrapper">
            <p>:حاصل</p>
            <p>{{ calcRealPrice.toLocaleString('fi-FI') }}</p>
          </div>

          <div class="singleRow">
            <p>:معادل فارسی</p>
            <p>{{ NumToText }}</p>
          </div>
          <a href="/userpanel/prefactore/upload" target="_blank"@click="sendFactor"> <button  class="submit">ساخت پیش فاکتور</button></a>
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
      axios.post("/userpanel/prefactore/upload",{factor:'this.$store.state.factoreItems'})
      .then(res=>{
        console.log(res.data)
      })
    }
  },
  computed: {
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
      const tax = this.$store.state.factoreItems.off.mount
      const wholePrice = this.wholePrice
      let result
      if (this.$store.state.factoreItems.off.affect) {
        result = wholePrice - (wholePrice * (tax / 100))
      } else {
        result = wholePrice
      }
      this.$store.state.factoreItems.realPrice=result
      return result

    },
    NumToText() {
      const tax = this.$store.state.factoreItems.off.mount
      const wholePrice = this.$store.state.factoreItems.wholePrice
      let result
      if (this.$store.state.factoreItems.off.affect) {
        result = wholePrice - (+wholePrice * (+tax / 100))
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
  font-weight: bold;
}

.sumWrapper {
  border-top: 2px solid var(--fontColorGray);
}
.submit{
  margin-top: 20px;
  padding: 5px 10px 5px 10px;

}
</style>