<template>
    <div id="createBlogPost">
        <div id="createBlogPostWrapper">
            <form action="">
                <div class="textArea createBlogPostItam">
                    <label>:متن پست</label>
                    <textarea id='createBlogPostEditor' name="blogPostContent"></textarea>
                </div>
                <slicer></slicer>
                <div class="image createBlogPostItam">
                    <label for="chooseFile">عکس شاخص را انتخاب کنید</label>
                    <input style="border: 0" type="file" name="image" id="chooseFile">
                </div><slicer></slicer>
<!--                <div class="createBlogPostItam chooseCategory">-->
<!--                  <label for="">دسته بندی را انتخاب کنید</label>-->

<!--                  <input list="browsers" name="زشفثلخقغ" id="browser">-->

<!--                  <datalist id="browsers">-->
<!--                    <option value="شیرینگ"></option>-->
<!--                    <option value="خط تولید پنیر پیتزا"></option>-->
<!--                    <option value="Chrome"></option>-->
<!--                    <option value="Opera"></option>-->
<!--                    <option value="Safari"></option>-->
<!--                  </datalist>-->


<!--                </div>-->
              <div class="avg createBlogPostItam">
                <label for="">میانگین زمان خواندن:</label>
                <input type="text" placeholder="میانگین زمان خواندن">
              </div>
              <slicer></slicer>
                <div class="sendReq createBlogPostItam">
                    <button class="submit">ثبت پست</button>
                </div>
            </form>

        </div>
    </div>


</template>

<script>
import slicer from "../../user/template/slicer/slicer.vue"
export default{
  components:{
    slicer
  },
    mounted(){
    tinymce.init({
      setup: function (editor) {
        /* example, adding a group toolbar button */
        editor.ui.registry.addGroupToolbarButton("alignment", {
          icon: "align-left",
          tooltip: "Alignment",
          items: "alignleft aligncenter alignright | alignjustify",
        });
      },
      language: "fa",
      selector: "#createBlogPostEditor",
      plugins: "image code table lists link",
      toolbar:
          "undo redo | link image | code fontsizeselect forecolor backcolor numlist bullist alignment bold italic | table",
      menubar: "",
      fontsize_formats: "11px 12px 14px 16px 18px 24px 36px 48px",
      width: "100%",
      height:'400px',
      images_upload_url: "test/",
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
        xhr.open("POST", "/test/");

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
      content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
    });
    
    }
}

</script>


<style scoped>

    #createBlogPost{
        margin-top:50px;
    }
    .createBlogPostItam{
        width:100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        margin-top:50px
    }
    .image{
      display:flex;
      flex-direction:column;
      align-items: center;
    }
    .image input{
      margin-top:20px;
      width:250px;
    }
    .chooseCategory{
      display: flex;  
      flex-direction:column;
      align-items: center;
    }
    .chooseCategory input{
      margin-top:10px;
    }
    .textArea{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      resize: horizontal !important;
    }
    label{
      font-size: 18px;
      font-weight: bold;
    }
    #createBlogPostWrapper{
      padding: 10px;
    }
    input{
      padding: 5px;
      border:1px solid #b4b4b4;
    }

</style>