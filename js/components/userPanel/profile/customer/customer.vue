<template>
  <div id="customer">
    <div id="customerWrapper">
      <div class="row">
        <div class="order2">
          <div class="order2Wrapper">

            <textarea name="introduction" id="introduction" class="inputeOrder2 rtl long"
                      placeholder="توضیح مختصر از شرکت"></textarea>
            <label class="labelOrder1" for="introduction">:توضیح مختصر از شرکت</label>
          </div>
        </div>
        <div class="order1">
          <div class="order1Wrapper">

            <textarea name='description' id="description" class="inputeOrder2 rtl long" placeholder="توضیح کامل از شرکت"
                      ></textarea>
            <label class="labelOrder1" for="description">:توضیح کامل از شرکت</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "customer"
}
</script>

<style scoped>
select {
  width: 188px;
  font-size: 14pt;
  direction: rtl;
}

input:focus {
  outline: none;
}

input {
  border: 1px solid #b4b4b4;
  padding: 5px;
}

.row {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

label {
  width: 100px;
  display: block;
  text-align: end;
  margin-left: 10px;
}

.order1, .order2 {
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
}

.order1Wrapper, .order2Wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.noBorder {
  border: 0
}

.order1 {
  order: 2;
}

.order2 {
  order: 1;
}

textarea {
  width: 188px;
  resize: none;
}

@media (max-width: 782px) {
  .order1 {
    order: 1;
  }

  .order2 {
    order: 2;
  }
}

@media (max-width: 426px) {
  .labelOrder1 {
    order: 1;
  }

  .order1Wrapper, .order2Wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }

  label {
    width: max-content;
  }

  .inputeOrder2 {
    order: 2
  }
}

.haveTextArea {
  display: flex;
  flex-direction: column;
}

.long {
  height: 188px;
}
</style>