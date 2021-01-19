import { getElement } from "../utils.js";
import display from "../displayProducts.js";
import { store } from "../store.js";

const setupSearch = () => {
  const searchForm = getElement(".input-form");
  const searchInput = getElement(".search-input");

  //   console.log(store);

  searchForm.addEventListener("keyup", () => {
    const value = searchInput.value;
    const product = store.filter(({ name }) => {
      return name.startsWith(value);
    });
    if (value === "") {
      display(store, getElement(".products-container"));
    } else {
      if (product.length < 1) {
        getElement(
          ".products-container"
        ).innerHTML = `<h2 class="filter-error">Sorry, no product found</h2>`;
      } else {
        display(product, getElement(".products-container"));
      }
    }
  });
};

export default setupSearch;
