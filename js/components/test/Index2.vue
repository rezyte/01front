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
                   <i class="fa fa-phone" aria-hidden="true"></i> <span>شماره تلفن</span>
               </div>
                <div class="case"><span >dshvyfylyfv</span></div>
            </div>
            <div class="row_card" id="email_card">
                 <div><i class="fa fa-envelope" aria-hidden="true"></i> <span>ایمیل</span></div>
                <div class="case"> <span>biiib@gmail.com</span></div>
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
                <p>dhnfgf</p>
            </div>
            <div class="row_card">
                <p>serthb</p>
            </div>
            <div class="row_card">
                <p>aeh</p>
            </div>
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
            <div class="item_sell">
              <p>نذرتنسیرذهب</p>
            </div>
            <div class="item_sell">
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
            </div>
          </div>
        </div>
        <div class="cards-left">
          <div class="title_cardLeft">
            <h1>وضعیت مشتری</h1>
          </div>
          <div id="progress_state">
            <k-progress percent="70" />
          </div>
        </div>
        <div class="cards-left">
          <label class="title_cardLeft">
            <h1>یادداشت ها</h1>
          </label>
          <div id="notes">
            <form action="" method="post">
              <textarea
                name="note"
                id="note"
                cols="45"
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
            <div id="username">
              <h3>نام کاربری</h3>
            </div>
            <div id="content">
              <p>قرار حضوری گزاشته شد</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p,span{
    color:rgba(0, 0, 0, 0.767);
}
#p_supplier {
  width: 100%;
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
.row_card span,.row_card p{
    font-size: 15px;
    font-weight: bold;
    margin-right: 5px;
}
.case{
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
  width: 125px;
  height: 32px;
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
  padding: 5px;
}
#username h3 {
  font-size: 17px;
  font-weight: bold;
}
#content {
  width: 100%;
  height: 60px;
  padding: 5px 10px 5px 10px;
  box-sizing: border-box;
}
#content p {
  font-size: 14px;
  font-weight: bold;
}
</style>