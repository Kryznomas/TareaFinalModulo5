import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue } from "bootstrap-vue";
import store from "@/store/index.js";
import Form from "@/components/Form";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(BootstrapVue);

describe("Componente Form", () => {
  it("Verifica los valores por defecto del store", () => {
    expect(store.state.productos).toEqual([]);
    expect(store.state.porPagar).toEqual(0);
    expect(store.state.pagado).toEqual(0);
    expect(store.state.total).toEqual(0);
  });

  it("Verifica que los valores ingresados en Form lleguen a store correctamente", () => {
    const wrapper = mount(Form, { store, localVue });

    wrapper.find("#input-nombre").setValue("Bananas");
    wrapper.find("#input-precio").setValue(2000);
    wrapper.find("#btn-agregar").trigger("click");
    expect(store.state.productos[0]).toEqual({
      nombre: "Bananas",
      precio: 2000,
      id: 1,
      cancelado: false
    });
  });
});