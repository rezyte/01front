<template>
  <div id="productImg" class="productSection">
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
        <p>عکس های محصول</p>
      </div>
    </div>
    <div id="productImgWrapper" class="hiddenAtDisPlay">
      <div id="images">

        <div class="allImagesWrapper">
          <!-- <single-image></single-image> -->
          <div class="grabber">
            <div  class="grabberWrapper">
              <div  class="inside">
                <div @blur="checkThereIsFileOrNot($event)" @click="firstImageUpload($event)" id="insideWrappe" v-if="show">
                  <grab-icon></grab-icon>
                  <p>برای اپلود عکس کلیک کنید</p>
                </div>
                <div id="insideWrappe" v-else>
                  <div id="scaleImage">
                    <input v-if="userInfo.is_superuser" placeholder="متن جایگزین" @change="ChangeImageAlt($event)" ref="scaledAlt" id="imgAlt" type="text">
                    <img id="insideImage" ref="scaledImage" src="" alt="">
                  </div>
                  <div id="actions">
                    <edit @editImage="editImage"></edit>
                    <simple-plus @makeNewImage="firstImageUpload"></simple-plus>
                    <trash @delete="deleteScaledImage($event)"></trash>
                  </div>
                </div>
                <div class="outSide">
                  <div class="singleImagesImagesWrapper">
                    <component
                        @imageWasDeleted="deleteImage($event)"
                        v-for="(img,index) in singleImgsArray"
                        :index="index"
                        :single_id="img.id"
                        :key="img.id"
                        :is="img.name"
                        @changeInside="changeInside($event)"
                    ></component>
                  </div>
                </div>
                  <p v-if="showError" class="error">حداکثر محدودیت اپلود عکس 10 تا میباشد</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import singleImage from "./singleImage.vue";
