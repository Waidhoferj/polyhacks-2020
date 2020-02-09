<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-subtitle>Big Company</v-list-item-subtitle>
        <v-list-item-title class="headline">Small Dogs</v-list-item-title>

        <v-list-item-subtitle style="color:green">$.50 per data point</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
   <v-card-text>
      <div class="text--primary">
         20/500 Images collected
      </div>
      <v-progress-linear
         color="light-blue"
         height="10"
         value="10"
      ></v-progress-linear>
   </v-card-text>

    <v-list-item>
       <v-list-item-title>Lighting</v-list-item-title>
       <v-btn class="light-buttons" color="primary">Bright</v-btn>
       <v-btn class="light-buttons" color="primary">Medium</v-btn>
       <v-btn class="light-buttons" color="primary">Low</v-btn>

    </v-list-item>
      <p>$.25/ea</p>
    <v-slider
      v-model="time"
      :max="6"
      :tick-labels="labels"
      class="mx-4"
      ticks
    ></v-slider>

    <v-list class="transparent">
       <v-list-item>
          <v-list-item-title>Availuble until 2/14/2020</v-list-item-title>
       </v-list-item>
       <v-list-item>
          <v-list-item-title>Requested by Activata</v-list-item-title>
       </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn text>Submit Images</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
   data () {
      return {
         labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
         time: 0,
         forecast: [
            { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
            { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
            { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
         ],
      }
   }
}
</script>

<style scoped>
.light-buttons {
   margin-right: 10px;
}

</style>