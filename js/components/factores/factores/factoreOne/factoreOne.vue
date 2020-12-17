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

// import {jsPDF} from "jspdf"
import html2PDF from 'jspdf-html2canvas';
export default {
name: "factoreOne",
  props:['data'],
  components:{
    heading,
    factorBody
  },
  mounted() {
    const html2PDF = require('jspdf-html2canvas');
    this.$store.state.factoreItems=JSON.parse(this.data).factor
    console.log(this.$store.state.factoreItems)
    const page=document.body.querySelector("#app")

      // let doc = new jsPDF();


      setTimeout(()=>{
        html2PDF(page, {
          jsPDF: {
            format: 'a4',
          },
          imageType: 'image/jpeg',
          output: './pdf/generate.pdf'
        });
      },3000)

      // setTimeout(()=> {
      //   doc.html('document.body', {
      //     callback: function (doc) {
      //       doc.save();
      //     },
      //     x: 10,
      //     y: 10
      //   });
      // },2000)
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