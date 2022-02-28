<template>
  <div class="popup">
    <h1>dashboard lead</h1>
    <div class="indices-container">
      <sh-index indexDB="148" indexName="leads mensuales" />
      <sh-index indexDB="22" indexName="leads diarios" />
      <sh-index indexDB="2" indexName="tiempo de respuesta" />
      <sh-index indexDB="63" indexName="gestión de los leads" />
      <sh-index indexDB="5" indexName="automatizaciones" />
    </div>
    <div class="chart-container">
      <sh-plot chartTitle="leads mensuales" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import ShIndex from "@/components/ShIndex";
import ShPlot from "@/components/ShPlot";

export default {
  name: "ShPopUp",
  components: {
    ShIndex,
    ShPlot,
  },
};
</script>
<style scoped>
h1 {
  text-transform: capitalize;
  text-align: start;
}
.popup {
  width: 95vw;
  margin: 0 auto;
}
.indices-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 10px;
}
.chart-container {
  width: 80%;
  margin: 0 auto;
}
</style>
