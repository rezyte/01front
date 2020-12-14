<template>
  <div class="progressBar">

    <div class="svgWrapper">
      <svg>
        <circle
            r="100"
            cx="50%"
            cy="50%"
            fill="red"
            stroke-width="20"
            style="fill: none;stroke:rgb(230 230 230)"
        />
        <circle ref="pog"
                fill="none"
                stroke-width="20"
                stroke="rgb(17,112,240)"
        />

      </svg>
      <div class="description">

        <div><p class="text">تکمیلی پروفایل:</p></div>
        <label for=""><p>{{percent}}</p> <span>%</span></label>
      </div>
    </div>
    <a href="">تکمیل پروفایل</a>
  </div>
</template>

<script>
export default {
  name: "progressBar",
  props:['percent'],
  mounted() {
    let cir=this.$refs.pog
    cir.setAttribute('r','100');
    cir.setAttribute('cx','50%');
    cir.setAttribute('cy','50%');
    const r=cir.getAttribute("r");
    cir.setAttribute('stroke-dasharray',`${+r*2*3.14}`);
    const dasharray=cir.getAttribute('stroke-dasharray')
    let offset=cir.parentElement
    console.log('offset',offset.nextElementSibling.childNodes)
    offset=offset.nextElementSibling.childNodes[2]
    offset=offset.innerText
    offset=offset.split(" ")[0]
    offset=parseInt(offset)
    let newOffset=(dasharray*((100-offset)/100))
    cir.setAttribute('stroke-dashoffset',`${-newOffset}`)
  }
}
</script>

<style scoped>
svg{
  width: 260px;
  height: 220px;
  transform: rotate(-90deg);
}
.progressBar{
  position: relative;
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
a{
  color:rgb(57 111 211)
}
.progressBar label{
  align-items: center;
  display: flex;
  color:rgb(17,112,240)
}
.description{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
label p,label span{
  font-size: 40px;
}
.svgWrapper{
  position: relative;
}
</style>