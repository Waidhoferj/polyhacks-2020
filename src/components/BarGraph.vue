<template>
   <div class="mx-auto">
      <div class="title" style="text-align:center">Community Leaderboards</div>
      <div style="max-width:750px;margin:auto" >
         <vue-apex-charts type="bar" :options="options" :series="series"></vue-apex-charts>
      </div>
   </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
export default {
   components: {
      VueApexCharts
   },
   data() {
      return {
         options: {
        chart: {
          id: 'global-leaderboard'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August']
        },
        dataLabels: {
           enabled: false,
        }
      },
      series: [{
        name: 'Your monthly bounties',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
         name: 'Local Average',
         data: [25, 67, 32, 54, 44, 78, 43, 68]
      }]
      }
   }
}
</script>

<style>

</style>