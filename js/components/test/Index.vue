<template>
  <div class="order">
    <div class="row">
      <div id="title">
        <h1>عنوان</h1>
      </div>
    </div>
    <div class="line"></div>
    <!-- <div class="row"></div> -->
    <div class="row">
      <div class="w-100">
        <div id="title">
          <h1>مشخصلات مشتری</h1>
        </div>
      </div>
      <div id="info-customers">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">نام</th>
              <th scope="col">نام شرکت</th>
              <th scope="col">نیاز</th>
              <th scope="col">شماره تلفن</th>
              <th scope="col">تاریخ مراجعه</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>thrng</td>
              <td>srmn</td>
              <td>srtjty</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="line"></div>
    <div class="row">
      <div class="w-100">
        <div id="title">
          <h1>فعالیت های انجام شده</h1>
        </div>
      </div>
      <div id="activities">
        <div class="activity">
          <p>kjfbvdflvnsfbhfi'b</p>
        </div>
        <div class="activity">
          <p>kjfbvdflvnsfbhfi'b</p>
        </div>
        <div class="activity">
          <p>kjfbvdflvnsfbhfi'b</p>
        </div>
        <div class="activity">
          <p>kjfbvdflvnsfbhfi'b</p>
        </div>
        <div class="activity">
          <p>kjfbvdflvnsfbhfi'b</p>
        </div>
        <div class="activity">
          <p>kjfbvdflvnsfbhfi'b</p>
        </div>
        <div class="activity">
          <p>kjfbvdflvnsfbhfi'b</p>
        </div>
        <div class="activity">
          <p>kjfbvdflvnsfbhfi'b</p>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="row">
      <div class="w-100">
        <div id="title">
          <h1>یادداشت ها</h1>
        </div>
      </div>
      <div id="notes">
        <div class="create-note">
          <form method="POST" action="">
            <b-form-textarea
              class="m-3 w-50"
              id="textarea-state"
              name="note"
              v-model="text"
              :state="state"
              placeholder="حداقل ده و حداکثر دویست کاراکتر وارد شود"
              rows="3"
              @input="validate"
              maxlength="200"
            >
              ></b-form-textarea
            >
            <input
              class="btn btn-success my-btn"
              type="submit"
              :disabled="!state"
              value="ثبت"
            />
          </form>
        </div>
        <div class="notes">
          <div class="note">
            <p>
              یاها شقملاقهیارذنذ /ثمقلاهخکسذیرئقذلهقلاسهشلذشقنلا
              ش/مثلاکشصخلذسمیترذ
            </p>
          </div>
          <div class="note">
            <p>
              ناقل فاتثدصثنبیرندفکات ثقمتاخقد ثقلاهم لثکتبا ثفلمهاصدرقثنلاثقهلا
              ماثخهباصئدمسایر فتاد54
            </p>
          </div>
          <div class="note">
            <p>ای با بنسح لدححص فمئذثحدفا کنحقتثلخقث نذهخ ثنتاذ م</p>
          </div>
          <div class="note">
            <p>هخکسذیرئقذلهقلاسهشلذشقنلا ش/مثلاکشصخلذسمیترذ</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: ["order"],
  data() {
    return {
      text: "",
      state: null,
    };
  },
  components: {},
  methods: {
    validate() {
      10 <= this.text.length && this.text.length <= 200
        ? (this.state = true)
        : (this.state = false);
    },
  },
  mounted() {
    console.log("order", this.order);
  },
  computed: {
    // subCategories(id){
    //   let cat= this.categories.find(
    //       category => category.id===id
    //   )
    //   console.log(cat)
    //   return cat.sub_categories;
    // }
  },
};
</script>

<style scoped>
.order {
  direction: rtl;
  text-align: right;
  font-family: iranSans !important;
}
#title {
  width: max-content;
  padding: 10px 5px 10px 5px;
  /* background-color: burlywood; */
  margin: 15px 20px 5px 0;
}
#title h1 {
  font-size: 19px;
  font-weight: bold;
  color: var(--blue);
}
.line {
  width: 98%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.24);
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 2px;
}
#info-customers,
#activities,
#notes {
  width: 94%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  /* padding:5px 10px 5px 10px; */
  background-color: #fff;
}
#activities {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: space-around;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 15px;
}
.activity {
  width: 250px;
  height: 80px;
  border-radius: 1px;
  background-color: white;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  /* margin:20px 5px 20px 5px; */
  margin: 20px 5px;
  padding: 10px;
}
.my-btn {
  width: max-content;
  padding: 6px 20px;
  margin-right: 2%;
}
.notes {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  align-content: space-around;
  /* background-color: lawngreen; */
  margin-top: 10px;
  padding: 10px;
}
.note {
  width: auto;
  margin: 10px 16px 10px 0;
  background-color: #fff;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  padding: 10px 10px 0 10px;
}
.note p {
  font-size: 17px;
}
</style>
