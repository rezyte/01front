<template>
  <div class="rows">
    <div class="rowsWrapper">
      <table>
        <tr style="background: rgb(230,230,230)">




          <th>
            قیمت کل
            <br>
            (تومان)
          </th>
          <th>
            قیمت واحد
            <br>
            (تومان)
          </th>
          <th class="nums">تعداد</th>
          <th style="width: 250px;background: var(--blue);position: relative;color: white">

            عنوان


            <div class="arrow-left"></div>
          </th>
          <th style="background: var(--blue);color: white">شماره</th>
        </tr>
        <div class="divider"></div>

        <tr v-for="(item,i) in getRows">

          <td>{{item.wholePrice}}</td>
          <td>{{item.singlePrice}}</td>
          <td style="padding-right: 5px">{{item.count}}</td>
          <td>{{item.title}}</td>
          <td>{{i+1}}</td>

        </tr>


      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "rows",
  computed:{
    getRows(){
      return this.$store.state.factoreItems.tableItems
    }
  }
}
</script>

<style scoped>
table{
  width: 100%;
  border-collapse: collapse;
}
th{
  font-size: 10pt;
}
td{
  vertical-align: middle;
  width: max-content;
  padding: 8px 0;
  text-align: center;
}
tr:not(:first-child){
  border-bottom: 1px solid rgb(165,165,163);
}
tr:last-child{
  border-bottom: none
}
th{
  padding: 4px 0
}
tr{
  margin-top: 20px;
}
.nums{
  padding-right: 15px;
}

.arrow-left {
  width: 0;
  height: 0;
  border-top: 26px solid transparent;
  border-bottom: 26px solid transparent;
  top: 0;
  border-right: 25px solid var(--blue);
  left: -25px;
  position: absolute;
}
td:nth-child(odd){
  background: rgb(230,230,230);
}
.divider{
  height: 8px;
}
@media print {
  .nums{
    padding-right: 22px;
  }
}
</style>