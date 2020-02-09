<template>
  <div>
     <bounty-card v-for="(bounty, index) in bounties" :key="index" :config="bounty"></bounty-card>
  </div>
</template>

<script>
import BountyCard from "../components/BountyCard";
export default {

   components: {
      BountyCard
   },

   data: () => {
      return {
         bounties: [
            { title: 'Dog pictures', points: 200, collected: 32, 
            quantity: 100, timeContraint: 1581226441791, description: 'Collect them all' },
            { title: 'Pictures of Fire Hydrants', points: 500, collected: 69, 
            quantity: 100, timeContraint: 1581226441791, description: 'Collect images of fire hydrants located around the downtown area' }
         ]
      }
   }
};
</script>

<style></style>
