export default class LoginForm {
  constructor(form, email) {
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
}
