<template>
  <div class="notif">
    <div ref="notf" class="notifWrapper">
      <div class="header">
        <cross @closeNotf="$emit('closeNotf')"></cross>
      </div>
      <div class="body">
        <div class="descs">
          <p>ایا از حذف محصول مطمئنید؟</p>
        </div>
        <div class="actions">
          <div ref="buttons" class="buttons">
            <button class="submit" @click="$emit('closeNotf')">انصراف</button>
            <button class="cancel" @click="$emit('deleteProduct')">حذف</button>
          </div>
          <div class="loadingWrapper">
            <p>لطفا صبر کنید</p>
            <loading></loading>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {adjustElFromTop} from "../../../user/mixIns/adjustElFromTop"
import loading from "./loading.vue";
import cross from "./cross.vue";
export default {
name: "notf",
  mixins:[adjustElFromTop],
  components:{
    cross,
    loading
  },
  mounted() {
  const el=this.$refs.notf
    console.log(el)
    this.adjustFromTop(el,false,true)
  }
}
</script>

<style scoped>
.notif{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.2);
  transition: all 2s linear;
}
.notifWrapper{
  left: 50%;
  position: absolute;
  background: white;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  width: 100%;
  max-width: 300px;
}
.header{
  background: rgb(9,111,211);
  display: flex;
  justify-content: flex-end;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
.descs{
  padding: 10px;
}
.descs p{
  font-weight: bold;
}
.cancel{
  background: transparent;
  border: 2px solid black;
  padding: 5px 10px 5px 10px ;
  border-radius: 5px;
}
.submit{
  padding: 5px 10px 5px 10px;
}
.actions{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.buttons{
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
}
.submit,.cancel{
  font-size: 13pt;
  cursor: pointer;
}
.loadingWrapper{
  display: none;
}
</style>