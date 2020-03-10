import { required, maxLength } from 'vuelidate/lib/validators';

export default {
  inputs: {
    levelEducation: null,
    courseName: null,
    campusName: null,
    valueCourse: null,
    products: [],
  },
  validations: {
    levelEducation: {
      required,
    },
    courseName: {
      required,
      maxLength: maxLength(255),
    },
    campusName: {
      required,
    },
    valueCourse: {
      required,
      maxLength: maxLength(255),
    },
    products: {
      required,
    },
  },
};
