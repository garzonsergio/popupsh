<template>
  <div>
    <div class="chart-header">
      <h3>{{ chartTitle }}</h3>
      <button>acumulado</button>
    </div>
    <div class="chart-container">
      <line-chart
        :curve="false"
        :data="{
          'sept.21': 40,
          'oct.21': 180,
          'nov.21': 90,
          'dic.21': 70,
          'ene.22': 195,
          'feb.22': 60,
        }"
      ></line-chart>
    </div>
  </div>
</template>
<script>
// import api from "@/api.js";

export default {
  name: "ShPlot",
  props: {
    chartTitle: {
      type: String,
      default: "Chart Title",
    },
    chartWidth: {
      type: Number,
    },
    chartHeight: {
      type: Number,
    },
  },

  // data() {
  //   return {
  //     isLoading: false,
  //     assets: [],
  //   };
  // },
  // created() {
  //   this.isLoading = true;
  //   api
  //     .getAssets()
  //     .then((assets) => (this.assets = assets))
  //     .finally(() => (this.isLoading = false));
  // },
};
</script>
<style scoped>
.chart-header {
  align-items: center;
  background-color: #eaeaea;
  border: 1px solid #e4e4e4;
  display: flex;
  flex-direction: row;
  height: 40px;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 50px 0 50px;
}

h3 {
  text-transform: capitalize;
}

button {
  background-color: #feeda6;
  border-radius: 5px;
  border: 1px solid #f4ddab;
  font-size: 12px;
  margin: 16px 0;
  padding: 4px 32px;
}
button:hover {
  opacity: 85%;
}
button:active {
  opacity: 70%;
}
</style>
