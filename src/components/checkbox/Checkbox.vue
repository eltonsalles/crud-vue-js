<template>
  <div class="checkbox-group">
    <enhanced-check
        :subClass="classCheckboxGroupItem"
        :label="label"
        :rounded="true"
        @input="updatedValue"></enhanced-check>
  </div>
</template>

<script>
import { EnhancedCheck } from 'vue-enhanced-check';

export default {
  name: 'Checkbox',

  components: {
    EnhancedCheck,
  },

  props: {
    label: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      // O componente de terceiros coloca esse texto 'enhancedCheck-' no inicio da classe
      classCheckboxGroupItem: 'checkbox-group__item',
    };
  },

  methods: {
    updatedValue(value) {
      if (value) {
        // Como o texto é colocado apenas na primeira classe foi mantido o estilo nas demais classes
        this.classCheckboxGroupItem = 'checkbox-group__item enhancedCheck-checkbox-group__item--active';
      } else {
        this.classCheckboxGroupItem = 'checkbox-group__item';
      }

      this.$emit('input', { checked: value, value: this.label });
    },
  },
};
</script>

<style lang="sass" scoped>
  @import "Checkbox.css"
</style>
