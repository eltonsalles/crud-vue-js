<template>
  <div>
    <m-breadcrumbs></m-breadcrumbs>
    <div class="home">
      <m-wildcard :wildcard-active="wildcardActive"></m-wildcard>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs.vue';
import Wildcard from '../../components/wildcard/Wildcard.vue';

export default {
  name: 'Home',

  components: {
    'm-breadcrumbs': Breadcrumbs,
    'm-wildcard': Wildcard,
  },

  computed: {
    ...mapState({
      wildcardActive: state => state.home.wildcardActive,
    }),
  },
};
</script>

<style lang="postcss" scoped>
  @import "Home.css";
</style>
