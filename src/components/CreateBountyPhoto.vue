<template>
  <form>
    <v-select
      v-model="lighting.value"
      :items="lighting.choices"
      label="Lighting"
      required
      @change="$v.lighting.$touch()"
    ></v-select>
    <v-text-field label="Image Labels" @keydown.enter="addTag"></v-text-field>
    <v-list>
      <v-list-item v-for="(tag, index) in tags" :key="tag">
        <v-row
          ><p>{{ tag }}</p>
          <button @click="deleteTag(index)">delete</button></v-row
        >
      </v-list-item>
    </v-list>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  data: () => ({
    lighting: {
      value: null,
      choices: [
        { text: "Low", value: "low" },
        { text: "Medium", value: "medium" },
        { text: "High", value: "high" }
      ]
    },
    tags: []
  }),
  methods: {
    addTag(e) {
      debugger;
      if (this.tags.includes(e.target.value)) return;
      this.tags = [...this.tags, e.target.value];
      e.target.value = "";
    },
    deleteTag(index) {
      this.tags.splice(index, 1);
    }
  },
  watch: {
    "$v.$error": function(isInvalid) {
      this.$emit("update", {
        lighting: this.lighting.value,
        labels: this.tags
      });
    }
  },
  validations: {
    lighting: {
      value: {
        required
      }
    }
  }
};
</script>
