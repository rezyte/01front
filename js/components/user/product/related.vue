<template>
    <div id="related" v-if="getRelated.length>0">
      <h2 class="font-weight-bold text-right">محصولات مشابه</h2>
        <div id="relatedWrapper">
            <div
                class="singleRelated"
                v-for="(rel, i) in getRelated"
                :key="i"
                v-if="i < 4"
                :id="'singleRel'+(i+1)"
            >
                <div class="singleRelatedWrappr">
                    <div class="img">
                      <a :href="'/products/product-detial/' + rel.slug"><img :src="rel.product_image" alt="" /></a>
                    </div>
                    <div class="title">
                        <a :href="'/products/product-detial/' + rel.slug">{{
                                rel.title
                            }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["related"],
    computed: {
        getRelated() {
            return this.related;
        },
    },
    methods: {
        getTxt(txt) {
            if(txt==null){
                return "dont"
            }
            return txt.length > 70 ? txt.substring(0, 70) + "..." : txt;
        },
    },
};
</script>

<style scoped>
.title{
  font-size: 18px;
  font-weight: bold;
}
#related{
    margin-bottom: 70px;
}
.singleRelated {
    width: 250px;
    height: 200px;
}
img {
    width: 100%;
    height: 200px;
}
.title {
    display: flex;
    justify-content: flex-end;
}
.title a {
    color: rgb(9, 111, 211);
  font-size: 14px;
  text-align: right;
}
#singleRel1{
    grid-area: singleRel1;
}
#singleRel2{
    grid-area: singleRel2;
}
#singleRel3{
    grid-area: singleRel3;
}
#singleRel4{
    grid-area: singleRel4;
}
p{
    word-break: break-all;
    width: 250px;
}
#relatedWrapper {
    display: grid;
  justify-items: center;
    grid-template-columns: repeat(4,1fr);
    grid-template-areas:
    'singleRel1 singleRel2 singleRel3 singleRel4'
;
}
.singleRelated {
    margin: 10px;
}
p{
  text-align: right;
}
.titler{
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  margin-bottom: 20px;
}
img{
  transition: all 0.1s linear;
}
img:hover{
  transform: scale(1.05);
}
@media (max-width: 1200px) {
    #relatedWrapper {
        grid-template-columns: repeat(2,1fr);
        grid-template-areas:
    'singleRel1 singleRel2'
    'singleRel3 singleRel4'
    ;
        justify-items: center;
    }
    #singleRel3,#singleRel4{
        margin-top: 90px;
    }
}

@media (max-width: 620px) {
    #relatedWrapper {
        grid-template-columns: repeat(1,1fr);
        grid-template-areas:
    'singleRel1'
    'singleRel2'
    'singleRel3'
    'singleRel4'
    ;
        justify-items: center;
    }
    #singleRel2,#singleRel3,#singleRel4{
        margin-top: 90px;
    }
}
</style>
