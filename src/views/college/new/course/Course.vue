<template>
  <div>
    <m-via-excel v-if="viaExcelVisible === 'excel'"></m-via-excel>
    <m-manual v-if="viaExcelVisible === 'manual'"></m-manual>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ViaExcel from './via-excel/via-excel.vue';
import Manual from './manual/Manual.vue';

export default {
  name: 'Course',

  components: {
    'm-via-excel': ViaExcel,
    'm-manual': Manual,
  },

  computed: {
    ...mapState({
      viaExcelVisible: state => state.college.viaExcelOrManual,
    }),
  },
};
</script>
