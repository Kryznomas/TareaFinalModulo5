import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [],
    porPagar: 0,
    pagado: 0,
    total : 0,
    idbase: 1,
    index: "0",
  },
  mutations: {
    ADD_PRODUCT(state, producto) {
      state.productos.push({ ...producto, id: state.idbase++ });
      state.porPagar += producto.precio;
      state.porPagar += state.pagado
      state.total = state.porPagar + state.pagado
    },

    DELETE_PRODUCT(state, producto) {
      let productoEliminado;
      [productoEliminado] = state.productos.filter((item) => item.id === producto.id);
      if (productoEliminado.cancelado == true){
        state.pagado -= producto.precio
      }
      else {
        state.porPagar -= producto.precio
      }
      state.total = state.porPagar + state.pagado;
      state.productos = state.productos.filter(
        (item) => item.id !== producto.id
      );
      
    },

    PAY_PRODUCT(state, producto) {
      let index = state.productos.findIndex((indice) => indice.id === producto.id);
      state.productos[index].cancelado = true;
      state.pagado += producto.precio
      state.porPagar -= producto.precio
      state.total = state.porPagar + state.pagado;
    },
  },
  actions: {},
  modules: {},
});
