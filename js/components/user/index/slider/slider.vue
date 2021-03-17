<template>
    <div id="slider">
<!--        <div id="sliderWrapper">-->
<!--            <div class="active slide">-->
<!--                <img src="/static/public/images/slider1.jpg" alt="">-->
<!--                <div class="container">-->
<!--                    <div class="containerWrapper">-->
<!--                        <p>خط تولیند سیم و کابل</p>-->
<!--                        &lt;!&ndash; <p>انواع شرینگ پک فلان فلان فلانف فلان</p> &ndash;&gt;-->
<!--                        <button class='submit'>مشاهده</button>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="slide">-->
<!--                <img src="/static/public/images/slider2.jpg" alt="">-->
<!--                <div class="container">-->
<!--                    <div class="containerWrapper">-->
<!--                        <p>خط تولید لنت</p>-->
<!--                        &lt;!&ndash; <p>انواع شرینگ پک فلان فلان فلانف فلان</p> &ndash;&gt;-->
<!--                        <button class='submit'>مشاهده</button>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="slide">-->
<!--                <img src="/static/public/images/slider3.jpg" alt="">-->
<!--                <div class="container">-->
<!--                    <div class="containerWrapper">-->
<!--                        <p>شیرینگ پک</p>-->
<!--                        &lt;!&ndash; <p>انواع شرینگ پک فلان فلان فلانف فلان</p> &ndash;&gt;-->
<!--                        <button class='submit'>مشاهده</button>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->


        <div class="swiper-container-topSite">
            <div class="swiper-wrapper"  id="sliderWrapper">
                <div class="swiper-slide"><a href="/categories/خط-تولید/خط-تولید-لنت-ترمز-دیسکی/"><img src="/static/public/images/slider1.webp" alt=""></a></div>
                <div class="swiper-slide"><a href="/categories/خط-تولید/خط-تولید-سیم-و-کابل/"><img src="/static/public/images/slider2.webp" alt=""></a></div>
                <div class="swiper-slide"><a href="/categories/بسته-بندی/دستگاه-شیرینگ/"><img src="/static/public/images/slider3.webp" alt=""></a></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination-topside"></div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        setTimeout(()=>{
          var swiper = new Swiper('.swiper-container-topSite', {
            pagination: {
              el: '.swiper-pagination-topside',
              clickable: true,
            },
            // autoplay: {
            //     delay: 3000,
            // },
            loop:true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
          });
        },100)
        // document.querySelectorAll('.swiper-slide').forEach(e=>{
        //   e.style.width=''
        // })
    }
}
</script>

<style scoped>
#slider{
    position:relative;
    background-color: #ffffff
}
.container p{
    font-size:18pt;
    font-weight: lighter;

}
.slide.active p{
    opacity:0;
    animation:captionTextAn 0.5s linear forwards;
    animation-delay: 1.2s;
    color:white;
    margin-bottom:10px
}
.slide.active .container{
    animation:fadeTrans 1s linear forwards;
    animation-delay: 1.5s;
}
.slide.active button{
    opacity:0;
    animation:captionTextAn 0.5s linear forwards;
    animation-delay: 1.4s;
}
.container p:nth-child(2){
    font-size:12pt
}
@media (max-width:650px){
    .container button{
        font-size:11pt;
        font-weight: lighter;
    }
    .container p{
        font-size: 11pt
    }
}
@media (max-width:924px)
{
    #slider{
        width:100%;

    }
    img{
        object-fit: contain;
        height:auto;
    }
}
#slider{
    width: 100%;
    overflow: hidden;
}
.swiper-container-topSite{
    width: 100%;
}
.swiper-slide{
  max-height: 500px;
  /*max-width: 1009px !important;*/
  /*width: fit-content !important;*/
}
.swiper-slide-active{
  width: 100% !important;
}
.swiper-slide img{
    width: 100%;
    height: 100%;
}
#slider + div{
    height: 100% !important;
}

</style>