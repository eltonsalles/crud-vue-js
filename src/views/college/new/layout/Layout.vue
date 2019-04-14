<template>
  <div>
    <form class="page-content" novalidate autocomplete="off">
      <section class="page-content__left-part">
        <h4 class="page-content__title">Dados do Layout</h4>
        <div
            class="input-group"
            :class="{ 'input-group--error': $v.layout.bannerTitle.$error }">
          <input
              class="input-group__field"
              type="text"
              id="title-banner"
              maxlength="255"
              :class="{ 'input-group__field--active': layout.bannerTitle }"
              v-model="layout.bannerTitle">
          <label class="input-group__label" for="title-banner">Título do banner</label>
        </div>
        <div
            class="textarea-group"
            :class="{ 'textarea-group--error': $v.layout.aboutCompany.$error }">
        <textarea
            class="textarea-group__field"
            id="about"
            rows="6"
            cols="30"
            maxlength="2000"
            :class="{ 'textarea-group__field--active': layout.aboutCompany }"
            v-model="layout.aboutCompany"></textarea>
          <label class="textarea-group__label" for="about">Sobre a empresa</label>
        </div>
        <div
            class="input-group"
            :class="{ 'input-group--error': $v.layout.linkVideo.$error }">
          <input
              class="input-group__field"
              type="url"
              id="link-video"
              maxlength="255"
              :class="{ 'input-group__field--active': layout.linkVideo }"
              v-model="layout.linkVideo">
          <label class="input-group__label" for="link-video">Link do vídeo</label>
        </div>
        <div class="form-group">
          <div
              class="input-group input-group--size-1"
              :class="{ 'input-group--error': $v.layout.primaryColor.$error }">
            <input
                disabled
                class="input-group__field"
                type="text"
                id="color-1"
                maxlength="7"
                :class="{ 'input-group__field--active': layout.primaryColor }"
                v-model="layout.primaryColor">
            <label class="input-group__label" for="color-1">Cor primária da marca</label>
            <label>
              <input
                  type="color"
                  class="input-color"
                  v-model="layout.primaryColor">
            </label>
          </div>
          <div
              class="input-group input-group--size-1"
              :class="{ 'input-group--error': $v.layout.secondaryColor.$error }">
            <input
                disabled
                class="input-group__field"
                type="text"
                id="color-2"
                maxlength="7"
                :class="{ 'input-group__field--active': layout.secondaryColor }"
                v-model="layout.secondaryColor">
            <label class="input-group__label" for="color-2">Cor secundária da marca</label>
            <label>
              <input
                  type="color"
                  class="input-color"
                  v-model="layout.secondaryColor">
            </label>
          </div>
        </div>
      </section>
      <section class="page-content__right-part">
        <h5 class="page-content__title page-content__title--logo">Logo da empresa</h5>
        <m-input-file
            :class="{ 'input-file--error': $v.layout.companyLogo.$error }"
            v-model="layout.companyLogo"></m-input-file>
        <h5 class="page-content__title page-content__title--logo">Imagem destacada</h5>
        <m-input-file
            :class="{ 'input-file--error': $v.layout.featuredImage.$error }"
            v-model="layout.featuredImage"></m-input-file>
        <section class="page-content__actions">
          <router-link
              tag="button"
              class="btn btn--come-back"
              :to="{ name: 'course' }"
              @click.native="changeWildcardActive(2)">
            <i class="icon-left icon-arrow-left"></i>Voltar
          </router-link>
          <button
              class="btn btn--next"
              @click.prevent="saveRecord">
            Finalizar<i class="icon-right icon-arrow-right"></i>
          </button>
        </section>
      </section>
    </form>
    <m-toasts class="toasts--danger" :is-show="isShowToasts" @closeToasts="showToasts = false">
      <p>Existem campos pendentes e/ou não preenchidos.</p>
    </m-toasts>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import cloneObject from '../../../../support/helper/cloneObject';

import InputFile from '../../../../components/input-file/InputFile.vue';
import Toasts from '../../../../components/toasts/Toasts.vue';

import Layout from '../../../../support/model/Layout';

const layout = cloneObject(Layout.inputs);

export default {
  name: 'Layout',

  components: {
    'm-input-file': InputFile,
    'm-toasts': Toasts,
  },

  computed: {
    isShowToasts() {
      return this.showToasts;
    },
  },

  data() {
    return {
      layout,
      showToasts: false,
      files: {
        companyLogo: [],
        featuredImage: [],
      },
    };
  },

  validations: {
    layout: Layout.validations,
  },

  methods: {
    ...mapActions(['changeWildcardActive', 'resetState']),

    saveRecord() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.showToasts = true;
      } else {
        this.$v.$reset();
        this.layout = cloneObject(Layout.inputs);
        this.resetState();

        this.$swal({
          title: 'Nova Faculdades',
          text: 'Deseja cadastrar uma nova faculdade?',
          type: 'question',
          showCancelButton: true,
          confirmButtonColor: '#9C79B9',
          cancelButtonColor: '#CE2E2E',
          confirmButtonText: 'Sim',
          cancelButtonText: 'Não',
        }).then((result) => {
          this.changeWildcardActive(0);
          if (result.value) {
            this.$router.push({ name: 'company-data' });
          } else {
            this.$router.push({ name: 'lista-faculdades' });
          }
        });
      }
    },

    checkLayoutObject() {
      this.$v.$reset();
      this.layout = cloneObject(Layout.inputs);
    },
  },

  created() {
    this.checkLayoutObject();
  },
};
</script>

<style lang="postcss" scoped>
  @import "Layout.css";
</style>
