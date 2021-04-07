<template>
    <div id="productDesc">
      <h2 class="font-weight-bold text-right">توضیحات محصول</h2>
        <div class="descsWrapper longText" style="display: flex;flex-direction: column;align-items: flex-end;margin-bottom: 50px" v-html="product.description"></div>
    </div>
</template>

<style>
#productDesc *{
  font-family: 'iranSans' !important;
  /*display: none;*/
}
    #productDesc{
      padding:5px;
        margin-bottom:20px;
      padding-bottom: 100px;
    }
    #productDesc p {
        /*padding:10px;*/
      /*padding-right: 0;*/
    }
    #productDesc img{
      max-width: 100% !important;
	  width:100% !important
    }
    #productDesc table {
      max-width: 100%;
      /*width: 100% !important;*/
    }
    .title{
      font-size: 18px;
      font-weight: bold;
    }
.descsWrapper table {
  direction: rtl !important;
  width: max-content !important;
}
.descsWrapper *{
  color:black !important;
  font-weight: normal !important;
  background: transparent !important;
  font-size: 16px !important;
  max-width: 100%;
    text-align: right !important;
}
.descsWrapper img{
  max-width: 100%;
  height: 100%;
  object-fit: contain;
}
.descsWrapper td {
      border-top: 1px solid #9a9a9a;
      padding-top:5px !important;
      padding-bottom:5px !important;
      width: max-content !important;

    }
.descsWrapper tr td:first-child{
  /*width: 100% !important;*/
  /*max-width: max-content !important;*/
}
.descsWrapper table{
  height: max-content !important;
}
.descsWrapper td *{
      color: black;
      background-color: transparent !important;

    }
.descsWrapper tr td:nth-child(2){
  padding-right: 10px;
}
.descsWrapper ul{
  list-style-type: disc;
  padding-right: 20px;
}
.descsWrapper div{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.descsWrapper img{
  height:100%;
}

</style>

<script>
export default{
    props:['product']
}

</script>
