export default {
  changeAuthenticated(context, payload) {
    context.commit('CHANGE_AUTHENTICATED', payload);
  },
};
