import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/login', name: 'login', component: Login },
    {
      path: '/esqueceu-sua-senha',
      name: '/forget-password',
      component: () => import(/* webpackChunkName: "view-[request]" */ './views/forget-password/ForgetPassword.vue'),
    },
  ],
});
