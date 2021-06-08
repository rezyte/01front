<template>
  <div class="stickMenu">
    <div id="sideMenuStickerWrapper">
      <div id="cross" @click="closeSideMenu($event)">
        <div id="crossWrapper">
          <div class="cross1"></div>
          <div class="cross2"></div>
        </div>
      </div>
      <ul>
        <!-- <li>
        </li> -->
        <li class="logoLi">
          <a href="/"><img src="/static/public/images/logo.png" alt="" /></a>
        </li>
        <template v-if="user.supplier">
          <li :class="[active.my_customer ? 'active' : null, 'single']">
            <a href="/users/profile/orders" id="my_customers">
              مشتریان من <customers></customers
            ></a>
          </li>
          <li v-if="userInfo.is_producer" class="head">
            <div class="bows" @click="openSub($event)" id="bows1">
              <div class="bowsWrapper" id="bowsWrapper1">
                <arrow></arrow>
              </div>
              <div class="sideMenuTitle">
                <p>محصولات من</p>
                <product></product>
              </div>
            </div>
            <div class="sub">
              <ul>
                <li :class="active.create_product ? 'active' : null">
                  <a href="/userpanel/products/create/">اضافه کردن محصول</a>
                </li>
                <li :class="active.my_product ? 'active' : null">
                  <a href="/users/profile/my_products/">محصولات من</a>
                </li>
              </ul>
            </div>
          </li>
          <div class="line"></div>

          <div class="titr">
            <p>ابزارهای آماده</p>
          </div>
          <li :class="[active.finish_cost ? 'active' : null, 'single']">
            <a href="/userpanel/cal_netprice/"
              >محاسبه قیمت تمام شده<finished-price></finished-price>
            </a>
          </li>
          <li :class="[active.create_pishfactor ? 'active' : null, 'single']">
            <a href="/userpanel/create_prefactor/"
              >ساخت پیش فاکتور<factore></factore>
            </a>
          </li>

          <div class="line"></div>

          <div class="titr">
            <p>ابزارهای درحال توسعه</p>
          </div>
          <li class="single sinlgeDisables" v-if="userInfo.is_producer">
            <div class="disableWrapperWrapper">
              <div class="disableWrapper">
                <p class="diable">مدیریت مشتریان</p>
                <span>(به زودی)</span>
              </div>
              <crm></crm>
            </div>
          </li>
          <li class="single sinlgeDisables" v-if="userInfo.is_producer">
            <div class="disableWrapperWrapper">
              <div class="disableWrapper">
                <p class="diable">انبارداری</p>
                <span>(به زودی)</span>
              </div>
              <warehouse></warehouse>
            </div>
          </li>

          <li :class="[active.create_catalog ? 'active' : null, 'single']">
            <a href="/userpanel/catalogue/create/">
              ساخت کاتالوگ<catalog></catalog>
            </a>
          </li>
          <li
            :class="[active.other_langoaje_catalog ? 'active' : null, 'single']"
          >
            <a href="/userpanel/catalogue/order/"
              >کاتالوگ به زبان ها دیگر <other-lang-catalog></other-lang-catalog
            ></a>
          </li>
          <div class="line"></div>
        </template>
        <template v-else-if="user.buyer">
           <li :class="[active.my_estealam ? 'active' : null, 'single']">
            <a href="/users/profile/orders" id="my_estealam">
             استعلام های من <customers></customers
            ></a>
          </li>

        </template>

        <li :class="[active.profile ? 'active' : null, 'single']">
          <a href="/userpanel/">پروفایل <profile></profile></a>
        </li>

        <li class="head" v-if="userInfo.is_superuser">
          <div class="bows" @click="openSub($event)" id="bows2">
            <div class="bowsWrapper" id="bowsWrapper2">
              <arrow></arrow>
            </div>
            <div class="sideMenuTitle">
              <p>دسته بندی</p>
            </div>
          </div>
          <div class="sub">
            <ul>
              <li :class="active.create_category ? 'active' : ''">
                <a href="/categories/create/variation/">اضافه کردن دسته بندی</a>
              </li>
              <li :class="active.edit_category ? 'active' : ''">
                <a href="/users/profile/edit-cat/">ویرایش دسته بندی</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import arrow from "./arrow.vue";
