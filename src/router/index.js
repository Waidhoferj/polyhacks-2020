import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/account",
    name: "My Account",
    component: () => import("../views/Account.vue")
  },
  {
    path: "/create-bounty",
    name: "Create Bounty",
    component: () => import("../views/CreateBounty.vue")
  },
  {
    path: "/leaderboard",
    name: "Leaderboard",
    component: () => import("../views/Leaderboard.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: () => import("../views/SignUp.vue")
  },
  {
    path: "/data-hunt",
    name: "Data Hunt",
    component: () => import("../views/ScavengerCamera.vue")
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
