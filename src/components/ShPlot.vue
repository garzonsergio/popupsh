<template>
  <div>
    <div class="chart-header">
      <h3>{{ chartTitle }}</h3>
      <button @click="switchData()">acumulado</button>
    </div>
    <div class="chart-container">
      <line-chart :curve="false" :data="switchChart()"></line-chart>
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
  data() {
    return {
      leads: {
        "sept.21": 40,
        "oct.21": 180,
        "nov.21": 90,
        "dic.21": 70,
        "ene.22": 195,
        "feb.22": 60,
      },
      buttonStatus: true,
    };
  },

  methods: {
    getAccumulatedValues() {
      var leadValues = Object.values(this.leads);
      var leadKeys = Object.keys(this.leads);
      var accumulatedLeads = {};
      const accumulatedValues = new Array(leadValues.length).fill(0);
      for (let i = 0; i < leadValues.length; i++) {
        accumulatedValues[i] =
          leadValues[i] +
          (accumulatedValues[i - 1] ? accumulatedValues[i - 1] : 0);
      }
      leadKeys.forEach(
        (key, i) => (accumulatedLeads[key] = accumulatedValues[i])
      );
      console.log(accumulatedLeads);
      return accumulatedLeads;
    },

    switchChart() {
      if (this.buttonStatus === true) {
        return this.leads;
      } else {
        return this.getAccumulatedValues();
      }
    },

    switchData() {
      if (this.buttonStatus) {
        this.buttonStatus = false;
      } else {
        this.buttonStatus = true;
      }
    },
  },
};

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
