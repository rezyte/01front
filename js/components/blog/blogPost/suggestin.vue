<template>
    <div class="other">
        <div class="title">جدید ترین مقالات</div>
        <div class="otherWrapper">
            <div class="singleOther" v-for="(s,i) in latests" :key="s.id" v-if="i<4" :id="'single'+i">
                <div class="singleOtherOtherWrapper">
                    <div class="otherImg">
                        <img :src="s.thumbnail" alt="">
                    </div>
                    <div class="otherTitle">
                        <a :href="'/blog/post/'+s.slug">{{getText(s.title)}}</a>
                    </div>
                    <div class="otherModel">
                        <!--  <button><svg class="icon-svg iconSvg-style" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M17.016 3c1.078 0 1.969 0.938 1.969 2.016v15.984l-6.984-3-6.984 3v-15.984c0-1.078 0.891-2.016 1.969-2.016h10.031z"></path>
                        </svg></button> -->
                        <p >{{getText(s.short_description)}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .title{
        font-size: 18px;
        font-weight: 800;
    }
 .otherImg,img{
        width:250px;
        height:150px;
    }
    .other{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top:50px
    }

    .singleOther{
        width:250px;
        display:flex;
        flex-direction:column;
        align-items: center;
        margin:5px
    }
    .otherWrapper{
        display: grid;
        grid-gap: 10px;
        grid-template-areas: 
        'single1 single2 single3 single4'
    }
    #single1{
        grid-area: single1
    }
    #single2{
        grid-area: single2
    }
    #single3{
        grid-area: single3
    }
    #single4{
        grid-area: single4
    }
    .otherTitle{
        width:100%;
        justify-content: flex-end;
        display:flex;
        margin-top:10px;
        font-size:11pt;
        font-weight:lighter
    }
    .otherTitle a{
        font-weight:bold
    }
    .otherTitle p{
        color:rgb(121, 121, 121);
    }
    .otherModel{
        display:flex;
        width:100%;
        justify-content:flex-end;
        margin-top:10px;
        
    }
    .otherModel a{
        width:175px;
        text-align:right
    }
    .otherModel a{
        color:rgb(52, 52, 187)
    }
    svg {
        fill: none;
        stroke-width: 2px;
        stroke: #858585;
    }
    .otherModel button{
        border:0
    }
    a,p{
        text-align: right;
        direction: rtl
    }
    @media (max-width: 1100px){
        .otherWrapper{
            display: grid;
            grid-template-areas: 
            'single1 single2'
            'single3 single4'
        }
    }
    @media (max-width: 550px){
        .otherWrapper{
            display: grid;
            grid-template-areas: 
            'single1'
            'single2'
            'single3'
            'single4'
        }
    }
</style>

<script> 
    export default{
        props:["latests"],
        methods:{
            getText(txt){
                return txt.length>70 ? txt.substring(0,70)+"..." : txt
            }
        }
    }
</script>