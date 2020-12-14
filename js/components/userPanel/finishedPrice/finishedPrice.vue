<template>
    <div id="finishedPrice" class='userPanelItem panelItem'>
        <div id="finishedPriceWrapper">
            <div class="titleWrapper">
                <p>اطلاعات خواسته شده را پر نموده و بهای تمام شده محصولتان را به همراه سود مشاهده نمایید</p>
            </div>
            <div class="inputsWrapper">
                <div class="single">
                    <input @keydown="checkInput($event)" v-model="workersPay" id="menWorkers" type="text" placeholder="به تومان" sudoPlaceholder="به تومان">
                    <label for="menWorkers">:هزینه نیروی انسانی</label>

                </div>
                <div class="single">
                    <input @keydown="checkInput($event)" v-model="jari" id="jari" type="text" placeholder="هزینه آب,برق..." sudoPlaceholder="هزینه آب,برق...">
                    <label for="jari">:هزینه های جاری</label>

                </div>
                <div class="single">
                    <input @keydown="checkInput($event)" v-model="goods" id="goods" type="text" placeholder="به تومان" sudoPlaceholder="به تومان">
                    <label for="goods">:هزینه مواد و قطعات اولیه</label>

                </div>
                <div class="single">
                    <input @keydown="checkInput($event)" v-model="services" id="services" type="text" placeholder="به تومان" sudoPlaceholder="به تومان">
                    <label for="services">:هزینه خدمات</label>

                </div>

                <div class="single">
                    <input @keydown="checkInput($event)" v-model="leaveGoods" id="leaveGoods" type="text" placeholder="به تومان" sudoPlaceholder="به تومان">
                    <label for="leaveGoods">:هزینه مانده قطعات</label>

                </div>

                <div class="single">
                    <input @keydown="checkInput($event)" v-model="sood" id="sood" type="text" placeholder="به درصد" sudoPlaceholder="به درصد">
                    <label for="sood">:سود</label>

                </div>
                <div class="results single">

                    <div class="res" ref="res">
                        <div class="nums">
                            <p class="toman">تومان</p>
                            <p class="money">{{calced}}</p>
                        </div>
                        <div class="numToText">
                            <p>معادل: {{numToText}} تومان</p>
                        </div>

                    </div>

                    <div class="button">
                        <button @click.prevent="calc" class="submit">محاسبه</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="save" v-if="showSavedOptions">
            <p>:ذخیره سازی محاسبه</p>
            <p>اگر قصد ذخیره سازی این محسابه قیمت را دارید نام محصول را وارد کنید</p>
            <div class="productName">
                <input placeholder="نام محصول" type="text">
                <label for="productName">نام محصول</label>
            </div>
            <div class="datePickerWrapper">
                <p>:تاریخ محاسبه را انتخاب کنید</p>
                <date-picker v-model="date" :clearable="true"></date-picker>
            </div>
            <button class="submit">
                ذخیره سازی
            </button>
        </div>
            <div class="table">
                <table>
                    <template>
                        <tr>
                            <th>نام محصول</th>
                            <th style="width: 170px">تاریخ</th>
                            <th style="width: 170px">قیمت</th>
                            <th>شماره ردیف</th>
                        </tr>

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </template>

                </table>
            </div>
    </div>
</template>

