export default class LoginForm {
  constructor(form, email) {
    this.form = form;
    this.validCredentials = [
      { mailbox: `aaron@theironyard.com`, pswrd: `password123` },
      { mailbox: `admin@google.com`, pswrd: `pandas` },
      { mailbox: email, pswrd: `honeycrisp` },
    ];
  }

  validate(username, password) {
    return this.validCredentials.reduce((collector, currentUser) => {
      if (currentUser.mailbox === username && currentUser.pswrd === password) {
        return true;
      }

      return collector;
    }, false);
  }

  validateInputs () {
    // Look up the inputs from the form
    const emailInput = this.form.querySelector('.login-form__email');
    const passwordInput = this.form.querySelector('.login-form__password');
    const validation = this.form.querySelector('.login-form__validation-message');

    if (this.validate(emailInput.value, passwordInput.value)) {
      validation.innerHTML = ``;
    } else {
      validation.innerHTML = `The credentials are invalid`;
    }
  }
}
