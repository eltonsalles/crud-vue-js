<template>
  <section class="page-content">
    <form class="page-content__left-part" novalidate autocomplete="off">
      <h2 class="page-content__title">Dados do Curso</h2>
      <div class="form-group">
        <m-select
            class="input-group--size-1"
            :class="{ 'select-group--error': $v.course.levelEducation.$error }"
            label="Nível de ensino"
            :options="levelEducation.options"
            :selected="levelEducation.selected"
            @input="selectedLevelEducation"></m-select>
        <div
            class="input-group input-group--size-1"
            :class="{ 'input-group--error': $v.course.courseName.$error }">
          <input
              class="input-group__field"
              type="text"
              id="name"
              maxlength="255"
              :class="{ 'input-group__field--active': course.courseName }"
              v-model="course.courseName">
          <label class="input-group__label" for="name">Nome do curso</label>
        </div>
      </div>
      <h2 class="page-content__title page-content__title--add-course">Adicionar curso ao campus</h2>
      <div class="form-group">
        <m-select
            class="input-group--size-1"
            :class="{ 'select-group--error': $v.course.campusName.$error }"
            label="Campus"
            :options="campus.options"
            :selected="campus.selected"
            @input="selectedCampusName"></m-select>
        <div
            class="input-group input-group--size-1"
            :class="{ 'input-group--error': $v.course.valueCourse.$error }">
          <input
              class="input-group__field"
              type="text"
              id="value"
              maxlength="255"
              v-mask="['R$ ##,##', 'R$ ###,##', 'R$ ####,##', 'R$ #####,##']"
              :class="{ 'input-group__field--active': course.valueCourse }"
              v-model="course.valueCourse">
          <label class="input-group__label" for="value">Valor do curso</label>
        </div>
      </div>
      <section>
        <h4 class="page-content__title page-content__title--select-product">Selecionar produto</h4>
        <div class="form-group">
          <m-checkbox
              :class="{ 'checkbox-group--error': $v.course.products.$error }"
              v-for="(product, index) in checkboxProducts"
              :key="index"
              :label="product.label"
              :checkbox-checked="product.checkboxChecked"
              @input="checkedProduct($event, index)"></m-checkbox>
          <button
              class="btn btn--add-campus"
              @click.prevent="addCampus">Adicionar Campus</button>
        </div>
      </section>
      <h2 class="page-content__title page-content__title--campus">Lista de campus</h2>
      <m-list
          class="list--campus"
          :list="listCampus.data"></m-list>
      <button
          class="btn btn--outline btn--rounded-edges btn--add-course"
          @click.prevent="addCourse">Adicionar Curso</button>
    </form>
    <section class="page-content__right-part">
      <h2 class="page-content__title">Lista de cursos</h2>
      <m-list
          class="list--course"
          :list-title="listCourse.title"
          :list="listCourse.data"></m-list>
      <section class="page-content__actions">
        <router-link
            tag="button"
            class="btn btn--come-back"
            :to="{ name: 'course' }"
            @click.native="comeBackViaExcel">
          <i class="icon-left icon-arrow-left"></i>Voltar
        </router-link>
        <button
            class="btn btn--next"
            @click.prevent="nextForm">
          Próximo<i class="icon-right icon-arrow-right"></i>
        </button>
      </section>
    </section>
    <m-toasts class="toasts--danger" :is-show="isShowToasts" @closeToasts="showToasts = false">
      <p>{{ message }}</p>
    </m-toasts>
  </section>
</template>

<script>
/* eslint-disable no-param-reassign */
import { mapActions } from 'vuex';
import cloneObject from '../../../../../support/helper/cloneObject';

import Checkbox from '../../../../../components/checkbox/Checkbox.vue';
import List from '../../../../../components/list/List.vue';
import Select from '../../../../../components/select/Select.vue';
import Toasts from '../../../../../components/toasts/Toasts.vue';

import course from '../../../../../support/model/Course';

