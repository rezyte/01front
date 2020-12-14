<template>
    <div id="makeCatalog" class="panelItem">
        <p class="hint">کاربر محترم این بخش از سایت هنوز برای شما فعال نمیباشد</p>
        <div id="makeCatalogWrapper">
            <p>از بین قالب های زیر یک قالب را انتخاب کنید تا وارد مرحله ساخت کاتالوگ برای محصول خود شوید</p>
            <div id="templates">
                <div id="templatesWrapper">
                    <div class="singleTemplate">
                        <div class="singleTemplateWrapper">
                           <img loading="lazy" src="/static/public/images/cata1.jpg" alt="">
                        </div>
                    </div>

                <div class="singleTemplate">
                    <div class="singleTemplateWrapper">
                        <img loading="lazy" src="/static/public/images/cata2.jpg" alt="">
                    </div>
                </div>
                <div class="singleTemplate">
                    <div class="singleTemplateWrapper">
                        <img loading="lazy" src="/static/public/images/cata3.jpg" alt="">
                    </div>
                </div>
                <div class="singleTemplate">
                    <div class="singleTemplateWrapper">
                        <img loading="lazy" src="/static/public/images/cata4.jpg" alt="">
                    </div>
                </div>
                <div class="singleTemplate">
                    <div class="singleTemplateWrapper">
                        <img loading="lazy" src="/static/public/images/cata5.jpg" alt="">
                    </div>
                </div>
                    <div class="singleTemplate">
                        <div class="singleTemplateWrapper">
                            <img loading="lazy" src="/static/public/images/cata6.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "makeCatalog",
    mounted() {
        const images=document.querySelectorAll('#makeCatalog img')
        images.forEach(img=>{
            img.addEventListener("click",e=>{
                this.diselectAll()
                this.selectE(e)
            })
        })
    },
    methods:{
        diselectAll(){
            const images=document.querySelectorAll('#makeCatalog img')
            images.forEach(img=>{
                img.classList.remove("boxShadow")
            })
        },
        selectE(e){
            const element=e.target
            console.log(element)
            element.classList.add("boxShadow")
        }
    }
}
</script>

<style scoped>
#makeCatalogWrapper{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
#makeCatalog{
    margin-top: 50px;
    width: 100%;
    padding-right: 20px;
    display: flex;
    flex-direction: column;

    align-items: flex-end;
}
p{
    text-align: right;
}
img{
    width: 200px;
    height: 300px;
    margin: 10px;
    filter: blur(1px);
}
#templatesWrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
img{
    cursor: pointer;
}
.hint{
    color: #fd2e2e;
    font-weight: bold;
    margin-bottom: 50px;
}
.boxShadow{
    box-shadow: 2px -1px 9px rgba(8, 114,205, 0.7), -2px 5px 9px rgba(8, 114, 205, 0.7);
}
</style>