<template>
  <div>
    <m-breadcrumbs></m-breadcrumbs>
  </div>
</template>

<script>
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs.vue';

export default {
  name: 'Home',

  components: {
    'm-breadcrumbs': Breadcrumbs,
  },
};
</script>

<style lang="postcss" scoped>
  @import "Home.css";
</style>
