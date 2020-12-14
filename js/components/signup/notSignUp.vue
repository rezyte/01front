<template>
    <div id="signupView" class="signView">
        <div id="signupViewWrapper" class="signViewWrapper">
            <div class="logo">
                <img src="/static/public/images/logo.png" alt="">
            </div>
            <div class="descs">
                <p>
                    شما جزو تامین کنندگان تایید شده نیستید برای عضویت باید توسط تامین کنندگان عضو دعوت شوید برای قرارگیری در لیست انتظار فرم مربوطه را پر کنید
                </p>
            </div>
            <div class="outerForm">
                <form action="" method="post">
                    <input type="hidden" name="csrfmiddlewaretoken" :value="csrf">
                    <div class="input">
                        <p>نام و نام خانوادگی:</p>
                        <input ref="name" type="text" name="name">
                    </div>
                    <div class="input">
                        <p>شماره تلفن:</p>
                        <input ref="phone" type="text" name="phone">
                        <p v-if="showError" ref="error" class="error">
                            لطفا اطلاعات را درست وارد کنید
                        </p>
                    </div>
                    <div class="input">
                        <p>زمینه کاری:</p>
                        <input ref="name" type="text" name="workField">
                    </div>
                    <div class="button">
                        <button class="submit">ثبت</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "notSignUp",
    props:['error'],
    data(){
        return{
            showError:false
        }
    },
    mounted() {
        if(this.error!==""){
            this.showError=true
            this.$refs.phone.style.border="1px solid red"
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
    font-size: 16px;
}
</style>