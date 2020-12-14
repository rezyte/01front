<template>
    <div id="addresses">
        <div id="addressesWrapper">
            <div class="singleAddress adress">
                <p>:آدرس</p>
                <p> میدان سپاه،صیاد شمال،خروجی اول سمت راست،،خیابان شیخ صفی،بلاک 188</p>
            </div>

            <div class="singleAddress phone">
                <p>:شماره تماس</p>
                <div class="phonesNumbers">
                    <p> 02177569156 - 02177542719</p>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
export default {
name: "adresses"
}
</script>

<style scoped>
#addressesWrapper{
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-wrap: wrap;
}
.singleAddress{
    margin:20px;
}
.adress{
    order:1
}
.phone{
    order: 2;
}
.phone{
    margin-right: 0;

}
.phonesNumbers{
    display: flex;
}
p{
    text-align: right;
    font-size: 17px;
}
#addresses{
    width: 100%;
}
@media (max-width: 768px) {
    #addressesWrapper{
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
    }
    .singleAddress{
        margin:0px;
    }
    .phone{
        margin-top: 20px;
    }

}
</style>