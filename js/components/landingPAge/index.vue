<template>
  <div id="index">
    <headers></headers>
    <div class="w-100">
      <div class="row">
        <div class="col">
          <diagram />
          <div class="w-100 d-flex flex-column flex-md-row flex-wrap mm">
            <div class="video">
              <videos />
            </div>
            <div class="table">
              <suppliers />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <customers-list />
      </div>
    </div>
    <!-- <signup-and-worker :errors="errors"></signup-and-worker> -->
    <!--        <videos></videos>-->
    <customers></customers>
    <tools-list></tools-list>
    <shirbarghi></shirbarghi>
    <addressee></addressee>
    <copy></copy>
  </div>
</template>

<script>
import headers from "./header/header.vue";
import signupAndWorker from "./signupAndWorker/signupAndWorker.vue";
import video from "./video/video.vue";
import customers from "./customers/customers.vue";
import toolsList from "./toolsList/toolsList.vue";
import shirbarghi from "./shirbarghi/shirbarghi.vue";
import address from "./address/address.vue";
import copy from "./copy/copy.vue";
import Diagram from "./diagram/Diagram.vue";
import CustomersList from "./list_customers/Customers.vue";
import Suppliers from "./suppliers/Suppliers.vue";
export default {
  name: "index.vue",
  components: {
    headers,
    signupAndWorker,
    videos: video,
    customers,
    toolsList,
    shirbarghi,
    addressee: address,
    copy,
    Diagram,
    CustomersList,
    Suppliers,
  },
  props: ["errors"],
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
.mm{
  /* background-color: whitesmoke; */
  margin: 5% 0;
}
@media only screen and (max-width: 768px) {
  .table{
    width:100%;
  }
  .video{
    width:100%;
  }
}
</style>