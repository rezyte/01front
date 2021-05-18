<template>
  <div id="productDescs" class="productSection">
    <div class="creatProductTitle">
      <div class="createProductTitleWrapper">
        <svg
          style="
            height: 20px;
            transform: rotate(270deg);
            margin-right: 10px;
            cursor: pointer;
          "
          @click="toggleWrapperMethod($event)"
          viewBox="0 0 100 100"
        >
          <path
            d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"
            class="arrow"
          ></path>
        </svg>
        <p>توضیحات محصول</p>
      </div>
    </div>
    <div id="productDescsWrapper" class="hiddenAtDisPlay">
      <texterea
        id="editor"
        v-html="redi ? redi.editor : ''"
        name="editor"
      >
      </texterea>
    </div>
  </div>
</template>

<script>
tinymce.init({
  selector: "#editor",
});
export default {
  props: ["redi"],
  methods: {
    init() {
      tinymce.init({
        content_style: `
            body * { font-family: 'iranSans' !important;font-size:16px !important;font-weight:normal;color:black !important;background-color:transparent !important }
            p{ color:black !important}
            p strong,p a,a p{ color:black !important}

            `,
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
        plugins: "image code table lists link paste",
        oninit: "setPlainText",
        toolbar:
          "undo redo | link image | code forecolor backcolor numlist bullist alignment bold | table | formatselect",
        block_formats: "h2=h2;h3=h3;h4=h4;h5=h5;h6=h6;p=p",
        table_toolbar:
          "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",

        menubar: "",
        width: "100%",
        height: "400px",
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

              cb(blobInfo.blobUri(), { title: file.name });
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
  },
   mounted() {
      this.init();

      let button = document.querySelectorAll("button");
      button.forEach((b) => {
        if (b.getAttribute("title") === "درج/ویرایش تصویر") {
          console.log("founded", b);
        }
      });
    },
     created(){
      console.log('yi',this.redi)
    }
};
</script>

<style scoped>
#productDescs {
  padding: 10px;
}

label {
  color: #0061af;
  font-size: 17pt;
  font-weight: lighter;
}

#productDescsWrapper {
  padding: 10px;
  width: 100%;
  align-items: flex-end;
}

#productDescs textarea {
  width: 100%;
  height: 500px;
  padding: 10px;
}

@media (max-width: 500px) {
  #productDescsWrapper {
    padding: 0;
  }
}
</style>
