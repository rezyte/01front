<template>
  <div id="counter">
    <div class="ite" @click="increaser()">
      <i class="fas fa-plus fa-sm"></i>
    </div>
    <div class="mount" v-text="price">1</div>
    <div class="ite" @click="decreaser()">
      <i class="fas fa-minus fa-sm"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      price: 1,
    };
  },
  methods: {
    increaser() {
      this.price++;
    },
    decreaser() {
      this.price--;
    },
  },
};
</script>

<style scoped>
#counter {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  /* align-items: center; */
}
.ite {
  box-shadow: 0 0px 4px 0 rgba(101, 118, 187, 0.89);
  padding: 0 5px;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  background-color: rgba(101, 118, 187, 0.568);
  transition: all 0.2s;
}
.ite:hover {
  background-color: rgba(101, 118, 187, 0.849);
  cursor: pointer;
}
.ite p {
  width: 100%;
  height: 100%;
}
.mount {
  font-size: 17px;
  font-weight: bold;
  width: max-content;
  padding: 3px 10px 0 10px;
  box-sizing: border-box;
}
</style>