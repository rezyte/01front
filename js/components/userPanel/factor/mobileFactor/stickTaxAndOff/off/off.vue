<template>
    <div id="tax" @mouseup="falseThem">
        <div id="taxWrapper">
            <div class="title">
                <p>تخفیف</p>
            </div>
            <div class="taxOptionsWrapper">
                <div class="taxOptionWrapper">
                    <input type="text" id="taxTitle" v-model="$store.state.factoreItems.off.title">
                    <label for="taxTitle">عنوان</label>
                </div>

                <div class="taxOptionWrapper">
                    <div class="arrows">
                        <div class="upArrowWrapper" @mousedown="increaseTax" @mouseup="canIncrease=false" ><arrow class="upArrow" ></arrow></div>
                        <div @mousedown="decreaseTax" @mouseup="canDecrease=false" class="downArrowWrapper">
                            <arrow class="downArrow"></arrow>
                        </div>

                    </div>
                    <span>%</span>
                    <input ref="taxInput" type="text" id="taxValue" v-model="$store.state.factoreItems.off.mount">
                    <label  for="taxValue">مقدار</label>


                </div>

                <div class="taxOptionWrapper">
                    <input @change="changeState($event)" ref="taxInput" type="checkbox" v-model="$store.state.factoreItems.off.affect" id="taxValue">
                    <label  for="taxValue">اعمال؟</label>
                </div>



            </div>

        </div>
    </div>
</template>

<script>
import arrow from "./arrow.vue"
export default {
    name: "off",
    data(){
        return{
            tax:0,
            title:'تخفیف',
            canIncrease:false,
            canDecrease:false
        }
    },
    watch:{
        tax:function(value){
            this.$store.state.factoreItems.off.mount=value
            if(value>100){
                this.tax=100
            }
            if(value<0){
                this.tax=0
            }
        },
        title:function(value){
            this.$store.state.factoreItems.off.title=value
        }
    },
    components:{
        arrow
    },
    mounted() {
        document.addEventListener("mouseup",()=>{
            this.canIncrease=false
            this.canDecrease=false
        })
    },
    methods:{
        changeState(e){
            const el=e.target
            this.$store.state.factoreItems.off.affect=el.checked
        },
        falseThem(){

        },
        increaseTax(){
            this.canIncrease=true
            this.increaseNow()
        },
        decreaseTax(){
            this.canDecrease=true
            this.decreaseNow()
        },
        increaseNow(){
          const store=this.$store
          // const mount=
            if(!this.canIncrease){
                return
            }
            const interVal=setInterval(()=>{
                if(!this.canIncrease){
                    clearInterval(interVal)
                }
                if(store.state.factoreItems.off.mount==100){
                    return
                }else{
                  store.state.factoreItems.off.mount++
                }
            },100)
        },
        decreaseNow(){
          const store=this.$store
            if(!this.canDecrease){
                return
            }
            const interVal=setInterval(()=>{
                if(!this.canDecrease){
                    clearInterval(interVal)
                }
                if(store.state.factoreItems.off.mount==0){
                    return
                }else{
                  store.state.factoreItems.off.mount--
                }
            },100)
        }
    }
}
</script>

<style scoped>
#tax {
    display: flex;
    flex-direction: column;
    align-items: center;
}
#taxWrapper{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
}
.taxOptionWrapper{
    display: flex;
    align-items: center;
    margin-top: 5px;
    position: relative;
    justify-content: flex-end;

}
.taxOptionWrapper span{
    position: absolute;
    left: 83px;
    top: 7px;
}
.title{
    border-bottom: 1px solid var(--splitter);
}
.title,.title p{
    width: 100%;
}
.title p{
    font-weight: bold;
    text-align: right;
}
label{
    color: var(--fontColorGray);
    width: 75px;
    text-align: right;
}
input{
    width: 100px;
    font-size: 14px;
    border: 1px solid var(--grayBorderColor);
}
.arrows{
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 5px;
    left: 6px;
    top: 6px;
}
.arrows svg,.arrows svg{
    width: 7px;
    height: 7px;
    cursor: pointer;
}
.arrows .downArrowWrapper{

    transform: rotate(180deg);
    position: relative;
    top: -14px;
}
.arrows .upArrowWrapper{

    position: relative;
    top: -8px;
}
#taxValue{
    padding-right: 20px;
}
input[type=checkbox]{
    width: 20px;
    height: 20px;
}
@media (max-width: 1050px){
    #taxWrapper{
        width: 100%;
        padding-right: 0;
        padding-left: 0;
    }
    .taxOptionsWrapper{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        width: 100%;
    }
}
</style>