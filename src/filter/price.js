import { getElement } from "../utils.js";
import { store } from "../store.js";
import display from "../displayProducts.js";

const setupPrice = () => {
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  let maxPrice = store.map((item) => item.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Value : $${maxPrice}`;

  priceInput.addEventListener("input", function () {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value : $${value}`;
    let newStore = store.filter((item) => item.price / 100 <= value);
    display(newStore, getElement(".products-container"));
    if (newStore.length < 1) {
      getElement(
        ".products-container"
      ).innerHTML = `<h2 class="filter-error">Sorry, no product found</h2>`;
    }
  });
};

export default setupPrice;
