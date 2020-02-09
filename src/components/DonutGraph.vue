<template>
   <div>
      <div class="title" style="text-align:center;padding:15px">Bounties for this Month</div>
      <vue-apex-charts style="max-width:750px;margin:auto" type="donut" :options="options" :series="options.series"></vue-apex-charts>
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
            labels: ['Photo Bounties', 'Video Bounties'],
            series: [33, 12],
            chart: {
               type: 'donut',
            },
        }
      }
   }
}
</script>

<style>

</style>