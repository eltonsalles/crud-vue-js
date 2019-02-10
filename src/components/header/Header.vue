<template>
  <nav class="nav">
    <ul class="links-header">
      <li class="links-header__item">
        <router-link class="links-header__link-img" to="/">
          <img
              class="links-header__img"
              src="../../assets/images/logo.png"
              alt="Logo parcele sua faculdade">
        </router-link>
      </li>
      <router-link class="links-header__item links-header__item--active" tag="li" to="/">
        <a href="#" class="links-header__link">
          <i class="links-header__icon icon-library"></i>
          <span class="links-header__text">Faculdades</span>
        </a>
      </router-link>
    </ul>
    <ul class="links-user">
      <li class="links-user__item">
        <img class="links-user__img" src="../../assets/images/user.png" alt="Foto do usuário">
      </li>
      <li class="links-user__item">
        <p class="links-user__name">Marianna Juc</p>
        <p class="links-user__office">Diretora de contas</p>
      </li>
      <li class="links-user__item links-user__item--logout">
        <a href="#" class="links-user__link" @click.prevent="activeLogout = !activeLogout">
          <i class="icon-close"></i>
        </a>
        <ul
            class="links-logout"
            :class="{ 'links-logout--visible': activeLogout }"
            @mouseleave="activeLogout = !activeLogout">
          <li class="links-logout__item">
            <button class="btn">Sair</button>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      activeLogout: false,
    };
  },
};
</script>

<style lang="postcss" scoped>
  @import "Header.pcss";
</style>
