<template>
  <main class="forget-password">
    <div class="forget-password-background"></div>
    <section class="forget-password-form">
      <img
          class="forget-password-form__img"
          src="../../assets/images/logo.png"
          alt="Logo do parcele sua faculdade">
      <form class="forget-password-form__form" novalidate autocomplete="off">
        <p class="forget-password-form__description font--body-bold">
          Digite seu e-mail que enviamos um link de redefinição de senha.</p>
        <div class="input-group">
          <input
              class="input-group__field"
              type="text"
              id="email"
              maxlength="255"
              :class="{ 'input-group__field--active': email }"
              v-model="email">
          <label class="input-group__label" for="email">Seu e-mail</label>
        </div>
        <div class="forget-password-form__btns">
          <button class="btn btn--forget-password">Recupere a sua senha</button>
          <router-link
              class="forget-password-form__forgot-password"
              to="/login">
            <i class="icon-sharp-arrow_forward-24px icon--large"></i>
            Voltar para fazer login
          </router-link>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ForgetPassword',
  data() {
    return {
      email: '',
    };
  },
};
</script>

<style lang="postcss" scoped>
  @import "ForgetPassword.css";
</style>
