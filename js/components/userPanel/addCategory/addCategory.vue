<template>
  <div id="addCategory">
    <form autocomplete="off" action="" method="post">
      <input type="hidden" name="csrfmiddlewaretoken" :value="csrf">
      <div id="addCattegoryWrapper">
        <div id="catName">
          <div id="catNameWrapper">

            <div class="singleCatInput">
<!--              <input @change="level1Entered($event)" list="level1" name="level1">-->
<!--              <datalist id="level1">-->
<!--                <option v-for="cat in JSON.parse(cats)" :value="cat.title">{{ cat.title }}</option>-->
<!--              </datalist>-->
              <search
                :items="JSON.parse(cats)"
                @valueChanged="level1Entered"
              ></search>
              <input ref="level1" type="hidden" name="level1">
            </div>


            <div v-if="showLevel2" class="singleCatInput">
<!--              <input @change="level2Entered($event)" list="level2" name="level2">-->
<!--              <datalist id="level2">-->
<!--                <option v-for="cat in getLevelTwoData" :value="cat.title">{{ cat.title }}</option>-->
<!--              </datalist>-->
              <search
                  :items="getLevelTwoData"
                  @valueChanged="level2Entered"
              ></search>
              <input ref="level2" type="hidden" name="level2">
            </div>

            <div v-if="showLevel3" class="singleCatInput">
<!--              <input @change="level3Entered($event)" list="level3" name="level3">-->
<!--              <datalist id="level3">-->
<!--                <option v-for="cat in getLevelThreeData" :value="cat.title">{{ cat.title }}</option>-->
<!--              </datalist>-->
              <search
                  :items="getLevelThreeData"
              ></search>
              <input ref="level3" type="hidden" name="level3">
            </div>
          </div>
        </div>


        <div id="addVariations">
          <table>
            <tr>
              <th>مشخصه</th>
              <th>حذف</th>
            </tr>
            <tr class="trs main">
              <td class="don"><input @keyup="handleKey($event)" type="text" name="variation"></td>
              <td>
                <cross style="visibility: hidden"></cross>
              </td>
            </tr>

            <tr class="trs" v-for="i in fields">
              <td class="don"><input autocomplete="off" name="variation" @keyup="handleKey($event)" type="text"></td>
              <td>
                <cross @deleteRow="deleteRow($event)"></cross>
              </td>

            </tr>

          </table>
          <plus @addRow="handleKey($event)"></plus>
        </div>
        <div class="seoPost">
          <p> توضیحات دسته بندی را وارد کنید</p>
          <div class="textareaWrapper">
            <textarea name="seoPost" id="editor" cols="30" rows="10"></textarea>
          </div>

        </div>
        <div class="seoPost">
          <p>متن دسته بندی را وارد کنید</p>
          <div class="textareaWrapper">
            <textarea style="width: 100%;margin-right: 0" name="description" id="editor" cols="30" rows="10"></textarea>
          </div>
        </div>
        <button style="margin: auto" class="submit">ثبت</button>
      </div>
    </form>
  </div>
</template>

