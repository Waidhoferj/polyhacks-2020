<template>
  <div>
    <bounty-card
      v-for="(bounty, index) in bounties"
      :key="index"
      :id="bounty.id"
      :config="bounty.config"
    ></bounty-card>
  </div>
</template>

<script>
import { firestore } from "../modules/firebase";
import BountyCard from "../components/BountyCard";
import BountyCardDialog from '../components/BountyCardDialog'
export default {
  components: {
      BountyCard,
      BountyCardDialog
   },

  data: () => {
    return {
      bounties: []
    };
  },
  mounted() {
    firestore.collection("Bounties").get()
      .then(response => {
        response.docs.forEach(doc => {
           console.log(doc.data());
           this.bounties.push({
              id: doc.id,
              config: doc.data()})
           });
      })
      .catch(err => console.log(err));
  }
};
</script>

<style></style>
