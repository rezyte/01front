<template>
  <div id="descs">
    <div id="descsWrapper">
      <ul>
        <li> <span>*</span> &nbsp; <p>اعتبار پشی فاکتور تا 2 روز کاری</p> </li>
        <li> <span>*</span> &nbsp; <p>اعتبار پشی فاکتور تا 2 روز کاری</p> </li>
        <li> <span>*</span> &nbsp; <p>اعتبار پشی فاکتور تا 2 روز کاری</p> </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "descs"
}
</script>

<style scoped>
#descs{
  margin-top: 20px;
}
ul{
  direction: rtl;

}
li{
  list-style-type: none;
  line-height: 2rem;
  display: flex;
  align-items: center;

}
span{
  font-weight: bold;
  font-size: 14pt;
}
</style>