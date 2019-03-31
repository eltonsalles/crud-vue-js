/* eslint no-param-reassign: ["error", { "props": false }] */

export default {
  CHANGE_WILDCARD_ACTIVE(state, payload) {
    state.wildcardActive = payload;
  },
  CHANGE_VIA_EXCEL_OR_MANUAL(state, payload) {
    state.viaExcelOrManual = payload;
  },
};
