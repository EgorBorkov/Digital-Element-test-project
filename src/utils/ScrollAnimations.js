/**
 *
 */
export default class ScrollAnimations {

  constructor() {
    this.observer = new IntersectionObserver(this.onIntersect.bind(this), {
      threshold: 0.2,
    });
    this.targets = [];
    this.init();
  }

  init() {
    this.targets = Array.from(document.querySelectorAll("[data-animate]"));
    this.targets.forEach((el) => this.observer.observe(el));
  }

  onIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-inview");
        this.observer.unobserve(entry.target);
      }
    });
  }

}


