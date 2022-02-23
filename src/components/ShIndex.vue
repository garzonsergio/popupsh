<template>
  <div>
    <p :class="setIndexByClass(indexDB)">{{ indexDB }}</p>
    <h2>{{ indexName }}</h2>
  </div>
</template>
<script>
export default {
  name: "ShIndex",
  methods: {
    setIndexByClass(indexDB) {
      const indexNumber = Number(indexDB);
      if (indexNumber < this.indexBottomLimit) {
        return "indexBlue";
      } else if (indexNumber > this.indexTopLimit) {
        return "indexGreen";
      } else {
        return "indexYellow";
      }
    },
  },
  props: {
    indexDB: {
      type: Number,
    },
    indexName: {
      type: String,
      default: "index name",
    },
    indexTopLimit: {
      type: Number,
      default: 100,
    },
    indexBottomLimit: {
      type: Number,
      default: 60,
    },
  },
};
</script>
<style scoped>
div {
  align-items: center;
  display: flex;
  flex-direction: column;
}
p {
  align-items: center;
  border: 2px solid lightgray;
  display: flex;
  font-size: 60px;
  font-weight: 800;
  height: 190px;
  justify-content: center;
  width: 190px;
  border-radius: 10px;
  margin: 0;
}

h2 {
  font-size: 14px;
  text-transform: capitalize;
}

.indexGreen {
  color: #17b56e;
}
.indexYellow {
  color: #f9ab37;
}
.indexBlue {
  color: #29abe2;
}
</style>
