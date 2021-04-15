<template>
    <div id="services" class="singleTools">
        <div id="servicesWrapper" class="singleToolsWrapper">
            <div class="logo">
                <logo></logo>

            </div>
            <div class="title">
                <p>خدمات</p>
            </div>
            <div class="option">
                <ul>
                    <li> <indicator></indicator>ساخت بروشور انگلیسی و زبان های دیگر </li>
                    <li class="mt-1"> <indicator></indicator>طراحی بروشور اختصاصی فارسی </li>
                    <li class="mt-1"><indicator></indicator>پیگیری مشتریان برقراری ارتباط با آنان </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import logo from "./logo.vue"
import indicator from "../indicator.vue";
export default {
name: "services",
    components:{
        logo,
        indicator
    }
}
</script>

<style scoped>

</style>
