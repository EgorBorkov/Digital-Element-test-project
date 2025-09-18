/**
 *
 */
export default class FormValidator {

  constructor(formElement) {
    this.form = formElement;
    this.fields = {
      name: this.form?.querySelector("#name"),
      email: this.form?.querySelector("#email"),
      message: this.form?.querySelector("#message"),
    };
    this.errors = {
      name: this.form?.querySelector("#nameError"),
      email: this.form?.querySelector("#emailError"),
      message: this.form?.querySelector("#messageError"),
    };
  }

  validate() {
    let isValid = true;

    // Name
    const nameValue = this.fields.name?.value?.trim() || "";
    if (!nameValue) {
      this.setError("name", "Name is required");
      isValid = false;
    } else {
      this.clearError("name");
    }

    // Email
    const emailValue = this.fields.email?.value?.trim() || "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
      this.setError("email", "Email is required");
      isValid = false;
    } else if (!emailRegex.test(emailValue)) {
      this.setError("email", "Enter a valid email");
      isValid = false;
    } else {
      this.clearError("email");
    }

    // Message
    const messageValue = this.fields.message?.value?.trim() || "";
    if (!messageValue) {
      this.setError("message", "Message is required");
      isValid = false;
    } else if (messageValue.length < 10) {
      this.setError("message", "Message must be at least 10 characters");
      isValid = false;
    } else {
      this.clearError("message");
    }

    return isValid;
  }

  setError(field, message) {
    switch (field) {
      case "name":
        if (this.errors.name) {
          this.errors.name.textContent = message; 
        }
        break;
      case "email":
        if (this.errors.email) {
          this.errors.email.textContent = message; 
        }
        break;
      case "message":
        if (this.errors.message) {
          this.errors.message.textContent = message; 
        }
        break;
      default:
        break;
    }
  }

  clearError(field) {
    switch (field) {
      case "name":
        if (this.errors.name) {
          this.errors.name.textContent = ""; 
        }
        break;
      case "email":
        if (this.errors.email) {
          this.errors.email.textContent = ""; 
        }
        break;
      case "message":
        if (this.errors.message) {
          this.errors.message.textContent = ""; 
        }
        break;
      default:
        break;
    }
  }

}


