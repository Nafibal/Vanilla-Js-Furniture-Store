import { getStorageItem, setStorageItem } from "./utils.js";
let store = getStorageItem("products");
const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { company, name, price, featured, colors, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, featured, name, price, company, colors, image };
  });
  setStorageItem("products", store);
};
const findProduct = (id) => {
  let product = store.find((item) => item.id === id);
  return product;
};
export { store, setupStore, findProduct };
