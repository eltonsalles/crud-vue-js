import Vue from 'vue';
import VueTheMask from 'vue-the-mask';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store/store';
import 'normalize.css/normalize.css';
import './assets/css/global.css';
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

Vue.use(VueTheMask);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
