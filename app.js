// global import
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";

import fetchProducts from "./src/fetchProducts.js";
import { setupStore, store } from "./src/store.js";

const init = async () => {
  const products = await fetchProducts().catch((err) => {
    console.log(err);
  });
  setupStore(products);
  console.log(store);
};

window.addEventListener("DOMContentLoaded", init);
