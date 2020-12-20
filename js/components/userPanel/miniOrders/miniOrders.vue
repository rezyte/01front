<template>
  <div id="miniOrders" class="userPanelItem  panelItem">
    <div class="searchWrapper">
      <div class="orderByStatus">
        <div class="searchBySome">
          <div class="searchBySomeWrapper">
            <div class="title">:جست و جو بر اساس نام یا شماره</div>
            <div class="searchBySomeWrapperWrapper">
              <select v-model="searchByType">
                <option selected value="name">نام</option>
                <option value="phone">شماره تلفن</option>
              </select>
              <input v-model="searchText" placeholder="جست و جو..." type="text" @input="searchBy">
            </div>
          </div>
        </div>
        <div class="orderByActivationWrapper">
          <div class="title">:نمایش</div>

          <div class="statusesWrapper">
            <div class="singleStatus">
              <input id="" :checked="shouldCheck(1)" class="checks" name="status" type="radio" value="1"
                     @change="justActive">
              <label>:فقط تایید شده ها</label>
            </div>
            <div class="singleStatus">
              <input id="" :checked="shouldCheck(0)" class="checks" name="status" type="radio" value="0"
                     @change="justUnactive">
              <label>:فقط تایید نشده ها</label>
            </div>
            <div class="singleStatus">
              <input id="" :checked="shouldCheck(2)" class="checks" name="status" type="radio" value="0" @change="all">
              <label>:همه</label>
            </div>
          </div>
        </div>

      </div>
      <div class="orderBySearch">

      </div>
    </div>
    <div v-if="shouldShow.length>0" class="table">
      <table v-if="showTable">
        <tr>
          <th>شماره تلفن</th>
          <th>توضیحات</th>
          <th>نام</th>
          <th>موضوع درخواست</th>
          <th>شماره درخواست</th>
        </tr>

        <tr v-for="(order,i) in getOrders" :key="order.id">
          <td class="orderId">{{ order.id }}</td>
          <td v-if="order.is_confirmed==true" class="don">{{ order.phone_number }}</td>
          <td v-else class="unDon">
            <button @click.prevent="getPhone(order.id,$event)">تایید مشتری</button>
          </td>
          <td class="description">{{ getDescs(order.extra_discription) }}</td>
          <td>{{ order.name }}</td>
          <td>{{ order.product.title }}</td>
          <td>{{ order.id }}</td>
        </tr>


      </table>
    </div>
    <div v-else class="nothing">
      <h1>موردی یافت نشد</h1>
    </div>

    <div v-if="wating" class="nothing">
      <h1>...لطفا صبر کنید</h1>
    </div>


  </div>
</template>

<script>
import axios from "axios"
import eventBus from "../eventBus.js";

