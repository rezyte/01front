<template>
  <div id="technicalDetail">
<!--    <p class="title">مشخصات فنی محصول</p>-->
    <h2 class="font-weight-bold">مشخصات فنی محصول</h2>
    <table>
      <tbody>
        <tr v-for="p in product.detail">
          <td>{{ p.value }}</td>
          <th>:{{ getVar(p.variation.name) }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["product"],
  created() {
    console.log("product",this.product)
  },
  methods:{
    getVar(v){
      if(v===null || v===undefined){
        return '-'
      }
      return v
    }
  }
};
</script>

<style scoped>
#technicalDetail {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 5px;
}
table {
  width: max-content;
  max-width: 100%;
  margin-bottom: 20px;
}
td {
  text-align: right;
   /*width:80%*/
}
td,
th {
  padding: 10px;
  font-size: 18px;
}
td{
  direction: rtl;
}
tr:not(:first-child) {
  border-top: 1px solid rgb(191, 202, 202);
}
tr:hover {
  background: rgb(221, 215, 215);
}
th {
  text-align: right;
  width: max-content;
}
.title{
  font-size: 18px;
  font-weight: bold;
}
</style>
