import { required, maxLength, url } from 'vuelidate/lib/validators';

export default {
  inputs: {
    bannerTitle: null,
    aboutCompany: null,
    linkVideo: null,
    primaryColor: null,
    secondaryColor: null,
    companyLogo: [],
    featuredImage: [],
  },
  validations: {
    bannerTitle: {
      required,
      maxLength: maxLength(255),
    },
    aboutCompany: {
      required,
      maxLength: maxLength(255),
    },
    linkVideo: {
      required,
      url,
      maxLength: maxLength(255),
    },
    primaryColor: {
      required,
      maxLength: maxLength(255),
    },
    secondaryColor: {
      required,
      maxLength: maxLength(255),
    },
    companyLogo: {
      required,
    },
    featuredImage: {
      required,
    },
  },
};
