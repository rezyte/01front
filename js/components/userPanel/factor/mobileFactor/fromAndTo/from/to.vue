<template>
    <div id="to">
        <div class="fromToWrapper">
            <div class="from usersInformataionWrapper">
                <div class="title"><p>به</p></div>
                <div class="rowsWrapper">
                    <div class="row">
                        <label for="">نام</label>
                        <input v-model="$store.state.factoreItems.to.name" type="text">
                    </div>

                    <div class="row">
                        <label for="">نام شرکت</label>
                        <input v-model="$store.state.factoreItems.to.componyName" type="text">
                    </div>

                    <div class="row">
                        <label for="">شماره تماس</label>
                        <input v-model="$store.state.factoreItems.to.phone" type="text">
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "to"
}
</script>

<style scoped>
#to{
    margin:10px;
    width: max-content;
}
.rowsWrapper{
    margin-top: 20px;
}
.row{
    margin-top: 8px;
}

input{
    height: 32px;
}
@media (max-width: 850px) {
    #to{
        margin-right: 0;
    }

}
</style>