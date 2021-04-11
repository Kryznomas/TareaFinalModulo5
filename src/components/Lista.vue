<template>
  <div class="lista">
      <b-table
      :items="productos"
      :fields="fields"
      stacked="md"
      show-empty
      medium
    >
    <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
    </template>
    <template #cell(actions)="row">
      <div class="d-flex justify-content-center">
        <!-- -------------Boton Pagado------------ -->
        <b-button
          id="btn-pagado"
          size="sm"
          @click.once="PAY_PRODUCT(row.item)"
          class="px-4 mx-1"
          :disabled="isDisabled(row.item.id)"
          variant="success"
        >
          Pagado
        </b-button>
        <!-- -------------Boton Borrar----------- -->
        <b-button
          id="btn-eliminar"
          size="sm"
          class="px-4 mx-1"
          @click="DELETE_PRODUCT(row.item)"
          variant="danger"
        >
          Eliminar
        </b-button>
      </div>
    </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "Form",
  props: {
    msg: String,
  },
  data() {
    return {
      fields: [
        {
          key: "id",
          label: "N°",
        },
        {
          key: "nombre",
          label: "Descripcion del Producto",
        },
        {
          key: "precio",
          label: "Precio", formatter: (precio) => precio.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
        },
        {
          key: "actions",
          label: "Acciones",
        },
      ],
    };
  },
  computed: {
    ...mapState(["productos"])

  },
  methods: {
    ...mapMutations(["DELETE_PRODUCT", "PAY_PRODUCT"]),

    isDisabled(id){
      return this.productos.filter(producto => producto.id === id)[0].cancelado;
      
    }
  },
}
  
</script>
<style scoped lang="scss">
</style>
