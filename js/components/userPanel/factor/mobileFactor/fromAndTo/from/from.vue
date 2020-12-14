<template>
    <div id="from">
        <div class="fromToWrapper">
            <div class="from usersInformataionWrapper">
                <div class="title"><p>از</p></div>
                <div class="rowsWrapper">
                    <div class="row">
                        <label for="">نام</label>
                        <input v-model="$store.state.factoreItems.from.name" type="text">
                    </div>

                    <div class="row">
                        <label for="">نام شرکت</label>
                        <input v-model="$store.state.factoreItems.from.componyName" type="text">
                    </div>

                    <div class="row">
                        <label for="">شماره تلفن</label>
                        <input v-model="$store.state.factoreItems.from.phone" type="text">
                    </div>

                    <div class="row">
                        <label for="">ادرس</label>
                        <textarea v-model="$store.state.factoreItems.from.adress"></textarea>
                    </div>



                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "from"
}
</script>

<style scoped>
#from{
    margin:10px;
    margin-right: 0;
    width: max-content;
}
.rowsWrapper{
    margin-top: 20px;
}
.row{
    margin-top: 8px;
}
textarea{
    min-height: 80px;
    max-height: 130px;
    text-align: right;
    direction: rtl;
}
input{
    height: 32px;
}

@media (max-width: 850px) {
    #from{
        margin-right: 0;
    }

}
</style>