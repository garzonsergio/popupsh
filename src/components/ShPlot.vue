<template>
  <div>
    <div class="chart-header">
      <h3>texto</h3>
      <button @click="switchData()">{{ this.buttonName }}</button>
    </div>
    <div class="chart-container">
      <line-chart :curve="false" :data="switchChart()"></line-chart>
    </div>
  </div>
</template>
<script>
import api from "@/api.js";

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
      buttonName: "acumulado",
      assets: {},
    };
  },
  created() {
    api.getAssets().then((assets) => (this.assets = assets));
  },

  methods: {
    getValues() {
      var limit = 100;
      const assetsVArray = [];
      const assetKArray = [];
      const valuesAssets = {};
      for (let i = 0; i < limit; i++) {
        assetsVArray[i] = this.assets[i].priceUsd;
        assetKArray[i] = this.assets[i].date;
      }

      assetKArray.forEach((key, i) => (valuesAssets[key] = assetsVArray[i]));

      return valuesAssets;
    },

    getAccumulatedValues() {
      var limit = 100;
      const assetsVArray = [];
      const assetKArray = [];
      const valAsset = [];
      var valuesAssets = {};
      for (let i = 0; i < limit; i++) {
        assetsVArray[i] = parseFloat(this.assets[i].priceUsd);
        assetKArray[i] = this.assets[i].date;
      }

      for (let i = 0; i < limit; i++) {
        valAsset[i] = assetsVArray[i] + (valAsset[i - 1] ? valAsset[i - 1] : 0);
      }
      assetKArray.forEach((key, i) => (valuesAssets[key] = valAsset[i]));
      console.log(valuesAssets);
      return valuesAssets;
    },

    switchChart() {
      if (this.buttonStatus === true) {
        return this.getValues();
      } else {
        return this.getAccumulatedValues();
      }
    },

    switchData() {
      if (this.buttonStatus) {
        this.buttonStatus = false;
        this.buttonName = "mes a mes";
      } else {
        this.buttonStatus = true;
        this.buttonName = "acumulado";
      }
    },
  },
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
  text-transform: capitalize;
}
button:hover {
  opacity: 85%;
}
button:active {
  opacity: 70%;
}
</style>
