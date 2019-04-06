import { required, maxLength } from 'vuelidate/lib/validators';
import Address from './Address';

import cloneObject from '../helper/cloneObject';

const address = cloneObject(Address);

export default {
  inputs: {
    campusName: null,
    responsible: null,
    telephone: null,
    address: address.inputs,
  },
  validations: {
    campusName: {
      required,
      maxLength: maxLength(255),
    },
    responsible: {
      required,
      maxLength: maxLength(255),
    },
    telephone: {
      required,
      maxLength: maxLength(255),
    },
    address: address.validations,
  },
};
