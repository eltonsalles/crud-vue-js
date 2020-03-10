<template>
  <div class="checkbox-group">
    <enhanced-check
        :subClass="classCheckboxGroupItem"
        :label="label"
        :rounded="true"
        :checked="valueCheckbox"
        :value="valueCheckbox"
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
    checkboxChecked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      // O componente de terceiros coloca esse texto 'enhancedCheck-' no inicio da classe
      classCheckboxGroupItem: this.checkboxChecked ? 'checkbox-group__item enhancedCheck-checkbox-group__item--active' : 'checkbox-group__item',
      valueCheckbox: this.checkboxChecked,
    };
  },

  watch: {
    checkboxChecked(newValue) {
      this.valueCheckbox = newValue;
      this.updateClasse(newValue);
    },
  },

  methods: {
    updatedValue(value) {
      this.updateClasse(value);
      this.$emit('input', { checked: value, value: this.label });
    },

    updateClasse(value) {
      if (value) {
        // Como o texto é colocado apenas na primeira classe foi mantido o estilo nas demais classes
        this.classCheckboxGroupItem = 'checkbox-group__item enhancedCheck-checkbox-group__item--active';
      } else {
        this.classCheckboxGroupItem = 'checkbox-group__item';
      }
    },
  },
};
</script>

<style lang="sass" scoped>
  @import "Checkbox.css"
</style>
