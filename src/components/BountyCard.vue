<template>
  <v-card
    class="bounty-card mx-auto"
    max-width="750"
  >
  <div class="classification">
      <v-btn color="primary" text>Images</v-btn>
      <p v-if="config.featured" class="featured subtitle-1">Featured</p>
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
      :value="(config.collected/config.quantity) * 100"
      color="primary"
    ></v-progress-linear>
    </v-card-text>
      <v-expansion-panels class="elevation">
    <v-expansion-panel
    >
      <v-expansion-panel-header>Details</v-expansion-panel-header>
      <v-expansion-panel-content>
         <p>{{config.description}}</p>
         <v-btn text color="primary" style="float:right">Claim Bounty</v-btn>
         <v-btn text color="primary" style="float:right">Info</v-btn>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
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
.bounty-card {
   margin-top: 10px;
   margin-bottom: 10px;
}

.classification {
   padding: 12px 12px 12px 0px;
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