export default {
  name: "miniOrders",
  props: ['orders'],

  data() {
    return {
      input: null,
      shouldShow: null,
      actualOrders: null,
      wating: false,
      showTable: true,
      searchText: null,
      searchByType: 'name'
    }
  },
  watch: {
    input: function (val) {
      if (val == "") {
        this.shouldShow = this.orders
        return
      }
      this.shouldShow = this.orders.filter(order => {
        return order.id == val
      })
    }
  },
  created() {
    this.actualOrders = JSON.parse(this.orders)
    console.log(this.actualOrders)
    this.shouldShow = this.actualOrders
    this.starterCheck()
    eventBus.$on("nowGetPhone",this.nowGetPhone)
  },
  methods: {
    searchBy() {
      const searchType = this.searchByType
      if (searchType == "phone") {
        this.filterByPhone()
      } else if (searchType == "name") {
        this.filterByName()
      }
      if (this.searchText == "" || this.searchText == null) {
        this.shouldShow = this.actualOrders
        const checks = document.querySelectorAll('.checks')
        for (let i = 0; i < checks.length; i++) {
          const current = checks[i]
          if (current.checked) {
            const value = current.value
            if (value == 0) {
              this.justUnactive()
            } else if (value == 1) {
              this.justActive()
            } else {
              this.all()
            }
          }
        }
      }
    },
    filterByPhone() {
      this.shouldShow = this.actualOrders.filter(order => {
        return order.phone_number.toString().startsWith(this.searchText.toString())
      })
    },
    filterByName() {
      this.shouldShow = this.actualOrders.filter(order => {
        return order.name.toString().startsWith(this.searchText.toString())
      })
    },
    starterCheck() {
      const session = sessionStorage.getItem("showBy")
      if (session == 0 || session == undefined) {
        this.justUnactive()
      } else if (session == 1) {
        this.justActive()
      } else {
        this.all()
      }
    },
    shouldCheck(iden) {
      const session = sessionStorage.getItem("showBy")
      if (session == undefined && iden == 2) {
        return true
      }
      if (session == iden) {
        return true
      }
      return false
    },
    changed(e) {

    },
    getPhone(id, e) {
      this.$store.state.getPhoneId.id=id
      this.$store.state.getPhoneId.el=e
      document.querySelector("#myCustomersPopUp").style.display = "block"

    },
    nowGetPhone() {
      const el = this.$store.state.getPhoneId.el.target
      const id=this.$store.state.getPhoneId.id
      const parent = el.closest('td')
      const tr = el.closest('tr')

      axios.get(`/merchandise-api/order/${id}/confirm/?csrfmiddlewaretoken=${csrf}`)
          .then(res => {
            console.log(res)
            const data = res.data
            if (data.status) {
              parent.innerText = data.phone_number
              parent.classList = []
              parent.classList.add('don')
            }
          })
          .then(() => {
            const id = tr.querySelector('.orderId').innerText
            const order = this.actualOrders.findIndex(order => {
              return order.id == id
            })
            this.actualOrders[order].is_confirmed = true
          })
      document.querySelector("#myCustomersPopUp").style.display = "none"
    },
    justActive() {
      this.wating = true
      this.showTable = false
      this.changeSessionStorage('1')
      this.shouldShow = this.actualOrders.filter(order => {
        return order.is_confirmed == true
      })
      this.wating = false
      this.showTable = true
    },
    justUnactive() {
      this.wating = true
      this.showTable = false
      this.changeSessionStorage('0')
      this.shouldShow = this.actualOrders.filter(order => {
        return order.is_confirmed == false
      })
      this.wating = false
      this.showTable = true
    },
    all() {
      this.wating = true
      this.showTable = false
      this.changeSessionStorage('2')
      this.shouldShow = this.actualOrders
      this.wating = false
      this.showTable = true
    },
    getDescs(descs) {
      if (descs == null) {
        return 'بدون توضیحات'
      }
      return descs
    },
    changeSessionStorage(status) {
      sessionStorage.setItem("showBy", status)
    }
  },
  computed: {
    getOrders() {
      return this.shouldShow
    }
  }
}
</script>

<style scoped>
#miniOrders {
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 30px;
}

.don {
  color: #0a7e0a
}

.unDon {
  color: #f50707
}

.search {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  align-items: center;
}

input {
  border: 1px solid #b4b4b4;
  padding: 5px;
  width: 120px;
}

label {
  font-size: 16px;
  font-weight: bold;
}

.unDon button {
  background: #007bff;
  padding: 5px;
  border-radius: 5px;
  border: 0;
  color: white;
  font-weight: 400;
  cursor: pointer;
}

.statusesWrapper {
  padding-right: 10px;
}

.singleStatus {
  display: flex;
  align-items: center;
}

.singleStatus label {
  width: 142px;
  height: 25px;
}

.singleStatus input {
  width: 20px;
  height: 20px;
}

.description {
  max-width: 150px;
}

h1 {
  text-align: center;
  font-weight: bold;
}

.orderId {
  display: none;
}

.table {
  overflow-x: auto;
  overflow-y: hidden;
}

table {
  min-width: 900px;
}

td {
  max-width: 150px;
  padding: 5px;
}

.nothing {
  margin: auto;
  margin-top: 50px;
}

.orderByActivationWrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.orderByStatus {
  display: flex;
}

.searchBySome {
  margin-right: 40px;
}

.searchBySome input[type=text] {
  max-width: 200px;
  width: 100%;
  height: 50px;
  border-left: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.searchBySome select {
  position: relative;
  right: -15px;
  height: 50px;
  width: 115px;
  border-radius: 0;
}

.title {
  text-align: right;
  font-weight: bold;
  color: var(--fontColorGray)
}

label {
  text-align: right;
  margin-top: 10px;
}

input[type=radio] {
  margin-right: 10px;
}

.statusesWrapper, .searchBySomeWrapperWrapper {
  margin-top: 20px;
}

.searchBySomeWrapperWrapper {
  display: flex;
}

@media (max-width: 620px) {
  .orderByStatus {
    flex-direction: column;
    align-items: flex-end;
  }

  .searchBySome {
    margin-right: 0;
    margin-top: 30px;
  }

  .searchBySome {
    order: 2;
  }

  .orderByActivationWrapper {
    order: 1;
  }
}
</style>