<template>
  <div class="login">
    <div class="login-background"></div>
    <section class="login-form">
      <img
          class="login-form__img"
          src="../../assets/images/logo.png"
          alt="Logo do parcele sua faculdade">
      <form class="login-form__form" novalidate autocomplete="off" @submit.prevent="login">
        <div class="input-group">
          <input
              class="input-group__field"
              type="text"
              id="login"
              maxlength="255"
              :class="{ 'input-group__field--active': user.username }"
              v-model="user.username">
          <label class="input-group__label" for="login">Login</label>
        </div>
        <div class="input-group">
          <input
              class="input-group__field"
              type="password"
              id="password"
              maxlength="255"
              :class="{ 'input-group__field--active': user.password }"
              v-model="user.password">
          <label class="input-group__label" for="password">Senha</label>
          <i class="input-group__icon icon-close"></i>
        </div>
        <div class="login-form__btns">
          <router-link
              class="login-form__forgot-password"
              to="/esqueceu-sua-senha">Esqueceu a senha?
          </router-link>
          <button class="btn btn--login">Login</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',

  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },

  methods: {
    ...mapActions(['changeAuthenticated']),

    setAuthenticate() {
      this.changeAuthenticated(true);
    },

    login() {
      if (this.user.username !== '' && this.user.password !== '') {
        // Criar um serviço para fazer login.
        // Quando feito esse serviço talvez seja necessário salvar os dados no localstorage
        if (this.user.username === 'admin' && this.user.password === 'admin') {
          this.setAuthenticate();
          this.$router.replace({ name: 'home' });
        } else {
          console.log('Login e/ou senha inválidos');
        }
      } else {
        console.log('O login e senha precisam ser preenchidos');
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
  @import "Login.pcss";
</style>
