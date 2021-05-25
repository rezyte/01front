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
        <div
          class="item"
          v-for="product in JSON.parse(products)"
          v-bind:key="product.id"
        >
          <item
            :title="product.title"
            :image="product.image"
            :whole_price="product.whole_price"
            :retail_price="product.retail_price"
            @whole_cost="set_wholeCost"
          ></item>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <div>
                <h5 class="modal-title" id="exampleModalLongTitle">
                  ثبت اطلاعات
                </h5>
              </div>
              <div>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <div class="modal-body">
              <form name="form" action="" method="post">
                <div class="form-group">
                  <label for="fullName">نام و نام خانوادگی: </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="phoneNumber">شماره تلفن: </label>
                  <input
                    id="phoneNumber"
                    type="text"
                    name="phoneNumber"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="cost2">قیمت کل:</label>
                  <input
                    id="cost2"
                    type="text"
                    class="form-control w-25 m-auto"
                    readonly
                    :value="whole_cost + ' تومان'"
                  />
                </div>
                <input
                  type="hidden"
                  name="cost_full"
                  :value="whole_cost"
                />
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                انصراف
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="register_form()"
              >
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "LandingLent",
  props: ["products"],
  data() {
    return {
      whole_cost: "",
    };
  },
  components: {
    // Counter,
    Item,
  },
  methods: {
    set_wholeCost(value) {
      this.whole_cost=value;
    },
     register_form() {
      // console.log(document.forms["form"]);
      document.forms["form"].submit();
    },
  },
};
</script>

<style scoped>
#landing_lent {
  width: 100%;
  padding-top: 25px;
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
  width: 310px;
  margin: 15px 10px;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 4px 12px 0 rgba(175, 179, 180, 0.89);
  padding: 10px 0 15px 0;
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