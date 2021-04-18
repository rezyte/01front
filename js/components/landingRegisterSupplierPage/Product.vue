<template>
  <div class="w-100" id="form">
    <div class="w-50 m-auto p-3" id="progress">
      <progress-bar text-position="middle" size="huge" val="86" text="86%" bg-color="#b6b3ff"></progress-bar>
    </div>
    <form v-on:submit.prevent="send()" method="post" name="form" enctype="multipart/form-data">
      <fieldset>
        <legend><h1>ثبت محصول</h1></legend>
        <div class="m-3">
          <div class="d-flex flex-row justify-content-between flex-wrap">
            <div class="form-group">
              <label for="name">نام محصول</label>
              <i class="fas fa-asterisk fa-xs"></i>
              <input type="text" name="name" id="name" ref="name" placeholder="نام محصول خود را وراد کنید"
                     @input="validate" required
                     :class="[
                inValidated.name ? 'is-invalid' : null,
                validated.name ? 'is-valid' : null,
                'form-control']"
                     pattern="[\u06F0-\u06F90-9a-zA-Z0-9ةيژؤإأ-_ ءـآۀًٌٍَُِّضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئو]{3,100}"
                     title="نام درست وارد نشده است"
                     minlength="3"
                     maxlength="100"
              >
            </div>
            <div class="form-group h-100">
              <label for="picture">عکس محصول</label>
              <i class="fas fa-asterisk fa-xs"></i>
              <input
                  type="file"
                  class="form-control-file"
                  required
                  id="picture"
                  name="picture"
                  ref="picture"
                  @change="amount('picture')"
                  accept="image/*"
                  multiple="multiple"
              />
              <small v-if="image.length <1 " class="text-primary">می توانید هرتعداد عکسی که از محصول میخواهید آپلود کنید</small>
              <small
                  class="text text-danger"
                  v-if="errors.picture"
                  v-text="errors.picture"
              ></small>
              <div class="d-flex flex-column justify-content-center align-items-center">
                <div class="picture" v-if="image.length > 0  && !errors.picture">
                  <img v-for="img of image" :src="img" width="100" height="100" alt="تصویر ناقص است"/>
                </div>
                <div>
                  <button v-if="image.length !== 0" class="btn btn-secondary m-2" @click="removeImage">
                    حذف عکس ها
                  </button>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="video">فیلم محصول</label>
              <input
                  type="file"
                  ref="video"
                  id="video"
                  name="video"
                  @change="amount('video')"
                  class="form-control-file"
                  accept="video/*"
                  size="100"
              />
              <small class="text-primary">حجم ویدیو کمتراز 10Mb باشد</small>
              <small
                  class="text text-danger"
                  v-if="errors.video"
                  v-text="errors.video"
              ></small>
              <div class="video" v-if="video">
                <video controls>
                  <source :src="video"/>
                </video>
                <button class="btn btn-secondary m-2 w-50" @click="removeVideo">
                  حذف ویدیو
                </button>
              </div>
            </div>
            <div class="form-group">
              <label>قیمت</label>
              <i class="fas fa-asterisk fa-xs"></i>
              <input
                  type="text"
                  :class="[
                inValidated.cost ? 'is-invalid' : null,
                validated.cost ? 'is-valid' : null,
                'form-control']"
                  id="cost"
                  name="cost"
                  ref="cost"
                  pattern="[\u06F0-\u06F90-90-9/]{7,14}"
                  title="قیمت در رنج معتبری وارد نشده است"
                  placeholder="قیمت به تومان وارد شود"
                  required
                  @input="validate"
              />
              <small class="text-primary">مثال:700/000/000</small>
            </div>
          </div>
          <div>
            <hr>
          </div>
          <div dir="rtl" class="w-100 my-4 dir-rtl">
            <div class="form-group">
              <label for="editor">اطلاعات محصول</label>
              <ckeditor @input="validate2"  v-model="description"  id="editor"></ckeditor>
            </div>
            <input type="hidden" ref="description" name="description">
