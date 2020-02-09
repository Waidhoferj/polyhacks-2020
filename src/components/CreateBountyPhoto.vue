<template>
  <form>
    <v-select
      v-model="lighting.value"
      :items="lighting.choices"
      label="Lighting"
      required
      @change="updateSelect"
    ></v-select>
    <!-- <v-text-field label="Image Labels" @keyup.enter="addTag"></v-text-field>
    <v-chip
      v-for="(tag, index) in tags"
      :key="tag"
      class="ma-2"
      close
      color="indigo darken-3"
      @click:close="deleteTag(index)"
      outlined
    >
      {{ tag }}
    </v-chip> -->
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
    updateSelect() {
      this.$v.lighting.$touch();
      this.$emit("update", {
        lighting: this.lighting.value,
        // keywords: this.tags
      });
    },
    addTag(e) {
      if (this.tags.includes(e.target.value)) return;
      this.tags = [...this.tags, e.target.value];
      e.target.value = "";
      this.$emit("update", {
        lighting: this.lighting.value,
        // keywords: this.tags
      });
    },
    deleteTag(index) {
      this.tags.splice(index, 1);
      this.$emit("update", {
        lighting: this.lighting.value,
        // keywords: this.tags
      });
    }
  },
  watch: {
    "$v.$error": function(isInvalid) {
      this.$emit("update", {
        lighting: this.lighting.value,
        // labels: this.tags
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
