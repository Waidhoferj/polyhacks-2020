import Vue from "vue";
import VueRouter from "vue-router";
import Account from '../views/Account.vue';
import BountyInfo from '../views/BountyInfo.vue';
import CreateBounty from '../views/CreateBounty.vue';
import About from "../views/About.vue";
import Leaderboard from "../views/Leaderboard.vue";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/account",
    name: "My Account",
    component: Account
  },
  {
    path: "/bounty-info",
    name: "Bounty Info",
    component: BountyInfo
  },
  {
    path: "/create-bounty",
    name: "Create Bounty",
    component: CreateBounty
  },
  {
    path: "/leaderboard",
    name: "Leaderboard",
    component: Leaderboard
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "*",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
