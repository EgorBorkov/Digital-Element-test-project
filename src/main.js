import "./styles/main.scss";
import "./styles/_variables.scss";
import "./styles/_mixins.scss";
import "./styles/navigation.scss";
import "./styles/hero.scss";
import "./styles/whatWeDo.scss";
import "./styles/OurClients.scss";
import "./styles/footer.scss";
import "./styles/modal.scss";

import ContactModal from "./components/ContactModal.js";
import Footer from "./components/Footer.js";
import Hero from "./components/Hero.js";
import Navigation from "./components/Navigation.js";
import OurClients from "./components/OurClients.js";
import SuccessModal from "./components/SuccessModal.js";
import WhatWeDo from "./components/WhatWeDo.js";

import ModalManager from "./managers/ModalManager.js";
import NavigationManager from "./managers/NavigationManager.js";
import FormSubmitter from "./utils/FormSubmitter.js";
import FormValidator from "./utils/FormValidator.js";
import ScrollAnimations from "./utils/ScrollAnimations.js";
import SmoothScroll from "./utils/SmoothScroll.js";

const app = document.querySelector("#app");

app.innerHTML = `
  <header id="navigation"></header>
  <main id="hero"></main>
  <section id="what-we-do"></section>
  <div class="bg_blue">
    <section id="our-clients"></section>
    <footer id="footer"></footer>
  </div>
  <div class="modal" id="contactModal"></div>  
  <div class="modal" id="successModal"></div>
`;

Navigation();
Hero();
WhatWeDo();
OurClients();
Footer();
ContactModal();
SuccessModal();

document.addEventListener("DOMContentLoaded", () => {
  const modalManager = new ModalManager();
  const formEl = document.getElementById("contactForm");
  const formValidator = new FormValidator(formEl);
  const formSubmitter = new FormSubmitter(formEl, formValidator, modalManager);
  new SmoothScroll();

  // Mark sections for in-view animations BEFORE observer init
  const heroSection = document.getElementById("hero");
  const whatWeDoSection = document.getElementById("what-we-do");
  if (heroSection) {
    heroSection.setAttribute("data-animate", ""); 
  }
  if (whatWeDoSection) {
    whatWeDoSection.setAttribute("data-animate", ""); 
  }

  new ScrollAnimations();
  new NavigationManager();

  if (formEl) {
    formEl.addEventListener("submit", (e) => formSubmitter.handleSubmit(e));
  }

  const letsTalkBtn = document.getElementById("letsTalkBtn");
  if (letsTalkBtn) {
    letsTalkBtn.addEventListener("click", () => modalManager.openContactModal());
  }
});
