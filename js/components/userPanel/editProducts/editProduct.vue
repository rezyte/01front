<template>
  <div id="createProduct" class="maxIs">
    <div id="createProductWrapper">
      <form
        action=""
        method="post"
        id="createProductForm"
        enctype="multipart/form-data"
      >
        <input type="hidden" name="csrfmiddlewaretoken" />
        <form-wizard
          back-button-text="مرحله قبل"
          next-button-text="مرحله بعد"
          finish-button-text="ثبت محصول"
          @on-change="getNext"
          @on-complete="submit"
        >
          <tab-content title="دسته بندی و نام">
            <!-- <select-category
              :product="JSON.parse(product)"
              :cats="JSON.parse(cats)"
            ></select-category> -->
            <div id="name" class="productSection">
              <div id="nameWrapper">
                <label for="">نام محصول:</label>
                <input
                  type="text"
                  :value="JSON.parse(product).name"
                  placeholder="نام"
                  name="name"
                />
              </div>
            </div>
          </tab-content>
          <tab-content title="اطلاعات و ثبت">
            <product-img :product="JSON.parse(product)"></product-img>

            <slicer></slicer>
            
            <product-descs :product="JSON.parse(product)"></product-descs>
            <slicer></slicer>
            <aditional-information
              :product="JSON.parse(product)"
            ></aditional-information>
            <slicer></slicer>
            <variations :product="JSON.parse(product)"></variations>
          </tab-content>
        </form-wizard>

        <!--        <button type="submit" class="submit">ثبت محصول</button>-->
      </form>
    </div>
  </div>
</template>

<script>
import slicer from "../../user/template/slicer/slicer.vue";
import Editor from "@tinymce/tinymce-vue";
import productImg from "./productImg.vue";
import productDescs from "./productDescs.vue";
import aditionalInformation from "./aditionalInformation.vue";
import selectCategory from "./selectCategory.vue";
import variations from "./variations.vue";
import shortDescription from "./shortDescription.vue";
import mainPicture from "./mainPicture.vue";
import { FormWizard, TabContent } from "vue-form-wizard";
import error from "../../user/user/template/error/error.vue";
export default {
  components: {
    editor: Editor,
    shortDescription,
    slicer,
    selectCategory,
    productImg,
    productDescs,
    aditionalInformation,
    variations,
    mainPicture,
    FormWizard,
    TabContent,
    error,
  },
  props: ["cats", "product"],
  created() {
    console.log('products',JSON.parse(this.product));
    console.log('cats',this.cats);
  },
  methods: {
    submit() {
      document.querySelector("#createProductForm").submit();
    },
    getNext() {
      const element = document.querySelector("#endCategory");
      window.sessionStorage.setItem("selected", element.value);
    },
  },
};
</script>


<style scoped>
#createProduct {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-right: 225px;
}

form {
  width: 100%;
}

#createProductWrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#createProductWrapper form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.productSection {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#nameWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#nameWrapper input {
  width: 300px!important;
}

#nameWrapper label {
  margin-bottom: 10px;
}

input[type="text"] {
  color: black;

  /* width: 30%; */
  padding: 10px;
}

input {
  border: 1px solid rgb(210, 214, 222);
}

.orderInput input {
  width: 100%;
}

.submit {
  margin-top: 20px;
  margin-bottom: 20px;
}

.title p,
#productDescsWrapper label {
  color: #0061af;
  font-size: 17pt;
  font-weight: lighter;
}

label {
  display: flex;
}

@media (max-width: 500px) {
  #nameWrapper {
    display: flex;
    flex-direction: column;
  }

  #createProduct {
    width: 100%;
  }

  .userPanelComp {
    border: 0;
  }

  #nameWrapper input {
    width: 90%;
  }
}

label {
  font-size: 18px;
  font-weight: bold;
}
</style>
