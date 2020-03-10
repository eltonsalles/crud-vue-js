<template>
  <div class="upload-btn-wrapper" :class="{ 'upload-btn-wrapper--content-file': contentFile }">
    <button type="button" class="btn">
      <i class="icon-left icon-done icon-success"></i>{{ label }}
    </button>
    <input
        type="file"
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        id="file"
        ref="file"
        class="upload-btn-wrapper__input"
        @change="handleFileUpload">
  </div>
</template>

<script>
export default {
  name: 'ButtonUpload',

  props: {
    label: {
      type: String,
      default: 'Upload de Arquivo',
    },
  },

  data() {
    return {
      contentFile: false,
    };
  },

  methods: {
    handleFileUpload() {
      if (this.$refs.file.files[0].type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        this.$emit('input', this.$refs.file.files[0]);
        this.contentFile = true;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
  @import "ButtonUpload.css";
</style>
