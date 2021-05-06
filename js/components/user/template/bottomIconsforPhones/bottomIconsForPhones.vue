<template>
  <div id="bottomIconsForPhones">
    <div id="bottomIconsForPhonesWrapper">
      <a href="/"><home></home></a>
      <a href="/blog/posts/"><blog></blog></a>
      <!--        <a v-if="user.is_logined" href="/users/entry/"><prifile></prifile></a>-->
      <!--        <a v-if="!!userInfo.is_logined" href="/users/profile/orders/"><prifile></prifile></a>-->
      <div><prifile></prifile></div>

      <!--        <a v-else><prifile></prifile></a>-->
      <cats @click="toggleSubMenu()"></cats>
    </div>
  </div>
</template>

<script>
import home from "./home/home.vue";
import blog from "./blog/blog.vue";
import prifile from "./profile/profile.vue";
import cats from "./categories/cats.vue";
import { mapGetters } from "vuex";
import sideMenu from "../sideMenu/sideMenu.vue";
export default {
  name: "bottomIconsForPhones",
  components: {
    home,
    blog,
    sideMenu,
    cats,

    prifile,
  },
  data() {
    return {
      user: userInfo,
    };
  },
  mounted() {
    window.addEventListener("orientationchange", (e) => {
      if (this.$store.state.isSubMenuOpen) {
        this.$store.dispatch("toggleSubMenu");
      }
    });
    window.addEventListener("resize", (e) => {
      if (window.innerWidth > 800) {
        if (this.$store.state.isSubMenuOpen) {
          this.$store.dispatch("toggleSubMenu");
          document.body.style.overflowY = "";
        }
      }
    });
  },
  methods: {
    toggleSubMenu() {
      console.log("hhe");
      if (window.innerWidth >= 799) {
        return;
      }
      this.$store.dispatch("toggleSubMenu");
    },
  },
  computed: {
    ...mapGetters(["isSubMenu"]),
    isSubMenuOpen() {
      return this.isSubMenu;
    },
  },
};
</script>

<style scoped>
#bottomIconsForPhones {
  position: fixed;
  background: white;
  bottom: 0;
  height: 70px;
  width: 100%;
  z-index: 555555;
  align-items: center;
  box-shadow: 1px 1px 14px black;
  display: None;
}
#bottomIconsForPhonesWrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

#bottomIconsForPhonesWrapper .bottomIconsWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#bottomIconsForPhonesWrapper >>> .bottomIconsWrapper p {
  margin-top: 10px;
  font-weight: bold;
  font-size: 4vmin;
}
#bottomIconsForPhonesWrapper >>> a,
#bottomIconsForPhonesWrapper >>> svg,
#bottomIconsForPhonesWrapper >>> img {
  cursor: pointer;
}
@media (max-width: 800px) {
  #bottomIconsForPhones {
    display: flex;
    width: 100%;
  }
  #bottomIconsForPhonesWrapper {
    width: 100%;
  }
}
#bottomIconsForPhonesWrapper a{
  transition: all 0.4s;
}
#bottomIconsForPhonesWrapper a:hover{
  text-underline-position: under;
  /* border-bottom: 1px solid #000 !important; */
  /* text-decoration: none!important; */
  /* padding-bottom: 5px!important; */
  /* text */
}
</style>