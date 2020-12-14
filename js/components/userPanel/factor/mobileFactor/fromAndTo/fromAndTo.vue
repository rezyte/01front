<template>
    <div id="fromAndToWrapper">
        <div class="onSameRow">
            <from-component></from-component>
            <to></to>
        </div>
        <product-details></product-details>
    </div>
</template>

<script>
import fromComponent from "./from/from.vue"
import to from "./from/to.vue"
import productDetails from "./productDetails/productDetails.vue";
export default {
name: "fromAndTo",
    components:{
        fromComponent,to,
        productDetails
    }
}
</script>

<style scoped>
p{
    color:var(--fontColorGray)
}
#fromAndToWrapper >>> .title p{
    font-size: 25px;
    font-weight: bold;
}
#fromAndToWrapper{
    margin-top:50px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    max-width: 800px;
    margin: auto;
    flex-wrap: wrap;
}
#fromAndToWrapper >>> #from{
    order:2
}
#fromAndToWrapper >>> #to{
    order:1
}
.onSameRow{
    display: flex;
    justify-content: space-evenly;
}
@media (max-width: 715px) {
    .onSameRow{
        flex-direction: column;
    }
    #fromAndToWrapper{
        justify-content: flex-end;
    }
    #fromAndToWrapper >>> #from{
        order:1
    }
    #fromAndToWrapper >>> #to{
        order:2
    }

}
</style>