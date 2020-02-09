<template>
  <v-card
    class="bounty-card mx-auto"
    max-width="750"
  >
  <div class="classification" style="display:flex">
      <p class="company subtitle-1" style="flex-grow: 1" color="primary">Images</p>
      <p v-if="config.featured" class="featured subtitle-1">Featured</p>
      <p v-else class="subtitle-1 exp-date"><b>20 Hours Left</b></p>
  </div>
    <v-card-text>
      <p class="display-1 text--primary">
        {{config.title}}
      </p>
      <p class="subtitle-1">{{config.points}} Points</p>
      <div class="text--primary">
        {{config.collected}}/{{config.quantity}} Images collected
      </div>
      <v-progress-linear
      height="10"
      :value="(config.collected/config.quantity) * 100"
      color="primary"
    ></v-progress-linear>
    </v-card-text>
      <!-- <v-expansion-panels class="elevation">
    <v-expansion-panel
    >
      <v-expansion-panel-header>Details</v-expansion-panel-header>
      <v-expansion-panel-content>
         <p>{{config.description}}</p>
         <v-btn text color="primary" style="float:right">Claim Bounty</v-btn>
         <v-btn text color="primary" style="float:right">Learn More</v-btn>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels> -->
  <v-card-text style="display:flex">
     <p class="info-data title font-weight-bold" color="black">$.25/ea</p>
     <p class="info-data title font-weight-bold" color="black">2/9/20</p>
  </v-card-text>
  <v-divider></v-divider>
  <v-card-text style="display:flex">
     <div style="flex-grow:1"></div>
     <v-btn color="primary" text>More Info</v-btn>
     <v-btn color="primary" text>Submit</v-btn>
  </v-card-text>
  </v-card>
</template>

<script>
export default {
   props: {
      config: {
         title: String,
         points: Number,
         collected: Number,
         quantity: Number,
         timeConstraint: Number,
         description: String
      }
   }
}
</script>

<style scoped>
.company {
   flex-grow: 1;
}
.bounty-card {
   margin-top: 10px;
   margin-bottom: 10px;
}

.classification {
   display: flex;
   padding: 12px 12px 0px 12px;
}

.exp-date {
   color: red;
}

.info-data {
   color: black;
   margin: auto;
}

.elevation {
   z-index: initial;
}

.featured {
   color: green;
   float: right;
   display: flex; 
}
</style>