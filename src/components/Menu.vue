<template>
  <v-navigation-drawer :value="drawer" fixed temporary>
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>John Leider</v-list-item-title>
        <v-list-item-subtitle>5100 points</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
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
      <v-list-item>
        <v-list-item-icon>
          <v-icon>account_circle</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>My Account</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="signOut">
        <v-list-item-icon>
          <v-icon>cloud_off</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Sign Out</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { auth } from "@/modules/firebase";
export default {
  props: {
    drawer: Boolean
  },
  data: () => ({
    items: [
      { title: "Home", icon: "home" },
      { title: "Create Bounty", icon: "create", link: "create-bounty" },
      { title: "Current Bounties", icon: "today" },
      { title: "Leaderboard", icon: "poll" }
    ]
  }),
  methods: {
    async signOut() {
      console.log("test");
      await auth.signOut();
      this.$router.push("/login");
    }
  }
};
</script>

<style></style>
