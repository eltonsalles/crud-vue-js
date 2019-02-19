<template>
  <div>
    <m-breadcrumbs></m-breadcrumbs>
    <div class="home">
      <m-wildcard></m-wildcard>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs.vue';
import Wildcard from '../../components/wildcard/Wildcard.vue';

export default {
  name: 'Home',

  components: {
    'm-breadcrumbs': Breadcrumbs,
    'm-wildcard': Wildcard,
  },
};
</script>

<style lang="postcss" scoped>
  @import "Home.css";
</style>
