import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue } from "bootstrap-vue";
import store from "@/store/index.js";
import Lista from "@/components/Lista";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(BootstrapVue);

describe("Componente Lista", () => {
  beforeEach(() => {
    store.state.productos.push({
      nombre: "Banana",
      precio: 2000,
      cancelado: false,
    });
  });

  it("Verifica que se cree una fila de la lista", () => {
    const wrapper = mount(Lista, {store, localVue});

    expect(wrapper.find(".lista").exists()).toBe(true);
  });

  it("Verifica que al presionar el boton eliminar se elimine el elemento del store", async () => {
    const wrapper = mount(Lista, {store, localVue,});

    await wrapper.find("#btn-eliminar").trigger("click");
    await expect(store.state.productos.length).toBe(0);
  });

  it("Verifica que al presionar el boton pagado se cambie la propiedad cancelado a true en el store", async () => {
    const wrapper = mount(Lista, {store, localVue,});

    await wrapper.find("#btn-pagado").trigger("click");
    await expect(store.state.productos[0].cancelado).toBe(true);
  })
})
