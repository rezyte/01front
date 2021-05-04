<template>
  <div class="comment">
    <div class="col-sm-12">
      <div class="content_add">
        <form
          name="form_comment"
          @submit.prevent="sendComment()"
          action=""
          method="post"
        >
          <div id="form">
            <div class="form-goup">
              <label for="username">نام کاربری</label>
              <input
                id="username"
                name="username"
                ref="username"
                placeholder="نام کاربری خودرا وارد کنید"
                class="form-control w-75"
              />
            </div>
            <div class="form-goup mt-2">
              <label for="email">ایمیل</label>
              <input
                id="email"
                name="email"
                ref="email"
                placeholder="ایمیل خودرا وارد کنید"
                class="form-control w-75"
              />
            </div>
            <div class="form-group mt-3">
              <!-- <label for="commentBox"></label> -->
              <textarea
                rows="2"
                cols="50"
                maxlength="500"
                class="form-control"
                v-model="comment"
                id="commentBox"
                placeholder="نظر خود را وارد کنید"
                ref="comment"
                name="comment"
                @input="change"
              >
              </textarea>
            </div>
            <input type="hidden" name="id" ref="tag" id="tag" />
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
              <button class="btn btn-primary h-50" :disabled="btnStatus">
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
      validated: {
        email: "",
        username,
      },
      inValidate: {
        email: "",
        username,
      },
      statesValidate: {
        email: 0,
        username: 0,
      },
      btnStatus: true,
    };
  },
  methods: {
    change(e) {
      let w = e.name;
      console.log(w);
      let box = document.getElementById("commentBox");
      if (this.comment !== "") {
        box.style.borderColor = null;
        this.btnStatus = false;
        // let content = this.$refs.comment.value;
        // let reg = /^[@]+[a-zA-z0-9]{1,5}[:]+[a-zA-Z0-9ژظطزرذدئو شسیبلاتنمکگضصثقفغعهخحجچپ]{1,500}$/gi;
      } else {
        box.style.borderColor = "red";
        this.btnStatus = true;
      }
    },
    sendComment() {
      console.log(document.querySelector("#commentBox").value);
      console.log(document.querySelector("#tag").value);
      document.forms["form_comment"].submit();
      // let content = this.$refs.comment.value;
      // let reg = /^[@]+[a-zA-z0-9]{1,5}[:]+[a-zA-Z0-9ژظطزرذدئو شسیبلاتنمکگضصثقفغعهخحجچپ]{1,500}$/gi;
      // if (content.match(reg) && content.indexOf("@") > -1) {
      //   this.$store.dispatch("record_replay_comment", this.comment);
      // } else {
      //   this.$store.dispatch("record_comment", this.comment);
      // }
      // this.comment = "";
      // this.btnStatus = true;
    },
  },
};
</script>

<style scoped>
.comment {
  width: 100%;
  direction: rtl;
  text-align: right;
}
.content_add {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}
div img {
  cursor: pointer;
}
::placeholder {
  font-size: 15px;
}
</style>
