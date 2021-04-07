<template>
  <div class="customers">
    <div class="p-2 text-center">
      <p>لیست مشتریان</p>
    </div>
    <div class="items">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Customers",
};
</script>

<style scoped>
.customers {
  width: 100%;
  /* height: 200px; */
  background-color: whitesmoke;
}
.customers div p{
    color:var(--logoBlue);
    font-size: 24px;
    font-weight: bold;
}
.items {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: start;
}
.items div {
  width: 140px;
  height: 120px;
  background-color: turquoise;
  border-radius: 5px;
  margin: 40px;
}
</style>