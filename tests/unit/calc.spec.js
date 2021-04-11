import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue } from "bootstrap-vue";
import store from "@/store/index.js";
import Calc from "@/components/Calc.vue";
import Form from "@/components/Form.vue";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(BootstrapVue);

describe("Componente Calc", () => {
  
  it("Verifica que al agregar un producto se refleje en por pagar y en el total", async () => {
    const wrapper1 = mount(Calc,{store, localVue});
    const wrapper2 = mount(Form,{store, localVue});

    wrapper2.find("#input-nombre").setValue("Bananas");
    wrapper2.find("#input-precio").setValue(2000);
    await wrapper2.find("#btn-agregar").trigger("click");
    expect(store.state.productos[0]).toEqual({
      nombre: "Bananas",
      precio: 2000,
      id: 1,
      cancelado: false
    });

    expect(wrapper1.find(".porpagar").text()).toBe("$2,000.00");
    expect(wrapper1.find(".total").text()).toBe("$2,000.00")
    
  });
})