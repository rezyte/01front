<template>
  <div class="w-100" id="form">
    <form v-on:submit.prevent="send()" method="post" name="form" enctype="multipart/form-data">
      <fieldset>
        <legend>ثبت محصول</legend>
        <div class="m-3">
          <div class="d-flex flex-row justify-content-between flex-wrap">
            <div class="form-group h-100">
              <label for="picture">عکس محصول</label>
              <img src="@/assets/icons/star-16.jpg" class="mr-2 mb-1" alt="تصویر ناقص است">
<!--              <div class="required">*</div>-->
              <div class="m-1 mb-3">
                <small class="text-primary">می توانید هرتعداد عکسی که از محصول میخواهید آپلود کنید</small>
              </div>
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
            <div class="form-group mt-5">
              <label for="video">فیلم محصول</label>
              <input
                  type="file"
                  ref="video"
                  id="video"
                  name="video"
                  @change="amount('video')"
                  class="form-control-file"
                  accept="video/*"
              />
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
            <div class="form-group mt-5">
              <label>قیمت</label>
              <img src="@/assets/icons/star-16.jpg" class="mr-2 mb-1"/>
              <input
                  type="text"
                  :class="[
                inValidated.cost ? 'is-invalid' : null,
                validated.cost ? 'is-valid' : null,
                'form-control']"
                  id="cost"
                  name="cost"
                  ref="cost"
                  pattern="[0-9]{6,11}"
                  title="قیمت در رنج معتبری وارد نشده است"
                  placeholder="قیمت به تومان وارد شود"
                  required
                  @input="validate"
              />
            </div>
          </div>
          <div class="d-flex flex-row justify-content-between flex-wrap">
            <div class="form-group">
              <lable
              >می خواهید مشتریان در مورد محصول شما چه چیزی را بدانند؟
              </lable
              >
              <textarea
                  rows="10"
                  ref="com1"
                  name="com1"
                  @input="validate"
                  class="form-control mt-4 texter"
                  placeholder="مشخصات دسنگاه را ذکر کنید"
              ></textarea>
            </div>
            <div class="form-group">
              <lable
              >دستگاه شما در کدام قسمت ها از بقیه دستگاه های هم رده بهتر
                است؟
              </lable
              >
              <textarea
                  rows="10"
                  ref="com2"
                  name="com2"
                  @input="validate"
                  class="form-control mt-4 texter"
                  placeholder="تفاوت ها و مزیت های دستگاه خودتان را بنویسید"
              ></textarea>
            </div>
            <div class="form-group">
              <lable for="com3">چرا مردم دستگاه شما را خریداری می کنند؟</lable>
              <textarea
                  cols="10"
                  rows="10"
                  ref="com3"
                  id="com3"
                  name="com3"
                  @input="validate"
                  class="form-control mt-4 texter"
                  placeholder="موارد استفاده یا کاربردهای دستگاه خودتان را اینجا بنویسید"
              ></textarea>
            </div>
            <div class="form-group">
              <lable
              >کدام نکته است که اگه مشتری بداند حتما دستگاه شما را انتخاب می
                کند؟
              </lable
              >
              <textarea
                  rows="10"
                  ref="com4"
                  name="com4"
                  @input="validate"
                  class="form-control mt-4 texter"
                  placeholder="کمبود های رقبا و برتری های خودرا نسبت به آن هارا ذکر کنید"
              ></textarea>
            </div>
          </div>
          <div class="form-group">
            <lable>موارد استفاده دستگاه خودتان را بنویسید</lable>
            <div class="d-sm-flex flex-wrap justify-content-around mt-4">
              <div class="form-inline m-2">
                <span>1:</span>
                <textarea
                    cols="18"
                    rows="3"
                    ref="com5"
                    name="com5"
                    @input="validate"
                    class="form-control mr-2"
                ></textarea>
              </div>
              <div class="form-inline m-2">
                <span>2:</span>
                <textarea
                    cols="18"
                    rows="3"
                    ref="com6"
                    name="com6"
                    @input="validate"
                    class="form-control mr-2"
                ></textarea>
              </div>
              <div class="form-inline m-2">
                <span>3:</span>
                <textarea
                    cols="18"
                    rows="3"
                    ref="com7"
                    name="com7"
                    @input="validate"
                    class="form-control mr-2"
                ></textarea>
              </div>
            </div>
          </div>
          <input type="submit" class="btn btn-primary" value="ثبت"/>
        </div>
      </fieldset>
    </form>
  </div>
</template>


<script>
export default {
  name: "Product",
  data() {
    return {
      picture: [],
      image: [],
      video: "",
      errors: {
        picture: "",
        video: "",
      },
      validated: {
        cost: false
      },
      inValidated: {
        cost: false
      }
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
        let res = el.value.match(/^[0-9]{6,11}$/);
        if (res) {
          this.validated.cost = true;
          this.inValidated.cost = false;
        } else {
          this.validated.cost = false;
          this.inValidated.cost = true;
        }
      } else {
        console.log(el);
      }
    },send(){
      let form=new FormData();
      let pics=[];
      // console.log(this.picture)
      for (var i=0 ; i < this.picture.length ; i++) {
        pics[i]=this.picture[i]
        // form.append('pics[' + i + ']',pic);
      }
      this.$refs.picture=pics;
      document.querySelector('form').submit();
    }
  },
  created() {
    // console.log(this.image.length)
  }
};
</script>

<style scoped>
form {
  padding: 20px;
}

#form {
  background-color: whitesmoke;
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
.texter{
  width: 400px;
}
</style>
