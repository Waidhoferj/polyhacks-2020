<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          v-on="on"
          text
        >
          More Info
        </v-btn>
      </template>

      <v-card
    class="mx-auto"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-subtitle>{{config.company}}</v-list-item-subtitle>
        <v-list-item-title class="headline">{{config.title}}</v-list-item-title>

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
       <p style="width:100%">Lighting</p>
    </v-list-item>
    <v-list-item>
       <v-btn class="light-buttons" color="primary" text :value="true">Bright</v-btn>
       <v-btn class="light-buttons" color="primary" text>Medium</v-btn>
       <v-btn class="light-buttons" color="primary" text>Low</v-btn>
    </v-list-item>

   <v-card-text class="text--primary">
      <p class="title no-bottom">Usage</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id massa urna. Cras gravida, mi vel sagittis posuere,
          neque lacus iaculis orci, id viverra elit lectus a diam. Quisque varius viverra purus, sed pulvinar felis semper tincidunt. </p>
   </v-card-text>

   <v-card-text class="text--primary">
      <p class="title no-bottom">Description</p>
      <p>{{config.description}}</p>
   </v-card-text>

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
    </v-dialog>
  </div>
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
   },

   data() {
      return {
         dialog: false
      }
   }
}
</script>