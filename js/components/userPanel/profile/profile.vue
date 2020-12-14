<template>
    <div id="userProfile" class='userPanelComp panelItem'>
      <form action="" enctype="multipart/form-data">
        <div id="profileWrapper" class="maxIs">

                  <producer></producer>
        </div>
      </form>
    </div>

</template>


<script>
    import producer from "./producer/producer.vue";
    export default{
        components:{
          producer
        }
    }

</script>



<style scoped>
@import "../../../css/userPanelCss/profile.css";
#userProfile{
  margin-top: 50px;
}

</style>