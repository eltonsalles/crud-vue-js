<template>
  <div>
    <header class="list-header">
      <m-breadcrumbs></m-breadcrumbs>
      <section class="list-inputs">
        <div class="input-group">
          <input
              class="input-group__field"
              type="text"
              id="search"
              maxlength="255"
              placeholder="Buscar"
              v-model="search">
          <i class="input-group__icon icon-search"></i>
        </div>
        <router-link
            class="btn btn-new-faculty"
            tag="button"
            :to="{ name: 'company-data' }">
          Nova Faculdade
        </router-link>
      </section>
    </header>
    <ul class="list">
      <li class="list__item" v-for="n in 12" :key="n">
        <ul class="list-actions">
          <li class="list-actions__item">
            <button class="btn btn--small btn--edit">
              <i class="icon-edit"></i>
            </button>
          </li>
          <li class="list-actions__item">
            <button class="btn btn--small btn--delete">
              <i class="icon-delete"></i>
            </button>
          </li>
          <li class="list-actions__item">
            <m-toggle class="btn--status" :id="`status-${n}`"></m-toggle>
          </li>
        </ul>
        <figure class="figure">
          <img class="figure__img" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Logo_fmu.jpg" alt="Logo da FMU">
        </figure>
      </li>
    </ul>
    <m-paginate></m-paginate>
  </div>
</template>

<script>
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs.vue';
import Paginate from '../../../components/paginate/Paginate.vue';
import Toggle from '../../../components/toggle/Toggle.vue';

export default {
  name: 'List',

  components: {
    'm-breadcrumbs': Breadcrumbs,
    'm-paginate': Paginate,
    'm-toggle': Toggle,
  },

  data() {
    return {
      search: null,
    };
  },
};
</script>

<style lang="postcss" scoped>
  @import "./List.css";
</style>
