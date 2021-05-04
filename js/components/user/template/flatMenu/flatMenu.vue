<template>
  <div id="flatMenu">
    <div id="flatMenuWrapper">
      <ul ref="ul" class="mb-2">
        <li class="parentLi" v-for="(item, i) in getCats" :key="i">
          <a  :href="'/categories/'+item.slug">
            <div class="link">
              <svg viewBox="0 0 100 100">
                <path
                    d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"
                    class="arrow"
                    transform="rotate(180deg)"
                ></path>
              </svg>
              <h4 class="text-dark h-100">{{ item.title }}</h4>
            </div>
          </a>
          <div class="subMenu">
            <ul class="subMenuWrapper">

              <li v-for="(sub, ind) in item.subs" :key="ind">
                <h5><a class="prog" :href="getHref(sub.slug)">{{ sub.title }}</a></h5>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  methods: {
    getHref(title) {
      return `/product-category/${title}`;
    },
  },
  data() {
    return {
      cats: null,
    };
  },
  computed: {
    ...mapGetters(["isSubMenu"]),
    getCats() {
      // console.log('ffffffff',this.$store.getters.getCatsWithSubs)
      return this.$store.getters.getCatsWithSubs;
    },
  },
  mounted() {
    const subs = document.querySelectorAll('.subMenu')
    console.log('subs', subs)
    const ul = this.$refs.ul
    const top = ul.getClientRects().top
    subs.forEach(s => {
      s.style.top = top
    })
  }
};
</script>

<style scoped>
#flatMenu {
  width: 100%;
  /*background-color: red;*/
  min-height: 150px;
  background-color: white;
  opacity: 0.96;
}

#flatMenuWrapper ul {
  padding-right: 10px;
}

li {
  cursor: pointer;
  margin: 0;
  width: 100%;
}

.parentLi {
  width: 100%;
  /*height: 50px;*/
  /*background-color: blue;*/
}
.subMenu {
  position: absolute;
  min-height: 100vh;
  right: 250px;
  top: 0;
  background: white;
  display: none;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  padding: 10px;
  flex-direction: column;
  flex-wrap: wrap;
  /*top: 0*/

}

ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

ul.subMenu li {
  width: max-content;
}

.parentLi:hover .subMenu {
  display: block;
}

li {
  text-align: right;
}

.parentLi:hover svg {
  fill: #0872cd;
  transition: all 0.3s;
  transform: translateX(-5px);
}

svg {
  width: 15px;
  margin-left: 10px;
}

.link {
  width: 100%;
  height: 100%;
  padding-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /*background-color: red;*/
}

a {
  color: #0872cd
}

.subMenuWrapper li {
  width: 220px;
  margin: 10px;
}

#flatMenu:hover, .subMenu:hover {
  cursor: default;
}

.subMenuWrapper li:hover a {
  color: #284c6b;
}

.subMenuWrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: max-content;
  max-width: 500px;
  justify-content: flex-end;

}

.parentLi:hover {
  /*border-top: 1px solid rgba(0,0,0,0.2);*/
  /*border-bottom: 1px solid rgba(0,0,0,0.2);*/
  box-shadow: 0px 1px 1px -1px rgb(0, 0, 0), 0px -1px 1px -1px black;
}
.parentLi a{
  width: 100%;
  text-decoration: none;
  transition: all 0.3s;
  margin: 0;
}
.parentLi a:hover .link h4{
  color: var(--blue)!important;
}
h4{
  font-size: 17px;
}
h5{
  font-size: 15.5px;
}
</style>

