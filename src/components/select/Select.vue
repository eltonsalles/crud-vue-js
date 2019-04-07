<template>
  <div class="select-group">
    <v-select
        class="select-group__field"
        :class="{ 'select-group__field--selected': valueSelect }"
        v-model="valueSelect"
        :options="options"
        :disabled="disabled"
        @input="updatedValue"
        @change="updatedValue">
      <span slot="no-options">
        Nenhum registro encontrado.
      </span>
    </v-select>
    <label
        class="select-group__label"
        :class="{ 'select-group__label--active': valueSelect }">{{ label }}</label>
  </div>
</template>

<script>
import vSelect from 'vue-select';

export default {
  name: 'Select',

  components: {
    vSelect,
  },

  props: {
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    selected: {
      type: Object,
      required: false,
      default: null,
      validator: val => Object.prototype.hasOwnProperty.call(val, 'id') && Object.prototype.hasOwnProperty.call(val, 'label'),
    },
  },

  data() {
    return {
      valueSelect: this.selected,
    };
  },

  methods: {
    updatedValue() {
      if (this.valueSelect) {
        this.$emit('input', this.valueSelect.id);
      } else {
        this.$emit('input', null);
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
  @import "./Select.css";
</style>
