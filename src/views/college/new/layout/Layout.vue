<template>
  <section class="page-content">
    <section class="page-content__left-part">
      <h4 class="page-content__title">Dados do Layout</h4>
      <div class="input-group">
        <input
            class="input-group__field"
            type="text"
            id="title-banner"
            maxlength="255"
            :class="{ 'input-group__field--active': layout.titleBanner }"
            v-model="layout.titleBanner">
        <label class="input-group__label" for="title-banner">Título do banner</label>
      </div>
      <div class="textarea-group">
        <textarea
            class="textarea-group__field"
            id="about"
            rows="6"
            cols="30"
            maxlength="2000"
            :class="{ 'textarea-group__field--active': layout.about }"
            v-model="layout.about"></textarea>
            <label class="textarea-group__label" for="about">Sobre a empresa</label>
      </div>
      <div class="input-group">
        <input
            class="input-group__field"
            type="text"
            id="link-video"
            maxlength="255"
            :class="{ 'input-group__field--active': layout.video }"
            v-model="layout.video">
        <label class="input-group__label" for="link-video">Link do vídeo</label>
      </div>
      <div class="form-group">
        <div class="input-group input-group--size-1">
          <input
              class="input-group__field"
              type="text"
              id="color-1"
              maxlength="255"
              :class="{ 'input-group__field--active': layout.color1 }"
              v-model="layout.color1">
          <label class="input-group__label" for="color-1">Cor primária da marca</label>
          <label><input type="color" class="input-color"></label>
        </div>
        <div class="input-group input-group--size-1">
          <input
              class="input-group__field"
              type="text"
              id="color-2"
              maxlength="255"
              :class="{ 'input-group__field--active': layout.color2 }"
              v-model="layout.color2">
          <label class="input-group__label" for="color-2">Cor secundária da marca</label>
          <label><input type="color" class="input-color"></label>
        </div>
      </div>
    </section>
    <section class="page-content__right-part">
      <h5 class="page-content__title page-content__title--logo">Logo da empresa</h5>
      <m-input-file></m-input-file>
      <h5 class="page-content__title page-content__title--logo">Imagem destacada</h5>
      <m-input-file></m-input-file>
      <section class="page-content__actions">
        <router-link
            tag="button"
            class="btn btn--come-back"
            :to="{ name: 'course' }"
            @click.native="changeWildcardActive(2)">
          <i class="icon-left icon-sharp-arrow_forward-24px"></i>Voltar
        </router-link>
        <button class="btn btn--next">Finalizar</button>
      </section>
    </section>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import InputFile from '../../../../components/input-file/InputFile.vue';

export default {
  name: 'Layout',

  components: {
    'm-input-file': InputFile,
  },

  data() {
    return {
      layout: {
        titleBanner: null,
        about: null,
        video: null,
        color1: null,
        color2: null,
      },
    };
  },

  methods: {
    ...mapActions(['changeWildcardActive']),
  },
};
</script>

<style lang="postcss" scoped>
  @import "Layout.css";
</style>
