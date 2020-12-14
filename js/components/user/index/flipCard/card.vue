<template>
  <div class="flip-card">
      <div class="flip-card-front">
        <img :src='svg' />

    </div>
    <div class="descs">
      <p>{{title}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['svg',"title"]
  };
</script>
<style scoped>
.flip-card{
  margin:0 auto;
  width: calc(25% - 4px);
  display: flex;
  flex-direction: column;
  align-items: center;
}
  .flip-card-front{
    display:flex;
    flex-direction:column;
    width:max-content;
    
    align-items: center;
    justify-content: space-between;

  }
  p{
    text-align: center;
    font-size: 13px;
    font-weight: 800;
  }
  img{
    width:70px;
    height:70px;
  }
</style>