<!--            <div class="w-100">-->
<!--              <div class="form-group float-right w-50 comments-response">-->
<!--                <label for="com1"-->
<!--                >می خواهید مشتریان در مورد محصول شما چه چیزی را بدانند؟-->
<!--                </label-->
<!--                >-->
<!--                <textarea-->
<!--                    rows="10"-->
<!--                    id="com1"-->
<!--                    ref="com1"-->
<!--                    name="com1"-->
<!--                    @input="validate"-->
<!--                    class="form-control mt-4 texter"-->
<!--                    placeholder="مشخصات دسنگاه را ذکر کنید"-->
<!--                ></textarea>-->
<!--              </div>-->
<!--              <div class="form-group float-left w-50 comments-response">-->
<!--                <label for="com2"-->
<!--                >دستگاه شما در کدام قسمت هااز بقیه دستگاه های هم رده بهتراست؟-->
<!--                </label-->
<!--                >-->
<!--                <textarea-->
<!--                    rows="10"-->
<!--                    ref="com2"-->
<!--                    id="com2"-->
<!--                    name="com2"-->
<!--                    @input="validate"-->
<!--                    class="form-control mt-4 texter"-->
<!--                    placeholder="تفاوت ها و مزیت های دستگاه خودتان را بنویسید"-->
<!--                ></textarea>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="w-100">-->
<!--              <div class="form-group mt-4 float-right w-50 comments-response">-->
<!--                <label class="label" for="com3">چرا مردم دستگاه شما را خریداری می کنند؟</label>-->
<!--                <textarea-->
<!--                    cols="10"-->
<!--                    rows="10"-->
<!--                    ref="com3"-->
<!--                    id="com3"-->
<!--                    name="com3"-->
<!--                    @input="validate"-->
<!--                    class="form-control mt-4 texter"-->
<!--                    placeholder="موارد استفاده یا کاربردهای دستگاه خودتان را اینجا بنویسید"-->
<!--                ></textarea>-->
<!--              </div>-->
<!--              <div class="form-group mt-4  float-left w-50 comments-response">-->
<!--                <label class="label" for="com4"-->
<!--                >کدام نکته است که اگه مشتری بداند حتما دستگاه شما را انتخاب می-->
<!--                  کند؟-->
<!--                </label-->
<!--                >-->
<!--                <textarea-->
<!--                    rows="10"-->
<!--                    id="com4"-->
<!--                    ref="com4"-->
<!--                    name="com4"-->
<!--                    @input="validate"-->
<!--                    class="form-control mt-4 texter"-->
<!--                    placeholder="کمبود های رقبا و برتری های خودرا نسبت به آن هارا ذکر کنید"-->
<!--                ></textarea>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="form-group">-->
<!--            <label class="label mt-3">موارد استفاده دستگاه خودتان را بنویسید</label>-->
<!--            <div class="d-sm-flex flex-wrap justify-content-around mt-4">-->
<!--              <div class="form-inline m-2">-->
<!--                <span>1:</span>-->
<!--                <textarea-->
<!--                    cols="18"-->
<!--                    rows="1"-->
<!--                    ref="com5"-->
<!--                    name="com5"-->
<!--                    @input="validate"-->
<!--                    class="form-control mr-2"-->
<!--                ></textarea>-->
<!--              </div>-->
<!--              <div class="form-inline m-2">-->
<!--                <span>2:</span>-->
<!--                <textarea-->
<!--                    cols="18"-->
<!--                    rows="1"-->
<!--                    ref="com6"-->
<!--                    name="com6"-->
<!--                    @input="validate"-->
<!--                    class="form-control mr-2"-->
<!--                ></textarea>-->
<!--              </div>-->
<!--              <div class="form-inline m-2">-->
<!--                <span>3:</span>-->
<!--                <textarea-->
<!--                    cols="18"-->
<!--                    rows="1"-->
<!--                    ref="com7"-->
<!--                    name="com7"-->
<!--                    @input="validate"-->
<!--                    class="form-control mr-2"-->
<!--                ></textarea>-->
<!--              </div>-->
<!--            </div>-->
          </div>
          <div class="mt-5 w-100">
            <input type="submit" class="btn btn-primary register" value="ثبت"/>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>


<script>
import ProgressBar from 'vue-simple-progress';

