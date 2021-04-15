<template>
    <div id="tools" class="singleTools">
        <div id="toolsWrapper" class="singleToolsWrapper">
            <div class="logo">
                <logo></logo>

            </div>
            <div class="title">
                <p>ابزارها</p>
            </div>
            <div class="option">
                <ul>
                    <li><indicator></indicator>نرم افزار محاسبه قیمت تمام شده </li>
                    <li class="mt-1"><indicator></indicator>نرم افزار انبارداری و مدیریت مشتریان </li>
                    <li class="mt-1"><indicator></indicator>نرم افزار مدیریت مشتریان(crm)</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import indicator from "../indicator.vue";
import logo from "./logo.vue"
export default {
name: "tools",
    components:{
        logo,
        indicator
    }
}
</script>

<style scoped>

</style>
