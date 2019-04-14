/* eslint no-param-reassign: ["error", { "props": false }] */
import CompanyData from '../../../support/model/CompanyData';
import Layout from '../../../support/model/Layout';
import cloneObject from '../../../support/helper/cloneObject';

const companyData = cloneObject(CompanyData.inputs);
const layout = cloneObject(Layout.inputs);

export default {
  CHANGE_WILDCARD_ACTIVE(state, payload) {
    state.wildcardActive = payload;
  },
  CHANGE_VIA_EXCEL_OR_MANUAL(state, payload) {
    state.viaExcelOrManual = payload;
  },
  CHANGE_COMPANY_DATA(state, payload) {
    state.companyData = payload;
  },
  CHANGE_CAMPUS(state, payload) {
    state.campus = payload;
  },
  CHANGE_COURSES(state, payload) {
    state.courses = payload;
  },
  CHANGE_LAYOUT(state, payload) {
    state.layout = payload;
  },
  CHANGE_RESET(state) {
    state.companyData = companyData;
    state.campus = [];
    state.courses = [];
    state.layout = layout;
  },
};
