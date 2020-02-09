<template>
  <v-content class="create-bounty">
    <v-container>
      <h1 class="display-2">Data Request</h1>
      <v-text-field
        v-model="title"
        label="Title"
        name="Title"
        prepend-icon="title"
        type="text"
        :error-messages="titleErrors"
        @blur="$v.title.$touch()"
      />
      <v-textarea
        outlined
        name="input-7-4"
        label="Description"
        v-model="description"
        :error-messages="descriptionErrors"
        @blur="$v.description.$touch()"
      ></v-textarea>
      <v-subheader>Collection Duration</v-subheader>
      <v-row>
        <v-date-picker
          v-model="dates"
          range
          :no-title="true"
          width="290"
          label="Collection Duration"
        ></v-date-picker>
      </v-row>

      <v-text-field
        v-model="quantity"
        label="Quantity"
        name="Quantity"
        prepend-icon="trending_up"
        type="number"
        :error-messages="quantityErrors"
        @blur="$v.quantity.$touch()"
      />
      <v-text-field
        v-model="payment"
        label="Payment"
        name="payment"
        prepend-icon="attach_money"
        type="number"
        :error-messages="paymentErrors"
        @blur="$v.payment.$touch()"
      />
      <v-select
        v-model="type.value"
        :items="type.choices"
        label="Data Type"
        required
        @change="$v.type.$touch()"
      ></v-select>
      <create-bounty-photo
        v-if="type.value === 'photo'"
        @update="categoricalData = $event"
      ></create-bounty-photo>
      <create-bounty-audio
        v-else-if="type.value === 'audio'"
        @update="categoricalData = $event"
      ></create-bounty-audio>
      <v-btn @click="createBounty" class="mr-4">submit</v-btn>
    </v-container>
  </v-content>
</template>

<script>
import { firestore, auth } from "@/modules/firebase";
import { required } from "vuelidate/lib/validators";
import CreateBountyPhoto from "@/components/CreateBountyPhoto";
import CreateBountyAudio from "@/components/CreateBountyAudio";
export default {
  components: {
    CreateBountyPhoto,
    CreateBountyAudio
  },
  data: () => ({
    title: null,
    dates: [new Date().toJSON().slice(0, 10), new Date().toJSON().slice(0, 10)],
    quantity: null,
    payment: null,
    description: null,
    type: {
      value: null,
      choices: [
        { text: "Audio", value: "audio" },
        { text: "Photo", value: "photo" }
      ]
    },
    categoricalData: null
  }),
  computed: {
    quantityErrors() {
      const errors = [];
      if (!this.$v.quantity.$dirty) return errors;
      if (!this.$v.quantity.required) errors.push("quantity is required.");
      return errors;
    },
    paymentErrors() {
      const errors = [];
      if (!this.$v.payment.$dirty) return errors;
      if (!this.$v.payment.required) errors.push("payment is required.");
      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.description.$dirty) return errors;
      if (!this.$v.description.required)
        errors.push("description is required.");
      return errors;
    },
    titleErrors() {
      const errors = [];
      if (!this.$v.title.$dirty) return errors;
      if (!this.$v.title.required) errors.push("title is required.");
      return errors;
    }
  },
  methods: {
    createBounty() {
      this.$v.$touch();
      if (this.$v.$error) return;
      firestore
        .collection("Bounties")
        .add({
          title: this.title,
          type: this.type.value,
          dateRange: this.dates,
          requestor: auth.currentUser.uid,
          description: this.description,
          payment: this.payment,
          quantity: this.quantity,
          payment: this.payment,
          featured: false,
          ...this.categoricalData
        })
        .catch(err => console.log(err.message));
      this.$router.push("home");
    }
  },

  validations: {
    title: {
      required
    },
    quantity: {
      required
    },
    payment: {
      required
    },
    description: { required },
    type: {
      value: {
        required
      }
    },
    categoricalData: { required }
  }
};
</script>

<style></style>
