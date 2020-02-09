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
      prepend-icon="av_timer"
      type="number"
      :error-messages="durationErrors"
      @blur="$v.duration.$touch()"
    />
  </form>
</template>

<script>
import { firestore } from "@/modules/firebase";
import { required } from "vuelidate/lib/validators";

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
  watch: {
    "$v.$error": hasError => {
      if (!hasError)
        this.$emit("update", {
          backgroundNoise: this.backgroundNoise.value,
          intonation: this.intonation.value,
          duration: this.duration
        });
    }
  },
  computed: {
    durationErrors() {
      const errors = [];
      if (!this.$v.duration.$dirty) return errors;
      if (!this.$v.duration.required) errors.push("duration is required.");
      return errors;
    }
  },
  methods: {
    add() {
      this.$v.$touch();
      if (this.$v.$error) return;
    }
  },
  validations: {
    duration: { required },
    backgroundNoise: {
      value: {
        required
      }
    },
    intonation: {
      value: {
        required
      }
    }
  }
};
</script>

<style></style>
