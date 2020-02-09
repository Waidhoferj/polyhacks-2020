<template>
  <v-card
    class="bounty-card mx-auto"
    max-width="750"
  >
  <div class="classification" style="display:flex">
      <p class="company subtitle-1" style="flex-grow: 1" color="primary">{{config.company}}</p>
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
  <v-card-text style="display:flex">
     <p class="info-data title font-weight-bold" color="black">$.25/ea</p>
     <p class="info-data title font-weight-bold" color="black">2/9/20</p>
  </v-card-text>
  <v-divider></v-divider>
  <v-card-text style="display:flex">
     <div style="flex-grow:1"></div>
     <bounty-card-dialog :config="config"></bounty-card-dialog>
     <v-btn color="primary" text>Submit</v-btn>
  </v-card-text>
  </v-card>
</template>

<script>
import BountyCardDialog from '../components/BountyCardDialog';
export default {
   components: {
      BountyCardDialog
   },

   props: {
      config: {
         title: String,
         points: Number,
         company: String,
         collected: Number,
         quantity: Number,
         timeConstraint: Number,
         usage: String,
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