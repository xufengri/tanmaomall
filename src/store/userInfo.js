export default {
  namespaced: true,
  state: {
    userInfo: {
      username: ""
    }
  },
  getters: {
    info(state) {
      return state.userInfo.username;
    }
  },
  mutations: {
    loginUserInfo(state, { username }) {
      state.userInfo.username = username;
    },
    cancellation(state) {
      state.userInfo.username = "";
    }
  }
};
