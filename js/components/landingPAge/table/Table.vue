<template>
  <div id="table">
    <table border="0" cellspacing="0" cellpadding="0">
      <!-- <caption>Monthly savings</caption> -->
      <!-- <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead> -->
      <tbody>
        <tr>
          <th scope="row">نام</th>
          <td>جلال</td>
        </tr>
        <tr>
          <th scope="row">نام خانوادگی</th>
          <td>شجیعی</td>
        </tr>
        <tr>
          <th scope="row">نام شرکت</th>
          <td>دمیرکو</td>
        </tr>
        <tr>
          <th scope="row">شماره تماس</th>
          <td>0912256xxxx</td>
        </tr>
        <tr class="">
          <th scope="row">توضیحات</th>
          <!-- <td>yjty -->
          <!-- <textarea readonly cols="30" rows="10" class="text-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni placeat, recusandae praesentium dolorum repellendus qui dicta similique architecto? Saepe sapiente culpa totam voluptatibus cumque ea molestiae tenetur sit dolor repudiandae.
          </textarea> -->
          <!-- </td> -->
        </tr>
      </tbody>
    </table>
    <div class="w-75 m-auto text-right">
      <p>
        همانطور که میدانید این روزها بهترین ابزار محبت به دیگران ارسال پیام های
        پر محتوا و زیبا به آنها است، گاهی مواقع شنیدن یک خط جمله دلنشین و زیبا
        می تواند زندگی یک فرد را متحول کند، حس و حالش را تغییر دهد، او را وارد
        دنیای جدیدی بکند، تلنگر بزرگی به او وارد کند، چنانچه در زندگی خود با
        افرادی روبرو هستید که در زندگی خود فقط نیاز به یک تلنگر دارند
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
};
</script>

<style scoped>
#table {
  width: 100%;
  /* background-color: rosybrown; */
  direction: rtl;
  text-align: right;
}
#table table {
  width: 60%;
  margin-top: 7%;
  margin-right: 10%;
  padding: 5px;
  border: none;
}
</style>