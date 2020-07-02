import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../layout/default.vue"),
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("../views/index.vue")
      },
      {
        path: "/Description",
        name: "description",
        component: () => import("../views/Description.vue")
      },
      {
        path: "/Login",
        name: "login",
        component: () => import("../views/Login.vue")
      },
      {
        path: "/Register",
        name: "register",
        component: () => import("../views/Register.vue")
      },
      {
        path: "/Pay",
        name: "pay",
        component: () => import("../views/Pay.vue")
      },
      {
        path: "/Cart",
        name: "cart",
        component: () => import("../views/Cart.vue")
      },
      {
        path: "/AlreadyPurchased",
        name: "alreadyPurchased",
        component: () => import("../views/alreadyPurchased")
      }
    ]
  },
  {
    path: "/blank",
    name: "blank",
    component: () => import("../layout/blank.vue"),
    children: [
      {
        path: "/NotFound",
        name: "NotFound",
        component: () => import("../views/Error.vue")
      }
    ]
  },
  {
    path: "*",
    redirect(to) {
      if (to.path === "/") {
        return "/home";
      } else {
        return "/NotFound";
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
