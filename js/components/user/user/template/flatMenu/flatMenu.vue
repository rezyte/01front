<template>
  <div id="flatMenu" >
    <div id="flatMenuWrapper">
      <ul>
        <li class="parentLi" v-for="(item, i) in getCats" :key="i">
          <div class="link bg-danger" >
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
      </ul>
    </div>
  </div>
</template>

<style scoped>
#flatMenu{
  width: 100%;
  min-height: 100vh;
  background-color: red;
}
li:not(:first-child){
  margin-top: 20px;
}
#flatMenuWrapper ul{
  padding-right: 10px;
}
li{
  cursor: pointer;
  margin: 0;
  width: 100%;
}
.parentLi{
  position: relative;
}
.subMenu{
  position: absolute;
  right: 211px;
  top:-9px;
  background: white;
  display: none;
  box-shadow: 0px 0px 2px rgba(0,0,0,0.5);
  padding:10px;
}
ul{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.parentLi:hover .subMenu{
  display: block;
}
li{
  text-align: right;
}
.parentLi:hover svg{
  fill: #0872cd;
  transition: all 0.3s;
  transform: translateX(-5px);
}
svg{
  width: 15px;
  margin-left: 10px;
}
.link{
  display: flex;
  justify-content: space-between;
}
a{
  color:#0872cd
}
</style>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  methods: {
    getHref(title) {
      return `/categories/${title}`;
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
      console.log('mmmmm',this.$store.getters.getCatsWithSubs)
      return this.$store.getters.getCatsWithSubs;
      
    },
  },
};
</script>
