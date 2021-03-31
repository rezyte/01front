<template>
  <div class="comment">
    <div class="col-sm-12">
      <div class="content_add">
        <form action="" method="post">
          <div id="form">
            <div>
              <textarea
              rows="2"
              cols="50"
              maxlength="500"
              class="form-control"
              v-model="comment"
              id="commentBox"
              placeholder="نظر خود را وارد کنید"
              ref="comment"
              name="content"
              @input="change()"
            >
            </textarea>
            </div>
            <!-- <editor
        class="text-right"
          maxlength="500"
          v-model="comment"
          placeholder="افزودن نظر"
          ref="comment"
          id="comment"
          api-key="no-api-key"
          :init="{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
          }"
        /> -->
            <div class="mr-2">
              <button
                class="btn btn-primary h-50"
                :disabled="btnStatus"
               
              >
                <!-- <img src="/static/public/images/icons/icons8-send-letter-48.png" width="48" height="48" title="ارسال"> -->
                ارسال
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import Editor from '@tinymce/tinymce-vue'
export default {
  components: {
    //   'editor':Editor
  },
  data() {
    return {
      comment: "",
      btnStatus: true,
    };
  },
  methods: {
    change() {
      let box = document.getElementById("commentBox");
      if (this.comment !== "") {
        box.style.borderColor = null;
        this.btnStatus = false;
      } else {
        box.style.borderColor = "red";
        this.btnStatus = true;
      }
    },
    register() {
      let content = this.$refs.comment.value;
      let reg = /^[@]+[a-zA-z0-9]{1,5}[:]+[a-zA-Z0-9ژظطزرذدئو شسیبلاتنمکگضصثقفغعهخحجچپ]{1,500}$/gi;
      if (content.match(reg) && content.indexOf("@") > -1) {
        this.$store.dispatch("record_replay_comment", this.comment);
      } else {
        this.$store.dispatch("record_comment", this.comment);
      }
      this.comment = "";
      this.btnStatus = true;
    },
  },
};
</script>

<style scoped>
.comment {
  width: 100%;
  padding: auto;
  direction: rtl;
}
.content_add {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}
#form{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
div img{
  cursor: pointer;
}
</style>