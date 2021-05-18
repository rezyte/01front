<template>
  <div id="aditionalInformation" class="productSection">
    <div id="additionalInformationWrapper">
      <div id="additionalInformationTop">
        <div class="creatProductTitle">
          <div class="createProductTitleWrapper">
            <svg
                style="
            height: 20px;
            transform: rotate(270deg);
            margin-right: 10px;
            cursor: pointer;
          "
                @click="toggleWrapperMethod($event)"
                viewBox="0 0 100 100"
            >
              <path
                  d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"
                  class="arrow"
              ></path>
            </svg>
            <p>اطلاعات اضافی</p>
          </div>
        </div>
        <div class="hiddenAtDisPlay aditionalInformationWrapper">
          <div class="information">
            <div class="informationWrapper">
<!--              <div class="row">-->
<!--                <div class="col1">-->
<!--                  <div class="col1Label">-->
<!--                    <label for>اصالت کالا</label>-->
<!--                  </div>-->
<!--                  <div class="col1Input">-->
<!--                    <input name="product-origin" :value="product.origin==='None' ? '' : product.origin" type="text" placeholder="اصالت کالا" />-->
<!--                  </div>-->
<!--                </div>-->

<!--                <div class="col2">-->
<!--                  <div class="col2Label">-->
<!--                    <label for>حداقل سفارش</label>-->
<!--                  </div>-->
<!--                  <div class="col2Input">-->
<!--                    <input-->
<!--                        :value="product.minimum_order==='None' ? '' : product.minimum_order"-->
<!--                        type="number"-->
<!--                        name="product-minimum-order"-->
<!--                        placeholder="حداقل تعداد"-->
<!--                        min="1"-->
<!--                    />-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="row">-->
<!--                <div class="col1">-->
<!--                  <div class="col1Label">-->
<!--                    <p></p>-->
<!--                    <label for>روش پرداخت</label>-->
<!--                  </div>-->
<!--                  <div class="col1Input">-->
<!--                    <select name="product-payment-type">-->
<!--                      <option value="1" :selected="product.payment_type==1">شرایطی</option>-->
<!--                      <option value="2" :selected="product.payment_type==2">نقدی</option>-->
<!--                    </select>-->
<!--                  </div>-->
<!--                </div>-->

<!--                  <div class="col1">-->
<!--                      <div class="col1Label">-->
<!--                          <label for>نمونه</label>-->
<!--                      </div>-->
<!--                      <div class="col1Input">-->
<!--                          <select name="product-samples" id="product-samples">-->
<!--                              <option :selected="product.sample=='1'" value="رایگان">رایگان</option>-->
<!--                              <option :selected="product.sample=='2'" value="اعمال هزینه">اعمال هزینه</option>-->
<!--                              <option :selected="product.sample=='0'" value="خیر">خیر</option>-->
<!--                          </select>-->
<!--                      </div>-->
<!--                  </div>-->
<!--              </div>-->
              <div class="row">

                <div class="col2">
                  <div class="col2Label">
                    <label for>بازه اول قیمت</label>
                  </div>
                  <div class="col2Input">
                    <input :value="product.price !==null ? product.price :'' " type="number" name="price" placeholder="بر حسب تومان" min="6" />
                  </div>
                </div>
                <div class="col2">
                  <div class="col2Label">
                    <label for>بازه دوم قیمت</label>
                  </div>
                  <div class="col2Input">
                    <input
                        :value="product.price2 !==null ? product.price2 :'' "
                        name="price2"
                        type="number"
                        placeholder="بر حسب تومان"
                        min="6"
                    />
                  </div>
                </div>

              </div>
              <div v-if="userInfo.is_superuser" class="row">
                <shortDescription :productt="product" />
              </div>

<!--              <div class="row">-->
<!--                <div class="col1">-->
<!--                  <div class="col1Label">-->
<!--                    <label for>بسته بندی</label>-->
<!--                  </div>-->
<!--                  <div class="col1Input">-->
<!--                    <input-->
<!--                        :value="product.packing==='None' ? '' : product.packing"-->
<!--                        name="product-packing"-->
<!--                        type="text"-->
<!--                        placeholder="بسته بندی"-->
<!--                    />-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col2">-->
<!--                  <div class="col2Label">-->
<!--                    <label for>زمان تحویل</label>-->
<!--                  </div>-->
<!--                  <div class="col2Input">-->
<!--                    <input-->
<!--                        :value="product.delivery==='None' ? '' : product.delivery"-->
<!--                        name="product-delivery"-->
<!--                        type="number"-->
<!--                        placeholder="زمان ارسال بر حسب روز"-->
<!--                        min="1"-->
<!--                    />-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--                <div class="row">-->
<!--                    <div class="col2">-->
<!--                        <div class="col2Label">-->
<!--                            <label for>کشور ساخت</label>-->
<!--                        </div>-->
<!--                        <div class="col2Input">-->
<!--                            <input-->
<!--                                :value="product.made_in==='None' ? '' : product.made_in"-->
<!--                                type="text"-->
<!--                                name="product-made-in"-->
<!--                                placeholder="کشور ساخت"-->
<!--                            />-->
<!--                        </div>-->
<!--                    </div>-->

<!--                </div>-->


<!--              <div class="row">-->
<!--                <short-description :product="product"></short-description>-->
<!--              </div>-->
<!--              <div v-if="userInfo.is_superuser" class="row" style="display: flex;justify-content: center;flex-direction: column;align-items: flex-end">-->
<!--                <label style="order: -4" for="">:کلمات کلیدی را وارد کنید</label>-->
<!--                <vue-tags-input-->
<!--                    v-model="tag"-->
<!--                    :tags="tags"-->
<!--                    @tags-changed="newTags($event)"-->
<!--                />-->
<!--                <input type="hidden" name="tags" v-model="allTags">-->
<!--              </div>-->
<!--              <tags :product="product"></tags>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import shortDescription from "./shortDescription.vue";
import tags from "./tags.vue";
  export default {
    components:{
      shortDescription,
      // tags
    },
    data(){
      return{
        tag: '',
        tags: [],
        allTags:[]
      }

    },
      props:['product'],
    methods:{
      newTags(e){
        this.allTags=[]
        e.forEach(r=>{
          this.allTags.push(r.text)
        })
        console.log(this.allTags)
      }
    },
    created(){
     
    }
  }
</script>

<style scoped>
label {
  display: flex;
}
#aditionalInformation {
  padding: 10px !important;
}
input {
  color: black;
  direction: rtl;
  border: 1px solid rgb(210, 214, 222);
  padding: 10px;
}
.col1Label,
.col2Label,
.col1Input,
.col2Input {
  width: 50%;
}
.row {
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: flex-start;
}
.col1,
.col2 {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.informationWrapper {
  margin-right: 30px;
}
.information {
  margin-top: 20px;
  margin-bottom: 20px;
}
.col1Label,
.col2Label {
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
}
.col1Input,
.col2Input {
  display: flex;
  justify-content: flex-end;

  width: 213px;
}
select{
  font-size: 14pt;
  direction: rtl;
}
@media (max-width: 880px) {
  .row {
    flex-direction: column;
  }
  .col1,
  .col2 {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .col1 .col1Label,
  .col2 .col2Label,
  .col1 .col1Input,
  .col2 .col2Input {
    width: 100%;
  }
  .col1 .col1Label,
  .col2 .col2Label {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .col1Input input,
  .col2Input input,
  select {
    width: 90%;
  }
}
.hiddenAtDisPlay{
    max-width: 1100px;
    margin: auto;
}
</style>