export default {
  name: "Product",
  components: {ProgressBar},
  data() {
    return {
      picture: [],
      image: [],
      video: "",
      errors: {
        picture: "",
        video: "",
      },
      regexName: /^[ًٌٍ،؛َُِّۀآـ«»:"ةيژؤإأء<> ؟ضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئو./a-zA-z0-9\u06F0-\u06F90-9]{3,100}$/,
      validated: {
        name: false,
        cost: false
      },
      inValidated: {
        name: false,
        cost: false
      },
      editorConfig:{

      }
      ,description:''
    };
  },
  methods: {
    amount(id) {
      let form = new FormData();
      if (id === "picture") {
        if (
            this.$refs.picture.files[0]["type"] === "image/jpeg" ||
            this.$refs.picture.files[0]["type"] === "image/png"
        ) {
          this.errors.picture = "";
          this.picture.push(this.$refs.picture.files);
          let pic = this.$refs.picture.files;
          this.createImage(pic[0]);
        } else {
          this.errors.picture = "فرمت فایل باید بصورت jpg یا png باشد";
          this.$refs.picture.value = "";
        }
      } else {
        if (
            this.$refs.video.files[0]["type"] === "video/x-matroska" ||
            this.$refs.video.files[0]["type"] === "video/mp4"
        ) {
          this.errors.video = "";
          let video = this.$refs.video.files;
          this.createVideo(video[0]);
          // console.log(this.$refs.video.files);
        } else {
          this.errors.video = "فایل باید بصورت فرمته صحیحی از ویدیو باشد";
          this.$refs.video.value = "";
        }
      }
    },
    createImage(file) {
      new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        // vm.image = e.target.result;
        vm.image.push(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    removeImage(e) {
      this.image = [];
      this.$refs.picture.value = "";
    },
    createVideo(file) {
      document.createElement("video");
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        vm.video = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeVideo(e) {
      this.video = "";
      this.$refs.video.value = "";
    },
    validate(e) {
      let el = e.target;
      if (el.type === 'text') {
        if (el.value === '') {
          el.classList.remove('is-invalid');
        }
        if (el.name === 'name') {
          let res = el.value.match(this.regexName);
          if (res) {
            this.validated.name = true;
            this.inValidated.name = false;
          } else {
            this.validated.name = false;
            this.inValidated.name = true;
          }
        } else {
          let res = el.value.match(/^[\u06F0-\u06F90-90-9/]{7,14}$/);
          if (res) {
            this.validated.cost = true;
            this.inValidated.cost = false;
          } else {
            this.validated.cost = false;
            this.inValidated.cost = true;
          }
        }
      } else {
        console.log(el);
        alert("yes")
      }
    },
    validate2(e){
      // var des = e.substring(
      //     e.lastIndexOf("<p>"),
      //     e.lastIndexOf("</p>")
      // );
      e.split('/>')
      let one=e.split('</')[0];
      this.description=one.split('>')[1];
    },
    send() {
      this.$refs.description.value=this.description;
      console.log(this.$refs.description.value)
      // let form = new FormData();
      let pics = [];
      // console.log(this.picture)
      for (var i = 0; i < this.picture.length; i++) {
        pics[i] = this.picture[i]
        // form.append('pics[' + i + ']',pic);
      }
      this.$refs.picture = pics;
      document.querySelector('form').submit();
    }
  },
  created() {
    // console.log(this.image.length)
  }
};
</script>

<style scoped>
* {
  font-family: iranSans !important;
}

form {
  padding: 20px;
}

#form {
  direction: rtl;
  text-align: right;
}

#form legend h1 {
  font-size: 24px;
  font-weight: 550;
}

.picture {
  width: 300px;
  margin: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.picture img {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  border-radius: 10px;
  margin: 4px;
}

.video {
  width: auto;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.video video {
  width: 300px;
  height: 200px;
}

/*.required{*/
/*  color: red;*/
/*  width: 20px;*/
/*}*/
.texter {
  width: 400px;
}

.fa-asterisk {
  color: red;
  margin-bottom: 6px;
  margin-right: 2px;
}

label {
  font-size: 19px;
}

::placeholder {
  font-size: 14.4px;
  font-weight: 550;
}
.register{
  width: 70px;
  position: relative;
  z-index: 999;
  margin-right: 3%;
  /*background-color: var(--blue);*/
  font-size: 21px;
}
::placeholder{
  height: 100%;
}
@media screen and (max-width: 933px){
  .comments-response{
    width: 100%!important;
  }
  .comments-response textarea{
    width: 80%;
  }
}
@media screen and (max-width: 576px){
  #progress{
    width: 90% !important;

  }
}
#editor{
  font-size: 21px!important;
}
</style>
