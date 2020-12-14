<template>
  <div id="allTickets">
    <div id="allTocketsWrapper">
      <table>
        <tr>
          <th>مشاهده</th>
          <th>اولویت</th>

          <th>تاریخ ارسال</th>
          <th>شماره تیکت</th>
        </tr>
        <tr>
          <td style="display: flex;justify-content: center;align-items: center"><a href="#" style="background: rgb(9,111,211);height: 34px;width: 50px;display: flex;justify-content: center;align-items: center"><eye></eye></a></td>
          <td>بالا</td>
          <td>1399/27/11</td>
          <td>1</td>

        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import eye from "../../user/template/eye/eye.vue";
export default {
name: "allTickets",
  components:{
    eye
  }
}
</script>

<style scoped>
table{
  width: 100%;
  min-height: 80px;
  min-width: 800px;
}
#allTocketsWrapper{
  overflow: auto;
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
}
td svg{
  width: 25px;
  height: 25px;
}
td svg path{
  fill: white;
}
</style>