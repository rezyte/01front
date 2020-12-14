<template>
    <div id="shirbarghi">
        <div id="shirbarghiWrapper">
            <div class="shirbarghiImg">
                <shir-img></shir-img>
            </div>
            <div class="textes">
                <div class="vir"><p>،،</p></div>
                <div class="text">
                    <p>تقریبا شش ماه از آشنایی من با مجموعه دمیرکو و تیم پر تلاش آن ها میگذرد آن ها مکمل کار ما هستند و توانسته اند با تخصص و خدماتی که ارائه میدهند در فروش دو خط تولید لنت به ما کمک کنند امیدوارم محصولات ما را خارج ایران نیز به همین خوبی ارائه دهند</p>
                </div>
                <br>
                <div class="status">
                    <p>مهدنس شیر برقی </p>

                    <p>مدیر عامل شرکت ماشین سازی شیر برقی - تولید کننده خطوط تولید لنت دیسکی</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import shirImg from "./shirImg.vue";
export default {
name: "shirbarghi",
    components:{
        shirImg
    }
}
</script>

<style scoped>
#shirbarghi{
    width: 100%;
    padding: 20px;
    max-width: 900px;
    margin-top: 50px;

}
#shirbarghiWrapper{
    padding: 10px;
    display: flex;
    border-radius: 5px;
    align-items: center;
    border:1px solid #b3b3b3;
    padding-top: 10px;
    padding-bottom: 0px;
}
.shirbarghiImg{
    margin-right: 10px;
}

.textes{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: -50px;
}
p{
    text-align: right;
    font-size: 20px;
    color: var(--fontColor);
}
.text p{
    text-align: justify;
    direction: rtl;
}
.vir{
    margin-top: -50px;
}
.vir p{
    font-size: 100px;
    color: var(--logoBlue);
}
.status p{
    font-size: 14px;
    font-weight: bold;
}
.text{
    margin-top: -50px;
}
@media (max-width: 650px) {
    #shirbarghiWrapper{
        flex-direction: column;
    }
    #shirbarghiWrapper >>> svg{
        width: 100%;
    }
}
</style>