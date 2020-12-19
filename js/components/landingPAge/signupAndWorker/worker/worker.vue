<template>
    <div id="worker">
        <div id="workerWrapper">
            <div class="text">
                <div class="title  secondClass">
                    <p>فرم ثبت نام دریافت خدمات صنعتی</p>
                </div>
                <div class="aditional culText firstShow">
                    <p>
                       {{gender}}  {{name}} {{fname}} شما  با پر کردن فرم زیر میتوانید از خدمات فروش و ابزار های اماده شده ی صنف ماشین سازی استفاده نمایید
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "worker",
    data(){
        return{
            name:"",
            fname:"",
            gender:"",

        }
    },
    mounted() {
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name');
        const fname = urlParams.get('fname');
      const gender = urlParams.get('gender');
      console.log("gender",gender)
      // if(gender==null){
      //   this.gender="شما"
      // }
      switch (gender){
        case "female":
          if(fname==null && name==null){
            this.gender='سرکار خانم مهندس شما'
          }else{
            this.gender='سرکار خانم مهندس'
          }

              break;
        case "male":
          this.gender="جناب مهندس"
              break
        default:
          this.gender=""
      }
        if(name!=null){
            this.name=name
        }
        if(fname!=null){
            this.fname=fname
        }
    }
}
</script>

<style scoped>
.text{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.firstShow{
    display: block;
}
#worker{
    height: 500px;
    position: relative;

    background: url("/static/public/images/insust.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    width: 100%;
}
#workerWrapper{
    position: absolute;
    background: rgba(0,0,0,0.7);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
}
.culText{
    display: flex;
    flex-direction: column;
}
p{
    text-align: center;
}
.title p{
    font-size: 40px;
    font-weight: bold;
    color: white;
}
.aditional p{
    color: white;
    font-size: 25px;
    padding: 15px;
    font-weight: bold;
    text-align: center;
}
.workderImage img{
    width: 100%;
}
.secondClass p{
    color: var(--logoBlue);
}
</style>