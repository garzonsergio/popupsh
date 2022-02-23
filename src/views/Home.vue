<template>
  <div class="home">
    <sh-plot chartTitle="leads mensuales" />
  </div>
</template>

<script>
// @ is an alias to /src
import ShPlot from "@/components/ShPlot";

export default {
  name: "Home",
  components: {
    ShPlot,
  },
};
</script>
