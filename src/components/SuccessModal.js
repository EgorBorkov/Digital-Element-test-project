/**
 * Renders the success modal markup and injects it into `#successModal`.
 */
export default function SuccessModal() {
  const footerHTML = `
    <div class="modal__overlay" id="successModalOverlay"></div>
        <div class="modal__content modal__content--success">
            <button class="modal__close" id="successModalClose" aria-label="Close modal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="modal__success-content">
                <svg class="modal__success-icon" width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="32" fill="#6FCF97"/>
                    <path d="M20 32L28 40L44 24" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h2 class="modal__success-title">Your message successfully sent!</h2>
                <p class="modal__success-description">Thank you for contacting us. We will get back to you soon.</p>
            </div>
        </div>
  `;
  document.querySelector("#successModal").innerHTML = footerHTML;
}
