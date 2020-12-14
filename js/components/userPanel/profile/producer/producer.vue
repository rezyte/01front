<template>
  <div id="producer" class="panelItem">
        <form action="" method="post" enctype="multipart/form-data">
          <input type="hidden" name="csrfmiddlewaretoken" :value="csrf">
          <div id="producerWrapper">
              <images :profile="JSON.parse(profile)" :dets="JSON.parse(details)" :orders="JSON.parse(orders)"></images>
              <information :profile="JSON.parse(this.profile)"></information>
          </div>
            <div class="send">
              <button class="submit">ویرایش</button>
            </div>
        </form>
  </div>
</template>

<script>
import images from "./image.vue";
import information from "./information.vue";
import userPanelMesages from "../../template/userPanelMesages.vue";
export default {
  name: "producer",
  components:{
    images,
    information,
    userPanelMesages
  },
  props:["profile",'details','orders',"messages",'allmessages']
}
</script>

<style scoped>
#producer{
  margin-top: 50px;
  width: 95%;
}
.send{
  display: flex;
  margin-top: 20px;
    margin-bottom: 20px;
  justify-content: center;
}
#producerWrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
#producerWrapper #profileImage{
    order:2
}
#producerWrapper #information{
    order:1
}
@media (max-width: 1073px) {
    #producerWrapper #profileImage{
        order:1
    }
    #producerWrapper #information{
        order:2
    }

}
</style>