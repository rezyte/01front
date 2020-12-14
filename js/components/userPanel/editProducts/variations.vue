<template>
  <div id="variations">
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
              <p>مشخاصت فنی</p>
          </div>
      </div>
    <div id="variationsWrapper" class="hiddenAtDisPlay">
      <div class="secondaryWrapper">
          <template v-if="getVari.length > 0">
              <div class="variasionGroup">
                  <div
                      class="singleVariation"
                      v-for="(vari, i) in getVari"
                      v-if="(i + 1) % 2 == 0"
                      :v-key="vari.id"
                  >
                      <input :value="checkValue(vari)" :placeholder="vari.name" type="text" :name="vari.id" />
                      <label>:{{ vari.name }}</label>
                  </div>
              </div>
              <div class="variasionGroup">
                  <div
                      class="singleVariation"
                      v-for="(vari, i) in getVari"
                      v-if="(i + 1) % 2 !== 0"
                      :v-key="vari.id"
                  >
                      <input :value="checkValue(vari)" :placeholder="vari.name" type="text" :name="vari.id" />
                      <label>:{{ vari.name }}</label>
                  </div>
              </div>
          </template>

          <template v-else>
              <p class="check">یک <a href="#cats"> دسته بندی </a> انتخاب کنید</p>
          </template>
          <loader class="createLoader"></loader>
      </div>
    </div>
  </div>
</template>

<script>
import loader from "../../user/template/loader/loader.vue"
import { mapGetters } from "vuex";
export default {
  components: {
    loader,
  },
    props:['product'],
    methods:{
        checkValue(varation){

          const variName=varation.name
            const selected=sessionStorage.getItem('selectedForEdit')
            if(selected!==null || selected!==undefined){
                if(selected==this.product.category[0].title){
                  for(let i=0;i<this.product.detail.length;i++){
                    let vari=this.product.detail[i]
                    vari=vari["var"]
                    vari=vari.split(",")
                    vari=vari[0]
                    vari=vari.split(":")
                    vari=vari[1].trim()
                    console.log(vari)
                    if(variName===vari){
                      return this.product.detail[i].value
                    }
                  }
                }
            }
        }
    },
  data() {
    return {
      is: false,
    };
  },
  mounted() {
    // if(this.getVari.length>0){
    // 	this.is=true
    // }
  },
  computed: {
    ...mapGetters(["getCatsFromCreaeProduct"]),
    getVari() {
      return this.getCatsFromCreaeProduct;
    },
  },
};
</script>

<style scoped>
#variations {
  width: 100%;
  padding: 10px;
  position: relative;
}
.singleVariation {
  display: flex;
  align-items: center;
  width: 310px;
  justify-content: space-between;
  margin: 10px;
}
#variationsWrapper {
  position: relative;
}
.secondaryWrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.variasionGroup {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-end;
}
input {
  color: black;
  direction: rtl;
  border: 1px solid rgb(210, 214, 222);
  padding: 10px;
}
a {
  color: rgb(9, 111, 211);
}
.createLoader {
  margin-top: 50px !important;
}
.check{
  text-align: center;
}

@media (max-width: 719px){
    .secondaryWrapper{
        justify-content: flex-end;
    }

}
@media (max-width: 370px) {
    .singleVariation{
        flex-direction: column;
        align-items: flex-end;
    }
    .singleVariation label{
        order: 1;
        text-align: right;
    }
    .singleVariation input,.singleVariation select{
        order: 2;
    }
}
label{
    text-align: center;
}
.hiddenAtDisPlay{
    max-width: 1100px;
    margin: auto;
}

</style>
