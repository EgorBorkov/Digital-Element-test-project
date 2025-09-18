/**
 *
 */
export default class NavigationManager {

  constructor() {
    this.header = document.getElementById("navigation");
    this.menuBtn = document.getElementById("mobileMenuBtn");
    this.links = document.getElementById("navLinks");

    this.isOpen = false;
    this.scrollHandler = this.onScroll.bind(this);

    this.bindEvents();
    this.onScroll();
  }

  bindEvents() {
    if (this.menuBtn) {
      this.menuBtn.addEventListener("click", () => this.toggleMenu());
    }
    window.addEventListener("scroll", this.scrollHandler, { passive: true });
  }

  toggleMenu() {
    if (!this.links) {
      return; 
    }

    if (this.isOpen) {
      this.links.classList.add("is-closing");
      this.links.classList.remove("is-open");
      this.menuBtn?.classList.remove("active");
      // wait for closing stagger then clean class
      window.setTimeout(() => {
        this.links?.classList.remove("is-closing");
        this.links?.setAttribute("aria-hidden", "true");
      }, 200);
    } else {
      this.links.classList.add("is-open");
      this.links.classList.remove("is-closing");
      this.links.setAttribute("aria-hidden", "false");
      this.menuBtn?.classList.add("active");
    }
    this.isOpen = !this.isOpen;
  }

  onScroll() {
    const offset = window.scrollY || window.pageYOffset;
    if (!this.header) {
      return; 
    }
    if (offset >= 48) {
      this.header.classList.add("is-fixed");
    } else {
      this.header.classList.remove("is-fixed");
    }
  }

}


