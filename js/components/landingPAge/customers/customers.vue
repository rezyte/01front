<template>
    <div id="customers" class="maxIs">
        <p>همکارانی که به ما اعتماد کرده&nbspاند</p>
        <div class="customersWrapper big">
            <div class="singleCustomer">
                <img src="/static/public/images/landing/countr2.png" alt="">
            </div>
            <div class="singleCustomer">
                <img src="/static/public/images/landing/countr4.png" alt="">
            </div>
            <div class="singleCustomer">
                <img src="/static/public/images/landing/countr3.png" alt="">
            </div>
            <div class="singleCustomer">
                <img src="/static/public/images/landing/countr1.jpg" alt="">
            </div>
            <div class="singleCustomer">
                <img src="/static/public/images/landing/mehri2.png" alt="">
            </div>
            <div class="singleCustomer">
                <img src="/static/public/images/landing/countr6.png" alt="">
            </div>



        </div>

        <div class="customersWrapper medium">
            <div class="cul3Customer">
                <img src="/static/public/images/landing/countr2.png" alt="">
                <img src="/static/public/images/landing/countr4.png" alt="">
                <img src="/static/public/images/landing/countr3.png" alt="">
            </div>


            <div class="cul3Customer">
                <img src="/static/public/images/landing/countr1.jpg" alt="">
                <img src="/static/public/images/landing/mehri2.png" alt="">
                <img src="/static/public/images/landing/countr6.png" alt="">
            </div>

        </div>




        <div class="customersWrapper small">
          <img src="/static/public/images/landing/countr2.png" alt="">
          <img src="/static/public/images/landing/countr4.png" alt="">
          <img src="/static/public/images/landing/countr3.png" alt="">



          <img src="/static/public/images/landing/countr1.jpg" alt="">
          <img src="/static/public/images/landing/mehri2.png" alt="">
          <img src="/static/public/images/landing/countr6.png" alt="">

        </div>



    </div>
</template>

<script>
export default {
name: "customers"
}
</script>

<style scoped>
#customers{
    width: 100%;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#customers p{
    color:var(--logoBlue);
    font-size: 24px;
    font-weight: bold
}
.customersWrapper{
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    background: rgb(240,240,240);
}
.small,.medium{
    display: none;
}
p{
    text-align:center;
}
img{
    width: 115px;
}
.small img:not(:first-child){
  margin-top: 50px;
}
@media (max-width: 390px) {
    .big{
        display: none;
    }
    .small{
        display: flex;
        flex-direction: column;
        align-items: center;

    }

}
@media (min-width: 391px) and (max-width: 800px) {
    .medium{
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .cul3Customer{
        padding: 10px;
        padding-bottom: 5px;
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .cul3Customer:nth-child(2){
        margin-top: 20px;
    }
    .big{
        display: none;
    }

}
@media (min-width: 801px){
    .big{
        display: flex;
        padding: 5px;
        justify-content: space-between;
    }

}
</style>