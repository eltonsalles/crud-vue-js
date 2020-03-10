<template>
  <div class="toggle toggle--slide" :class="{ 'toggle--checked': checkbox }">
    <input
        type="checkbox"
        class="toggle__field"
        :id="id"
        :checked="checked"
        v-model="checkbox"
        @change="$emit('input', checkbox)">
    <label :for="id" class="toggle__label">
      <span class="toggle__card" :class="{ 'toggle__card--checked': checkbox }"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Toggle',

  props: {
    id: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      checkbox: this.checked,
    };
  },
};
</script>

<style scoped src="./Toggle.css"></style>
