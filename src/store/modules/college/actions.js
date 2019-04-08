export default {
  changeWildcardActive(context, payload) {
    context.commit('CHANGE_WILDCARD_ACTIVE', payload);
  },
  changeViaExcelOrManual(context, payload) {
    context.commit('CHANGE_VIA_EXCEL_OR_MANUAL', payload);
  },
  changeCompanyData(context, payload) {
    context.commit('CHANGE_COMPANY_DATA', payload);
  },
  changeCampus(context, payload) {
    context.commit('CHANGE_CAMPUS', payload);
  },
  changeCourses(context, payload) {
    context.commit('CHANGE_COURSES', payload);
  },
  resetState(context) {
    context.commit('CHANGE_RESET');
  },
};
