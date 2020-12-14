<template>
    <div id="address" class="maxIs">
        <mapping></mapping>
        <adresses></adresses>

    </div>
</template>

<script>
import adresses from "./adresses/adresses.vue";
import mapping from "./map/maping.vue"
export default {
name: "addressee",
    components:{
        adresses,
        mapping
    }
}
</script>

<style scoped>
#address{
    margin-top: 48px;
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    background: #f6f6f6;
}
#address >>> #addresses{
    order: 1;
}
#address >>> #map{
    order: 2;
}
@media (max-width: 750px) {
    #address{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>