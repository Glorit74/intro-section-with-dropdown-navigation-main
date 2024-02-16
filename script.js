const mobileNav = document.querySelector(".nav-list");
const navToggle = document.querySelector(".nav-toggle ");
const featuresList = document.querySelector("#features");
const featuresToggle = document.querySelector("#features-btn");

navToggle.addEventListener("click", () => {
  const visibility = mobileNav.getAttribute("data-visible");
  const column = mobileNav.getAttribute("data-column");
  if (visibility === "false") {
    mobileNav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.style.backgroundImage = "url(./images/icon-close-menu.svg)";
    featuresList.setAttribute("data-features", "false");
  } else {
    mobileNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.style.backgroundImage = "url(./images/icon-menu.svg)";
  }
});

featuresToggle.addEventListener("click", () => {
  const featureVisibility = featuresList.getAttribute("data-features");
  if (featureVisibility === "false")
    featuresList.setAttribute("data-features", "true");
  else featuresList.setAttribute("data-features", "false");
});
