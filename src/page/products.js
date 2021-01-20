// global import
import "../toggleSidebar.js";
import "../cart/toggleCart.js";

// filter import
import setupSearch from "../filter/search.js";
import setupCompanies from "../filter/companies.js";
// import setupPrice from "../filter/price.js"

// specific import
import { getElement } from "../utils.js";
import display from "../displayProducts.js";
import { store } from "../store.js";

display(store, getElement(".products-container"));

// Search Filter
setupSearch();
// Companies Filter
setupCompanies();
