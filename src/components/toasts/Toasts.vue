<template>
  <transition name="fade">
    <div class="toasts" v-if="isShow">
      <div class="toasts__timer"></div>
      <div class="toasts__content">
        <div>
          <slot></slot>
        </div>
        <button class="btn" @click="$emit('closeToasts')">
          <i class="icon-close"></i>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Toasts',

  props: {
    isShow: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  methods: {
    closeToasts() {
      setTimeout(() => {
        this.$emit('closeToasts');
      }, 5000);
    },
  },

  watch: {
    isShow(val) {
      if (val) {
        this.closeToasts();
      }
    },
  },
};
</script>

<style scoped src="./Toasts.css"></style>
