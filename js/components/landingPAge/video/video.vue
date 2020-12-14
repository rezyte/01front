<template>
    <div id="video" class="maxIs">
        <div id="videoWrapper">
            <video poster="/static/public/images/landing/startFrame.jpg" controls>
                <source  src="/static/public/images/landing/video.mp4" type="video/mp4">
            </video>
        </div>
    </div>
</template>

<script>
export default {
name: "video",
}
</script>

<style scoped>
#video{
    padding: 10px;
    width: max-content;
    height:max-content;
    display: flex;
    justify-content: center;
}
#videoWrapper{
    height: fit-content;
    max-width: 500px;
    display: flex;
    justify-content: center;
}
video{
    width: 100%;
}
</style>