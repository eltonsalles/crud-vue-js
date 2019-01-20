<template>
  <div id="app" class="container-fluid">
    <header v-if="authenticated" class="header">
      <m-header></m-header>
    </header>
    <aside v-if="authenticated" class="sidebar">
      <m-aside></m-aside>
    </aside>
    <main :class="authenticated ? 'content' : 'content-login'">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from './components/header/Header.vue';
import Aside from './components/aside/Aside.vue';

export default {
  name: 'App',
  components: {
    'm-header': Header,
    'm-aside': Aside,
  },
  computed: {
    authenticated() {
      return this.$store.state.authenticated;
    },
  },
};
</script>

<style lang="postcss">
  .header {
    width: 100%;
  }

  .content-login {
    width: 100%;
  }
</style>
