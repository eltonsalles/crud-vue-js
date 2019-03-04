<template>
  <ul class="links-aside">
    <router-link
        class="links-aside__item"
        tag="li"
        to="/home"
        exact-active-class="links-aside__item--active">
      <a href="#" class="links-aside__link">
        <i class="links-aside__icon icon-list"></i>
        <span class="links-aside__text">Lista de Faculdades</span>
      </a>
      <div class="links-aside__arrow"></div>
    </router-link>
    <router-link
        class="links-aside__item"
        tag="li"
        to="/nova-faculdade"
        exact-active-class="links-aside__item--active">
      <a href="#" class="links-aside__link">
        <i class="links-aside__icon icon-plus-button"></i>
        <span class="links-aside__text">Nova Faculdades</span>
      </a>
      <div class="links-aside__arrow"></div>
    </router-link>
    <router-link
        class="links-aside__item"
        tag="li"
        to="/configuracoes"
        exact-active-class="links-aside__item--active">
      <a href="#" class="links-aside__link">
        <i class="links-aside__icon icon-settings"></i>
        <span class="links-aside__text">Configurações</span>
      </a>
      <div class="links-aside__arrow"></div>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'Aside',
};
</script>

<style lang="postcss" scoped>
  @import "Aside.css";
</style>
