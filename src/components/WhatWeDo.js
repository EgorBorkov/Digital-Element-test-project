import men_blue from "../images/whatWeDo_illustration/men-blue.svg";
import men_red from "../images/whatWeDo_illustration/red-men.svg";
import women from "../images/whatWeDo_illustration/women.svg";

/**
 * Renders the "What We Do" section and injects it into `#what-we-do`.
 */
export default function WhatWeDo() {
  const whatWeDoHTML = `
    <div class="what-we-do__container">
        <div class="what-we-do__container-first">
            <h2 class="what-we-do__title">What we do to help</br>our client grow in</br>digital era,</h2>
                <div class="what-we-do__card">
                    <div class="what-we-do__card-icon">
                        <img src="${men_blue}" alt="WhatWeDo Images" class="what-we-do__card-icon-img">
                    </div>
                    <div class="what-we-do__card-content">
                        <h3 class="what-we-do__card-title">Make Your business To Be Better Famous In Internet</h3>
                        <p class="what-we-do__card-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a href="#" class="what-we-do__card-link">
                            Learn more
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8 4L16 12L8 20" stroke="#5A98D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M0 12L16 12L 20" stroke="#5A98D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>

        </div>
        <div class="what-we-do__container-second">

            <div class="what-we-do__card">
                <div class="what-we-do__card-icon">
                    <img src="${men_red}" alt="WhatWeDo Images" class="what-we-do__card-icon-img">
                </div>
                <div class="what-we-do__card-content">
                    <h3 class="what-we-do__card-title">Bring Technology To Your Comfrotable Home</h3>
                    <p class="what-we-do__card-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <a href="#" class="what-we-do__card-link">
                        Learn more
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8 4L16 12L8 20" stroke="#5A98D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M0 12L16 12L 20" stroke="#5A98D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="what-we-do__card">
                <div class="what-we-do__card-icon">
                    <img src="${women}" alt="WhatWeDo Images" class="what-we-do__card-icon-img">
                </div>
                <div class="what-we-do__card-content">
                    <h3 class="what-we-do__card-title">Build Your Digital Product That Suitable For Your Need</h3>
                    <p class="what-we-do__card-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <a href="#" class="what-we-do__card-link">
                        Learn more
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8 4L16 12L8 20" stroke="#5A98D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M0 12L16 12L 20" stroke="#5A98D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    <div>
  `;
  document.querySelector("#what-we-do").innerHTML = whatWeDoHTML;
}
