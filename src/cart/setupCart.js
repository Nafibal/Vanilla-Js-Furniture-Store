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
    const amount = increaseAmount(id);
    const items = [...document.querySelectorAll(".cart-item-amount")];
    const newAmount = items.find((item) => item.dataset.id === id);
    newAmount.textContent = amount;
  }
  // add one to the item count
  displayCartItemCount();
  // display cart total
  displayCartItemTotal();
  // set cart in local storage
  setStorageItem("cart", cart);

  openCart();
};

const displayCartItemCount = () => {
  const amount = cart.reduce((total, item) => {
    return (total += item.amount);
  }, 0);
  cartItemCountDOM.textContent = amount;
};

const displayCartItemTotal = () => {
  const cartTotal = cart.reduce((total, item) => {
    return (total += item.price * item.amount);
  }, 0);
  cartTotalDOM.textContent = `${formatPrice(cartTotal)}`;
};

const displayCartDOM = () => {
  cart.forEach((product) => {
    addToCartDOM(product);
  });
};

const increaseAmount = (id) => {
  let newAmount;
  cart = cart.map((item) => {
    if (item.id === id) {
      newAmount = item.amount + 1;
      item = { ...item, amount: newAmount };
    }
    return item;
  });
  return newAmount;
};

const removeItem = (id) => {
  cart = cart.filter((item) => item.id !== id);
};

const setupCartFunctionality = () => {
  cartItemContainerDOM.addEventListener("click", function (e) {
    const element = e.target;
    const parent = e.target.parentElement;
    const id = element.dataset.id;
    const parentId = parent.dataset.id;
    // remove
    removeItem(id);
    parent.parentElement.remove();
    // increase

    // decrease

    displayCartItemCount();
    displayCartItemTotal();
    setStorageItem("cart", cart);
  });
};

const init = () => {
  displayCartItemCount();
  displayCartItemTotal();
  displayCartDOM();
  setupCartFunctionality();
};

init();
