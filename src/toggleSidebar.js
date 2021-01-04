import { getElement } from "./utils.js";

const sidebarOverlay = getElement(".sidebar-overlay");
const toggleNav = getElement(".toggle-nav");
const sidebarClose = getElement(".sidebar-close");

toggleNav.addEventListener("click", () => {
  sidebarOverlay.classList.add("show");
});

sidebarClose.addEventListener("click", () => {
  sidebarOverlay.classList.remove("show");
});
