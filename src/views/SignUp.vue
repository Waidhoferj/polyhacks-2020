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
                  v-model="username"
                  label="Username"
                  name="username"
                  prepend-icon="person"
                  type="text"
                  @blur="$v.username.$touch()"
                  :error-messages="usernameErrors"
                />
                <v-text-field
                  v-model="email"
                  label="Email"
                  name="Email"
                  prepend-icon="email"
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
              <v-btn color="primary" @click="signUp">Sign Up</v-btn>
              <v-btn color="secondary" @click="$router.push('login')"
                >Back</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { auth, firestore } from "@/modules/firebase";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  data: () => ({
    username: "",
    email: "",
    password: ""
  }),
  computed: {
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      if (!this.$v.username.minLength)
        errors.push("username must be at least 4 characters long");
      if (!this.$v.username.required) errors.push("username is required.");
      return errors;
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
  methods: {
    async signUp() {
      this.$v.$touch();
      if (this.$v.$error) return;
      try {
        //Sign up
        await auth.createUserWithEmailAndPassword(this.email, this.password);
        auth.currentUser.updateProfile({
          displayName: this.username
        });
        await firestore
          .collection("Users")
          .doc(auth.currentUser.uid)
          .set({
            username: this.username,
            points: 0,
            bountiesCompleted: [],
            badges: []
          });
      } catch (err) {
        this.loading = false;
        return alert(err.message);
      }
      this.$router.push("home");
    }
  },
  validations: {
    username: {
      required,
      minLength: minLength(4)
    },
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

<style></style>
