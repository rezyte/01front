<template>
    <div id="map">
<!--        <iframe src="https://www.google.com/maps/d/embed?mid=1skiR-vMCmCGg6SDSIjXXDNBdm3nBVT-j" width="640" height="480"></iframe>-->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.8234735068338!2d51.44787832923531!3d35.71898998759133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0346215d4693%3A0xea62e34985382594!2z2K_ZhduM2LHaqdmI!5e0!3m2!1sen!2sus!4v1606903280099!5m2!1sfa!2sus&language=ar&region=IR" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
</template>

<script>
export default {
name: "maping",
    mounted() {

        setTimeout(()=>{
            const bodies=document.querySelectorAll("#map iframe div")
            // const a=bodies.querySelector("div")
            console.log(bodies)
        },1000)

    }
}
</script>

<style scoped>
#map{
    width: 100%;
    margin-top: 20px;
}
</style>