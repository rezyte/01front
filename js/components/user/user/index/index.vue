<template>
  <div id="index" class="mainItemPerPage">
    <div id="topOfIndex" class="shouldCollapse maxIs">
      <div id="topOfIndexWrapper">

        <slider></slider>
        <categorie :mainCats="JSON.parse(main_categories)"></categorie>
        <!-- <categorie></categorie> -->
      </div>
    </div>
    <div class="shouldCollapse maxIs">
      <flip-card></flip-card>
    </div>
    <div style="width: 100%;overflow:hidden;">
      <comments :comments="comments"></comments>
    </div>




    <!-- <expanding-card></expanding-card>

    <extra-sign-up></extra-sign-up>  -->
     <div class="allCards shouldCollapse maxIs" v-for="label in JSON.parse(this.labeles)" :key="label.id">
      <card
        :cardTitle="label.title"
        :products="label.products"
        id="mostSell"
      ></card>
    </div>


    <!-- <div class="digiCardIndex shouldCollapse maxIs">
      <digi-card
        :imgs='JSON.stringify(["/images/shrink.png","/images/shrink2.png","/images/digi1.jpg","/images/digi2.jpg"])'
      ></digi-card>

    </div> -->

<!--    <div class="allCards shouldCollapse maxIs">-->
<!--      <card-->
<!--        cardTitle="جدید ترین محصولات"-->
<!--        :products="JSON.parse(new_products)"-->
<!--        id="news"-->
<!--      ></card>-->
<!--    </div>-->


    <div class="maxIs shouldCollapse">
      <customers></customers>
    </div>
  </div>
</template>
<script>
import digiCard from "./digiCard/digiCard.vue";
import slider from "./slider/slider.vue";
import card from "./card/card.vue";
import flipCard from "./flipCard/flipCard.vue";
import categorie from "./categorie/categorie.vue";
import customers from "./customers/customers.vue";
import comments from "./comments/comments.vue";
export default {
  components: {
    slider,
    card,
    categorie,
    flipCard,
    digiCard,
    customers,
    comments,
  },
  props: [
    "products",
    "main_categories",
    "comments",
    'labeles'
  ]
};
</script>

<style>
.shouldCollapse {
  width: 90% !important;
}
.digiCardIndex {
  margin-top: 50px;
  margin-bottom: 20px;
}
#topOfIndex {
  background: #ffffff;
  width: 100%;
}
#topOfIndexWrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
}
#index {
  position: relative;
}
.allCards {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
#mostClicked {
  grid-area: mostClicked;
}
#slider {
  grid-area: slide;
}
#new {
  grid-area: new;
}

.titleCard {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}

#index {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#flatMenu {
  grid-area: flatMenu;
}

.singleCard {
  background: white;
}

#footer {
  grid-area: footer;
}
.hamCats {
  grid-area: hamCats;
}
@media (max-width: 924px) {
  #slider {
    width: 100%;
  }
  #sideSliderCats {
    display: none;
  }
  .shouldCollapse {
    width: 100% !important;
  }
}
@media (max-width: 800px) {
  #topOfIndexWrapper {
    padding: 0;
  }
}
</style>
