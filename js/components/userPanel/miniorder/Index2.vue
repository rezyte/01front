<template>
  <div id="p_supplier">
    <div class="row">
      <div id="card-right">
        <div id="head">
          <div id="brand">
            <div id="picture">
              <img src="" alt="" />
            </div>
            <div id="title">
              <h1>شرکت سکوی خرید و فروش رسا</h1>
            </div>
          </div>
        </div>
        <div class="w-100">
          <div class="cards">
            <div class="head_card">
              <h2>اطلاعات تماس</h2>
            </div>
            <div class="row_card" id="phone_card">
              <div>
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>شماره تلفن</span>
              </div>
              <div class="case"><span>dshvyfylyfv</span></div>
            </div>
            <div class="row_card" id="email_card">
              <div>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>ایمیل</span>
              </div>
              <div class="case"><span>biiib@gmail.com</span></div>
            </div>
            <div class="row_card" id="id_card">
              <div><span>شناسه دمیرکو</span></div>
              <div class="case"><span>5465151</span></div>
            </div>
          </div>
          <div class="cards" id="customer_requirement">
            <div class="head_card">
              <h2>نیاز مشتری</h2>
            </div>
            <div class="row_card">
              <p v-text="JSON.parse(order)"></p>
            </div>
            <!-- <div class="row_card">
                <p>serthb</p>
            </div>
            <div class="row_card">
                <p>aeh</p>
            </div> -->
          </div>
          <div class="cards">
            <div class="head_card">
              <h2>اطلاعات ارسال شده مشتری</h2>
            </div>
            <div class="assets"></div>
          </div>
        </div>
      </div>
      <div id="card-left">
        <div class="cards-left">
          <div class="title_cardLeft mt-4">
            <h1>پیشرفت فروش</h1>
          </div>
          <div id="items_sell">
            <div class="item_sell" v-for="(me ,index) in JSON.parse(customer).messages.messages" :key="index">
              <p v-text="me.content"></p>
            </div>
            <!-- <div class="item_sell">
              <p>کهشارکعسذنتل</p>
            </div>
            <div class="item_sell">
              <p>گخهثلکبکخهسر</p>
            </div>
            <div class="item_sell">
              <p>اهاهلرکعثلهثسیرلکع</p>
            </div>
            <div class="item_sell">
              <p>عثهلبسخعی</p>
            </div>
            <div class="item_sell">
              <p>خثالکخل</p>
            </div> -->
          </div>
        </div>
        <!-- <div class="cards-left">
          <div class="title_cardLeft">
            <h1>وضعیت مشتری</h1>
          </div>
          <div id="progress_state">
            <k-progress percent="70" />
          </div>
        </div> -->
        <div class="cards-left">
          <label class="title_cardLeft">
            <h1>یادداشت ها</h1>
          </label>
          <div id="notes">
            <form action="" method="post">
              <textarea
                name="note"
                id="note"
                cols="20"
                rows="3"
                placeholder="متن یادداشت را وارد کنید"
              ></textarea>
              <div class="form-group">
                <input type="submit" value="ثبت" class="save_note" />
              </div>
            </form>
          </div>
        </div>
        <div class="cards-left">
          <div class="item_note">
            <!-- <div id="username">
              <h3>نام کاربری</h3>
            </div> -->
            <div id="content">
              <div>
                <form action="" id="form_edit">
                  <textarea
                    name="editBox"
                    id="editBox"
                    cols="40"
                    rows="2"
                  ></textarea>
                  <div class="form-inline">
                    <input
                      type="submit"
                      value="ثبت"
                      class="btn-edit"
                      id="btn-edit-record"
                    />
                    <input
                      @click="hide_box_edit"
                      type="button"
                      value="لغو"
                      class="btn-edit"
                      id="btn-edit-cancel"
                    />
                  </div>
                </form>
              </div>
              <p id="text_content">قرار حضوری گزاشته شد</p>
            </div>
            <div class="cr">
              <div id="date_item">
                <i class="fas fa-clock"></i>
                <span>1/5/1400</span>
              </div>
              <div class="crud">
                <ul>
                  <li @click="show_box_edit">ویرایش</li>
                  <li>حذف</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      box_edit: false,
    };
  },
  props: ["order", "customer"],
  created(){
    console.log('order',JSON.parse(this.order))
    console.log('customer',JSON.parse(this.customer))
  },
  computed:{
    
  },
  methods: {
    show_box_edit() {
      let p = document.getElementById("text_content");
      let value = p.innerText;
      p.style.display = "none";
      let form_edit = document.getElementById("form_edit");
      form_edit.style.display = "block";

      let editBox = document.getElementById("editBox");
      editBox.value = value;
      editBox.focus();
      // val.value="tfhtrh";
    },
    hide_box_edit() {
      let p = document.getElementById("text_content");
      p.style.display = "block";
      let form_edit = document.getElementById("form_edit");
      form_edit.style.display = "none";
    },
  },
};
</script>

