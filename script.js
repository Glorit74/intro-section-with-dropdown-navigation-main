const mobileNav = document.querySelector(".nav-list");
const btn_container = document.querySelector(".button-container");
const navToggle = document.querySelector(".nav-toggle ");
const btnContainer = document.querySelector(".button-container");
const featuresList = document.querySelector("#features");
const featuresToggle = document.querySelector("#features-btn");
const companyList = document.querySelector("#company");
const companyToggle = document.querySelector("#company-btn");

navToggle.addEventListener("click", () => {
  const visibility = mobileNav.getAttribute("data-visible");
  if (visibility === "false") {
    mobileNav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.style.backgroundImage = "url(./images/icon-close-menu.svg)";
    featuresList.setAttribute("data-visibility", "false");
    companyList.setAttribute("data-visibility", "false");
    featuresToggle.style.backgroundImage = "url(./images/icon-arrow-down.svg)";
    companyToggle.style.backgroundImage = "url(./images/icon-arrow-down.svg)";
	btn_container.setAttribute("data-visibility", "true");
  } else {
    mobileNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.style.backgroundImage = "url(./images/icon-menu.svg)";
  }
});

featuresToggle.addEventListener("click", () => {
  const featureVisibility = featuresList.getAttribute("data-visibility");
  if (featureVisibility === "false") {
    featuresList.setAttribute("data-visibility", "true");
    featuresToggle.style.backgroundImage = "url(./images/icon-arrow-up.svg)";
  } else {
    featuresList.setAttribute("data-visibility", "false");
    featuresToggle.style.backgroundImage = "url(./images/icon-arrow-down.svg)";
  }
});

companyToggle.addEventListener("click", () => {
  const featureVisibility = companyList.getAttribute("data-visibility");
  if (featureVisibility === "false") {
    companyList.setAttribute("data-visibility", "true");
    companyToggle.style.backgroundImage = "url(./images/icon-arrow-up.svg)";
  } else {
    companyList.setAttribute("data-visibility", "false");
    companyToggle.style.backgroundImage = "url(./images/icon-arrow-down.svg)";
  }
});
