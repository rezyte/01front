<template>
  <div id="signupApp">
    <div id="signupAppWrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "signup.vue"
}
</script>

<style scoped>
#signupApp{
  max-height: 100vh;
  overflow: hidden;
}
#signupAppWrapper{
  height: 100vh;
  overflow: hidden;
}
#signupAppWrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>