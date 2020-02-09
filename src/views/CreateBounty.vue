<template>
  <v-content>
    <v-date-picker v-model="dates" range></v-date-picker>
    <v-text-field
      v-model="quantity"
      label="Quantity"
      name="Quantity"
      prepend-icon="email"
      type="number"
      :error-messages="['required']"
      @blur="$v.quantity.$touch()"
    />
    <v-text-field
      v-model="payment"
      label="Payment"
      name="payment"
      prepend-icon="email"
      type="number"
      prefix="$"
      :error-messages="['required']"
      @blur="$v.payment.$touch()"
    />
    <v-select
      v-model="type.value"
      :items="type.choices"
      label="Data Type"
      required
      @change="$v.type.$touch()"
    ></v-select>

    <form>
      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>

      <v-btn class="mr-4" @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </v-content>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  data: () => ({
    dates: [new Date().toJSON().slice(0, 10), new Date().toJSON().slice(0, 10)],
    quantity: null,
    payment: null,
    type: {
      value: null,
      choices: [
        { text: "Audio", value: "audio" },
        { text: "Photo", value: "photo" }
      ]
    }
  }),
  computed: {
    startDate() {}
  },
  validations: {
    quantity: {
      required
    },
    payment: {
      minVal: minVal(20)
    },
    type: {
      value: {
        required
      }
    }
  }
};
</script>

<style></style>
