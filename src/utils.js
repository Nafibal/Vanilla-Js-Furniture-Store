const allProductsUrl = "https://course-api.com/javascript-store-products";

const singleProductUrl =
  "https://course-api.com/javascript-store-single-product";

const getElement = (selected) => {
  const element = document.querySelector(selected);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const formatPrice = () => {};

const getStorageItem = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return [];
};
const setStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
};
