<template>
  <div id="top">
    <div id="topWrapper">
      <div class="names">

        <div class="details">
          <div class="compony det">
            <p>{{$store.state.factoreItems.to.componyName}}</p>

            <p>{{$store.state.factoreItems.to.phone}}</p>
            <p> : </p>
            <p> &nbsp; نام شرکت  &nbsp; </p>
          </div>
          <div class="phone det" style="display: flex">
            <p> {{$store.state.factoreItems.to.phone}} </p>
            <p> : </p>
            <p> &nbsp;شماره تماس &nbsp;</p>


          </div>
        </div>

        <div class="for det">
          <p>{{$store.state.factoreItems.to.name}}</p>
          <p> : </p>
          <p>&nbsp; پیش فاکتور برای &nbsp;</p>
        </div>
      </div>
      <div class="descs">
        <p>احتراما با توجه به درخواست شما فاکتور {{$store.state.factoreItems.factoreDetails.productName}} با توجه به توضیحات و عکس ها فرستاده شده خدمتتان تقدیم میگردد</p>
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
  direction: rtl;
  text-align: right;
}
.descs{
  margin-top: 20px;
}
.det{
  display: flex;
}
</style>