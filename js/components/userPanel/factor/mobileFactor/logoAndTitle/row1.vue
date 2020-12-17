<template>
    <div class="row1">
        <div class="logoSelect" @click="openFilePicker">
            <div class="logoSelectWrapper">
                <div ref="imgArea" class="imgArea">
                    انتخاب لوگو +       <logo-icon></logo-icon>

                </div>
                <img src="" alt="" ref="imagePreview" class="imagePreview">
                <input @change="fillPreview($event)" ref="filePicker" type="file" name="" id="">
            </div>
        </div>
        <div class="text">
            <input type="text" value="پیش فاکتور" v-model="$store.state.factoreItems.title">
        </div>
    </div>
</template>

<script>
import logoIcon from "./logoIcon.vue";
export default {
  mounted() {
    this.$emit('titleChanged',"پیش فاکتور")
  },
  name: "row1",
  props:['title'],
    components:{
        logoIcon
    },
    methods:{
        openFilePicker(){
            this.$refs.filePicker.click()
        },
        fillPreview(e)
        {
            const clickedInput = e.target;
            var reader = new FileReader();
            let output = this.$refs.imagePreview;

            reader.onload = ()=> {
                output.src = reader.result;
              this.$store.state.factoreItems.logo=reader.result
            };
            reader.readAsDataURL(e.target.files[0]);
            output.style.display = "block";
            this.$refs.imgArea.style.display="none"
        }
    }
}
</script>

<style scoped>
div{
    color: var(--fontColorGray);
}
.row1{
    display: flex;
    justify-content: space-between;
}
.logoSelectWrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.logoSelect{
    width: 224px;
    height: 208px;
    border: 1px solid var(--grayBorderColor);
    cursor: pointer;
}
.imgArea{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.imagePreview{
    display: none;
    width: 190px;
    height: 190px;
}
input[type=file]{
    display: none;
}
input[type=text]{
    margin-top: 1px;
}
.text{
    margin-left: 5px;
}
@media (max-width: 500px) {
    .row1{
        flex-direction: column;
        align-items: center;
    }
    .text{
        order: 1;
    }
    .logoSelect{
        order: 2;
        margin-top: 20px;
    }
}
</style>