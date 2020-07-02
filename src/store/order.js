export default {
  namespaced: true,
  state: {
    order: []
  },
  getters: {
    orderChange(state) {
      return state.order;
    }
  },
  mutations: {
    addBuyCartShop(state, { orderShops }) {
      state.order.push(orderShops);
    },
    addBuyShop(state, { orderShops }) {
      if (orderShops instanceof Array) {
        state.order = orderShops;
      } else {
        state.order = [];
        state.order.push(orderShops);
      }
    },
    deleteBuyShop(state) {
      state.order = [];
    }
  }
};
