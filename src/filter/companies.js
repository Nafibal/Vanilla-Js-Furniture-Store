import { getElement } from "../utils.js";
import display from "../displayProducts.js";
import { store } from "../store.js";

const setupCompanies = () => {
  // Get the unique company properties
  let companies = [
    "all",
    ...new Set(
      store.map((item) => {
        return item.company;
      })
    ),
  ];

  // Setup the HTML Dynamically
  const companiesDOM = getElement(".companies");
  const companiesBtn = (companiesDOM.innerHTML = companies
    .map((item) => {
      return `<button class="company-btn">${item}</button>`;
    })
    .join(""));

  // Filter Fuctionality
  companiesDOM.addEventListener("click", function (e) {
    if (e.target.classList.contains("company-btn")) {
      let newStore = [];
      if (e.target.textContent === "all") {
        newStore = [...store];
      } else {
        newStore = store.filter(
          ({ company }) => company === e.target.textContent
        );
      }
      display(newStore, getElement(".products-container"));
    }
  });
};

export default setupCompanies;
