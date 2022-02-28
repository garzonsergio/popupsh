const url = "https://api.coincap.io/v2";

async function getAssets() {
  try {
    const answers = await fetch(`${url}/assets/terra-luna/history?interval=d1`)
      .then((res) => res.json())
      .then((res) => res.data);
    return answers;
  } catch (error) {
    console.log(error);
  }
}

export default {
  getAssets,
};
