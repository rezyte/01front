<template>
    <div class="otherLangCat panelItem">
        <div class="otherLangCatWrapper">
            <p>میتوانید در این بخش با ارسال کاتالوگ فارسی نسخه انگلیسی ان را درخواست نمایید</p>

            <div class="example">
                <p>:نمونه کاتالوگ انگلیسی</p>
                <img src="/static/public/images/engcat.jpg" alt="">
            </div>

            <div class="picker">
                <label for="">:بارگذاری کاتالوگ فارسی</label>
                <input type="file">
            </div>

            <button class="submit">ارسال</button>
        </div>
    </div>
</template>

<script>
export default {
name: "catalogOrder"
}
</script>

<style scoped>
.otherLangCat{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    padding: 20px;
}
.otherLangCatWrapper{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.picker{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.example{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
p{
    text-align: right;
}
</style>