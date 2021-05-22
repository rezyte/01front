<template>
  <div id="navigation">
    <div class="naviagtionWrapper">
      <div class="hamIcon">
        <div class="sikhWrapper" @click="toggleNavigation($event)">
          <div @click="toggleNavigation($event)" class="sikh1 sikh"></div>
          <div @click="toggleNavigation($event)" class="sikh2 sikh"></div>
          <div @click="toggleNavigation($event)" class="sikh3 sikh"></div>
        </div>
        <ul v-if="showNavigation">
          <li
            v-if="user.is_logined"
            @click="showProf = true"
            class="profileList"
          >
            <img
              id="profImg"
              src="/static/public/images/defUser.png"
              alt="تصویر ناقص است"
            />
            <div v-if="showProf" class="profile">
              <div class="profileWrapper">
                <!--                <div class="triangle-up">jjjj</div>-->
                <div class="contentWrapepper">
                  <div class="title">
                    <div class="titleWrapper">
                      <ul class="bg-white">
                        <li>
                          <p v-text="user.username" class="head_profile"></p>
                        </li>
                        <li><a href="/users/userpanel/">مشاهده پروفایل</a></li>
                        <hr />
                        <li>
                          <a
                            href="/userpanel/products/create/"
                            v-if="user.is_producer"
                            >محصول جدید</a
                          >
                        </li>
                        <li>
                          <a
                            href="/users/profile/my_products/"
                            v-if="user.is_producer"
                            >محصولات من</a
                          >
                        </li>
                        <li>
                          <a
                            href="/users/profile/orders/"
                            v-if="user.is_producer"
                            >مشتریان من</a
                          >
                        </li>
                        <hr />
                        <li><a href="/users/logout/">خروج</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
            <li class="neww">
            <a @click.prevent="scroll_to_mega()">مشاهده محصولات</a>
          </li>
          <li class="new" v-if="!user.is_logined">
            <a href="/users/register/">ثبت نام</a>
          </li>
          <li class="new pb-1" v-if="!user.is_logined">
            <a href="/users/entry/">ورود</a>
          </li>
        
          <li class="new"><a href="/about_us/">درباره ما</a></li>
          <li class="new"><a href="/blog/posts/">وبلاگ</a></li>
          <li class="new"><a href="/">خانه</a></li>
          <!-- <li class="myMenu" @click="toggleSubMenu()">
            <p>دسته بندی محصولات</p>
            <ul class="ulWrapper">
              <li class="firstLi bg-warning">
                <flat-menu></flat-menu>
              </li>
            </ul>
          </li> -->
        </ul>
      </div>
    </div>
    <!-- <transition name='toggleSubMenu' mode='out-in'> -->
    <side-menu v-if="isSubMenuOpen"></side-menu>
    <!-- </transition> -->
  </div>
</template>

<script>
import ham from "../hamIcon/ham.vue";
import flatMenu from "../flatMenu/flatMenu.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import sideMenu from "../sideMenu/sideMenu.vue";

export default {
  components: {
    flatMenu,
    sideMenu,
  },
  computed: {
    ...mapGetters(["isSubMenu"]),
    isSubMenuOpen() {
      return this.isSubMenu;
    },
  },
  data() {
    return {
      showNavigation: false,
      showProf: false,
      user: userInfo,
    };
  },
  mounted() {
    window.addEventListener("resize", this.checkNavigation);
    window.addEventListener("click", (e) => {
      if (
        !e.target.classList.contains("profileList") &&
        e.target.id !== "profImg"
      ) {
        this.showProf = false;
      }
    });
    this.checkNavigation();
  },
  methods: {
    checkNavigation() {
      if (window.innerWidth > 650) {
        this.showNavigation = true;
      } else {
        this.showNavigation = false;
      }
      this.changeSikhStyles();
    },
    toggleSubMenu() {
      if (window.innerWidth >= 799) {
        return;
      }
      this.$store.dispatch("toggleSubMenu");
    },
    toggleNavigation(e) {
      this.showProf = false;
      e.stopPropagation();
      e.preventDefault();
      this.showNavigation = !this.showNavigation;
      this.changeSikhStyles();
    },
    changeSikhStyles() {
      const sikh1 = document.querySelector(".sikh1");
      const sikh2 = document.querySelector(".sikh2");
      const sikh3 = document.querySelector(".sikh3");
      const wrapper = document.querySelector(".sikhWrapper");
      if (this.showNavigation) {
        sikh2.style.transform = "rotate(135deg) translate(-6px, 7px)";
        sikh1.style.transform = "rotate(-135deg) translate(-4px,-4px)";
        sikh2.style.webkitTransform = "rotate(135deg) translate(-6px, 7px)";
        sikh1.style.webkitTransform = "rotate(-135deg)translate(-4px,-5px)";
        sikh3.style.display = "none";
        // wrapper.style.marginTop="5px"
      } else {
        wrapper.style.marginTop = "0";
        sikh3.style.display = "block";
        sikh2.style.transform = "rotate(0) translate(0, 0)";
        sikh1.style.transform = "rotate(0)";
        sikh2.style.webkitTransform = "rotate(0) translate(0, 0)";
        sikh1.style.webkitTransform = "rotate(0)";
      }
    },
    scroll_to_mega(){
      window.scrollTo(0,document.getElementById("footerWrapper").offsetTop)
    }
  },
};
</script>
<style scoped>
* {
  font-family: iranSans !important;
}

