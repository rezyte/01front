<template>
    <div id="worker">
        <div id="workerWrapper">
            <div class="text">
                <div class="title  secondClass">
                    <p>فرم ثبت نام دریافت خدمات صنعتی</p>
                </div>
                <div class="aditional culText firstShow">
                    <p>
                       {{fullname}}   با پر کردن فرم زیر میتوانید از خدمات فروش و ابزار های اماده شده ی صنف ماشین سازی استفاده نمایید
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
          fullname:""

        }
    },
    created() {
        const urlParams = new URLSearchParams(window.location.search);
        let name = urlParams.get('name');
        let fname = urlParams.get('fname');
        if(fname==null){
          fname=""
        }
        if(name==null){
          name=""
        }
      const gender = urlParams.get('gender');
      this.fname=fname
      this.name=name
      if(gender==null){
        this.fullname="مهندس"+" "+fname+" " + name+" "+"شما"
      }
      if(gender=="female"){
        this.fullname="سرکار خانم مهندس" +" "+fname+" " + name+" "+"شما"
      }
      if(gender=="male"){
        this.fullname="جناب مهندس" +" "+fname+" " + name+" "+"شما"
      }

      if(gender==null && name=='' && fname==''){
        this.fullname='َشما'
      }



      // console.log("gender",gender)
      // // if(gender==null){
      // //   this.gender="شما"
      // // }
      // switch (gender){
      //   case "female":
      //     if(fname==null && name==null){
      //       this.gender='سرکار خانم مهندس'
      //     }else{
      //       this.gender='سرکار خانم مهندس'
      //     }
      //
      //         break;
      //   case "male":
      //     this.gender="جناب مهندس"
      //         break
      //   default:
      //     this.gender=""
      // }
      //   if(name!=null){
      //     if(gender==null){
      //       this.name=" مهندس "+name ;
      //
      //     }else{
      //       this.name=name;
      //     }
      //
      //
      //   }
      //   if(fname!=null){
      //     if(name==null && gender=='male'){
      //       this.fname="جناب مهندس "+fname
      //     }else if(name==null && gender=='female'){
      //       this.fname="سرکار خانم مهندس "+fname
      //     }
      //
      //     else{
      //
      //       this.fname=fname
      //     }
      //
      //   }
      //   console.log(fname,name,gender)
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
