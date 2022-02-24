const url = "https://api.coincap.io/v2";

function getAssets() {
  return fetch(`${url}/assets/terra-luna/history?interval=d1`)
    .then((res) => res.json())
    .then((res) => res.data);
}

export default {
  getAssets,
};
