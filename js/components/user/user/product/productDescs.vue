<template>
    <div id="productDesc">
        <div v-html="product.description"></div>
    </div>
</template>

<style>
    #productDesc{
        margin-bottom:20px;
    }
    #productDesc p {
        padding:10px;
    }

</style>

<script>
export default{
    props:['product']
}

</script>