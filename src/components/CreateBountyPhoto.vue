<template>
  <form>
    <v-select
      v-model="backgroundNoise.value"
      :items="backgroundNoise.choices"
      label="Background Noise"
      required
      @change="$v.type.$touch()"
    ></v-select>
    <v-select
      v-model="intonation.value"
      :items="intonation.choices"
      label="Intonation"
      required
      @change="$v.intonation.$touch()"
    ></v-select>
    <v-text-field
      v-model="duration"
      label="Duration"
      name="duration"
      prepend-icon="email"
      type="number"
      :error-messages="durationErrors"
      @blur="$v.duration.$touch()"
    />
    <v-btn color="primary" @click="postBounty">Login</v-btn>
  </form>
</template>

<script>
import { firestore } from "@/modules/firebase";
export default {
  data: () => ({
    backgroundNoise: {
      value: null,
      choices: [
        { text: "High", value: "high" },
        { text: "Medium", value: "medium" },
        { text: "Low", value: "low" }
      ]
    },
    intonation: {
      value: null,
      choices: [
        { text: "Annoyed", value: "annoyed" },
        { text: "Happy", value: "happy" },
        { text: "Inquisitive", value: "inquisitive" },
        { text: "Neutral", value: "neutral" },
        { text: "Serious", value: "serious" }
      ]
    },
    duration: ""
  }),
  methods: {
    postBounty() {
      this.$v.$touch();
      if (this.$v.$error) return;
      firebase.collection("Bounties").add({
        title: "title",
        price: "price",
        quantity: this.quantity
      });
    }
  }
};
</script>

<style></style>
