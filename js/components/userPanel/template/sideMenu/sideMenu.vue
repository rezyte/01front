<template>
  <div id="sideMenu">
    <div id="sideMenuWrapper">
      <div id="cross" @click="closeSideMenu($event)">
        <div id="crossWrapper">
          <div class="cross1"></div>
          <div class="cross2"></div>
        </div>
      </div>
      <div id="logo">
        <a href="/"><img src="/static/public/images/logo.png" alt="" /></a>
      </div>
      <ul>
        <li class="single" v-if="userInfo.is_producer">
          <a href="/users/profile/orders">
            مشتریان من
            <customers></customers>
          </a>
        </li>

        <li class="single sinlgeDisables" v-if="userInfo.is_producer">
          <div class="disableWrapperWrapper">
            <div class="disableWrapper">
              <p class="diable">مدیریت مشتریان</p>
              <span style="position: relative; right: -19px">(به زودی)</span>
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

        <li class="single">
          <a href="/userpanel/cal_netprice/"
            >محاسبه قیمت تمام شده
            <finished-price></finished-price>
          </a>
        </li>
        <li class="single">
          <a href="/userpanel/create_prefactor/"
            >ساخت پیش فاکتور
            <factore></factore>
          </a>
        </li>
        <li class="single">
          <a href="/userpanel/catalogue/create/">
            ساخت کاتالوگ
            <catalog></catalog>
          </a>
        </li>
        <li class="single">
          <a href="/userpanel/catalogue/order/"
            >کاتالوگ به زبان ها دیگر
            <other-lang-catalog></other-lang-catalog>
          </a>
        </li>
        <li class="single">
          <a href="/users/userpanel/">
            پروفایل
            <profile></profile>
          </a>
        </li>

        <li v-if="userInfo.is_producer" class="head">
          <div class="bows" @click="openSub($event)">
            <div class="bowsWrapper">
              <arrow></arrow>
            </div>
            <div class="sideMenuTitle">
              <p>محصولات</p>
              <product></product>
            </div>
          </div>
          <div class="sub">
            <ul>
              <li>
                <a href="/userpanel/products/create/">اضافه کردن محصول</a>
              </li>
              <li><a href="/users/profile/my_products/">محصولات من</a></li>
            </ul>
          </div>
        </li>
        <li class="head" v-if="userInfo.is_superuser">
          <div class="bows" @click="openSub($event)">
            <div class="bowsWrapper">
              <arrow></arrow>
            </div>
            <p>دسته بندی</p>
          </div>
          <div class="sub">
            <ul>
              <li>
                <a href="/categories/create/variation/">اضافه کردن دسته بندی</a>
              </li>
              <li><a href="/users/profile/edit-cat/">ویرایش دسته بندی</a></li>
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
import warehouse from "../icons/warehouse.vue";
import crm from "../icons/crm.vue";

export default {
  name: "sideMenu",
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
  computed: {
    ...mapGetters(["isSubMenuOpen"]),
  },
  methods: {
    ...mapActions(["toggleSubMenu"]),
    closeSideMenu(e) {
      const sideMenu = e.target.closest("#sideMenu");
      sideMenu.style.transition = "all 0.3s linear";
      sideMenu.style.right = "-350px";
    },
    openSub(e) {
      let el = e.target;
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
        el.style.background = "#b4b4b4";

        bows.style.transform = "rotate(180deg)";
        next.style.height = needHeight + "px";
      } else {
        el.style.background = "white";
        next.style.height = "0px";
        bows.style.transform = "rotate(0deg)";
      }
    },
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

#sideMenu {
  /*background: white;*/
  height: 100%;
  /*width: 100%;*/
  background: rgb(255, 255, 255);
  position: fixed;
  display: none;
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

#sideMenuWrapper {
  height: 100%;
  overflow: auto;
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

#sideMenu {
  z-index: 555;
  width: 230px;
  position: absolute;
  right: -350px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
}

@keyframes comeIn {
  from {
    right: -100%;
  }
  to {
    right: 0;
  }
}

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
  justify-content: flex-end;
  align-items: center;
  height: 64px;
}

#sideMenuWrapper >>> svg {
  width: 35px;
  height: 35px;
}

.single div {
  position: relative;
  right: 10px;
}

.single a,
.single div {
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

@media (max-width: 999px) {
  #sideMenu {
    display: block;
  }
}
.diable {
  width: 100%;
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
  flex-direction: column;
  position: relative;
  right: 5px;
}
span {
  color: #ff3c3c;
  font-size: 10px;
  font-weight: bold;
}
.sub li a {
  padding: 18px 0;
}
.bows {
  padding: 14px 0;
}
</style>