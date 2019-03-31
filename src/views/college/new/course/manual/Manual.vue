<template>
  <section class="page-content">
    <section class="page-content__left-part">
      <h2 class="page-content__title">Dados do Curso</h2>
      <div class="form-group">
        <div class="input-group input-group--size-1">
          <input
              class="input-group__field"
              type="text"
              id="level"
              maxlength="255"
              :class="{ 'input-group__field--active': course.level}"
              v-model="course.level">
          <label class="input-group__label" for="level">Nível de ensino</label>
        </div>
        <div class="input-group input-group--size-1">
          <input
              class="input-group__field"
              type="text"
              id="name"
              maxlength="255"
              :class="{ 'input-group__field--active': course.name }"
              v-model="course.name">
          <label class="input-group__label" for="name">Nome do curso</label>
        </div>
      </div>
      <h2 class="page-content__title page-content__title--add-course">Adicionar curso ao campus</h2>
      <div class="form-group">
        <div class="input-group input-group--size-1">
          <input
              class="input-group__field"
              type="text"
              id="campus"
              maxlength="255"
              :class="{ 'input-group__field--active': course.campus}"
              v-model="course.campus">
          <label class="input-group__label" for="campus">Campus</label>
        </div>
        <div class="input-group input-group--size-1">
          <input
              class="input-group__field"
              type="text"
              id="value"
              maxlength="255"
              :class="{ 'input-group__field--active': course.value }"
              v-model="course.value">
          <label class="input-group__label" for="value">Valor do curso</label>
        </div>
      </div>
      <section>
        <h4 class="page-content__title page-content__title--select-product">Selecionar produto</h4>
        <div class="form-group">
          <m-checkbox label="Sem juros"></m-checkbox>
          <m-checkbox label="Gestão"></m-checkbox>
          <button class="btn btn--add-campus">Adicionar Campus</button>
        </div>
      </section>
      <h2 class="page-content__title page-content__title--campus">Lista de campus</h2>
      <m-list class="list--campus" :list="course.list"></m-list>
      <button class="btn btn--outline btn--rounded-edges btn--add-course">Adicionar Curso</button>
    </section>
    <section class="page-content__right-part">
      <h2 class="page-content__title">Lista de cursos</h2>
      <m-list class="list--course" :list="course.list"></m-list>
      <section class="page-content__actions">
        <router-link
            class="btn btn--come-back"
            :to="{ name: 'course' }"
            @click.native="comeBackViaExcel">
          <i class="icon-left icon-sharp-arrow_forward-24px"></i>Voltar
        </router-link>
        <router-link
            class="btn btn--next"
            :to="{ name: 'campus' }"
            @click.native="changeWildcardActive(4)">
          Próximo<i class="icon-right icon-sharp-arrow_forward-24px"></i>
        </router-link>
      </section>
    </section>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import Checkbox from '../../../../../components/checkbox/Checkbox.vue';
import List from '../../../../../components/list/List.vue';

export default {
  name: 'Manual',

  components: {
    'm-checkbox': Checkbox,
    'm-list': List,
  },

  data() {
    return {
      course: {
        level: null,
        name: null,
        campus: null,
        value: null,
        list: [
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
          { campusName: 'Campinas - Campus III', responsible: 'Lucas Amaro dos Santos', telephone: '11 5555-5555' },
        ],
      },
    };
  },

  methods: {
    ...mapActions(['changeWildcardActive', 'changeViaExcelOrManual']),

    comeBackViaExcel() {
      this.changeWildcardActive(2);
      this.changeViaExcelOrManual('excel');
    },
  },
};
</script>

<style lang="postcss" scoped>
  @import "./Manual.css";
</style>
