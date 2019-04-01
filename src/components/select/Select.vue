<template>
  <div class="select-group">
    <v-select
        class="select-group__field"
        :class="{ 'select-group__field--selected': selected }"
        v-model="selected"
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
        :class="{ 'select-group__label--active': selected }">{{ label }}</label>
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
  },

  data() {
    return {
      selected: null,
    };
  },

  methods: {
    updatedValue() {
      if (this.selected) {
        this.$emit('input', this.selected.id);
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
