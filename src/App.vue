<template>
  <div id="app">
    <b-jumbotron header="VueJs">
    <p>Trabajo Evaluacion Final Módulo 5</p>
    </b-jumbotron>
    <Form></Form>
    <Lista></Lista>
    <Calc></Calc>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from "@/components/Form.vue";
import Lista from "@/components/Lista.vue";
import Calc from "@/components/Calc.vue";
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    Form,
    Lista,
    Calc
  },
  computed: {
    ...mapState(["productos", "totalPagado", "totalPorPagar", "total"])
  },
  methods: {
    ...mapMutations(["ADD_PRODUCT", "DELETE_PRODUCT", "PAY_PRODUCT"]),
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
