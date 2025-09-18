import Logo from "../images/Logo.svg";

/**
 * Renders the top navigation and injects it into `#navigation`.
 */
export default function Navigation() {
  const navigationHTML = `
    <div class="nav__container">
            <div class="nav__logo">
                <img src="${Logo}" alt="Afrianska Logo" class="nav__logo-icon">
            </div>
            <ul class="nav__links" id="navLinks" aria-label="Primary" aria-hidden="true">
                <li class="nav__link-item"><a href="#hero" class="nav__link">About Us</a></li>
                <li class="nav__link-item"><a href="#what-we-do" class="nav__link">What We Do</a></li>
                <li class="nav__link-item"><a href="#our-clients" class="nav__link">Project</a></li>
                <li class="nav__link-item"><a href="#footer" class="nav__link">Contact</a></li>
            </ul>
            <button class="nav__menu-btn" id="mobileMenuBtn" aria-label="Open menu">
                <span class="nav__menu-line"></span>
                <span class="nav__menu-line"></span>
                <span class="nav__menu-line"></span>
            </button>
        </div>
    </nav>
  `;
  document.querySelector("#navigation").innerHTML = navigationHTML;
}
