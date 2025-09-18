import Logo_light from "../images/Logo_light.svg";

/**
 * Renders the site footer and injects it into `#footer`.
 */
export default function Footer() {
  const footerHTML = `
    <div class="footer__container">
            <div class="footer__content">
                <div class="footer__main">
                    <h2 class="footer__title">Intersted to woek</br>with our team?</h2>
                    <p class="footer__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
                <button class="footer__btn btn btn--primary" id="letsTalkBtn">Let's Talk</button>
            </div>
            
            <div class="footer__info">
                <div class="footer__company">
                    <div class="footer__logo">
                        <img src="${Logo_light}" alt="Afrianska Logo" class="footer__logo-icon">
                        <span class="footer__company-name">Afrianska</span>
                    </div>
                    <div class="footer__contact">
                        <div class="footer__contact-item">
                            <span class="footer__contact-label">A.</span>
                            <span class="footer__contact-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                        </div>
                        <div class="footer__contact-item">
                            <span class="footer__contact-label">T.</span>
                            <span class="footer__contact-text">+62-812-7313-4321</span>
                        </div>
                        <div class="footer__contact-item">
                            <span class="footer__contact-label">E</span>
                            <span class="footer__contact-text">hello.afrian@gmail.com</span>
                        </div>
                    </div>
                </div>
                
               
                    <div class="footer__link-group">
                        <h3 class="footer__link-title">About US</h3>
                        <a href="#about" class="footer__link">About</a>
                        <a href="#services" class="footer__link">What We Do</a>
                        <a href="#projects" class="footer__link">Project</a>
                        <a href="#contact" class="footer__link">How It Work With Us</a>
                    </div>
                    
                    <div class="footer__link-group">
                        <h3 class="footer__link-title">Follow US</h3>
                        <a href="#" class="footer__link">Instagram</a>
                        <a href="#" class="footer__link">Facebook</a>
                        <a href="#" class="footer__link">LinkedIn</a>
                        <a href="#" class="footer__link">Youtube</a>
                    </div>
            </div>
            
            <div class="footer__copyright">
                <p>2019 © Afrianska. All rights reserved.</p>
            </div>
        </div>
  `;
  document.querySelector("#footer").innerHTML = footerHTML;
}
