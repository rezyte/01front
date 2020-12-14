<template>
    <div id="index">
        <headers></headers>

        <signup-and-worker :errors="errors"></signup-and-worker>
<!--        <videos></videos>-->
        <customers></customers>
        <tools-list></tools-list>
        <shirbarghi></shirbarghi>
        <addressee></addressee>
        <copy></copy>
    </div>
</template>

<script>
import headers from "./header/header.vue"
import signupAndWorker from "./signupAndWorker/signupAndWorker.vue";
import video from "./video/video.vue";
import customers from "./customers/customers.vue";
import toolsList from "./toolsList/toolsList.vue";
import shirbarghi from "./shirbarghi/shirbarghi.vue";
import address  from "./address/address.vue";
import copy from "./copy/copy.vue"
export default {
name: "index.vue",
    components:{
        headers,
        signupAndWorker,
        videos:video,
        customers,
        toolsList,
        shirbarghi,
        addressee:address,
        copy

    },
    props:['errors']
}
</script>

<style scoped>
#index{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>