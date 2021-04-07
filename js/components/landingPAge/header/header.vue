<template>
    <div id="header" class="maxIs">
        <div id="headerWrapper">
            <a href="/"><img src="/static/public/images/logo.png"></a>
        </div>
    </div>
</template>

<script>
export default {
name: "headers"
}
</script>

<style scoped>
#header{
    width: 100%;
    margin:10px;
    /* background-color: ; */
}
#headerWrapper{
    max-width: 300px;
    /* width: 100%; */
    margin: auto;
}
img{
    width: 100%;
    padding: 10px;

}
</style>