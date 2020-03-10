import CompanyData from '../../../support/model/CompanyData';
import Layout from '../../../support/model/Layout';
import cloneObject from '../../../support/helper/cloneObject';

const companyData = cloneObject(CompanyData.inputs);
const layout = cloneObject(Layout.inputs);

export default {
  wildcardActive: 0,
  viaExcelOrManual: 'excel',
  companyData,
  campus: [],
  courses: [],
  layout,
};
