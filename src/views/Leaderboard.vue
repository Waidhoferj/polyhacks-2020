<template>
   <div>
      <v-content class="no-padding">
         <v-container>
            <badges></badges>
            <bar-graph></bar-graph>
            <donut-graph></donut-graph>
         </v-container>
      </v-content>
   </div>
</template>

<script>
import BarGraph from '../components/BarGraph';
import DonutGraph from '../components/DonutGraph';
import Badges from '../components/Badges';
export default {
   components: {
      BarGraph,
      DonutGraph,
      Badges
   }
};
</script>

<style scoped>
.no-padding {
   padding: 0
}
</style>

