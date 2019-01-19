<template>
  <main class="login">
    <div class="login-background"></div>
    <section class="login-form">
      <img
        class="login-form__img"
        src="../../assets/images/logo.png"
        alt="Logo do parcele sua faculdade">
      <form class="login-form__form" novalidate autocomplete="off">
        <div class="input-group">
          <input
            class="input-group__field"
            type="text"
            id="login"
            maxlength="255"
            :class="{ 'input-group__field--active': login }"
            v-model="login">
          <label class="input-group__label" for="login">Login</label>
        </div>
        <div class="input-group">
          <input
            class="input-group__field"
            type="password"
            id="password"
            maxlength="255"
            :class="{ 'input-group__field--active': password }"
            v-model="password">
          <label class="input-group__label" for="password">Senha</label>
          <i class="input-group__icon icon-close"></i>
        </div>
        <div class="login-form__btns">
          <a class="login-form__forgot-password" href="#">Esqueceu a senha?</a>
          <button class="btn btn--login">Login</button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      login: '',
      password: '',
    };
  },
};
</script>

<style lang="postcss" scoped>
  @import "Login.pcss";
</style>
