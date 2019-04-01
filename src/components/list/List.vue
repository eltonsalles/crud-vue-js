<template>
  <section class="list">
    <div class="list-titles">
      <p class="list-titles__title" v-for="(title, index) in listTitle" :key="index">{{ title }}</p>
    </div>
    <div class="list-content scrollbar">
      <div class="list-items" v-for="(item, index) in list" :key="index">
        <p class="list-items__item">{{ item.campusName }}</p>
        <p class="list-items__item">{{ item.responsible }}</p>
        <p class="list-items__item">{{ item.telephone }}</p>
        <button class="list-items__btn btn btn--floating">
          <i class="list-items__icon icon-close"></i>
        </button>
      </div>
      <p v-if="list.length === 0">
        Nenhum item encontrado!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'List',

  props: {
    listTitle: {
      type: Array,
      required: false,
      default: () => [],
    },
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
 @import "List.css";
</style>
