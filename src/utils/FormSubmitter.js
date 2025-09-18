/**
 *
 */
export default class FormSubmitter {

  constructor(formElement, validator, modalManager) {
    this.form = formElement;
    this.validator = validator;
    this.modalManager = modalManager;
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (!this.validator?.validate()) {
      return; 
    }

    // Simulate async submit
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      this.modalManager?.closeContactModal();
      this.modalManager?.openSuccessModal();
      this.form?.reset();
    } catch {
      // Optionally show error toast
      // noop
    }
  }

}