export default {
  name: 'Manual',

  components: {
    'm-checkbox': Checkbox,
    'm-list': List,
    'm-select': Select,
    'm-toasts': Toasts,
  },

  computed: {
    isShowToasts() {
      return this.showToasts;
    },
  },

  data() {
    return {
      course: course.inputs,
      listAddCampus: [],
      listAddCourse: [],
      showToasts: false,
      levelEducation: {
        selected: null,
        options: [
          { id: 1, label: 'a' },
          { id: 2, label: 'b' },
          { id: 3, label: 'c' },
        ],
      },
      campus: {
        selected: null,
        options: [],
      },
      checkboxProducts: [],
      listCampus: {
        data: [],
      },
      listCourse: {
        title: ['Tipo', 'Nome do curso', 'Produto'],
        data: [],
      },
      message: '',
    };
  },

  validations: {
    course: course.validations,
  },

  methods: {
    ...mapActions(['changeWildcardActive', 'changeViaExcelOrManual', 'changeCourses']),

    selectedLevelEducation(select) {
      this.course.levelEducation = select;
      this.levelEducation.selected = this.levelEducation.options
        .find(option => option.id === select);
    },

    selectedCampusName(select) {
      this.course.campusName = select;
      this.campus.selected = this.campus.options.find(option => option.id === select);
    },

    checkedProduct(checkbox, index) {
      const indexExistingItem = this.course.products
        .findIndex(elem => elem.toLowerCase() === checkbox.value.toLowerCase());

      if (indexExistingItem === -1) {
        this.course.products.push(checkbox.value);
        this.checkboxProducts[index].checkboxChecked = true;
      } else {
        this.course.products.splice(indexExistingItem, 1);
        this.checkboxProducts[index].checkboxChecked = false;
      }
    },

    addCampus() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.showToasts = true;
        this.message = 'Existem campos pendentes e/ou não preenchidos.';
      } else {
        this.listCampus.data.push({
          campusName: this.campus.options.find(item => item.id === this.course.campusName).label,
          responsible: this.course.valueCourse,
          telephone: this.course.products.join(' '),
        });
        this.listAddCampus.push(cloneObject(this.course));
        this.clearCourse();
      }
    },

    clearCourse() {
      this.$v.$reset();
      this.course.campusName = null;
      this.course.valueCourse = null;
      this.course.products = [];

      this.campus.selected = null;
      this.checkboxProducts.forEach((item) => {
        item.checkboxChecked = false;
      });
    },

    addCourse() {
      if (this.listAddCampus.length === 0) {
        this.showToasts = true;
        this.message = 'É necessário adicionar quais campus e cursos farão parte do cadastro.';
      } else {
        this.listAddCampus.forEach((item) => {
          this.listCourse.data.push({
            campusName: this.levelEducation.options
              .find(level => level.id === item.levelEducation).label,
            responsible: item.courseName,
            telephone: item.products.join(' '),
          });

          this.listAddCourse.push(cloneObject(item));
          this.clearCampus();
        });
      }
    },

    clearCampus() {
      this.$v.$reset();
      this.course.levelEducation = null;
      this.course.courseName = null;
      this.course.campusName = null;
      this.course.valueCourse = null;
      this.course.products = [];

      this.levelEducation.selected = null;
      this.campus.selected = null;
      this.checkboxProducts.forEach((item) => {
        item.checkboxChecked = false;
      });
      this.listCampus.data = [];
      this.listAddCampus = [];
    },

    comeBackViaExcel() {
      this.changeWildcardActive(2);
      this.changeViaExcelOrManual('excel');
    },

    nextForm() {
      if (this.listAddCourse.length === 0) {
        this.showToasts = true;
        this.message = 'Não é possível avançar sem adicionar um curso.';
      } else {
        this.changeCourses(this.listAddCourse);
        this.changeWildcardActive(3);
        this.$router.push({ name: 'layout' });
      }
    },

    loadCampusAndProducts() {
      const campusState = this.$store.state.college.campus;
      if (campusState.length > 0) {
        campusState.forEach((item, index) => {
          this.campus.options.push({
            id: index, // TODO: Talvez precise mudar de index para o id de fato
            label: item.campusName,
          });
        });
      }

      const companyDataState = this.$store.state.college.companyData;
      if (companyDataState.products.length > 0) {
        companyDataState.products.forEach((product) => {
          this.checkboxProducts.push({
            checkboxChecked: false,
            label: product,
          });
        });
      }
    },

    checkCourseState() {
      const courseState = this.$store.state.college.courses;
      if (courseState.length > 0) {
        this.$v.$reset();
        courseState.forEach((item) => {
          this.listAddCourse.push(cloneObject(item));

          this.listCourse.data.push({
            campusName: this.levelEducation.options
              .find(level => level.id === item.levelEducation).label,
            responsible: item.courseName,
            telephone: item.products.join(' '),
          });
        });
      }
    },
  },

  created() {
    this.loadCampusAndProducts();
    this.checkCourseState();
  },
};
</script>

<style lang="postcss" scoped>
  @import "./Manual.css";
</style>
