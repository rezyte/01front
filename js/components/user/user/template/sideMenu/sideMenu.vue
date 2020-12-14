<template>
  <div id="sideMenu" v-if="isSubMenu" @click="toggleSubMenu">
    <div id="sideMenuWrapper" @click="prevent">
      <ul>
        <li class="parentLi" v-for="(item, i) in getCats" :key="i">
          <div class="link" @click="openMySubMenu($event)">
            <svg viewBox="0 0 100 100">
              <path
                  d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"
                  class="arrow"
                  transform="rotate(180deg)"
              ></path>
            </svg>
            <p>{{ item.title }}</p>
          </div>

          <ul class="subMenu">
            <li v-for="(sub, ind) in item.subs" :key="ind">
              <a class="prog" :href="getHref(sub.slug)">{{ sub.title }}</a>
            </li>
          </ul>
        </li>
        <!-- <li class="parentLi">
			    	<div class="link" @click="openMySubMenu($event)">
			    		<svg viewBox="0 0 100 100"><path d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z" class="arrow" transform="rotate(180deg)"></path></svg>
			    		<p>دسته 1</p>
			    	</div>
			    	<ul class="subMenu">
			    		<li class="prog"><a class="prog">زیردسته 1</a></li>
						<li class="prog"><a class="prog">زیردسته 1</a></li>
						<li class="prog"><a class="prog">زیردسته 1</a></li>
						<li class="prog"><a class="prog">زیردسته 1</a></li>
			    	</ul>
			    </li>
				<li class="parentLi">
			    	<div class="link" @click="openMySubMenu($event)">
			    		<svg viewBox="0 0 100 100"><path d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z" class="arrow" transform="rotate(180deg)"></path></svg>
			    		<p>دسته 1</p>
			    	</div>
			    	<ul class="subMenu">
			    		<li class="prog"><a class="prog">زیردسته 1</a></li>
						<li class="prog"><a class="prog">زیردسته 1</a></li>
						<li class="prog"><a class="prog">زیردسته 1</a></li>
						<li class="prog"><a class="prog">زیردسته 1</a></li>
			    	</ul>
			    </li>
				<li class="parentLi">
			    	<div class="link" @click="openMySubMenu($event)">
			    		<svg viewBox="0 0 100 100"><path d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z" class="arrow" transform="rotate(180deg)"></path></svg>
			    		<p>دسته 1</p>
			    	</div>
			    	<ul class="subMenu">
			    		<li class="prog"><a class="prog">زیردسته 1</a></li>
						<li class="prog"><a class="prog">زیردسته 1</a></li>
						<li class="prog"><a class="prog">زیردسته 1</a></li>
						<li class="prog"><a class="prog">زیردسته 1</a></li>
			    	</ul>
			    </li> -->
      </ul>
    </div>
  </div>
</template>

<style scoped>
#sideMenu {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 669;
}
#sideMenuWrapper {
  position: absolute;
  width: 250px;
  background: #f6f6f4;
  z-index: 670;
  width: max-content;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  overflow: auto;
  animation: come 0.5s linear forwards;
  right: 0px;
}
@keyframes come {
  to{
    right: 0;
  }

}
ul {
  padding: 10px;
  line-height: 2rem;
  overflow: auto;
  height: 100vh;
}
li {
  text-align: right;
  position: relative;
  margin-top: 5px;
  margin-bottom: 5px;
}
.subMenu {
  background-color: #dfdfdf;
  width: 100%;
  padding: 0;
  height: 0;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  overflow: hidden;
}
.subMenu li {
  padding: 5px;
}
svg {
  width: 15px;
  height: 15px;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  margin-right: 20px;
}
.link {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
}
</style>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { toggleBodyOverFlow } from "../../mixIns/toggleBodyOverFlow.js";
import { adjustElFromTop } from "../../mixIns/adjustElFromTop.js";
import axios from "axios";
export default {
  mixins: [toggleBodyOverFlow, adjustElFromTop],
  methods: {
    toggleSubMenu() {
      this.$store.commit("toggleSubMenu");
      document.body.style.overflow = "";
    },
    prevent(e) {
      e.stopPropagation();
      e.preventDefault();
      if (e.target.classList.contains("prog")) {
        window.location.href = e.target.getAttribute("href");
      }
    },
    openMySubMenu(e) {
      let next;
      const parentEl = e.target.closest(".parentLi");
      const scg = parentEl.querySelector("svg");
      next = parentEl.childNodes[2];

      next.style.transition = "all 0.5s ease-in-out";
      const allSubs = document.querySelectorAll(".subMenu");
      const height = getComputedStyle(next).height;
      if (height != "0px") {
        next.style.height = "0px";
        return;
      }
      allSubs.forEach((sub) => {
        sub.style.height = "0px";
      });
      if (height == "0px") {
        next.style.height = `${next.querySelectorAll("li").length * 52}px`;
      } else {
        next.style.height = "0px";
      }
    },
    getHref(title) {
      return `/categories/${title}`
    },
  },
  mounted() {
    const menuWrapper = document.querySelector("#sideMenu");
    this.adjustFromTop(menuWrapper, false);
    this.toggleBodyOverFlow("hidden");
    this.cats = this.$store.getters.getCatsWithSubs;
    console.log(".cats",this.cats)
  },
  data() {
    return {
      cats: null,
    };
  },
  computed: {
    ...mapGetters(["isSubMenu"]),
    getCats() {
      return this.$store.getters.getCatsWithSubs;
    },
  },
};
</script>