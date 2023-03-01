const url = "https://api.coincap.io/v2";

function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then((res) => res.json())
    .then((res) => res.data);
}

function getAsset(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then((res) => res.json())
    .then((res) => res.data);
}

function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data);
}

/* Este método getMarkets recibe la moneda en cuestión */
function getMarkets(coin) {
  //Este método de coincap nos permite obtener las listas de mercado para una moneda en particular a través de un fetch
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then((res) => res.json())
    .then((res) => res.data);
}

//Este método nos va a devolver un exchange en particula a través de un id, y ese id probablemente venga del endpoint de getMarkets
function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
}
//Exportamos los métodos
export default {
  getMarkets,
  getExchange,
  getAssets,
  getAsset,
  getAssetHistory,
};
