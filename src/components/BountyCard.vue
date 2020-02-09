<template>
  <v-card
    class="mx-auto"
    max-width="750"
  >
  <div class="classification">
      <v-btn color="primary" text>Images</v-btn>
      <v-btn color="primary" text>Classification</v-btn>
  </div>
    <v-card-text>
      <p class="display-1 text--primary">
        Dog Pictures
      </p>
      <p>200 Points</p>
      <div class="text--primary">
        32/100 Images collected
      </div>
      <v-progress-linear
      v-model="valueDeterminate"
      color="deep-purple accent-4"
    ></v-progress-linear>
    </v-card-text>
      <v-expansion-panels class="elevation">
    <v-expansion-panel
    >
      <v-expansion-panel-header>Details</v-expansion-panel-header>
      <v-expansion-panel-content>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         </p>
         <v-btn text color="primary" style="float:right">Claim Bounty</v-btn>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </v-card>
</template>

<script>
export default {
   data: () => {
      return {
         valueDeterminate: 32
      }
   }
}
</script>

<style scoped>
.classification {
   padding: 12px 12px 12px 0px;
}
.elevation {
   z-index: initial;
}
</style>