<template>
    <div id="sideSliderCats">
        <div id="sideSlidesCatsWrapper">
            <div id="allCats">
                <ul>
                    <template v-for="(c,i) in getAllcats">
                        <li v-if="i<11"  class="parentLi"><arrow></arrow>  <p>4{{c.title}} </p>
                            <div class="sideSliderSubmenu">
                                <div class="subTitleWrapper">
                                    <div class="SubTitle"><p>{{c.title}}</p></div>
                                    <ul>
                                        <li v-if="subI<=5" v-for="(sub,subI) in c.subs" :key="subI"><a :href="getUrl(sub.title)">{{sub.title}}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                    </template>
                    <!-- <li class="parentLi"><arrow></arrow>  دسته 1
                            <div class="sideSliderSubmenu">
                                <div class="subTitleWrapper">
                                    <div class="SubTitle"><p>دسته 1</p></div>
                                    <ul>
                                        <li><a href="#">زیر دسته 1</a></li>
                                        <li><a href="#">زیر دسته 1</a></li>
                                        <li><a href="#">زیر دسته 1</a></li>
                                        <li><a href="#">زیر دسته 1</a></li>
                                        <li><a href="#">زیر دسته 1</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="parentLi"><arrow></arrow>  دسته 1
                            <div class="sideSliderSubmenu">
                                <div class="subTitleWrapper">
                                    <div class="SubTitle"><p>دسته 1</p></div>
                                    <ul>
                                        <li><a href="#">زیر دسته 1</a></li>
                                        <li><a href="#">زیر دسته 1</a></li>
                                        <li><a href="#">زیر دسته 1</a></li>
                                        <li><a href="#">زیر دسته 1</a></li>
                                        <li><a href="#">زیر دسته 1</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="parentLi"><arrow></arrow>  دسته 1
                            <div class="sideSliderSubmenu">
                                <div class="subTitleWrapper">
                                    <div class="SubTitle"><p>دسته 1</p></div>
                                    <ul>
                                        <li><a href="#">زیر دسته 1</a></li>
                                        <li><a href="#">زیر دسته 1</a></li>
                                        <li><a href="#">زیر دسته 1</a></li>
                                        <li><a href="#">زیر دسته 1</a></li>
                                        <li><a href="#">زیر دسته 1</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="parentLi"><arrow></arrow>  دسته 1
                            <div class="sideSliderSubmenu">
                                <div class="subTitleWrapper">
                                    <div class="SubTitle"><p>دسته 1</p></div>
                                    <ul>
                                        <li><a href="#">زیر دسته 1</a></li>
                                        <li><a href="#">زیر دسته 1</a></li>
                                        <li><a href="#">زیر دسته 1</a></li>
                                        <li><a href="#">زیر دسته 1</a></li>
                                        <li><a href="#">زیر دسته 1</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li> -->

                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import arrow from "../../template/arrow/arrow.vue"
    import ham from "../../template/hamIcon/ham.vue"
    export default{
        components:{
            ham,
            arrow,

        },
        data(){
            return {
                catsList:null,
                num:null
            }
        },
        props:['mainCats'],
        mounted(){
            this.catsList=this.mainCats
            window.addEventListener("resie",this.findNum)

            this.findNum()
        },
        methods:{
            getUrl(url){
                return `/categories/${url}`
            },
            findNum(){
                const wrapper=document.querySelector("#sliderWrapper")
                const inter=setInterval(()=>{
                    let {height}=window.getComputedStyle(wrapper)
                    height=height.split("p")
                    height=+height[0]
                    if(height!==0){
                        this.num=Math.floor(+height/26)
                        this.sliceCats()
                        clearInterval(inter)
                    }
                },500)
            },
            sliceCats(){
                this.catsList=this.catsList.slice(0,this.num)
            }

        },
        computed:{
            getAllcats(){
                return this.catsList
            },

        }
    }
</script>


<style scoped>
#allCats{
    height: 100%;
}
    ul li:hover .sideSliderSubmenu{
        display:block;
        animation:fadeIn 0.2s linear
    }
    @keyframes fadeIn{
        from{
            opacity:0
        }
        to{
            opacity:1;
        }
    }
    ul li:hover{
        border-top:1px solid rgb(129, 129, 129);
        border-bottom:1px solid rgb(129, 129, 129);
    }
    ul li{
        text-align: right;
    }
    .sideSliderSubmenu{
        position: absolute;
        display:none;
        right:100%;
        z-index:667;
        background-color: white;
        height:max-content;
        top:-20px;
        width:300px;
        border-left:1px solid rgb(223, 223, 223);
        background: #ffffff
    }
    .subTitleWrapper{
        display:flex;
        flex-direction:column;
        align-items: flex-end;
        padding:10px
    }
    .subtitle{
        font-size:20pt;
    }
    .sideSliderSubmenu ul li a{
        font-size:12pt;
        color:rgb(71, 71, 245) !important
    }
    .arrow{
        width:20px;
        height:20px;
    }
    #sideSlidesCatsWrapper{
        width:100%;
    }

    #sideSliderCats{
        display:flex;
        justify-content: flex-start;
    }
    ul{
        width:max-content;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        height:100%;
    }
    ul>li{
        line-height: 2rem;
        width:100%;
        display:flex;
        justify-content: space-between;
    }
    .sideSliderSubmenu li{
        display:flex;
        justify-content:flex-end
    }
    .parentLi{
        position: relative;
        font-size:14px;
        cursor: pointer;
        text-align: right;
        padding:2px
    }
    .parentLi:hover .sideSliderSubmenu{
        display:block
    }
    #hamCats{
        display:flex;
        align-items:center
    }
    @media (max-width:801px)
	{
		#sideSliderCats{
			display:none
		}
	}
    .seeMore{
        display:flex;
        justify-content: flex-end
    }

</style>

