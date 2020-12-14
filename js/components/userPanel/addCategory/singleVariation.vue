<template>
  <div class="singlevar">
    <input name="variation" type="text" placeholder="مشخصه فنی">
    <div class="type">
      <select name="type" id="">
        <option value="عددی">عددی</option>
        <option value="متنی">متنی</option>
      </select>
    </div>
    <div class="delete" @click="deletet($event)">
      <div class="cross">
        <div class="cross1"></div>
        <div class="cross2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "singleVariation",
  methods:{
    deletet(e){
      const nearest=e.target.closest('.singlevar')
      nearest.remove()
    },

  }
}
</script>

<style scoped>
input,.type,.delete{
  margin:5px
}
.singlevar{
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
.delete{
  order:3
}
.type{
  display: flex;
  flex-wrap: wrap;
}
.singlevar input{
  order:1
}
.singlevar select{
  order:2
}
label{
  font-size: 16px;
  font-weight: bold;
}
input{
  padding: 5px;
  border:1px solid #b4b4b4
}
select{
  width: 100px;
  direction: rtl;
  text-align: right;
  font-size: 16px;
}
.cross{
  height: 51px;
  position: relative;
  top: 18px;
}
.cross1,.cross2{
  width: 40px;
  height: 3px;
  background: #b4b4b4;
}
.cross1{
  transform: rotate(45deg) translate(3px,3px);
}
.cross2{
  transform: rotate(-45deg);
}
</style>