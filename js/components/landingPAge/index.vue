<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <headers></headers>
        <div class="w-100">
          <div class="col">
            <div class="row">
              <div class="w-100 d-flex flex-column flex-md-row flex-wrap mm justify-content-around">
                <div class="video">
                  <videos/>
                </div>
                <div class="table">
                  <suppliers :info="JSON.parse(objects).orders"/>
                </div>
              </div>
            </div>
            <div class="w-100 text-center">
              <a :href="'/landings/intro/'+JSON.parse(objects).id+'/signup'">
                <button class="btn register m-auto">مشاهده مشتریان</button>
              </a>
            </div>
            <div class="row">
              <div class="w-100 mm">
                <diagram/>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 customers-us mt-3">
          <!--          <customers2></customers2>-->
          <!--        <customers-list />-->
          <div class="text-center p-3 ">
            <h2>مشتریان ما</h2>
          </div>
          <div class="slider">
            <slider></slider>
          </div>
        </div>
        <!-- <signup-and-worker :errors="errors"></signup-and-worker> -->
        <!--        <videos></videos>-->
        <!--    <customers></customers>-->
        <tools-list></tools-list>
        <div class="row">
          <div class="m-auto">
            <shirbarghi></shirbarghi>
          </div>
        </div>
        <div class="row mt-5">
          <div class="m-auto">
            <a class="text-decoration-none" :href="'/landings/intro/'+JSON.parse(objects).id+'/signup'">
              <button class="btn register m-auto">ثبت نام کنید</button>
            </a>
          </div>
        </div>
        <div class="row text-canter">
          <div class="m-auto w-100 bg-primary text-center">
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
import headers from "./header/header.vue";
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
  width: 65%;
}

.mm {
  background-color: whitesmoke;
  margin: 10px 0;
  /*margin: 5% 0;*/
}

.register {
  background-color: #598edb;
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
.customers-us{
  background-color: whitesmoke;
}
.customers-us>div>h2{
  color: var(--blue);
  font-weight: bold;
}
/*.address{*/
/*  width: 90%;*/
/*}*/
@media only screen and (max-width: 768px) {
  .table {
    width: 100%;
  }

  .video {
    width: 100%;
  }
}
</style>
