<template>
  <div id="miniOrders">
    <table>
      <tr>
        <th>تاریخ ارسال</th>
        <th>موضوع</th>
      </tr>
      <tr>
        <td>1399/27/11</td>
        <td>خط تولید سیم و کابل</td>

      </tr>
    </table>
    <a href="/users/profile/orders/">مشاهده همه درخواست ها</a>
  </div>
</template>

<script>
export default {
name: "miniorders"
}
</script>

<style scoped>
table{
  width: max-content;
}
th{
  font-size: 13pt;
  font-weight: bold;
}
tr,th{
  text-align: center;
  border-top: 10px;
}
tr:not(:first-child){
  border-top: 1px solid #b4b4b4;
}
td,th{
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 30px;
  text-align: right;
}
#miniOrders{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 5px;
}
a{
  color: #3c70f0;
}
</style>