<style scoped>
h1,
h2,
h3 {
  color: rgba(0, 0, 0, 0.829);
}
p,
span {
  color: rgba(0, 0, 0, 0.767);
}
#p_supplier {
  width: 85%;
  /* float: left; */
  position: absolute;
  right: 230px;
  direction: rtl;
  text-align: right;
  background: red;
  padding: 0 15px;
}
#card-right {
  width: 68%;
  background-color: rgb(238, 238, 238);
  /* height: 800px; */
  /* overflow: scroll; */
}
#card-left {
  width: 32%;
  background-color: rgb(238, 238, 238);
  border-right: 2px solid rgba(0, 0, 0, 0.123);
}
#head {
  width: 100%;
  height: 120px;
  background-color: white;
}
#brand {
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
  margin-top: 25px;
}
#picture {
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 50%;
}
#title {
  margin-right: 10px;
}
#title h1 {
  font-size: 22px;
  font-weight: bold;
}
.cards {
  width: 96%;
  margin: 20px auto;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 5px 6px 3px rgb(226, 226, 226);
}
.head_card {
  width: 100%;
  height: 40px;
  background-color: whitesmoke;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  box-sizing: border-box;
}
.row_card {
  width: 100%;
  height: 60px;
  display: inline-flex;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.123);
  padding-right: 10px;
  padding-top: 5px;
  box-sizing: border-box;
}
.head_card h2 {
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 0;
  box-sizing: border-box;
}
.row_card span,
.row_card p {
  font-size: 15px;
  font-weight: bold;
  margin-right: 5px;
}
.case {
  margin-right: 10%;
}
.assets {
  width: 98%;
  height: 300px;
  margin: 10px auto;
  /* background-color: blueviolet; */
  border: solid 0.5px rgba(0, 0, 0, 0.123);
}
.cards-left {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  /* background-color: teal; */
}
.title_cardLeft h1 {
  font-size: 22px;
  font-weight: bold;
  /* background-color: teal; */
}
#items_sell {
  width: 98%;
  margin: 10px auto;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
}
.item_sell {
  width: 130px;
  height: 32px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 5px 6px 3px rgb(226, 226, 226);
  border-radius: 15px;
  margin: 5px 0;
  padding: 5px;
  box-sizing: border-box;
  transition: all 0.2s;
}
.item_sell:hover {
  box-shadow: 0 7px 8px 5px rgb(210, 210, 210);
  cursor: pointer;
}
.item_sell p {
  font-size: 15px;
  font-weight: bold;
  padding-right: 3px;
}
#progress_state {
  width: 98%;
  margin: 10px auto;
  padding: 5px;
  text-align: center;
}
#notes {
  width: 98%;
  margin: auto;
  padding: 5px;
}
.save_note {
  width: 60px;
  background-color: #007bffaf;
  border-radius: 3px;
  color: white;
  border: 0.1px solid rgba(66, 66, 250, 0.336);
  padding: 5px;
  box-sizing: border-box;
  transition: all 0.2s;
  font-size: 17px;
  font-weight: bold;
  margin: 5px;
  text-align: center;
}
.save_note:hover {
  background-color: #007bff;
}
form textarea {
  font-size: 16px;
  font-weight: bold;
  padding: 5px;
}
form textarea::placeholder {
  font-size: 16px;
  font-weight: bold;
  padding-right: 2px;
}
.item_note {
  width: 93%;
  margin: 10px auto;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 5px 6px 3px rgb(226, 226, 226);
}
#username {
  width: 100%;
  height: 40px;
  padding: 10px;
}
#username h3 {
  font-size: 17px;
  font-weight: bold;
}
#content {
  width: 100%;

  /* background-color: rosybrown; */
  padding: 9px 10px 5px 5px;
  box-sizing: border-box;
}
#content p {
  font-size: 14px;
  font-weight: bold;
}
.cr {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  /* background-color: steelblue; */
}
#date_item {
  width: max-content;
  padding: 5px 10px;
  box-sizing: border-box;
  /* background-color: tomato; */
}
.crud {
  width: max-content;
  padding: 5px 10px;
  box-sizing: border-box;
}
.crud ul {
  width: 100px;
  /* background-color: seagreen; */
  display: inline-flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  list-style: none;
}
.crud ul li {
  width: 45px;
  /* background-color: orange; */
  /* padding: 5px; */
  text-align: right;
  color: rgba(0, 0, 0, 0.411);
  /* padding-right: 10px; */
  font-size: 13px;
  font-weight: bolder;
}
.crud ul li:hover {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.686);
}
#form_edit {
  display: none;
}
.btn-edit {
  width: 40px;
  height: 25px;
  /* padding: 5px; */
  color: 14px;
  font-weight: bold;
  margin-right: 5px;
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.788);
  /* color: #DC3545;
  color: #28A745; */
}
#btn-edit-record {
  border: 0.2px solid #24a843;
  background-color: #28a745;
  transition: all 0.2s;
}
#btn-edit-record:hover {
  background-color: #158b31;
}
#btn-edit-cancel {
  border: 0.2px solid #db2e3f;
  background-color: #dc3545;
  transition: all 0.2s;
}
#btn-edit-cancel:hover {
  background-color: #be2534;
}
@media screen and (max-width: 1001px) {
  #p_supplier {
    width: 100%;
    right: 0;
  }
}
</style>