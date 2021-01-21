// global import
import "../toggleSidebar.js";
import "../cart/toggleCart.js";

import { getElement, singleProductUrl } from "../utils.js";

// selections
// const loading = getElement(".page-loading");
const centerDOM = getElement(".single-product-center");
const pageTitleDOM = getElement(".page-hero-title");
const imgDOM = getElement(".single-product-img");
const titleDOM = getElement(".single-product-title");
const companyDOM = getElement(".single-product-company");
const priceDOM = getElement(".single-product-price");
const colorsDOM = getElement(".single-product-colors");
const descDOM = getElement(".single-product-desc");
const cartBtn = getElement(".addToCartBtn");

window.addEventListener("DOMContentLoaded", async function () {
  const urlID = window.location.search;
  try {
    const response = await fetch(`${singleProductUrl}${urlID}`);
    if (response.status >= 200 && response.status <= 299) {
      const product = await response.json();
      console.log(product);
    } else {
      console.log(response.status, response.statusText);
      centerDOM.innerHTML = `<div>
      <h3 class="error">sorry, something went wrong</h3>
      <a class="btn" href="index.html">back home</a>
      </div>`;
    }
  } catch (error) {
    console.log(error);
  }
});
