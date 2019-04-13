<template>
  <section class="page-content">
    <section class="page-content__left-part">
      <h2 class="page-content__title">Cadastrar curso via planilha</h2>
      <div class="course-info-panel">
        <div>
          <p class="course-info-panel__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias culpa
            dolore fugit odio perferendis quod. At atque, deleniti distinctio dolor dolorum eos
            facere molestiae odio, sapiente tempore veniam veritatis?</p>
          <p class="course-info-panel__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias culpa
            dolore fugit odio perferendis quod. At atque, deleniti distinctio dolor dolorum eos
            facere molestiae odio, sapiente tempore veniam veritatis?</p>
        </div>
        <div class="course-info-panel__excel">
          <i class="course-info-panel__icon icon-excel"></i>
          <button class="btn btn--outline btn--rounded-edges btn--excel-guide">
            Baixar Excel guia</button>
        </div>
      </div>
      <button class="btn btn--rounded-edges btn--excel">Upload de Excel</button>
    </section>
    <section class="page-content__right-part">
      <h2 class="page-content__title">Cadastrar cursos manual</h2>
      <div class="course-info-panel">
        <div>
          <p class="course-info-panel__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias culpa
            dolore fugit odio perferendis quod. At atque, deleniti distinctio dolor dolorum eos
            facere molestiae odio, sapiente tempore veniam veritatis?</p>
          <p class="course-info-panel__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias culpa
            dolore fugit odio perferendis quod. At atque, deleniti distinctio dolor dolorum eos
            facere molestiae odio, sapiente tempore veniam veritatis?</p>
        </div>
        <i class="course-info-panel__icon course-info-panel__icon--margin-top icon-planing"></i>
      </div>
      <button
          class="btn btn--rounded-edges btn--manual-registration"
          @click="changeViaExcelOrManual('manual')">Ir para o cadastro manual</button>
      <section class="page-content__actions">
        <router-link
            class="btn btn--come-back"
            :to="{ name: 'campus' }"
            @click.native="changeWildcardActive(1)">
          <i class="icon-left icon-arrow-left"></i>Voltar
        </router-link>
        <router-link
            class="btn btn--come-back btn--disabled"
            :to="{ name: 'course' }"
            @click.native="changeWildcardActive(2)">
          Próximo<i class="icon-right icon-arrow-right"></i>
        </router-link>
      </section>
    </section>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ExcelManual',

  methods: {
    ...mapActions(['changeWildcardActive', 'changeViaExcelOrManual']),
  },
};
</script>

<style lang="postcss" scoped>
  @import "via-excel.css";
</style>