<script>
import singleVariation from "./singleVariation.vue";
import vSelect from "vue-select"
import cross from './cross.vue'
import axios from "axios";
import wait from "../createPRoduct/wait.vue";
import search from "./search.vue";
import plus from "./plus.vue"
export default {
  name: "addCategory",
  data() {
    return {
      Jcats: null,
      currentLevel1Id: null,
      showLevel2: false,
      level2Data: null,
      currentLevel2d: null,
      showLevel3: false,
      level3Data: null,
      fields: 0
    }
  },
  props: ['cats'],
  created() {
    console.log(JSON.parse(this.cats))
    this.Jcats = JSON.parse(this.cats)
  },
  components: {
    singleVariation,
    vSelect,
    cross,
    wait,
    search,
    plus
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      tinymce.init({
        content_style:
            `
            body * { font-family: 'iranSans' !important;font-size:16px !important;font-weight:normal;color:black !important;background-color:transparent !important }
            p{ color:black !important}
            p strong,p a,a p{ color:black !important}

            `
        ,
        setup: function (editor) {
          /* example, adding a group toolbar button */
          editor.ui.registry.addGroupToolbarButton("alignment", {
            icon: "align-left",
            tooltip: "Alignment",
            items: "alignleft aligncenter alignright | alignjustify",
          });
        },
        language: "fa",
        selector: "#editor",
        plugins: "image code table lists link",
        toolbar:
            "undo redo | link image | code forecolor backcolor numlist bullist alignment bold | table | formatselect",
        block_formats: 'h2=h2;h3=h3;h4=h4;h5=h5;h6=h6;p=p',
        table_toolbar: 'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',


        menubar: "",
        width: "100%",
        height: '400px',
        images_upload_url: "/test",
        image_title: true,
        automatic_uploads: true,
        file_picker_types: "image",
        file_picker_callback: function (cb, value, meta) {
          var input = document.createElement("input");
          input.setAttribute("type", "file");
          input.setAttribute("accept", "image/*");

          input.onchange = function () {
            var file = this.files[0];

            var reader = new FileReader();
            reader.onload = function () {
              var id = "blobid" + new Date().getTime();
              var blobCache = tinymce.activeEditor.editorUpload.blobCache;
              var base64 = reader.result.split(",")[1];
              var blobInfo = blobCache.create(id, file, base64);
              blobCache.add(blobInfo);

              cb(blobInfo.blobUri(), {title: file.name});
            };
            reader.readAsDataURL(file);
          };

          input.click();
        },
        images_upload_handler: function (blobInfo, success, failure, progress) {
          var xhr, formData;

          xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.open("POST", "/test");

          xhr.upload.onprogress = function (e) {
            progress((e.loaded / e.total) * 100);
          };

          xhr.onload = function () {
            var json;

            if (xhr.status < 200 || xhr.status >= 300) {
              failure("HTTP Error: " + xhr.status);
              return;
            }

            json = JSON.parse(xhr.responseText);

            if (!json || typeof json.location != "string") {
              failure("Invalid JSON: " + xhr.responseText);
              return;
            }

            success(json.location);
          };

          xhr.onerror = function () {
            failure(
                "Image upload failed due to a XHR Transport error. Code: " +
                xhr.status
            );
          };

          formData = new FormData();
          formData.append("file", blobInfo.blob(), blobInfo.filename());

          xhr.send(formData);
        },
      });
      },
    async level1Entered(e) {
      this.$refs.level1.value=e
      const id = this.Jcats.findIndex(cat => {
        return cat.title.replace(/'/g, '"') == e.replace(/'/g, '"')
      })
      this.currentLevel1Id = id

      if (id > -1) {

        const {data} = await axios.get(`/categories-api/mother/${this.Jcats[id].id}`);
        this.level2Data = data

      }else if(id==-1){
        this.level2Data=[]
      }
      this.showLevel2 = true
    },
    async level2Entered(e) {
      let id
      this.$refs.level2.value=e
      if(this.level2Data!==null){
        id = this.level2Data.findIndex(cat => {
          return cat.title.replace(/'/g, '"') == e.replace(/'/g, '"')
        })
        this.currentLevel2d = id
      }


      if (id > -1) {

        const {data} = await axios.get(`/categories-api/mother/${this.currentLevel1Id}/main/${id}`);
        this.level3Data = data

      }else if(id===-1){
        this.level3Data=[]
      }
      this.showLevel3 = true
    },
    async changeCategoryLevel1(e) {
      this.levelTwo.show = true
      this.leve1Category = e.title

    },
    makeid(length) {
      let result = "";
      const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    add(e) {
      const id = this.makeid()
      const obj = {id, component: "singleVariation"}
      this.vars.push(obj)
    },
    handleKey(e) {
      console.log(e.type)
      // const parent = e.target.closest('.trs')
      if (e.keyCode === 40 || e.type=='click') {
        this.fields++
        setTimeout(() => {

          let next = document.querySelectorAll('.trs')
          next = next[next.length - 1]

          console.log(next)
          const input = next.querySelector('input')
          input.focus()
        }, 10)
      }

    },
    deleteRow(e) {
      console.log(e.target.closest('.trs').remove())
    },
    checkItLevel1() {
      console.log("yes")
    }

  },
  computed: {
    getLevelTwoData() {
      return this.level2Data
    },
    getLevelThreeData() {
      return this.level3Data
    }
  }

}
</script>

<style scoped>
#addCategory{
  width: 100%;
}
label {
  font-size: 16px;
  font-weight: bold;
}

input {
  padding: 5px;
  border: 1px solid #b4b4b4
}

#catName {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

#addCattegoryWrapper {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#catName label {
  order: 1;
}

#catName input {
  order: 2;
}

#addVariations {
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
}

#catName {
  display: flex;
  flex-direction: column;
}

select {
  width: 150px;
  direction: rtl;
  text-align: right;
  font-size: 16px;
}

form {
  display: flex;
  padding: 10px;
  flex-direction: column;
}

select {
  width: 200px;
}

#catNameWrapper {
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
}


table {
  width: 100%;
  min-height: 80px;
  min-width: 310px;
}

.table {
  overflow: auto;
}

th {
  font-size: 13pt;
  font-weight: bold;
}

tr, th {
  text-align: center;
  border-top: 10px;

}

tr:not(:first-child) {
  border-top: 1px solid #b4b4b4;
}

td, th {
  padding-bottom: 10px;
  padding-top: 10px;
}

.singleVariation {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.singleCatInput {
  margin-top: 10px;
  width: 100%;
}
.singleCatInput:nth-child(3){
  display: flex;
  justify-content: center;
}
.singleCatInput:nth-child(3) input{
  width: 100%;
  margin-right: 0;
}
.submit{
  margin-top: 20px !important;
}
.seoPost{
  width: 100%;
  margin-top: 50px;
}
.seoPost textarea{
  width: 90%;
  direction: rtl;
  text-align: right;
}
.textareaWrapper{
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
form{
  max-width: 800px;
  width: 100%;
}
#addCategory{
  display: flex;
  justify-content: center;
}
.seoPost p {
  font-size: 18px;
  font-weight: bold;
}
</style>