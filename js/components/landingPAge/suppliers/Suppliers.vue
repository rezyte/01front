<template>
  <div id="suppliers">
    <div class="title p-2">
      <h1>  لیست مشتری ها(مشاهده اطلاعات کامل بعد از ثبت نام)</h1>
    </div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">نام</th>
        <th scope="col">نام شرکت</th>
        <th scope="col">شماره تماس</th>
        <th scope="col">توضیحات</th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="info">
        <th scope="row"></th>
        <td v-text="info.name"></td>
        <td class="blur"> برای مشاهده ثبت نام کنید</td>
        <td class="">xxx54619xxx</td>
        <td>
          <div class="comments" ref="comments" @mouseout="showCommentsLess()" @mouseover="showCommentsMore()">
            <p id="content_momments" ref="content_momments" v-text="info.extra_discription">
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
  props: ["info"],
  methods: {
    showCommentsMore() {
      // let content=this.$refs.content_momments
      // console.log(content);
      let com = this.$refs.comments;
      com.classList.add("comments2")
    },
    showCommentsLess() {
      let com = this.$refs.comments;
      com.classList.remove("comments2")
    }
  },
  created() {
    console.log(this.info)
    // let me=JSON.stringify(this.info);
    // console.log(JSON.parse(this.info))
    // console.log(JSON.stringify(this.info))
  }
};
</script>

<style scoped>
#suppliers {
  width: 100%;
  direction: rtl;
  text-align: right;
  padding: 5px;
}

#suppliers table {
  width: 98%;
  margin-top: 1%;
  /* margin-right: 2%; */
  padding: 5px;
  border: none;
}

.comments {
  width: 40%;
  height: 100px;
  margin-left: 20px;
  position: relative;
  border-radius: 5px;
  padding: 2.5px;
  overflow: hidden;
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

.blur {
  filter: blur(0.5px);
  /*filter: blur(8px);*/
  /*-webkit-filter: blur(8px);*/
}
.title h1{
  font-size: 17px;
  color: var(--blue);
  font-weight: bold;
}
@media screen and (max-width: 576px) {
  .comme-d {
    display: none;
  }
}
</style>
