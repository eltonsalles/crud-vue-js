import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login/Login.vue';
import Home from './views/home/Home.vue';
import CompanyData from './views/home/company-data/CompanyData.vue';
import Campus from './views/home/campus/Campus.vue';

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
      component: Home,
      children: [
        {
          path: '',
          name: 'company-data',
          component: CompanyData,
          meta: {
            requireAuth: true,
            breadcrumbs: [
              {
                name: 'Home',
                link: '',
              },
              {
                name: 'Faculdade',
                link: '',
              },
              {
                name: 'Nova Faculdade',
                title: 'Nova Faculdades',
              },
            ],
          },
        },
        {
          path: 'campus',
          name: 'campus',
          component: Campus,
          meta: {
            requireAuth: true,
            breadcrumbs: [
              {
                name: 'Home',
                link: '',
              },
              {
                name: 'Faculdade',
                link: '',
              },
              {
                name: 'Nova Faculdade',
                title: 'Nova Faculdades',
              },
            ],
          },
        },
      ],
    },
  ],
});
