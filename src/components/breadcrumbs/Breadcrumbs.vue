<template>
  <div class="breadcrumbs">
    <h1 class="breadcrumbs__title">{{ title }}</h1>
    <ul class="breadcrumbs__container">
      <li
          class="breadcrumbs__item"
          v-for="(breadcrumb, index) in breadcrumbs"
          :key="index"
          :class="{ linked: !breadcrumb.link }"
          @click="routeTo(index)">
        {{ breadcrumb.name }} {{ breadcrumbs.length -1 !== index ? '|' : '' }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',

  data() {
    return {
      breadcrumbs: [],
      title: '',
    };
  },

  mounted() {
    this.updateList();
  },

  watch: {
    '$route'() {
      this.updateList();
    },
  },

  methods: {
    routeTo(pRouteTo) {
      if (this.breadcrumbs[pRouteTo].link) {
        this.$router.push({ name: this.breadcrumbs[pRouteTo].link });
      }
    },

    updateList() {
      this.breadcrumbs = this.$route.meta.breadcrumbs;
      if (this.$route.meta.breadcrumbs.length > 0) {
        this.title = this.$route.meta.breadcrumbs[this.$route.meta.breadcrumbs.length - 1].title;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
  @import "Breadcrumbs.css";
</style>
