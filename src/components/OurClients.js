// components/OurClients.js
/**
 * Renders the "Our Clients" section and injects it into `#our-clients`.
 */
export default function OurClients() {
  const ourClientsHTML = `
    <div class="our-clients__container">
            <div class="our-clients__content">
                <h2 class="our-clients__title">Our Beloved</br>Client</h2>
                <p class="our-clients__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
            </div>
            <div class="our-clients__logos">
                <div class="our-clients__logo">LOGO CLIENT 1</div>
                <div class="our-clients__logo">LOGO CLIENT 2</div>
                <div class="our-clients__logo">LOGO CLIENT 3</div>
                <div class="our-clients__logo">LOGO CLIENT 4</div>
                <div class="our-clients__logo">LOGO CLIENT 5</div>
                <div class="our-clients__logo">LOGO CLIENT 6</div>
                <div class="our-clients__logo">LOGO CLIENT 7</div>
                <div class="our-clients__logo our-clients__logo--more">More Client</div>
            </div>
        </div>
  `;
  document.querySelector("#our-clients").innerHTML = ourClientsHTML;
}
