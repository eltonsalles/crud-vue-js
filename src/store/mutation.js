/* eslint no-param-reassign: ["error", { "props": false }] */

export default {
  CHANGE_AUTHENTICATED(state, payload) {
    state.authenticated = payload;
  },
};
