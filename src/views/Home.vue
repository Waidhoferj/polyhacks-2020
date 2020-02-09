<template>
  <div>
     <bounty-card v-for="(bounty, index) in bounties" :key="index" :config="bounty"></bounty-card>
  </div>
</template>

<script>
import BountyInfo from '../components/BountyInfo';
import BountyCard from "../components/BountyCard";
export default {

   components: {
      BountyCard,
      BountyInfo
   },

   data: () => {
      return {
         bounties: [
            { title: 'Avila Beach', points: 200, collected: 439, company: "Cisco",
            quantity: 500, timeContraint: 1581226441791, 
            description: 'Take pictures of the sand at Avila Beach between the hours of 8:00 AM and 8:00 PM', featured: true },
            { title: 'Dog pictures', points: 200, collected: 32, company: "Activata",
            quantity: 100, timeContraint: 1581226441791, description: 'Collect them all', featured: false },
            { title: 'Pictures of Fire Hydrants', points: 500, collected: 69, company: "Knowmada",
            quantity: 100, timeContraint: 1581226441791, 
            description: 'Collect images of fire hydrants located around the downtown area', featured: false }
         ]
      }
   }
};
</script>

<style></style>
