<template>
  <div class="input-file-wrapper">
    <div
        class="input-file"
        ref="divContainer"
        :class="{
         'input-file--disabled': disabled,
         'input-file--column': direction === 'column',
         'input-file--row': direction === 'row'
        }">
      <i class="input-file__icon icon-money" v-if="direction === 'column'"></i>
      <p class="input-file__label">{{ labelDragAndDrop }}</p>
      <button class="input-file__btn">
        {{ labelButton }}
        <input
            class="input-file__file"
            type="file"
            ref="file"
            :multiple="multiple"
            :accept="accept"
            @change="clickAddFile">
      </button>
    </div>
    <ul class="input-file-list" ref="inputFileList" v-show="listFiles.length > 0">
      <li class="input-file-list__item" v-for="(item, index) in listFiles" :key="index">
        <img class="input-file-list__img" :src="item.src" alt="">
        <div class="input-file-list__text--wrapper">
          <p class="input-file-list__text input-file-list__text--bold">{{ item.name }}</p>
          <p class="input-file-list__text input-file-list__text--opacity">{{ item.size }}</p>
        </div>
        <i class="input-file-list__icon icon-close" @click="removeFile(index)"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'InputFile',

  props: {
    labelDragAndDrop: {
      type: String,
      required: false,
      default: 'Arraste e solte aqui ou ',
    },
    labelButton: {
      type: String,
      required: false,
      default: 'Escolher arquivos',
    },
    accept: {
      type: String,
      required: false,
      default: 'image/jpeg, image/jpg, image/png, image/ttf, application/pdf',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false,
    },
    direction: {
      type: String,
      required: false,
      default: 'column',
      validator: val => (['column', 'row'].indexOf(val) !== -1),
    },
  },

  data() {
    return {
      files: [],
      listFiles: [],
      dragAndDropCapable: false,
    };
  },

  methods: {
    clickAddFile() {
      Object.keys(this.$refs.file.files).forEach(key => this.addFile(this.$refs.file.files[key]));
      this.$refs.file.value = '';
    },

    addFile(file) {
      if (this.accept.indexOf(file.type) !== -1) {
        this.files.push(file);
        this.$emit('input', this.files);

        const ext = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
        let typeFile;

        if (ext === 'png' || ext === 'jpg' || ext === 'jpeg') {
          typeFile = 'image';
        } else {
          typeFile = 'file';
        }

        if (typeof FileReader !== 'undefined') {
          const reader = new FileReader();
          reader.onload = function genElem(e) {
            this.listFiles.push({
              name: file.name,
              size: `${(file.size / 1024).toFixed()} KB`,
              src: typeFile === 'image' ? e.target.result : '/images/anexo-default.png',
            });
          }.bind(this);

          reader.readAsDataURL(file);
        }
      }
    },

    removeFile(index) {
      this.files.splice(index, 1);
      this.listFiles.splice(index, 1);

      if (this.files.length === 0) {
        this.$refs.file.value = '';
      }

      this.$emit('input', this.files);
    },

    determineDragAndDropCapable() {
      const div = document.createElement('div');
      return (('draggable' in div)
        || ('ondragstart' in div && 'ondrop' in div))
        && 'FormData' in window
        && 'FileReader' in window;
    },
  },

  mounted() {
    this.dragAndDropCapable = this.determineDragAndDropCapable();
    if (this.dragAndDropCapable) {
      ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach((evt) => {
        this.$refs.divContainer.addEventListener(evt, (e) => {
          e.preventDefault();
          e.stopPropagation();
        }, false);
      });

      this
        .$refs
        .divContainer
        .addEventListener('drop', e => Object.keys(e.dataTransfer.files).forEach((key) => {
          if (key > 0 && this.multiple === false) {
            return;
          }

          this.addFile(e.dataTransfer.files[key]);
        }));
    }
  },
};
</script>

<style scoped src="./InputFile.css"></style>
