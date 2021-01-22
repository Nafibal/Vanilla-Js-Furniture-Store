// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";

// get DOM elements
const cartItemCountDOM = getElement(".cart-item-count");
const cartItemContainerDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");

// set items
let cart = getStorageItem("cart");

export const addToCart = (id) => {
  let item = cart.find((product) => product.id === id);
  if (!item) {
    let product = findProduct(id);
    // add item to the cart
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    console.log(product);
    // add item to the DOM
    addToCartDOM(product);
  } else {
    // update values
  }

  openCart();
};

const init = () => {
  console.log(cart);
};

init();
