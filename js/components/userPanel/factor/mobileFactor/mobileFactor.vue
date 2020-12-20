<template>
  <div id="phoneFactor" class="panelItem">
    <div id="phonefactorWrapper">
      <row1 @fileChanged="fileChanged($event)" @titleChanged="titleChanged($event)"></row1>
      <from-and-to></from-and-to>

      <item-table></item-table>
      <side-bar></side-bar>
      <descs></descs>
      <a href="/userpanel/prefactore/upload" target="_blank" @click="sendFactor"> <button  class="submit">ساخت پیش فاکتور</button></a>
    </div>

  </div>
</template>

<script>
import row1 from "./logoAndTitle/row1.vue";
import fromAndTo from "./fromAndTo/fromAndTo.vue";
import sideBar from "./stickTaxAndOff/sideBar.vue";
import itemTable from "./table/table.vue";
import descs from "./descs/descs.vue"
import axios from "axios";

export default {
  name: "mobileFactor",
  data() {
    return {
      title: "",
      file: ""
    }
  },
  methods: {
    sendFactor(){
      axios.post("/userpanel/prefactore/upload",{factor:this.$store.state.factoreItems})
          .then(res=>{
            // console.log(JSON.parse(res.data))
          })
    },
    titleChanged(e) {
      if (typeof e == 'string') {
        this.title = e
      }
      this.title = e.target.value
    },
    fileChanged(e) {
      var file = e.srcElement.files[0];
      console.log(file);
      var reader = new FileReader();
      reader.readAsBinaryString(file);

      reader.onload = () => {
        this.file = btoa(reader.result)
        console.log(this.file)

      };
      reader.onerror = function () {
        console.log('there are some problems');
      };
    }
  },
  components: {
    row1,
    sideBar,
    fromAndTo,
    itemTable,
    descs
  }
}
</script>

<style scoped>
#phoneFactor {

  display: flex;
  justify-content: center;
  padding: 20px;
  padding-right: 5px;
  max-width: 100%;
  width: 100%;
}

#phonefactorWrapper {
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  max-width: 790px;
  display: flex;
  flex-direction: column;
}

#phonefactorWrapper input {
  border: 1px solid var(--grayBorderColor);
}

#phonefactorWrapper >>> .row {
  display: flex;
  align-items: center;
}

#phonefactorWrapper >>> .row label {
  order: 2;
  min-width: 100px;
  text-align: right;
}

#phonefactorWrapper >>> .row input, #phonefactorWrapper >>> .row textarea {
  order: 1;
  border: 1px solid var(--grayBorderColor);
  border-radius: 5px;
}

#phonefactorWrapper >>> .row textarea {
  resize: none;
  width: 100%;
  height: 60px;
  font-size: 12px;
}

#phonefactorWrapper >>> .title p {
  text-align: right;
}
a{
  padding-top: 20px;
  margin:auto;
}
@media (max-width: 380px) {
  #phonefactorWrapper >>> .row {
    flex-direction: column;
    align-items: flex-end;
  }

  #phonefactorWrapper >>> .row label {
    order: 1;
  }

  #phonefactorWrapper >>> .row input, #phonefactorWrapper >>> .row textarea {
    order: 2;
  }
}

@media (max-width: 1250px ) {
  #phoneFactor {
    flex-direction: column;

  }

  #factorSideBar {
    position: static;
    margin-right: 0px;
  }
}

@media (max-width: 1000px) {
  .panelItem {
    margin-right: 0;
  }
}
</style>