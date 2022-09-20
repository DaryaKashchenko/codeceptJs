const { I } = inject();

module.exports = {

  // insert your locators and methods here

  fields: {
    username:'[data-test="username"]',
    password: '[data-test="password"]',
    loginBtn: '[data-test="login-button"]'
  },

  visit() {
    I.amOnPage('/')
  },

  fillUserName (username){
    I.fillField(this.fields.username, username)
  },

  fillPassword (password) {
    I.fillField(this.fields.password, password)
  },

  clickLogin () {
    I.click(this.fields.loginBtn)
  },

  checkUrlAfterLogin(urlAfterLogin) {
    I.seeInCurrentUrl(urlAfterLogin)
  }

}
