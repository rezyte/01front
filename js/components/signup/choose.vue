<template>
    <div id="signupView" class="signView">
        <div id="signupViewWrapper" class="signViewWrapper">
            <div class="logo">
                <img src="/images/logo.png" alt="">
            </div>
            <div class="title">
                <h1>انتخاب نقش</h1>
            </div>
            <div class="outerForm">
                <form action="" method="post">
                  <input type="hidden" name="csrfmiddlewaretoken" :value="csrf">
                    <div class="input">
                        <p>لطفا انتخاب کنید که چه نقشی در سایت خواهید داشت</p>
                        
                        <div class="inputs">
                            <div class="single">

                                <input type="radio" name="role" id="" value="0">
                                <label for="">تامین کننده</label>
                            </div>
                            <div class="single">



                                <input type="radio" name="role" id="" value="1">
                                <label for="">خریدار</label>


                            </div>
                            <div class="single">

                                <input type="radio" name="role" id="" value="2">
                                <label for="">هردو</label>
                            </div>
                        </div>
                        <p v-if="showError" ref="error" class="error">
                            لطفا یک گزینه را انتخاب کنید
                        </p>
                    </div>
                    <div class="button">
                        <button class="submit">ادامه</button>
                    </div>

                </form>
            </div>
            <div class="descs">
                <p>با ورود و ثبت نام در دمیرکو شما الزاما شرایط و قوانین استفاده از دمیرکو را میپذیرید</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "choose",
    props:['error'],
    data(){
        return{
            showError:false
        }
    },
    mounted() {
        console.log('eror',typeof this.error,this.error)
        if(this.error!==""){
            this.showError=true
            this.$refs.email.style.border="1px solid red"
        }
    }
}
</script>
<style scoped>

.error{
    text-align: right;
    color: #ff3131;
    font-size: 14px;
    margin-top: 10px;
}




.descs{
    margin-top: 20px;
}
.descs p{
    text-align: center;
    font-size: 13px;
}


.inputs{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.single{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
}
.single:nth-child(2){
    margin-top: 20px;
}
label{
    min-width: 73px ;
    text-align: right;
}
input{
    width: max-content;
    margin-right: 10px;
    width: 25px;
    height: 25px;
}
</style>