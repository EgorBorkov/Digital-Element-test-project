import "../styles/main.scss";
import Bg_img from "../images/hero__illustration/bg.svg";
import Bg_shadow_img from "../images/hero__illustration/bg_shadow.svg";
import Man_img from "../images/hero__illustration/man.svg";
import Platform_img from "../images/hero__illustration/platform.svg";
import Smart_home_img from "../images/hero__illustration/smart_home.svg";
import Women_img from "../images/hero__illustration/women.svg";
// components/Hero.js
/**
 * Renders the hero section and injects it into `#hero`.
 */
export default function Hero() {
  const heroHTML = `
    <div class="hero__container">
    <div class="hero__content">
      <h1 class="hero__title">New Automation Tool for Your Home</h1>
      <p class="hero__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique
        vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.
      </p>
      <button class="hero__btn btn btn--primary">See Our Project</button>
    </div>

    <div class="hero__illustration">
      <div class="hero__illustration-imgs">
        <img src="${Bg_shadow_img}" alt="" class="hero__illustration-bg-shadow" />
        <img src="${Bg_img}" alt="" class="hero__illustration-bg" />
        <img src="${Man_img}" alt="Man" class="hero__illustration-man" />
        <img src="${Women_img}" alt="Woman" class="hero__illustration-women" />
        <img src="${Platform_img}" alt="" class="hero__illustration-platform" />
        <img src="${Smart_home_img}" alt="Smart home" class="hero__illustration-smart" />
      </div>
    </div>
  </div>
  `;
  document.querySelector("#hero").innerHTML = heroHTML;
}
