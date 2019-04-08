import CompanyData from '../../../support/model/CompanyData';
import cloneObject from '../../../support/helper/cloneObject';

const companyData = cloneObject(CompanyData.inputs);

export default {
  wildcardActive: 0,
  viaExcelOrManual: 'excel',
  companyData,
  campus: [],
  courses: [],
};
