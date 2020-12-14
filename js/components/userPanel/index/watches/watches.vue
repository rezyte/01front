<template>
  <div id="canvasWrapper">
    <canvas id="myChart" height="3" width="4"></canvas>
  </div>

</template>

<script>
import Chart from "chart.js"
export default {
name: "watches",
  mounted() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      showLines:false,
      data: {
        labels: ['11/22', '11/23', '11/24', '11/25', '11/26', '11/27', '11/28', '11/29', '11/30'],
        datasets: [{
          label: 'تعداد بازدید',
          data: [12, 1500, 20, 150, 365, 58,66,21,45],
          borderWidth: 5,
          backgroundColor:["rgba(255,255,255,0.1)"],
          borderColor: ['rgba(9,111,211,1)'],
          borderJoinStyle:'bevel',
          pointBackgroundColor:["black",'red','yellow','green','gray'],
          lineTension:0.4,
          pointHitRadius:4,
          pointRadius:8
        }],

      },

      options: {
        showLines:true,

        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)"

            }
          }],
          xAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            }
          }]
        },
        tooltips:{
          displayColors:false
        }
      }
    });
  }
}
</script>

<style scoped>
  #canvasWrapper{

    position: relative;
    width: 500px;
    margin:20px;
    padding: 20px;
    /*height: 500px !important;*/
  }
</style>