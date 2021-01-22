import { formatPrice, getElement } from "../utils.js";

const addToCartDOM = ({ id, amount, name, image, price }) => {
  // Create Single Item div
  const singleItem = document.createElement("div");
  singleItem.classList.add("cart-item");
  singleItem.setAttribute("data-id", id);
  singleItem.innerHTML = `<img class="cart-item-img" src="${image}" alt="${name}" />
            <div>
              <h4 class="cart-item-name">${name}</h4>
              <p class="cart-item-price">${formatPrice(price)}</p>
              <button class="cart-item-remove" data-id="${id}">remove</button>
            </div>
            <div>
              <button data-id="${id}" class="cart-item-increase">
                <i class="fas fa-chevron-up"></i>
              </button>
              <p class="cart-item-amount" data-id="${id}">${amount}</p>
              <button class="cart-item-decrease" data-id="${id}">
                <i class="fas fa-chevron-down"></i>
              </button>
            </div>`;
  // Append single item to cart items container
  getElement(".cart-items").appendChild(singleItem);
};

export default addToCartDOM;
