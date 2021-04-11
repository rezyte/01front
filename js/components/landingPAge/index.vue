<template>
  <div class="row">
    <div id="index">
      <headers></headers>
      <div class="w-100">
        <div class="row">
          <!--        //لیست مشتری ها(مشاهده اطلاعات کامل بعد از ثبت نام)-->
          <div class="col">
            <div class="w-100 d-flex flex-column flex-md-row flex-wrap mm">
              <div class="video">
                <videos/>
              </div>
              <div class="table">
                <suppliers :info="JSON.parse(objects).orders"/>
              </div>
            </div>
            <div class="w-100 text-right mm">
              <a class="" :href="'/landings/intro/'+JSON.parse(objects).id+'/signup'">
                <button class="btn register m-5">مشاهده مشتریان</button>
              </a>
            </div>
            <div class="w-100 mm">
              <diagram/>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <customers2></customers2>
          <!--        <customers-list />-->
        </div>
      </div>
      <!-- <signup-and-worker :errors="errors"></signup-and-worker> -->
      <!--        <videos></videos>-->
      <!--    <customers></customers>-->
      <tools-list></tools-list>
      <shirbarghi></shirbarghi>
      <addressee></addressee>
      <copy></copy>
    </div>
  </div>
</template>

<script>
import headers from "./header/header.vue";
import signupAndWorker from "./signupAndWorker/signupAndWorker.vue";
import video from "./video/video.vue";
import customers2 from "./customers/customers2.vue";
import toolsList from "./toolsList/toolsList.vue";
import shirbarghi from "./shirbarghi/shirbarghi.vue";
import address from "./address/address.vue";
import copy from "./copy/copy.vue";
import Diagram from "./diagram/Diagram.vue";
import CustomersList from "./list_customers/Customers.vue";
import Suppliers from "./suppliers/Suppliers.vue";
import Register from "../signup/Register.vue";

export default {
  name: "index.vue",
  components: {
    headers,
    signupAndWorker,
    videos: video,
    customers2,
    toolsList,
    shirbarghi,
    addressee: address,
    copy,
    Diagram,
    CustomersList,
    Suppliers,
    Register
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
   margin:10px 0;
  /*margin: 5% 0;*/
}

.register {
  background-color: #92b4dd;
  border: #70abde 0.5px solid;
  transition: background-color, color 0.2s;
}

.register:hover {
  color: white;
  background-color: var(--blue);
  border: solid 0.5px var(--blue);
}

@media only screen and (max-width: 768px) {
  .table {
    width: 100%;
  }

  .video {
    width: 100%;
  }
}
</style>
