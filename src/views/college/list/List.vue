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
          <i class="input-group__icon icon-close"></i>
        </div>
        <router-link
            class="btn btn-new-faculty"
            tag="button"
            :to="{ name: 'company-data' }">
          Nova Faculdade
        </router-link>
        <button class="btn btn-filter">
          <i class="icon-close"></i>
        </button>
      </section>
    </header>
    <m-paginate></m-paginate>
  </div>
</template>

<script>
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs.vue';
import Paginate from '../../../components/paginate/Paginate.vue';

export default {
  name: 'List',

  components: {
    'm-breadcrumbs': Breadcrumbs,
    'm-paginate': Paginate,
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