import trash from "./icons/trash.vue";
import grabIcon from "./icons/grabIcon.vue";
import edit from "./icons/edit.vue";
import simplePlus from "./icons/simplePlus.vue";
export default {
  components: {
    singleImage,
    trash,
    grabIcon,
    edit,
    simplePlus
  },
  computed:{
      checkItShow(){
      return !(this.singleImgsArray.length==10)
    }
  },
  data() {
    return {
      singleImgsArray: [],
      counter:0,
      show:true,
        showError:false
    };
  },
  methods: {
    editImage(){
      const scaledImage=document.querySelector('#insideImage')
      const className=scaledImage.classList[0].split('-')[0]
      const actualImage=document.querySelector(`#${className}`)
      const parent=actualImage.closest('.imagesInput')
      let file=parent.querySelector(`#${parent.id}input`)
      file.click()
      console.log(parent)
    },
    async deleteScaledImage(e){
      const el=e.target
      const parent=el.closest("#insideWrappe")
      const image=parent.querySelector('#insideImage')
      const className=image.classList[0].split('-')[0]
      const getImageInComponent=document.querySelector(`#${className}`)
      const parentImage=getImageInComponent.closest('.imagesInput')
      const prentImageId=parentImage.id
      console.log("deleted",className)
      this.show=true
      this.deleteEptyFields()
      const findId=this.findMainPictureIndex(prentImageId)
      await this.deleteFromImagesArray(findId)

    },
    deleteFromImagesArray(deleteId){

      this.singleImgsArray.splice(deleteId,1)
        this.showError=false
    },
    findMainPictureIndex(shoudFind){
      const id=this.singleImgsArray.findIndex(s=>{
        return s.id==shoudFind
      })
      return id
    },
    deleteEptyFields(){
      const files=document.getElementsByClassName('files')
      const items=this.singleImgsArray
      if(files.length>0){
        Array.from(files).forEach(file=>{
          console.log(file.files.length)
          if(file.files.length==0){
            const parent=file.closest('.imagesInput')
            const findedId=this.findMainPictureIndex(parent.id)
            console.log('findedId',findedId)
            if(findedId>-1){
              this.deleteFromImagesArray(findedId)
            }
          }
        })
      }
    },
    async firstImageUpload(){
      await this.deleteEptyFields()
      if(this.singleImgsArray.length>=10){
          this.showError=true
          return
      }

      this.addImgInput()
      setTimeout(()=>{
        const el=document.getElementById(`${this.singleImgsArray[this.singleImgsArray.length-1].id}`)
        el.style.display="block"
        const firstLabel=document.getElementById(`${this.singleImgsArray[this.singleImgsArray.length-1].id}input`)
        const firstImage=document.getElementById(`${this.singleImgsArray[this.singleImgsArray.length-1].id}image`)
        firstLabel.click()
        this.counter++
      },100)

    },
    changeInside(e){
      this.show=false
      const element=e.target
      const parent=element.closest('.imagesInput')
      const imageAlt=parent.querySelector('.imageAlt')
      setTimeout(()=>{
        const img=document.querySelector("#insideImage")
        img.setAttribute("src",element.getAttribute("src"))
        img.classList=[];
        img.classList.add(e.target.id+"-scaled")
        const alt=this.$refs.scaledAlt
        alt.value=imageAlt.value
      },100)
    },


    deleteImage(e) {
      const el = e.target;
      const wrapper = el.closest(".imagesInput");
      const shouldDelete = this.singleImgsArray.findIndex((img) => {
        return img.id == wrapper.id;
      });
      this.singleImgsArray.splice(shouldDelete, 1);
      document.getElementById(`${wrapper.id}`).remove();
    },
    addImgInput() {
      const randomId = this.makeid(20);
      this.singleImgsArray.push({ id:String(randomId), name: "singleImage" });


    },

    clickImage() {
      const imageInput = document.querySelector("#productImgInput");
      imageInput.click();
    },
    makeid(length) {
      var result = "";
      var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    ChangeImageAlt(e){
      const scaled=this.$refs.scaledImage
      let classList=scaled.classList[0]
      classList=classList.split("-")[0]
      console.log(classList)
      const realImg=document.querySelector(`#${classList}`)
      const parentOfRealImage=realImg.closest('.imagesInput')
      const altInput=parentOfRealImage.querySelector('.imageAlt')
      console.log("aly",altInput)
      altInput.value=e.target.value
    }
  },
};
</script>

<style scoped>
.grabber{
  width: 210px;
  height: 210px;
  border: 2px dashed  #0074d9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.grabberWrapper{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
}
.inside{
  height: 100%;
  position: relative;
  width: 100%;
}
#insideWrappe{
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.outSide{
  position: absolute;
  bottom: -170px;
  left: 50%;
  height: 120px;
  transform: translateX(-50%);

}
.singleImagesImagesWrapper{
  display: flex;
  width: 300px;
  flex-wrap: wrap;
}
#insideImage{
  width: 120px;
  height: 120px;
}
#actions{
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.add{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 5px;
  width: 50px;
}
#images{
    margin-bottom: 105px;
}
.error{
    text-align: center;
    box-sizing: border-box;
    color: #e23737;
    font-size: 18px;
}











#productImgWrapper{
  margin-bottom: 50px
}
#productImgWrapper > label {
  width: 100%;
  display: flex;
  justify-content: center;
}
#productImg {
  padding: 10px;
}
.imgDetails p {
  font-size: 14pt;
  padding: 5px;
  width: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.imgName p {
  max-width: 100px;
  overflow: hidden;
  font-size: 11pt;
  text-align: left;
  white-space: nowrap;
}

#images {
  display: flex;
  width: 100%;
  margin-top: 10px;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}

.allImagesWrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  position: relative;
}
#imgAlt{
  border:1px solid #d9d8d8;
  width: 150px;
}
#scaleImage{
  display: flex;
  flex-direction: column;
  align-items: center;
}
#imgAlt{
  margin-bottom: 5px;
}
@media (max-width: 850px) {
  #images {
    flex-direction: column;
    align-items: center;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>