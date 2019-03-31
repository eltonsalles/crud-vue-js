export default {
  changeWildcardActive(context, payload) {
    context.commit('CHANGE_WILDCARD_ACTIVE', payload);
  },
  changeViaExcelOrManual(context, payload) {
    context.commit('CHANGE_VIA_EXCEL_OR_MANUAL', payload);
  },
};
