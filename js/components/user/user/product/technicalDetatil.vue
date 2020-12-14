<template>
  <div id="technicalDetail">
    <table>
      <tbody>
        <tr v-for="p in product.detail">
          <td>{{ p.value }}</td>
          <th>:{{ p.variation.name }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
#technicalDetail {
  display: flex;
  justify-content: center;
}
table {
  width: 95%;
  max-width: 100%;
  margin-bottom: 20px;
}
td {
  text-align: right;
  /* width:85% */
}
td,
th {
  padding: 10px;
}
tr:not(:first-child) {
  border-top: 1px solid rgb(191, 202, 202);
}
tr:nth-child(odd):hover {
  background: rgb(221, 215, 215);
}
th {
  text-align: right;
  width: max-content;
}
</style>
