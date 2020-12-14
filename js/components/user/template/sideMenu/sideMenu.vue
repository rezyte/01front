<template>
  <div v-if="isSubMenu" id="sideMenu" @click="toggleSubMenu">
    <div class="closeWrapper" @click="prevent">
      <cross></cross>
    </div>
    <div id="sideMenuWrapper" @click="prevent">
      <ul>
        <li v-for="(item, i) in getCats" :key="i" class="parentLi">
          <div class="link" @click="openMySubMenu($event)">
            <svg viewBox="0 0 100 100">
              <path
                  class="arrow"
                  d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"
                  transform="rotate(180deg)"
              ></path>
            </svg>
            <p>{{ item.title }}</p>
          </div>

          <ul class="subMenu">
            <li v-for="(sub, ind) in item.subs" :key="ind">
              <a :href="getHref(sub.slug)" class="prog">{{ sub.title }}</a>
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
  background: white;
  z-index: 555555555555;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

#sideMenuWrapper {
  /* position: absolute; */
  right: 0;
  background: white;
  z-index: 670;
  width: 100vw;
  -webkit-transition: all 0.5s;
  transition: all 0.3s;
  /* overflow: auto; */
  animation: come 0.3s linear forwards;
  width: 100%;
  padding-bottom: 50px;
}

ul {
  padding: 10px 0;
  line-height: 2rem;
  background: white;
}

li {
  text-align: right;
  position: relative;
}

.subMenu {
  background-color: white;
  width: 100%;
  padding: 0;
  height: 0;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  overflow: hidden;
}

.subMenu li {
  width: 95%;
  padding: 15px 0px;

}

.subMenu a {
  padding: 11px 0;
  margin-right: 5px;
  margin-left: 5px;
  font-size: 1.2rem;
}

p {
  font-size: 1.6rem;
  margin-right: 5px;
}

.subMenu a:hover {
  color: #646464;
}

.subMenu li:not(:last-child) {
  border-bottom: 1px solid #bfbfbf;
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
  padding: 20px 0;
}

.closeWrapper {
  margin: 10px;
}

.parentLi:not(:last-child) {
  border-bottom: 1px solid #131313;
}

svg {
  margin-left: 5px;
}
</style>

<script>
import {mapGetters} from "vuex";
import {toggleBodyOverFlow} from "../../mixIns/toggleBodyOverFlow.js";
import {adjustElFromTop} from "../../mixIns/adjustElFromTop.js";
import cross from './cross.vue'

export default {
  mixins: [toggleBodyOverFlow, adjustElFromTop],
  components: {
    cross
  },
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
        next.style.height = `${next.querySelectorAll("li").length * 64}px`;
      } else {
        next.style.height = "0px";
      }
    },
    getHref(title) {
      return `/product-category/${title}`;
    },
  },
  mounted() {
    const menuWrapper = document.querySelector("#sideMenu");
    this.adjustFromTop(menuWrapper, false);
    this.toggleBodyOverFlow("hidden");
    this.cats = this.$store.getters.getCatsWithSubs;


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