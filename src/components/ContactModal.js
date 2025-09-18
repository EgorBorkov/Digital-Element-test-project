/**
 * Renders the contact modal markup and injects it into `#contactModal`.
 */
export default function ContactModal() {
  const footerHTML = `
    <div class="modal__overlay" id="modalOverlay"></div>
        <div class="modal__content">
            <button class="modal__close" id="modalClose" aria-label="Close modal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="modal__header">
                <h2 class="modal__title">Send us message</h2>
            </div>
            <form class="modal__form" id="contactForm">
                <div class="modal__form-group">
                    <label for="name" class="modal__label">Full Name</label>
                    <input type="text" id="name" name="name" class="modal__input" placeholder="Your Name">
                    <span class="modal__error" id="nameError"></span>
                </div>
                <div class="modal__form-group">
                    <label for="email" class="modal__label">Email</label>
                    <input type="email" id="email" name="email" class="modal__input" placeholder="Your Email">
                    <span class="modal__error" id="emailError"></span>
                </div>
                <div class="modal__form-group">
                    <label for="message" class="modal__label">Message</label>
                    <textarea id="message" name="message" class="modal__textarea" placeholder="Your Message" rows="4"></textarea>
                    <span class="modal__error" id="messageError"></span>
                </div>
                <button type="submit" class="modal__submit btn btn--primary">Submit</button>
            </form>
        </div>
  `;
  document.querySelector("#contactModal").innerHTML = footerHTML;
}
