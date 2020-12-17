<template>
  <div id="items">
    <div id="itemsWrapper">
      <div v-if="!showSudo" class="table">
        <table>
          <template>
            <tr>
              <th>&nbsp;</th>
              <th>قیمت کل</th>
              <th>قیمت واحد</th>
              <th>تعداد</th>
              <th>عنوان</th>
              <th>شماره</th>
            </tr>

            <tr v-for="(row,i) in getRows" :id="row.id" class="tr">

              <td>
                <button @click="deleteRow(row.id)">
                  <cross></cross>
                </button>
              </td>
              <td>
                <!--                                <p v-text="row.wholePrice.toLocaleString('fi-FI') + ' تومان '" :wholePriceObjectId="row.id" class="wholePriceInput" disabled style="direction: rtl;background: transparent;border:none;width: 150px;font-size: 13px" type="text">-->
                <p :wholePriceObjectId="row.id"
                   class="wholePriceInput" disabled
                   style="direction: rtl;background: transparent;border:none;width: 150px;font-size: 13px"
                   type="text" v-text="(getRows[i].count * getRows[i].singlePrice).toLocaleString('fi-FI')">

                </p>
              </td>
              <td><input v-model="row.singlePrice" class="singlePriceInput"
                         placeholder="قیمت واحد" style="width: 150px;font-size: 13px" type="text"
                         @change="calcWholePriceForWholePriceInput($event)"></td>
              <td><input v-model="row.count" class="countInput"
                         placeholder="تعداد" style="width: 50px;font-size: 13px" type="text"
                         @change="calcWholePriceForWholePriceInput($event)"></td>
              <td><input v-model="row.title" placeholder="عنوان" style="font-size: 13px" type="text"></td>
              <td>{{ getRowNumberFromId(row.id) }}</td>
            </tr>
            <button class="plus" @click="makeNewRow">
              <plus></plus>
            </button>
          </template>

        </table>

      </div>

      <div v-if="showSudo" class="sudoTable">
        <div v-for="(row,i) in getRows" :id="row.id" class="singleSudoRowsWrapper tr">
          <button @click="deleteRow(row.id)">
            <cross></cross>
          </button>
          <div class="singleSudoRow productTitle">
            <label for="">عنوان محصول</label>
            <input v-model="row.title" placeholder="عنوان" type="text">
          </div>
          <div class="singleSudoRow singlePrice">
            <label for="">قیمت واحد</label>
            <input v-model="row.singlePrice" class="singlePriceInput" placeholder="قیمت واحد"
                   type="text" @change="calcWholePriceForWholePriceInput($event)" @keypress="preventNotNumeric($event)">
          </div>
          <div class="singleSudoRow count">
            <label for="">تعداد</label>
            <input v-model="row.count" class="countInput" placeholder="تعداد"
                   type="text" @change="calcWholePriceForWholePriceInput($event)" @keypress="preventNotNumeric($event)">
          </div>


          <div class="singleSudoRow">
            <label for="">قیمت کل</label>
            <input v-model="row.wholePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+' تومان '"
                   :wholePriceObjectId="row.id" class="wholePriceInput"
                   disabled style="border: 0;background: transparent;"
                   type="text">
          </div>


        </div>
        <button class="plus" @click="makeNewRow">
          <plus></plus>
        </button>
      </div>
    </div>
    <calculate-all :rows="getRows"></calculate-all>
  </div>
</template>

<script>
import cross from "./cross.vue";
import plus from "./pluse.vue"
import calculateAll from "../calculateAll/calculateAll.vue";

export default {
  name: "table",
  data() {
    return {
      rowsObj: [{id: 'starter', title: '', wholePrice: 0, singlePrice: 0, count: 0}],
      showSudo: false
    }
  },
  computed: {
    getRows() {
      return this.rowsObj
    }
  },
  mounted() {
    this.$store.state.factoreItems.tableItems = this.rowsObj
    if (window.innerWidth > 850) {
      this.showSudo = false
    } else {
      this.showSudo = true
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 850) {
        this.showSudo = false
      } else {
        this.showSudo = true
      }

    })
  },
  components: {
    cross,
    plus,
    calculateAll
  },
  methods: {
    preventNotNumeric(e) {
      const allows = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      if (!allows.includes(e.key)) {
        e.preventDefault()
      }
    },
    makeNewRow() {
      const id = Math.random()
      this.rowsObj.push({id, title: '', wholePrice: 0, singlePrice: 0, count: 0})
    },
    getRowNumberFromId(id) {
      const index = this.rowsObj.findIndex(row => {
        return row.id == id
      })
      return index + 1
    },
    deleteRow(id) {
      const index = this.rowsObj.findIndex(row => {
        return row.id.toString() == id.toString()
      })
      const deleteed = this.rowsObj.splice(index, 1)

    },
    calcWholePriceForWholePriceInput(e) {
      const allows = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      if (!allows.includes(e.key)) {
        e.preventDefault()
      }
      const target = e.target

      const parent = target.closest(".tr")

      const wholePriceResult = parent.querySelector('.wholePriceInput')
      const id = wholePriceResult.getAttribute('wholePriceObjectId')

      const quantity = parent.querySelector('.countInput').value
      const sinlgePrice = parent.querySelector('.singlePriceInput').value
      let multiple = parseInt(quantity, 10) * parseInt(sinlgePrice, 10)
      if (multiple > Number.MAX_SAFE_INTEGER) {
        multiple = "عدد بسیار بزرگ است"
        wholePriceResult.value = multiple
        return
      } else if (!(+multiple > 0)) {
        multiple = 0
      }
      wholePriceResult.value = multiple.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' تومان ';

      const index = this.rowsObj.findIndex(row => {
        return row.id == id
      })
      this.rowsObj[index].wholePrice = multiple
    }
  }
}
</script>

<style scoped>
#items {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

th {
  font-size: 13px;
}

input {
  border: 1px solid #a5a5a5;
  border-radius: 5px;
}

button {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

tr {
  border-bottom: 1px dashed #ddd;
}

.sudoTable input {
  width: 100%;
}

tr:first-child {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  vertical-align: middle;
}

tr:first-child th {
  vertical-align: middle;
}

#itemsWrapper {
  overflow: auto;
  width: 100%;
}

.plus {
  margin-top: 20px;
  background: var(--fontColorGray);
  border-radius: 3px;
  border: 1px solid #999;
  padding: 5px;
}

.singleSudoRowsWrapper {
  margin-top: 10px;
  padding-bottom: 20px;
  border-bottom: 1px dashed #ddd;

}

.singleSudoRow {
  display: flex;
  margin-top: 10px;
  flex-direction: column;

}

.singleSudoRow label {
  text-align: right;
}
</style>