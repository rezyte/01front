<template>
  <div id="diagram">
    <div>
      <img src="/static/public/images/دیاگرام.webp" alt="تصویر ناقص است" title="مراحل ثبت نام">
    </div>
  </div>
</template>

<script>
export default {
  name: "Diagram",
  props: ["objects"],
  mounted() {
    console.log(this.objects,"eee");
  }
}
</script>

<style scoped>
#diagram {
  width: 100%;
  text-align: center;
  background-color: whitesmoke;
}

#diagram div {
  width: 100%;
}

#diagram div img {
  width: 95%;
}
</style>
