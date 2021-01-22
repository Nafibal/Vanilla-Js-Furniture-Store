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

let productID;

window.addEventListener("DOMContentLoaded", async function () {
  const urlID = window.location.search;
  // Fetch API
  try {
    const response = await fetch(`${singleProductUrl}${urlID}`);
    if (response.status >= 200 && response.status <= 299) {
      const product = await response.json();
      // Destructure the product
      const {
        id,
        fields: { company, colors, name, price, image, description },
      } = product;
      // Display to the DOM
      pageTitleDOM.textContent = `Product / ${name}`;
      imgDOM.src = image[0].thumbnails.large.url;
      titleDOM.textContent = name;
      companyDOM.textContent = company;
      priceDOM.textContent = `$${price / 100}`;
      colorsDOM.innerHTML = colors
        .map((item) => {
          return `<span class="product-color" style="background:${item};"></span>`;
        })
        .join("");
      descDOM.innerHTML = description;
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
