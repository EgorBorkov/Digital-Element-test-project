/**
 *
 */
export default class ModalManager {

  constructor() {
    this.contactModal = document.getElementById("contactModal");
    this.successModal = document.getElementById("successModal");

    this.modalOverlay = document.getElementById("modalOverlay");
    this.successModalOverlay = document.getElementById("successModalOverlay");

    this.modalCloseBtn = document.getElementById("modalClose");
    this.successModalCloseBtn = document.getElementById("successModalClose");

    this.bindOverlayAndButtons();
    this.bindEscKey();
  }

  openContactModal() {
    if (this.contactModal) {
      this.contactModal.classList.add("active"); 
    }
  }

  closeContactModal() {
    if (this.contactModal) {
      this.contactModal.classList.remove("active"); 
    }
  }

  openSuccessModal() {
    if (this.successModal) {
      this.successModal.classList.add("active"); 
    }
  }

  closeSuccessModal() {
    if (this.successModal) {
      this.successModal.classList.remove("active"); 
    }
  }

  bindOverlayAndButtons() {
    if (this.modalOverlay) {
      this.modalOverlay.addEventListener("click", () => this.closeContactModal()); 
    }
    if (this.successModalOverlay) {
      this.successModalOverlay.addEventListener("click", () => this.closeSuccessModal()); 
    }
    if (this.modalCloseBtn) {
      this.modalCloseBtn.addEventListener("click", () => this.closeContactModal()); 
    }
    if (this.successModalCloseBtn) {
      this.successModalCloseBtn.addEventListener("click", () => this.closeSuccessModal()); 
    }
  }

  bindEscKey() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeContactModal();
        this.closeSuccessModal();
      }
    });
  }

}


