<template>
  <div id="breadCrumb" ref="bread">
    <ul v-if="type==='product'">
      <li>
        <a :href="'/products/product-detial/'+JSON.parse(product).slug">{{ JSON.parse(product).title }}</a>

      </li>
      <li>
        <a :href="'/product-category/'+JSON.parse(product).category[0].slug"><span>/</span>{{
            JSON.parse(product).category[0].title
          }}</a>
      </li>
      <li>
        <a href="/"><span>/</span>خانه</a>
      </li>
    </ul>

    <ul v-if="type==='category'">

      <li>
        <a :href="'/product-category/'+JSON.parse(products)[0].category[0].slug">{{
            JSON.parse(products)[0].category[0].title
          }}</a>
      </li>
      <li>
        <a href="/"><span>/</span>خانه</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "breadCrumb",
  props: ['product', 'type', 'products'],
  created() {
    console.log(JSON.parse(this.products), 'this.products')
  },
  mounted() {
    const bread = this.$refs.bread
    this.$nextTick(() => {
      setTimeout(() => {
        bread.scrollLeft = 5000
        document.body.addEventListener('resize', () => {
          bread.scrollLeft = 5000
        })
      }, 100)
    })

  },
}
</script>

<style scoped>
#breadCrumb {
  width: 100%;
  margin-top: 30px;
  overflow: auto;
  justify-content: flex-end;
  display: flex;
  scroll-margin-inline: 5000px;
}

#breadCrumb ul {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  width: max-content;
  height: 30px;
  overflow: auto;
}

a {
  direction: rtl;
  text-align: right;
  color: var(--logoBlueUser);
  margin: 3px;
}

span {
  color: black;
  margin: 3px;
}
</style>
