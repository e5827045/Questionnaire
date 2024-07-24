import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import main from "../views/main.vue";
import Member from "../views/Member.vue";
import SignUp from "../views/SignUp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/",
      name: "main",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: main,
    },
    {
      path: "/Member",
      name: "Member",
      component: Member,
    },
    {
      path: "/SignUp",
      name: "SignUp",
      component:SignUp

    },
  ],
});

export default router;
