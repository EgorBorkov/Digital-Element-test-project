/**
 *
 */
export default class SmoothScroll {

  constructor(options = { behavior: "smooth" }) {
    this.behavior = options.behavior;
    this.init();
  }

  init() {
    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) {
        return; 
      }
      const hash = link.getAttribute("href");
      if (hash && hash.length > 1) {
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: this.behavior, block: "start" });
        }
      }
    });
  }

}


