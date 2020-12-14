<template>
    <div id="tools" class="maxIs">
        <div id="toolsWrappe">
            <div class="title">
                <p>خدمات دمیرکو برای شما</p>
                <p>فروض،خدمات،ابزار</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "tools"
}
</script>

<style scoped>
#tools{
    margin-top: 50px;
    width: 100%;
}
#toolsWrappe{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title  p:first-child{
    color: var(--logoBlue);
    font-size: 36px;
}
.title  p:nth-child(2){
    color: var(--fontColor);
    font-size: 20px;
}
</style>