.hamIcon {
  display: flex;
}

#navigation {
  border-bottom: 1px solid #d9d9d8;
  border-top: 1px solid #d9d9d8;
  display: flex;
  justify-content: center;
}

.naviagtionWrapper {
  width: 100%;
}

.hamIcon {
  position: relative;
  height: 50px;
}

.sikhWrapper {
  display: none;
}
ul {
  background: #f6f6f4;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100% !important;
  position: relative;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
}

li:last-child {
  margin-right: 0;
}

.sikh1 {
  width: 40px;
  height: 4px;
  border-radius: 5px;
  position: relative;
  transition: all 0.4s;
}
.head_profile {
  font-size: 17px !important;
  font-weight: bold;
  padding-top: 3px;
}

.sikh2 {
  width: 40px;
  height: 4px;
  border-radius: 5px;
  transition: all 0.4s;
}

.sikh3 {
  width: 40px;
  height: 4px;
  border-radius: 5px;
  position: relative;
}

.new {
  /*background-color: chocolate;*/
  text-align: center;
  width: 90px;
  height: 50px;
  transition: background-color 0.2s;
  /*background-color: #A2AFD0;*/
}
.neww{
   text-align: center;
  width: 150px;
  height: 50px;
  transition: background-color 0.2s;
}

.new a,.neww a {
  width:100%;
  height: 100%;
  /* margin:auto 0; */
  color: black;
  font-size: 17px;
  font-weight: bold;
  padding-top: 12px;
}

.new:hover,.neww:hover {
  background-color: rgb(9, 111, 211);
  cursor: pointer;
}

.new:hover a,.neww:hover a {
  color: white;
  text-decoration: none;
}

.sikh {
  background: #096fd3;
}

.profileList {
  position: absolute;
  left: 100px;
  cursor: pointer;
}
.titleWrapper ul {
  width: 150px !important;
  /*flex-direction: column;*/
  border-radius: 4px;
  background-color: white !important;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  height: 200px !important;
  padding: 0;
  margin: 0;
  text-align: right;
  direction: rtl;
  display: block !important;
}

.titleWrapper ul * {
  font-size: 14px;
}

.titleWrapper ul li {
  width: 100%;
}

.titleWrapper li a {
  width: max-content;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  font-weight: bold;
  line-height: 2rem;
}

.profileList img {
  width: 40px;
  height: 40px;
  margin-right: 5px;
  border-radius: 50%;
}

.profile {
  position: absolute;
  top: 46px;
  z-index: 55;
  left: 21px;
  transform: translateX(-50%);
  /*background-color: red;*/
}

.profileList a {
  color: #0972ce;
}

hr {
  height: 1px;
  width: 100%;
  margin: 0;
  border: 0;
  background: #d9d8d8;
}

.triangle-up {
  content: "";
  position: absolute;
  top: 0;
  left: -91px;
  display: block;
  width: 14px;
  height: 14px;
  /*background: #fff;*/
  -ms-transform: rotate(45deg) translateX(-50%);
  transform: rotate(45deg) translateX(-50%);
  z-index: -1;
  box-shadow: -1px -1px 1px -1px rgba(0, 0, 0, 0.54);
}

.myMenu {
  position: relative;
  cursor: pointer;
  width: 217px;
  transition: background-color 0.2s;
  height: 50.5px;
}

.myMenu p {
  /*margin-top: 10px;*/
  padding: 0 !important;
  margin: 0 !important;
  font-size: 17px !important;
  font-weight: bold;
}

.myMenu ul {
  display: none;
  position: absolute;
  z-index: 13;
  background: white;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  width: max-content;
  padding-top: 7px;
  top: 51px;
  right: -34px;
  padding-left: 0;
  padding-right: 0;
}

@media (min-width: 800px) {
  .myMenu:hover ul {
    display: block;
    width: 250px;
  }

  .myMenu:hover {
    background-color: rgb(9, 111, 211);
  }

  .myMenu:hover p {
    color: white;
  }
}

.myMenu ul li {
  width: 220px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  padding-left: 0;
}

/*li, .myMenu {*/
/*  padding: 14px;*/
/*}*/

.firstLi {
  padding-right: 0;
}

.ulWrapper {
  padding-right: 0;
}
.titleWrapper ul li a {
  text-decoration: none;
  color: black;
  transition: color 0.2s;
}
.titleWrapper ul li a:hover {
  color: var(--blue);
}
@media (max-width: 650px) {
  .naviagtionWrapper {
    width: 100%;
  }

  .hamIcon {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: center;
  }

  ul {
    position: absolute;
    top: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #251f1f;
    z-index: 6;
  }

  li,
  li p {
    color: white;
  }

  a {
    color: white;
  }

  .sikhWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 40px;
  }

  .profileList {
    position: static;
  }

  .profile {
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
  }

  .triangle-up {
    left: -4px;
  }

  li,
  p,
  .myMenu {
    margin: 0;
    padding: 10px;
  }
}

.titleWrapper li {
  padding: 0;
}

@media (max-width: 800px) {
  #navigation {
    display: none;
  }
}
</style>
