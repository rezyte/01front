<template>
  <div id="header">
    <div id="headerWrapper" class="maxIs">
      <div class="logo">
        <a href="/"><img src="/static/public/images/logo2.webp" alt="" /></a>
      </div>
      <div>
        <search-bar></search-bar>
      </div>
      <div class="phone">
        <div class="icon_phone">
          <i class="fas fa-phone fa-2x" title="شماره تلفن"></i>
        </div>
        <div class="number_phone">
          <p>021-77569156</p>
          <p>021-77542719</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#header {
  width: 100%;
  background: #f6f6f4;
  display: flex;
  justify-content: center;
}
.phone {
  display: flex;
  justify-content: space-around;
  align-items: center;
  direction: rtl;
  text-align: right;
}
.number_phone {
  margin-right: 10px;
}
.number_phone p {
  margin: 5px 0;
  text-align: start;
  /*padding-bottom: 1px;*/
}
#headerWrapper {
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
input {
  border: 0;
  min-width: 0;
  flex: 1;
  color: black;
  padding: 0.5rem 1rem;
  border-top-left-radius: 27px;
  border-bottom-left-radius: 27px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  height: 100%;
}
::placeholder {
  color: black;
  opacity: 1;
}

.logo {
  max-width: 220px;
}
.logo img {
  width: 100%;
  height: 100%;
}
@media (max-width: 480px) {
  #header {
    display: none;
  }
}
@media (max-width: 735px) {
  #headerWrapper {
    justify-content: space-around;
  }
}
@media (max-width: 800px) {
  #header {
    display: none;
  }
}
</style>

<script>
import axios from "axios";
import lozad from "lozad";
import searchBar from "./searchBar.vue";
import profileOptions from "../profileOptions/profileOptions.vue";
export default {
  components: {
    searchBar,
    profileOptions,
  },
  created() {
    axios
      .get("/categories-api")
      .then((res) => {
        // console.log("kkk", res.data);
        this.$store.commit("fillCatsWithSubs", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
