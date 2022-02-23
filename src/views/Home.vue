<template>
  <div class="home">
    <sh-index indexDB="10" indexName="leads mensuales" />
    <sh-plot chartTitle="leads mensuales" />
  </div>
</template>

<script>
// @ is an alias to /src
import ShPlot from "@/components/ShPlot";
import ShIndex from "@/components/ShIndex";

export default {
  name: "Home",
  components: {
    ShPlot,
    ShIndex,
  },
};
</script>
