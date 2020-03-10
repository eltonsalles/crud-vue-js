import { required, maxLength } from 'vuelidate/lib/validators';

export default {
  inputs: {
    cep: null,
    address: null,
    number: null,
    complement: null,
    district: null,
    city: null,
    state: null,
  },
  validations: {
    cep: {
      required,
      maxLength: maxLength(9),
    },
    address: {
      required,
      maxLength: maxLength(255),
    },
    number: {
      required,
      maxLength: maxLength(255),
    },
    complement: {
      maxLength: maxLength(255),
    },
    district: {
      required,
      maxLength: maxLength(255),
    },
    city: {
      required,
      maxLength: maxLength(255),
    },
    state: {
      required,
      maxLength: maxLength(255),
    },
  },
};
