<template>
  <div id="header">
    <div id="headerWrapper">
      <a href="/"><img src="/static/public/images/logo.png" alt="تصویر ناثص است" title="دمیرکو"></a>
    </div>
    <div class="w-100 mt-3">
      <div id="worker">
        <div id="workerWrapper">
          <div class="text">
            <p>
              دمیرکو پلتفرم فروش ماشین آلات صنعتی در ایران و کشورهای همسایه است.
              در سال قبل حدود 24،325 مشتری داخلی و خارجی داشتیم که حدود 1 سوم آنها از خارج از ایران بودند.
              در اینجا شما هم می توانید برای دسترسی به مشتریان جزو تامین کنندگان ما شوید.
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import worker from "../signupAndWorker/worker/worker.vue";
export default {
  name: "headers",
  components: {
    // worker
  }
}
</script>

<style scoped>
#header {
  width: 100%;
  overflow: hidden;
}

#headerWrapper {
  max-width: 300px;
  /* width: 100%; */
  margin: auto;
}

#headerWrapper img {
  width: 100%;
  padding: 10px;

}
#worker {
  height: 500px;
  position: relative;

  background: url("/static/public/images/insust.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  width: 100%;
}

#workerWrapper {
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.text{
  width: 80%;
  margin: auto;
  margin-bottom: 10px;
  opacity: 0.95;
}
.text p {
  direction: rtl;
  text-align: center;
  font-size: 24px;
  color: white;
  font-weight: bold;
}

@media screen and (max-width: 768px){
.text{
  /*width: 60%;*/
  margin-bottom: 5px;
}
  .text p{
    font-size: 17px;
  }
}
.workderImage img {
  width: 100%;
}

/*.my_img {*/
/*  width: 100%;*/
/*  height: 480px;*/
/*  text-align: center;*/
/*  margin-top: 10px;*/
/*  background-color: black;*/
/*  position: relative;*/
/*  z-index: 2;*/
/*  opacity: 0.6;*/
/*}*/

/*#my_img {*/
/*  width: 101.5%;*/
/*  !*height: 480px;*!*/
/*  position: absolute;*/
/*  background-color: red;*/
/*  top: 16.5%;*/
/*  right: 0;*/
/*  !*margin: auto;*!*/
/*  !*background-color: blue;*!*/
/*}*/

/*#my_img img {*/
/*  width: 100%;*/
/*  !*height: 480px;*!*/
/*  !*position: relative;*!*/
/*  !*z-index: 1;*!*/
/*  background-size: 100% 100%;*/
/*  background-position: center;*/
/*  filter: blur(0.5px);*/
/*  background-color: blue;*/
/*  !*background-repeat: no-repeat;*!*/
/*}*/
/*.paragraph{*/
/*  width: 80%;*/
/*  height: 100px;*/
/*  margin: auto;*/
/*  !*background-color: rgba(66,161,26,0.89);*!*/
/*  position: absolute;*/
/*  bottom: 30%;*/
/*  z-index: 3;*/
/*  opacity: 0.9;*/

/*  !*background-color: rgba(159,70,161,0.89);*!*/
/*}*/
/*.paragraph p{*/
/*  font-size: 24px;*/
/*  font-weight: 900;*/
/*  direction: rtl;*/
/*  text-align: center;*/
/*  color: white;*/
/*}*/
</style>
