import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login/Login.vue';
import Home from './views/home/Home.vue';

Vue.use(Router);


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requireAuth: false },
    },
    {
      path: '/esqueceu-sua-senha',
      name: 'forget-password',
      component: () => import(/* webpackChunkName: "view-[request]" */ './views/forget-password/ForgetPassword.vue'),
      meta: { requireAuth: false },
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requireAuth: true },
    },
  ],
});
