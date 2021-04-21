<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
          <headers></headers>
        <div class="p-2">
         <div class="mb-2 bgg p-2">
           <p class="titr">
             <span class="damirco"> دمیرکو چیست؟</span>
             دمیرکو پلتفرم فروش ماشین آلات صنعتی در ایران و شکور های همسایه است
             <br>
             در سال قبل ما نزدیک به 300،000 بازدید کننده و 16،325 مشتری داخلی و خارجی داشتیم که حدود یک سوم آنها خارج از
             ایران بودند
           </p>
         </div>
          <div class="col">
            <div class="row">
              <div class="w-100">
                <div class="table bgg">
                  <suppliers :info="JSON.parse(objects).orders"/>
                </div>
              </div>
            </div>
            <div class="w-100 text-center">
              <a :href="'/landings/intro/'+JSON.parse(objects).id+'/signup'">
                <h1 class="btn register m-auto ">مشاهده مشتریان</h1>
              </a>
            </div>
          </div>
        </div>
        <tools-list></tools-list>
        <div class="row">
          <div class="m-auto">
            <shirbarghi></shirbarghi>
          </div>
        </div>
        <div class="row">
          <div class="m-auto w-100">
            <addressee></addressee>
          </div>
        </div>
        <div class="row">
          <div class="m-auto">
            <copy></copy>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headers from "./header/header2.vue";
import signupAndWorker from "./signupAndWorker/signupAndWorker.vue";
import video from "./video/video.vue";
// import customers2 from "./customers/customers2.vue";
import toolsList from "./toolsList/toolsList.vue";
import shirbarghi from "./shirbarghi/shirbarghi.vue";
import address from "./address/address.vue";
import copy from "./copy/copy.vue";
import Diagram from "./diagram/Diagram.vue";
import CustomersList from "./list_customers/Customers.vue";
import Suppliers from "./suppliers/Suppliers.vue";
import Register from "../signup/Register.vue";
import Slider from './customers/Slider.vue';

export default {
  name: "index.vue",
  components: {
    headers,
    signupAndWorker,
    videos: video,
    // customers2,
    toolsList,
    shirbarghi,
    addressee: address,
    copy,
    Diagram,
    CustomersList,
    Suppliers,
    Register,
    Slider
  },
  props: ["errors", "objects"],
  mounted() {
    // let object = JSON.parse(document.getElementsByTagName('body')[0].getAttribute('data') || '{}');
    console.log(JSON.parse(this.objects), "mmmm");
  }
};
</script>

<style scoped>
#index {
  width: 100%;
  /*display: flex;*/
  /*flex-direction: column;*/
  /*align-items: center;*/
  /*justify-content: center;*/
}

.video {
  width: 35%;
  display: flex;
  justify-content: center;
}

.table {
  width: 100%;
}

.register {
  color: black;
  border: #3589cd 0.5px solid;
  transition: background-color, color 0.2s;
}

.register:hover {
  color: white;
  background-color: var(--blue);
  border: solid 0.5px var(--blue);
}

.color-dam {
  width: 120px;
  background-color: #8fffdb;
  color: var(--blue);
  font-size: 19px;
  transition: color 0.2s;
}

.color-dam:hover {
  color: #006dea;
}

.customers-us {
  background-color: whitesmoke;
}

.customers-us > div > h2 {
  color: var(--blue);
  font-weight: bold;
}
.bgg{
  background-color: whitesmoke;
}
.damirco{
  color: var(--blue);
  font-weight: bold;
}
.titr{
  text-align: right;
  direction: rtl;
  padding-right: 4px;
}
@media only screen and (max-width: 768px) {
  /*.table {*/
  /*  width: 100%;*/
  /*}*/
  /*.video {*/
  /*  width: 100%;*/
  /*}*/
}
</style>
