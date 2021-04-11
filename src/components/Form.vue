<template>
  <div class="form">
    <b-form 
      inline 
      class="mb-3 d-flex justify-content-center">
      <b-form-input
        id="input-nombre"
        v-model="producto.nombre"
        class="col-md-5 mb-2 mr-sm-2 mb-sm-0"
        placeholder="Descripcion del producto"
      ></b-form-input>
        <b-form-input
          id="input-precio"
          v-model.number="producto.precio"
          class="col-md-3 mb-2 mr-sm-2 mb-sm-0"
          placeholder="Monto"
          type="number"
        ></b-form-input>
      <b-button 
      id="btn-agregar"
      @click.prevent="agregarProducto(producto)" 
      variant="success">
      Agregar
      </b-button>
    </b-form>
    <transition name="fade">
      <b-row v-if="error">
        <b-col cols="12">
          <span
            class="mb-3 d-block p-2 error text-danger"
            >{{ error }}</span
          >
        </b-col>
      </b-row>
    </transition>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Form",
  props: {
    msg: String,
  },
  data() {
    return {
      producto: {
        id: "",
        nombre: "",
        precio: null,
        cancelado: false,
      },
      error: "",
  }},
  methods: {
    ...mapMutations(["ADD_PRODUCT"]),
  
    agregarProducto(el) {
      if (el.nombre && el.precio) {
      this.ADD_PRODUCT(this.producto);
      this.error = "";
      } else {
        this.error = "Por favor complete todos los campos.";
    }
      el.nombre = "";
      el.precio = null
    },
  },
};
</script>
<style scoped lang="scss">
.form {
  width: 100vw;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
