import { getElement } from "../utils.js";

const cartOverlay = getElement(".cart-overlay");
const toggleCart = getElement(".toggle-cart");
const cartClose = getElement(".cart-close");

toggleCart.addEventListener("click", () => {
  cartOverlay.classList.add("show");
});

cartClose.addEventListener("click", () => {
  cartOverlay.classList.remove("show");
});