<template>
  <div class="content_item">
    <div class="digit" id="title_item">
      <h3 v-text="title"></h3>
    </div>
    <div class="digit" id="picture">
      <img :src="image" alt="" />
    </div>
    <!-- <div class="digit" id="rete">
              <div class="rate"></div>
            </div> -->
    <div class="digit mt-3" id="cost_wholesale">
      <div class="text">
        <p>قیمت عمده فروشی:</p>
      </div>
      <div class="cost">
        <div class="counter">
          <counter
            :wholesale="true"
            :cost="whole_price"
            @change_price="cost_w = $event"
          />
        </div>
        <div class="price">
          <span v-text="cost_w"> </span>
          <span v-if="cost_w !== 0">تومان</span>
        </div>
      </div>
    </div>
    <div class="digit" id="cost_retail">
      <div class="text">
        <p>قیمت خرده فروشی:</p>
      </div>
      <div class="cost">
        <div class="counter">
          <counter
            :wholesale="false"
            :cost="retail_price"
            @change_price="cost_r = $event"
          />
        </div>
        <div class="price">
          <span v-text="cost_r"> </span>
          <span v-if="cost_r !== 0">تومان</span>
        </div>
      </div>
    </div>
    <div class="digit text-center">
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        @click="show_cost_in_modal()"
      >
        خرید
      </button>
    </div>
  </div>
</template>

<script>
import Counter from "./Counter.vue";
export default {
  name: "Item",
  props: ["title", "image", "whole_price", "retail_price"],
  components: {
    Counter,
  },
  data() {
    return {
      cost_w: 0,
      cost_r: 0,
    };
  },
  computed: {
    // cost_wholesale(){
    //   return this.cost_w;
    // },
    // cost_retail(){
    //   return this.cost_r;
    // }
  },
  methods: {
    show_cost_in_modal(){
      this.$emit('whole_cost',this.cost_w + this.cost_r)
    }
  },
};
</script>

<style  scoped>
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
  width: 95%;
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
  padding-right: 15px;
}
.cost {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 10px;
}
.counter {
  width: 50%;
  height: 100%;

  padding-right: 15px;
  /* background-color: chartreuse; */
}
.price {
  width: 50%;
  height: 100%;
  padding-top: 2%;
  padding-right: 15px;
  /* background-color: cornsilk; */
}
.price span {
  font-size: 15px;
  font-weight: bold;
}
.digit button {
  width: 130px;
  margin-top: 16px;
  font-size: 19px;
}
.close {
  float: left !important;
}
label {
  font-size: 15px;
  font-weight: 600;
}
.modal-title {
  font-size: 19px;
  font-weight: bold;
}
</style>