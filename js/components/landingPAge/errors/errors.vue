<template>
    <div v-if="JSON.parse(errors).message!==''" id="errors">
        <div id="errorsWrapper">
            <p>{{JSON.parse(errors).message}}</p>
        </div>
    </div>
</template>

<script>
export default {
name: "errors",
    props:['errors'],
    created() {
        console.log(this.errors)
    }
}
</script>

<style scoped>
#errors{
    width: 100%;
    display: flex;
    justify-content: center;
}
p{
    color: #ff3f3f;
    font-weight: bold;
}
</style>