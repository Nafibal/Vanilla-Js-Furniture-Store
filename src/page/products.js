// global import
import "../toggleSidebar.js";
import "../cart/toggleCart.js";

import { getElement } from "../utils.js";
import display from "../displayProducts.js";
import { store } from "../store.js";

display(store, getElement(".products-container"));