import finishedPrice from "../icons/finishedPrice.vue";
import catalog from "../icons/catalog.vue";
import customers from "../icons/customers.vue";
import factore from "../icons/factore.vue";
import otherLangCatalog from "../icons/otherLangCatalog.vue";
import product from "../icons/product.vue";
import profile from "../icons/profile.vue";
import crm from "../icons/crm.vue";
import warehouse from "../icons/warehouse.vue";
export default {
  name: "sideMenu",
  props:["current_user"],
  components: {
    arrow,
    finishedPrice,
    catalog,
    customers,
    factore,
    otherLangCatalog,
    product,
    profile,
    crm,
    warehouse,
  },
  data() {
    return {
      user: {
        supplier: false,
        buyer: false,
      },
      active: {
        my_customer: null,
        create_product: null,
        my_product: null,
        finish_cost: null,
        create_pishfactor: null,
        create_catalog: null,
        other_langoaje_catalog: null,
        profile: null,
        create_category: null,
        edit_category: null,
        my_estealam:null
      },
      // csrf:document.querySelector('meta[name=csrf]').getAttribute('content')
    };
  },
  computed: {
    ...mapGetters(["isSubMenuOpen"]),
  },
  created(){
    // console.log('csrf',document.querySelector('meta[name=csrf]').getAttribute('content'))
   JSON.parse(this.current_user).is_producer ? this.user.supplier=true : this.user.buyer=true
  },
  methods: {
    ...mapActions(["toggleSubMenu"]),
    closeSideMenu(e) {
      const stickMenu = e.target.closest(".stickMenu");
      stickMenu.style.transition = "all 0.3s linear";
      stickMenu.style.right = "-230px";
    },
    openSub(e) {
      let el = e.target;
      //   console.log('el',el)
      //   console.log(document.querySelector("#bows1 div svg"))
      if (!el.classList.contains(".bows")) {
        el = el.closest(".bows");
      }
      const next = el.nextElementSibling;
      let initial = getComputedStyle(next).height.split("p");
      const bows = el.querySelector(".bowsWrapper");
      initial = initial[0];
      if (initial == 0) {
        const lis = next.querySelectorAll("li");
        const needHeight = lis.length * 64;
        // el.style.background = "#b4b4b4";
        bows.style.transform = "rotate(180deg)";
        next.style.height = needHeight + "px";
      } else {
        el.style.background = "white";
        next.style.height = "0px";
        bows.style.transform = "rotate(0deg)";
      }
    },
  },
  mounted() {
    switch (window.location.pathname) {
      case "/users/profile/orders/":
        this.active.my_customer = true;
        this.active.my_estealam = true;
        break;
      case "/userpanel/products/create/":
        this.active.create_product = true;
        document.getElementById("bows1").click();
        // this.openSub(el)
        break;
      case "/users/profile/my_products/":
        this.active.my_product = true;
        document.getElementById("bows1").click();
        break;
      case "/userpanel/cal_netprice/":
        this.active.finish_cost = true;
        break;
      case "/userpanel/create_prefactor/":
        this.active.create_pishfactor = true;
        break;
      case "/userpanel/catalogue/create/":
        this.active.create_catalog = true;
        break;
      case "/userpanel/catalogue/order/":
        this.active.other_langoaje_catalog = true;
        break;
      case "/userpanel/":
        this.active.profile = true;
        break;
      case "/categories/create/variation/":
        this.active.create_category = true;
        document.getElementById("bows2").click();
        break;
      case "/users/profile/edit-cat/":
        this.active.edit_category = true;
        document.getElementById("bows2").click();
        break;
    }
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
}
ul li {
  text-align: right;
}
li a,
.bows p {
  color: rgb(91, 91, 91);
  font-size: 18px;
  position: relative;
  right: 10px;
}
#logo {
  display: flex;
  justify-content: center;
  box-shadow: -1px 1px 15px -10px black;
  height: 70px;
  align-items: center;
}
#logo a {
  padding: 5px;
}
img {
  width: 100%;
}
.cross1,
.cross2 {
  width: 40px;
  height: 3px;
  background: #0061af;
}
.cross1 {
  transform: rotate(45deg) translate(4px, 4px);
}
.cross2 {
  margin-top: 2px;
  transform: rotate(-45deg);
}
#sideMenuStickerWrapper {
  overflow: auto;
  height: 100%;
}
#cross {
  display: none;
  cursor: pointer;
}
#crossWrapper {
  height: 40px;
  position: relative;
  top: 14px;
}
#cross {
  display: block;
  width: max-content;
}
#logo {
  margin-top: 20px;
  box-shadow: 0 0 0;
}
.stickMenu {
  position: absolute;
  top: 1px;
  background: white;
  height: 100%;
  margin-top: 70px;
  z-index: 555;
  width: 230px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  right: 0;
}
@media (max-width: 1000px) {
  .stickMenu {
    right: -230px;
  }
}
@media (min-width: 1000px) {
  #cross {
    display: none;
  }
  .stickMenu {
    right: 0 !important;
  }
}
/* @keyframes comeIn {
  from {
    right: -100%;
  }
  to {
    right: 0;
  }
} */
.bows {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.bow {
  width: 13px;
  height: 3px;
  background: #b4b4b4;
  margin-bottom: 2px;
  position: relative;
  top: 9px;
}
.bowsWrapper {
  cursor: pointer;
  position: relative;
  left: 10px;
  transition: all 0.3s linear;
  height: 25px;
}
.bow1 {
  transform: rotate(45deg);
}
.bow2 {
  transform: rotate(-45deg) translate(9px, 2px);
}
.sub {
  height: 0;
  overflow: hidden;
  transition: all 0.3s linear;
  background: rgb(232, 232, 232);
}
.bows:hover,
.single:hover {
  background: #b4b4b4;
}
a {
  display: block;
  width: 100%;
}
li.single {
  display: flex;
  height: 64px;
  justify-content: flex-end;
}
#sideMenuStickerWrapper >>> svg {
  width: 35px;
  height: 35px;
}
.single a {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.sideMenuTitle {
  display: flex;
  align-items: center;
  width: max-content;
  position: relative;
  right: 6px;
}
li:first-child {
  margin-top: 20px;
}
.logoLi a {
  right: 0;
}
.sub li {
  margin-top: 0;
}
.disableWrapperWrapper {
  display: flex;
  position: relative;
  right: 10px;
  align-items: center;
}
.disableWrapper {
  position: relative;
  right: 5px;
}
span {
  color: #ff3c3c;
  font-size: 10px;
  font-weight: bold;
}
.bows {
  padding: 14px 0;
}
.sub li {
  padding: 10px 0;
}
.line {
  width: 90%;
  height: 1px;
  background-color: grey;
  margin: 5px auto;
}
.titr {
  width: 100%;
  text-align: center;
  margin: 5px 0;
}
.titr p {
  color: grey;
}
.active {
  background: #b4b4b4;
}
</style>