<script>
import Num2persian from 'num2persian';
import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
export default {
name: "finishedPrice.vue",
    components:{
        datePicker: VuePersianDatetimePicker
    },
    data(){
        return{
            workersPay:null,
            jari:null,
            goods:null,
            services:null,
            leaveGoods:null,
            sood:null,
            calced:null,
            showSavedOptions:false,
            numToText:"",
            date:null
        }
    },
    mounted() {
        const inputs=document.querySelectorAll(".single input")
        inputs.forEach(input=>{
            input.addEventListener("focus",e=>{
                this.focus(e)
            })
            input.addEventListener("blur",e=>{
                this.blur(e)
            })
        })
    },
    watch:{
        sood:function (v){
            if(v>100){
                this.sood=100
            }
        }
    },
    methods:{
        getEqueal(price){
            if(price==null || price==''){
                return ""
            }
            return Num2persian(price)
        },
        focus(e){
            e.target.placeholder=""
            e.target.style.direction="ltr"
            e.target.style.textAlign="left"
        },
        blur(e){
            if(e.target.value==""){
                e.target.placeholder=e.target.getAttribute('sudoPlaceholder')
                e.target.style.direction="rtl"
                e.target.style.textAlign="right"
            }
        },
        checkInput(e){
            if(e.key=='Backspace' || e.key=='Control' || e.key=='Shift' || e.key=='F5'){
                return
            }
            if (!(e.key >= 96 || e.key <= 105) )
            {

                e.preventDefault();
            }
        },
        calc(){
            const res=this.$refs.res;
            const toman=res.querySelector('.toman');
            const money=res.querySelector('.money');
            const numToText=res.querySelector('.numToText')
            money.innerText='...لطفا صبر کنید'
            money.style.visibility="visible";
                const workersPay=+this.workersPay;
                const jari=+this.jari;
                const goods=+this.goods;
                const services=+this.services;
                const leaveGoods=+this.leaveGoods;
                const sood=+this.sood;
                const sum=workersPay+jari+goods+services+leaveGoods;
                const result=+sum+(+sum*(sood/100));



                res.style.visibility="visible";
                if(result=='' || result==0){
                    toman.style.visibility='hidden'
                    numToText.style.visibility='hidden'
                    money.innerText="لطفا فیلد هارا وارد کنید"
                    this.showSavedOptions=false
                    return
                }
                if(result>Number.MAX_SAFE_INTEGER){
                    numToText.style.visibility='hidden'
                    toman.style.visibility='hidden'
                    money.innerText="قابل محاسبه نیست"
                    this.showSavedOptions=false
                    return
                }
                toman.style.visibility='visible'
                numToText.style.visibility="visible"
                money.innerText=Number(result).toLocaleString('fi-FI')
                this.showSavedOptions=true
            this.numToText=Num2persian(+result)

        }
    }
}
</script>

<style scoped>
    #finishedPrice{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 240px;
    }
    #finishedPriceWrapper{
        display: flex;
        align-items: flex-end;
        flex-direction: column;
    }
    .single{
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
        align-items: center;
    }
    .res{
        width: 250px;
    }
    .single input{
        margin-right: 0;
        width: 100%;
        max-width: 250px;
    }
    p{
        font-size: 16px;
        font-weight: bold;
        text-align: right;
    }
    .inputsWrapper{
        width: 100%;
        margin-top: 50px ;
    }
    label{
        width: 200px;
        text-align: right;
    }
    .button{
        width: 200px;
        display: flex;
        justify-content: flex-end;
    }
    .res{
        visibility: hidden;
        display: flex;
        flex-direction: column;
        align-itemst: space-between;
    }
    .money{
        color:#636363;
    }
    .toman,.money{
        visibility: hidden;
    }
    .savedPrice{
        margin: auto;
    }
    .save{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-top: 20px;
    }
    .productName{
        margin-top: 20px;
    }
    .productName input{
        width: 250px;
        margin-right: 0;
    }
    .save .submit{
        margin-top:20px;
    }
    .nums{
        display: flex;
        justify-content: space-between;
    }
    .numToText{
        margin-top: 20px;
        visibility: hidden;
    }
    .table{
        /*min-width: 500px;*/
        overflow-x: auto;

        max-width: 800px;
        margin: auto;
        margin-top: 30px;
    }
    table{
        min-width: 600px;
    }
    .datePickerWrapper{
        margin-top: 20px;
    }

@media (max-width: 500px) {
    .single{
        align-items: flex-end;
        flex-direction: column;
    }
    label{
        order: 1;
    }
    input{
        order: 2;
    }

}
    @media (max-width: 1000px) {
        #finishedPrice{
            margin-right: 0;
            width: 100%;
            padding: 20px;
        }

    }
</style>