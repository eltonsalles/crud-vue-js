import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login/Login.vue';
import NewFaculty from './views/faculty/new/New.vue';
import ListFaculty from './views/faculty/list/List.vue';
import CompanyData from './views/faculty/new/company-data/CompanyData.vue';
import Campus from './views/faculty/new/campus/Campus.vue';
import Course from './views/faculty/new/course/Course.vue';

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
      path: '/nova-faculdade',
      component: NewFaculty,
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
        {
          path: 'cursos',
          name: 'course',
          component: Course,
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
    {
      path: '/lista-faculdades',
      name: 'lista-faculdades',
      component: ListFaculty,
      meta: { requireAuth: true },
    },
  ],
});
