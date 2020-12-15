<template>
    <div id="factoreOne">
        <div id="factoreOneWrapper">
          <heading></heading>
          <factor-body></factor-body>
        </div>
    </div>
</template>

<script>
import heading from "./header/header.vue"
import factorBody from "./body/body.vue";
export default {
name: "factoreOne",
  components:{
    heading,
    factorBody
  }
}
</script>

<style scoped>
#factoreOne{
  padding: 20px;
  width: 800px;
}
@media print {
  #factoreOne{
    padding: 20px;
    width: 900px;
  }
}
</style>