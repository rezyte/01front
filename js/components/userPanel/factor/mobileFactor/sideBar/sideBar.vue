<template>
    <div id="sideBar">
        <div id="sidBarWrapper">
            <tax></tax>
        </div>
    </div>
</template>

<script>
import tax from "./tax/tax.vue";
export default {
name: "sideBar",
    components:{
        tax
    }
}
</script>

<style scoped>

</style>