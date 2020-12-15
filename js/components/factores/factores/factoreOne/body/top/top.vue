<template>
  <div id="top">
    <div id="topWrapper">
      <div class="names">

        <div class="details">
          <div class="compony">
            <p> نام شرکت: دمیرکو دمیرکو</p>
          </div>
          <div class="phone">
            <p>شماره تماس: 09367134752 </p>
          </div>
        </div>

        <div class="for">
          <p>پیش فاکتور برای: سرکار خانم فلانی</p>
        </div>
      </div>
      <div class="descs">
        <p>احتراما با توجه به درخواست شما فاکتور یکدستگاه درب بند تمام اتوماتیک با توجه به توضیحات و عکس ها فرستاده شده خدمتتان تقدیم میگردد</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top"
}
</script>

<style scoped>
#top{
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
#topWrapper{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
p{
  direction: rtl;
  text-align: right;
}
.names{
  display: flex;
justify-content: space-between;
  width: 100%;
}
.details{
  display: flex;
  justify-content: flex-end;
  width: 400px;
}
.compony{
  margin-right: 20px;
}
p{
  font-weight: bold;
}
.descs{
  margin-top: 20px;
}
</style>