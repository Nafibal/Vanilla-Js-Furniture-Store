import { formatPrice } from "./utils.js";
// import { addToCart } from "./cart/setupCart.js";
const display = (products, container) => {
  container.innerHTML = products
    .map((product) => {
      const { id, name, image, price } = product;
      return `<div class="product">
          <div class="product-container">
            <img src="${image}"  alt="${name}" class="product-img" />
            <div class="product-icons">
              <a href="product.html?id=${id}" class="product-icon">
                <i class="fas fa-search"></i>
              </a>
              <button class="product-icon product-cart-btn" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">${formatPrice(price)}</h4>
          </footer>
        </div>`;
    })
    .join("");
};

export default display;
