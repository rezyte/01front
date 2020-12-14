<template>
    <div id="sell" class="singleTools">
        <div id="sellWrapper" class="singleToolsWrapper">
            <div class="logo">
                <logo></logo>

            </div>
            <div class="title">
                <p>فروش</p>
            </div>
            <div class="option">
                <ul>
                    <li> <indicator></indicator>فروش و بازاریابی داخلی    </li>
                    <li>   <indicator></indicator>روش و بازاریابی بین المللی    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import logo from "./logo.vue"
import indicator from "../indicator.vue";
export default {
name: "sell",
    components:{
        logo,
        indicator
    }
}
</script>

<style scoped>
</style>