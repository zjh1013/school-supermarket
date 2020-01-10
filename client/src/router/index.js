import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/classify",
    name: "classify",
    component: () => import("@/views/classify.vue")
  },
  {
    path: "/shopcar",
    name: "shopcar",
    component: () => import("@/views/shopcar.vue")
  },
  {
    path: "/my",
    name: "my",
    component: () => import("@/views/my.vue")
  },
  {
    path: "/maps",
    name: "maps",
    component: () => import("@/views/maps.vue")
  },
  {
    path: "/address",
    name: "address",
    component: () => import("@/views/address.vue")
  },
  {
    path: "/editaddress",
    name: "editaddress",
    component: () => import("@/views/editaddress.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/registry",
    name: "registry",
    component: () => import("@/views/login/registry.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404.vue")
  },
  {
    path: "*",
    redirect: "/404"
  },
  {
    path: "/",
    redirect: "/home"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name == "my") {
    let token = window.sessionStorage.getItem("token");
    if (token) {
      next();
    } else {
      next({
        path: "/login"
      });
    }
  } else {
    next();
  }
});

export default router;
