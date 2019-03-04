<template>
  <ul class="wildcard">
    <li class="wildcard__item" :class="setWildcardActive(0)">Dados da empresa</li>
    <li class="wildcard__item" :class="setWildcardActive(1)">Campus</li>
    <li class="wildcard__item" :class="setWildcardActive(2)">Cursos</li>
    <li class="wildcard__item" :class="setWildcardActive(3)">Layout</li>
  </ul>
</template>

<script>
export default {
  name: 'Wildcard',

  props: {
    wildcardActive: {
      type: Number,
      required: true,
    },
  },

  methods: {
    setWildcardActive(value) {
      if (value < this.wildcardActive) {
        return 'wildcard__item--previous';
      }

      if (value === this.wildcardActive) {
        return 'wildcard__item--active';
      }

      return '';
    },
  },
};
</script>

<style lang="postcss" scoped>
  @import "./Wildcard.css";
</style>
