<template>
  <div class="calc">
    <b-row class="mt-3 pt-3 border-top border-secondary text-danger">
      <b-col class="text-right" cols="7">Por pagar</b-col>
      <b-col class="porpagar" cols="5">{{ formatter(porPagar) }}</b-col>
    </b-row>
    <b-row class="mt-3 pt-3 border-top border-secondary text-success">
      <b-col class="text-right" cols="7">Pagado</b-col>
      <b-col class="pagado" cols="5">{{ formatter(pagado) }}</b-col>
    </b-row>
    <b-row class="mt-3 pt-3 border-top border-secondary text-primary">
      <b-col class="text-right" cols="7">Total</b-col>
      <b-col class="total" cols="5">{{ formatter(total) }}</b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Lista",
  props: {
    msg: String,
  },
  computed: {
    ...mapState(["pagado", "porPagar", "total"])
  },
  methods: {
    formatter(value) {
      return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.calc{
  margin-top: 2rem;
}
</style>
