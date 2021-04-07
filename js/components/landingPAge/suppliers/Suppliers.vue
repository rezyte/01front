<template>
  <div id="suppliers">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">نام</th>
          <th scope="col"><span>نام خانوادگی</span></th>
          <th scope="col">نام شرکت</th>
          <th scope="col">شماره تماس</th>
          <th scope="col" class="comme-d">توضیحات</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <div class="comments d-none d-sm-block" ref="comments" @mouseout="showCommentsLess()" @mouseover="showCommentsMore()">
              <p id="content_momments" ref="content_momments">
                2 به دوستان و آشنایان خود روابط عاطفی خود را با او بهبود ببخشید
                و به دوستان و آشنایان خود روابط عاطفی خود را با او بهبود ببخشید
                و حال خوبی به او هدیه دهید شاید هم این پیام شما الهام بخش زندگی
                عزیزانتان باشد و دیدگاه آنها را به کل در مورد زندگی تغییر
                دهد.حال خوبی به او هدیه دهید شاید هم این پیام شما الهام بخش
                زندگی عزیزانتان باشد و دیدگاه آنها را به کل در مورد زندگی تغییر
                دهد.
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Suppliers",
  methods: {
    showCommentsMore() {
      // let content=this.$refs.content_momments
      // console.log(content);
      let com = this.$refs.comments;
      com.classList.add("comments2")
    },
    showCommentsLess(){
       let com = this.$refs.comments;
      com.classList.remove("comments2")
    }
  },
};
</script>

<style scoped>
#suppliers {
  width: 100%;
  direction: rtl;
  text-align: right;
}
#suppliers table {
  width: 98%;
  margin-top: 4%;
  /* margin-right: 2%; */
  padding: 5px;
  border: none;
}
.comments {
  width: 40%;
  height: 150px;
  margin-left: 20px;
  position: relative;
    border-radius: 5px;
  padding: 5px;
  overflow:  hidden;
  left: 0;
  top: 0;
  /* cursor: pointer; */
}
.comments2 {
  width: 100%;
  height: 400px;
  left: 0;
  top: 0;
  position: relative;
  border-radius: 5px;
  padding: 10px;
  overflow: hidden;
}
@media screen and (max-width:576px) {
  .comme-d{
    display: none;
  }
}
</style>