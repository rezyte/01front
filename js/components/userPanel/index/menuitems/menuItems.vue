<template>
  <div id="menuItems">
    <div id="menuItemsWrapper">
      <div class="welcome">
        <p>{{ welcomeMessage(userInfo) }}</p>
      </div>

      <div class="realItems">


        <a href="/users/profile/orders/">
          <div class="realItemsWrapper">
            <div class="singleItem">
              <div class="singleItemWrapper">
                <customers></customers>
                <p>مشتریان من</p>
              </div>
            </div>
          </div>
        </a>


        <a href="/userpanel/cal_netprice/">
          <div class="realItemsWrapper">
            <div class="singleItem">
              <div class="singleItemWrapper">
                <finished-price></finished-price>
                <p>محاسبه قیمت تمام شده</p>
              </div>
            </div>
          </div>
        </a>

        <a href="/userpanel/create_prefactor/">
          <div class="realItemsWrapper">
            <div class="singleItem">
              <div class="singleItemWrapper">
                <factore></factore>
                <p>ساخت پیش فاکتور</p>
              </div>
            </div>
          </div>
        </a>

        <a href="/userpanel/catalogue/create/">
          <div class="realItemsWrapper">
            <div class="singleItem">
              <div class="singleItemWrapper">
                <catalog></catalog>
                <p>ساخت کاتالوگ</p>
              </div>
            </div>
          </div>
        </a>


        <a href="/userpanel/catalogue/order/">
          <div class="realItemsWrapper">
            <div class="singleItem">
              <div class="singleItemWrapper">
                <other-lang-catalog></other-lang-catalog>
                <p>کاتالوگ به زبان های دیگر</p>
              </div>
            </div>
          </div>
        </a>




        <a href="/users/userpanel/">
          <div class="realItemsWrapper">
            <div class="singleItem">
              <div class="singleItemWrapper">
                <profile></profile>
                <p>پروفایل</p>
              </div>
            </div>
          </div>
        </a>




        <a href="/users/profile/product/create/">
          <div class="realItemsWrapper">
            <div class="singleItem">
              <div class="singleItemWrapper">
                <product></product>
                <p>اضافه کردن محصول</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import finishedPrice from "../../template/icons/finishedPrice.vue"
import catalog from "../../template/icons/catalog.vue";
import customers from "../../template/icons/customers.vue";
import factore from "../../template/icons/factore.vue";
import otherLangCatalog from "../../template/icons/otherLangCatalog.vue";
import product from "../../template/icons/product.vue"
import profile from "../../template/icons/profile.vue"
import warehouse from "../../template/icons/warehouse.vue";
import crm from "../../template/icons/crm.vue"

export default {
  name: "menuItems",
  components: {
    finishedPrice,
    catalog,
    customers,
    factore,
    otherLangCatalog,
    product,
    profile,
    warehouse,
    crm
  },
  methods: {
    welcomeMessage(user) {
      return " مهندس " + user.last_name + ' ' + " خوش آمدید "
    }
  }
}
</script>

<style scoped>
#menuItems {
  padding: 10px;
}

.welcome p {
  direction: rtl;
  text-align: right;
  font-weight: bold;
  font-size: 24px;
}

#menuItemsWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.singleItemWrapper >>> svg {
  width: 35px;
  height: 35px;
}

.singleItem {
  width: 130px;
  height: 130px;
  justify-content: center;
  align-items: center;
  border: 1px solid #d2d2d2;
  border-radius: 50%;
  margin: 10px;
  display: flex;
}

.singleItemWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
}

.singleItemWrapper p {
  color: var(--logoBlue);
  text-align: center;
    margin-top: 10px;
    height: 48px;
}

.realItems {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
a:visited{
    color: var(--logoBlue);
}
</style>