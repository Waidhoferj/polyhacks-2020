<template>
  <v-app>
    <v-app-bar class="app-bar" app dark color="primary">
      <div class="d-flex align-center">
        <v-btn text icon dark @click.stop="drawer = !drawer">
          <v-icon>menu</v-icon>
        </v-btn>
        <router-link to="/">
          <v-btn text>Data Quest</v-btn>
        </router-link>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-sheet
          color="background"
          class="overflow-hidden"
          style="position: relative;"
        >
          <router-view></router-view>
          <v-container class="fill-height">
            <v-row align="center" justify="center"> </v-row>
          </v-container>
          <Menu :drawer="drawer"></Menu>
        </v-sheet>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { auth } from "@/modules/firebase";
import Menu from "@/components/Menu";
export default {
  name: "App",
  components: {
    Menu
  },
  data: () => ({
    drawer: false
  }),
  watch: {
    $route(to, from) {
      //change the transition animation
    }
  },
  created() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.$store.commit("setUser", user);
      } else this.signedIn = false;
    });
  }
};
</script>

<style scoped>
.container {
  max-width: inherit;
  padding: 0px;
}
</style>
