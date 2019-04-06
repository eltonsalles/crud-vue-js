import { required, maxLength } from 'vuelidate/lib/validators';
import address from './Address';

export default {
  inputs: {
    fantasyName: null,
    socialName: null,
    cnpj: null,
    stateRegistration: null,
    municipalRegistration: null,
    financialOfficer: null,
    address: address.inputs,
    products: [],
  },
  validations: {
    fantasyName: {
      required,
      maxLength: maxLength(255),
    },
    socialName: {
      required,
      maxLength: maxLength(255),
    },
    cnpj: {
      required,
      maxLength: maxLength(18),
    },
    stateRegistration: {
      required,
      maxLength: maxLength(255),
    },
    municipalRegistration: {
      required,
      maxLength: maxLength(255),
    },
    financialOfficer: {
      required,
    },
    address: address.validations,
    products: {
      required,
    },
  },
};
