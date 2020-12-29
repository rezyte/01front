<template>
  <ul id="custome__pagination" >
    <li v-if="showFirstPage" :class="{active:item==currentPage}"><a :href="url+1">1 </a></li>
    <span v-if="showFirstPage" class="dot">...</span>
    <li v-for="(item) in getShoudShow" :class="{active:item==currentPage}"><a :href="url+item">{{ item }} </a></li>
    <span v-if="showLastPAge" class="dot">...</span>
    <li v-if="showLastPAge" :class="{active:item==currentPage}"><a :href="url+pages"> {{ pages }} </a></li>
  </ul>
</template>
<script>
export default {
  name: "m",
  props: ['perPage', 'items', 'padding', 'currentPage', 'url','pageNums'],
  data() {
    return {
      pages: null,
      shoulShow: null
    }
  },
  created() {
    // const pages = Math.ceil(this.items / this.perPage)
    const pages = +this.pageNums
    this.pages = pages
    const shouldShow = []
    for (let i = this.padding; i >= 1; i--) {
      const shouldAppend = +this.currentPage - i
      if (!(shouldAppend <= 0)) {
        shouldShow.push(shouldAppend)
      }
    }

    shouldShow.push(this.currentPage)

    for (let i = 1; i <= this.padding; i++) {
      const shouldAppend = +this.currentPage + i
      if (!(shouldAppend > pages)) {
        shouldShow.push(shouldAppend)
      }
    }
    this.shoulShow = shouldShow

    console.log('shouldShow',shouldShow)
  },
  computed: {
    getShoudShow() {
      return this.shoulShow
    },
    showFirstPage() {
      const shouldShow = this.shoulShow || []
      const find = shouldShow.find(s => s == 1)
      return find == undefined ? true : false
    },
    showLastPAge() {
      const shouldShow = this.shoulShow || []
      const find = shouldShow.find(s => s == this.pages)
      return find == undefined ? true : false
    }
  }
}
</script>
<style scoped>
li {
  list-style-type: none;
  margin: 5px;
  background: white;
  border: 1px solid black;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

}
ul {
  display: flex;
  align-items: center;
}
a {
  color: #555;
  text-decoration: none;
  color: rgb(9, 111, 211);
  font-weight: bold;
  padding:16px;
}
.dot {
  font-size: 20px;
  position: relative;
  top: -5px;
}
.active {
  background: rgb(9, 111, 211);
  position: relative;
  top: -15px;
}
.active a {
  color: white;
}

li:not(.active):hover,li:not(.active):hover a{
  transition: all 0.2s linear;
}
li:not(.active):hover{
  background: rgb(9, 111, 211);

}
li:not(.active):hover a{
  color: white;

}
</style>