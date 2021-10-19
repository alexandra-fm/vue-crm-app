import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/app";
//import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/History",
    name: "History",
    meta: { layout: "main", auth: true },
    component: () => import("../views/History.vue"),
  },
  {
    path: "/Planning",
    name: "Planning",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Planning.vue"),
  },
  {
    path: "/Record",
    name: "Record",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Record.vue"),
  },
  {
    path: "/Categories",
    name: "Categories",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Categories.vue"),
  },
  {
    path: "/Profile",
    name: "Profile",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/DetailRecord/:id",
    name: "DetailRecord",
    meta: { layout: "main", auth: true },
    component: () => import("../views/DetailRecord.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    meta: { layout: "empty" },
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    meta: { layout: "empty" },
    component: () => import("../views/Register.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some((record) => record.meta.auth);

  if (requireAuth && !currentUser) {
    next("/login?message=login");
  } else {
    next();
  }
});

export default router;
