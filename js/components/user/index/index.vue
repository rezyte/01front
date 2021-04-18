د<template>
  <div id="index" class="mainItemPerPage">
    <div id="topOfIndex" class="shouldCollapse maxIs">
      <div id="topOfIndexWrapper">
        <slider></slider>
        <categorie :mainCats="JSON.parse(main_categories)"></categorie>
      </div>
    </div>
    <div class="shouldCollapse maxIs">
      <flip-card></flip-card>
    </div>
    <div
      v-if="JSON.parse(this.comments).length >= 20"
      style="width: 100%; overflow: hidden"
    >
      <comments :comments="comments"></comments>
    </div>
    <div
      class="allCards shouldCollapse maxIs"
      v-if="label.products.length > 0"
      v-for="label in JSON.parse(this.labeles)"
      :key="label.id"
    >
      <card
        :cardTitle="label.title"
        :products="label.products"
        id="mostSell"
        :classr="makeid(10)"
      ></card>
    </div>

    <div class="maxIs shouldCollapse">
      <customers></customers>
    </div>
  </div>
</template>
<script>
// import digiCard from "./digiCard/digiCard.vue";
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
    // digiCard,
    customers,
    comments,
  },
  created() {
    console.log("heyyyy");
    console.log(this.userInfo + 'ty');

    console.log("this.products", JSON.parse(this.labeles));

  },
  props: ["products", "main_categories", "comments", "labeles"],
  methods: {
    makeid(length) {
      var result = "";
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
  },
};
</script>

<style>
.shouldCollapse {
  width: 98% !important;
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
  height: 530px;
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
