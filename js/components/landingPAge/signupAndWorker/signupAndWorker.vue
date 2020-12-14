<template>
    <div id="signupAndWorker" class="maxIs">
        <worker></worker>
        <div class="signUpAndVideo">
            <videos></videos>
            <signup :errors="errors"></signup>

        </div>


    </div>
</template>

<script>
import worker from "./worker/worker.vue";
import signup from "./signup/signup.vue"
import videos from "../video/video.vue";
export default {
name: "signupAndWorker",
    components:{
        worker,
        signup,
        videos
    },
    props:["errors"]
}
</script>

<style scoped>
#signupAndWorker{
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;
}
.signUpAndVideo{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 80px;
}

@media (max-width: 955px) {
    .signUpAndVideo #worker{
        order: 2;
    }
    .signUpAndVideo #video{
        order: 1;
    }

}
</style>