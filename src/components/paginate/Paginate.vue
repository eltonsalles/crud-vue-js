<template>
  <vue-js-paginate
      :page-count="pageCount"
      :click-handler="paginateClick"
      :prev-text="'<'"
      :next-text="'>'"
      :container-class="'paginate'"
      :page-class="'paginate__item'"
      :prev-class="'paginate__item'"
      :next-class="'paginate__item'">
  </vue-js-paginate>
</template>

<script>
import vueJsPaginate from 'vuejs-paginate';

export default {
  name: 'Paginate',

  components: {
    vueJsPaginate,
  },

  props: {
    pageCount: {
      type: Number,
      default: 8,
    },
  },

  methods: {
    paginateClick(pageNum) {
      this.$emit('pageNumber', pageNum);
    },
  },
};
</script>

<style lang="postcss">
  @import "./Paginate.css";
</style>
