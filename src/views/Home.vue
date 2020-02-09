<template>
  <div>
    <bounty-card
      v-for="(bounty, index) in bounties"
      :key="index"
      :config="bounty"
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
        // this.bounties.push(self.bounties, response)
        console.log("response");
        response.docs.forEach(doc => this.bounties.push(doc.data()));
      })
      .catch(err => console.log(err));
  }
};
</script>

<style></style>
