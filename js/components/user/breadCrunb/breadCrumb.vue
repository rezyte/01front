<template>
  <div id="breadCrumb">
    <ul v-if="type==='product'">
      <li>
        <a :href="'/products/product-detial/'+JSON.parse(product).slug">{{ JSON.parse(product).title }}</a>

      </li>
      <li>
        <a :href="'/product-category/'+JSON.parse(product).category[0].slug"><span>/</span>{{ JSON.parse(product).category[0].title }}</a>
      </li>
      <li>
        <a href="/"><span>/</span>خانه</a>
      </li>
    </ul>

    <ul v-if="type==='category'">

      <li>
        <a :href="'/product-category/'+JSON.parse(products)[0].category[0].slug">{{ JSON.parse(products)[0].category[0].title }}</a>
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
  props: ['product', 'type','products'],
  created() {
    console.log(JSON.parse(this.products)[0],'this.products')
  }
}
</script>

<style scoped>
#breadCrumb {
  width: 100%;
  margin-top: 30px;
}

#breadCrumb ul {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
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