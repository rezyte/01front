<template>
  <div id="product" class="mainItemPerPage shouldCollapse">
    <div id="productWrapper" class="maxIs">
      <prudctDetail :productDet="JSON.parse(product)"></prudctDetail>
      <div class="chooseSection">
        <div class="section" @click="changeComponent('technicalDetail'), changeButtonColor($event)">
          <p
              class="sectionButton"

            style="color: black"
          >
            مشخصات فنی
          </p>
        </div>
        <div class="section" style="transform: scale(1.3)" @click="changeComponent('productDescs'), changeButtonColor($event)">
          <p
              class="sectionButton"

            style="color: rgb(9, 111, 211);font-weight:  800"
          >
            توضیحات محصول
          </p>
        </div>
      </div>
      <transition name="swapComp" mode="out-in">
        <component
          :product="JSON.parse(product)"
          :is="currentComponent"
        ></component>
      </transition>
        <related :related="JSON.parse(related_products)"></related>
      <comment-section
        :action="''"
        :comments="JSON.parse(product).comments"
      ></comment-section>
    </div>
  </div>
</template>

<script>
import prudctDetail from "./productDetaile.vue";
import commentSection from "./commentSection.vue";
import productDescs from "./productDescs.vue";
import componyDetali from "./componyDetail.vue";
import technicalDetail from "./technicalDetatil.vue";
import related from "./related.vue";
export default {
  components: {
    prudctDetail,
    commentSection,
    productDescs,
    componyDetali,
    technicalDetail,
    related,
  },
  props: ["product", "related_products"],
  data() {
    return {
      currentComponent: "productDescs",
    };
  },
  metaInfo() {
    const product = JSON.parse(this.product);
    return {
      title: product.title + "-دمیرکو",
      titleTemplate: null,
      htmlAttrs: {
        lang: "en",
        amp: true,
      },
      meta: [
        { charset: "utf-8" },
        { name: "description", content: product.short_description },
      ],
    };
  },
  name: "product",

  methods: {
    changeButtonColor(e) {
      const secs = document.querySelectorAll(".section");
      secs.forEach((sec) => {
        sec.querySelector('p').style.color = "black";
        sec.querySelector('p').style.fontWeight='100'
        sec.style.transform="scale(1)"
      });
      if(e.target.classList.contains('sectionButton')){
        const par=e.target.parentNode
        e.target.style.color="rgb(9, 111, 211)"
        par.style.transform="scale(1.3)"
      }else{
        e.target.childNodes[0].style.color="rgb(9, 111, 211)"
        e.target.style.transform="scale(1.3)"
      }
      // e.target.style.color = "rgb(9,111,211)";
      // e.target.style.fontWeight='800'
    },
    changeComponent(comp){
      this.currentComponent=comp
    }
  },
};
</script>
<style>
#product {
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#productWrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1500px;
}
.chooseSection {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(209, 196, 196);
  border-top: 1px solid rgb(209, 196, 196);
}
.section {
  border: 1px solid rgb(209, 196, 196);
  margin: 15px;
  cursor: pointer;
}
.chooseSection p {
  padding: 10px;
  color: rgb(105, 98, 209);
}
@media (max-width: 509px) {
  .chooseSection {
    flex-direction: column;
    align-items: center;
  }
  .section {
    width: 200px;
    display: flex;
    justify-content: center;
  }
  .section p {
    max-width: max-content;
  }
}
.swapComp-enter-active {
  animation: comeIn 0.25s linear;
}
.swapComp-leave-active {
  animation: comeOut 0.25s linear;
}
@keyframes comeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes comeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
#product{
  width:90%
}
#productWrapper >>> #productComments{
  margin-top: 70px !important;
  margin-bottom: 20px;
}
</style>
