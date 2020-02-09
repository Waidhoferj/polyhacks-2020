<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn text icon
          dark
          @click.stop="drawer = !drawer"
        >
          <v-icon>menu</v-icon>
        </v-btn>
        <router-link to="/">
          <v-btn text>Data Daddies</v-btn>
        </router-link>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-container>
      <v-sheet
      height="100vh"
      class="overflow-hidden"
      style="position: relative;"
    >
    <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >
      </v-row>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list dense>

        <v-list-item
          v-for="item in account"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
  </v-container>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { auth } from "@/modules/firebase";
export default {
  name: "App",

  data: () => ({
    drawer: false,
    items: [
          { title: 'Home', icon: 'home' },
          { title: 'Create Bounty', icon: 'create' },
          { title: 'Current Bounties', icon: 'today' },
          { title: 'Leaderboard', icon: 'poll' },
        ],
    account: [
        { title: 'My Account', icon: 'account_circle' },
        { title: 'Sign Out', icon: 'cloud_off'}
    ]
    //
  }),
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