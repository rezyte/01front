<template>
  <div id="landing_lent">
    <div class="row">
      <div class="heading">
        <h1>فروش ویژه لنت ترمز</h1>
      </div>
      <div class="title mt-2">
        <h2>ارزان ترین قیمت بازار</h2>
      </div>
      <div class="description">
        <p>
          <span>چرا ارزان ترین قیمت لنت ترمز را داریم؟</span>
          چون ما یک پلتفرم فروش ماشین آلات صنعتی هستیم و تواید کنندگان لنت ترمز
          ...
        </p>
      </div>
    </div>
    <div class="row bg-white">
      <div id="body">
        <div class="item">
          <div class="content_item">
            <div class="digit" id="title_item">
              <h3>لنت ترمز جلو پراید</h3>
            </div>
            <div class="digit" id="picture">
              <img src="/static/public/images/lent/لنت-ترمز-عقب-پراید-گلد.jpg" alt="" />
            </div>
            <div class="digit" id="rete">
              <div class="rate">rate</div>
            </div>
            <div class="digit" id="cost_wholesale">
              <div class="text">
                <p>قیمت عمده فروشی:</p>
              </div>
              <div class="cost">
                <div class="counter">
                  <counter />
                </div>
                <div class="price">
                  <p>45000 تومان</p>
                </div>
              </div>
            </div>
            <div class="digit" id="cost_retail">
              <div class="text">
                <p>قیمت خرده فروشی:</p>
              </div>
              <div class="cost">
                <div class="counter">
                  <counter />
                </div>
                <div class="price">
                  <p>8000 تومان</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="content_item">
            <div class="digit" id="title_item">
              <h3>لنت ترمز جلو پراید</h3>
            </div>
            <div class="digit" id="picture">
              <img src="/static/public/images/lent/12389630_511-600x338.jpg" alt="" />
            </div>
            <div class="digit" id="rete">
              <div class="rate">rate</div>
            </div>
            <div class="digit" id="cost_wholesale">
              <div class="text">
                <p>قیمت عمده فروشی:</p>
              </div>
              <div class="cost">
                <div class="counter">
                  <counter />
                </div>
                <div class="price">
                  <p>45000 تومان</p>
                </div>
              </div>
            </div>
            <div class="digit" id="cost_retail">
              <div class="text">
                <p>قیمت خرده فروشی:</p>
              </div>
              <div class="cost">
                <div class="counter">
                  <counter />
                </div>
                <div class="price">
                  <p>8000 تومان</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="content_item">
            <div class="digit" id="title_item">
              <h3>لنت ترمز جلو پراید</h3>
            </div>
            <div class="digit" id="picture">
              <img src="/static/public/images/lent/لنت-ترمز-عقب-پراید-گلد.jpg" alt="" />
            </div>
            <div class="digit" id="rete">
              <div class="rate">rate</div>
            </div>
            <div class="digit" id="cost_wholesale">
              <div class="text">
                <p>قیمت عمده فروشی:</p>
              </div>
              <div class="cost">
                <div class="counter">
                  <counter />
                </div>
                <div class="price">
                  <p>45000 تومان</p>
                </div>
              </div>
            </div>
            <div class="digit" id="cost_retail">
              <div class="text">
                <p>قیمت خرده فروشی:</p>
              </div>
              <div class="cost">
                <div class="counter">
                  <counter />
                </div>
                <div class="price">
                  <p>8000 تومان</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row bg-warning">3</div> -->
  </div>
</template>

<script>
import Counter from "./Counter.vue";
export default {
  name: "LandingLent",
  components: {
    Counter,
  },
};
</script>

<style scoped>
#landing_lent {
  width: 100%;
}
.heading,
.title,
.description {
  width: 100%;
}
.heading,
.title {
  text-align: center;
}
h1 {
  font-size: 24px;
  font-weight: bold;
}
h2 {
  font-size: 21px;
  font-weight: bold;
}
.description {
  padding: 15px;
}
.description span {
  color: var(--blue);
}
.description p {
  font-size: 19px;
}
#body {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}
.item {
  width: 300px;
  margin: 15px 10px;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  padding: 10px 0 15px 0;
}
.content_item {
  width: 100%;
}
.digit {
  width: 100%;
}
#title_item {
  text-align: center;
  padding: 5px 0;
  box-sizing: border-box;
  /* padding: 10px 10px 5px 10px; */
}
#title_item h3 {
  font-size: 17px;
  font-weight: bold;
}
#picture {
  text-align: center;
  /* padding: 5px 0; */
  height: 200px;
}
#picture img {
  width: 90%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}
.rate {
  width: 85%;
  margin: auto;
  text-align: center;
  padding: 10px;
}
.text {
  height: 25px;
}
.text p {
  font-size: 16px;
  font-weight: bold;
  padding-right: 20px;
}
.cost {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
}
.counter {
  width: 45%;
  height: 100%;
  padding-top: 2%;
}
.price {
  width: 53%;
  height: 100%;
  padding-top: 2%;
 
}
.price p{
 font-size: 15px;
 font-weight: bold;
 padding-top: 6px;
}
</style>