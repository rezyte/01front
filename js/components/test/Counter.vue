<template>
  <div id="counter">
    <div class="ite" @click="increaser()">
      <i class="fas fa-plus fa-sm"></i>
    </div>
    <div class="mount">
      <input type="text" v-model="number"
      maxlength="6" />
      <!-- <input v-else type="text" v-model="number2" /> -->
    </div>
    <div class="ite" @click="decreaser()">
      <i class="fas fa-minus fa-sm"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: ["wholesale","cost"],
  data() {
    return {
      number: 0,
      // number2: 0,
    };
  },
  methods: {
    increaser() {
      if (this.wholesale) {
        let n=parseInt(this.number)
        this.number=n+20
      } else {
        this.number++;
      }
      // this.$emit('change_price',)
    },
    decreaser() {
      if (this.wholesale) {
        if (this.number == 0) {
          null
        } else {
          this.number -= 20;
        }
      } else {
        if (this.number === 0) {
         null
        } 
        else {
          this.number--;
        }
      }
    },
  },
  watch:{
    number(){
      let data=this.cost*this.number
      this.$emit('change_price',data)
    }
    // number2(){
    //   this.$emit('change_price2',this.number)
    // },
  },
  // updated(){
  //   this.$emit('update_price')
  }
  
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
  padding: 0 8px;
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
.mount input {
  width: 60px;
  margin-bottom: 4px;
  text-align: center;
}
</style>