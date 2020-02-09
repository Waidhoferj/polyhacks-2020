<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="email"
                  label="Email"
                  name="Email"
                  prepend-icon="person"
                  type="text"
                  :error-messages="emailErrors"
                  @blur="$v.email.$touch()"
                />

                <v-text-field
                  v-model="password"
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="lock"
                  type="password"
                  @blur="$v.password.$touch()"
                  :error-messages="passwordErrors"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" @click="signIn">Login</v-btn>
              <v-btn color="secondary" @click="$router.push('sign-up')"
                >Sign Up</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { auth } from "@/modules/firebase";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      if (!this.$v.email.email)
        errors.push("must be a correctly formatted email");
      if (!this.$v.email.required) errors.push("email is required.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      if (!this.$v.password.minLength)
        errors.push("password must be at least 7 characters long");
      if (!this.$v.password.required) errors.push("password is required.");
      return errors;
    }
  },
  watch: {
    user(user) {
      if (user) this.$router.push("home");
    }
  },
  methods: {
    async signIn() {
      this.$v.$touch();
      if (this.$v.$error) return;
      try {
        await auth.signInWithEmailAndPassword(this.email, this.password);
      } catch (err) {
        return alert(err.message);
      }
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(7)
    }
  }
};
</script>

<style lang="scss"></style>
