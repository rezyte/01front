<template>
    <div id="productDetail">
        <div class="fromToWrapper">
            <div class="from usersInformataionWrapper">
                <div class="title"><p>مشخصات فاکتور</p></div>
                <div class="rowsWrapper">
                    <div class="row">
                        <label for="">نام محصول</label>
                        <input v-model="$store.state.factoreItems.factoreDetails.productName" type="text">
                    </div>

                    <div class="row">
                        <label for="">شماره فاکتور</label>
                        <input v-model="$store.state.factoreItems.factoreDetails.factoreNumber" type="text">
                    </div>



                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "productDetails"
}
</script>

<style scoped>
#productDetail{
}
.rowsWrapper{
    margin-top: 20px;
}
.fromToWrapper{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.row{
    margin-top: 8px;
}
.title{
    font-size: 25px;
    font-weight: bold;
}
input{
    height: 32px;
}
@media (max-width: 686px) {
    #productDetail{
        width: max-content;
        margin-right: 0;
    }

}
</style>