import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./components/login/Login.vue";
import Home from "./components/home/Home.vue";
const router = new VueRouter({
  routes: [
    {path:'/',redirect:'/login'},
    {
      path: "/login",
      component: Login
    },
    {
      path: "/home",
      component: Home
    }
  ]
});
export default router;
Vue.use(VueRouter);
