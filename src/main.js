import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './assets/css/style.pcss';
import './assets/fonts/fonts.css';
import './assets/icons/style.css';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.requireAuth || false;
  if (requireAuth) {
    if (!store.state.authenticated) {
      return next({ path: 'login' });
    }
  }

  return next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
