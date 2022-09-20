Feature('auth');

Scenario('valid login', ({ I, signInPage }) => {

    signInPage.visit()
    signInPage.fillUserName ('standard_user')
    signInPage.fillPassword ('secret_sauce')
    signInPage.clickLogin ()
    signInPage.checkUrlAfterLogin('/inventory.html')

});

Scenario('invalid login', ({ I, signInPage }) => {

    signInPage.visit()
    signInPage.fillUserName ('standard_user1')
    signInPage.fillPassword ('secret_sauce')
    signInPage.clickLogin ()
    signInPage.checkUrlAfterLogin('/')
    
});

Scenario('invalid password', ({ I, signInPage }) => {

    signInPage.visit()
    signInPage.fillUserName ('standard_user')
    signInPage.fillPassword ('secret_sauce1')
    signInPage.clickLogin ()
    signInPage.checkUrlAfterLogin('/')
    
});


Scenario('type nothing to login', ({ I, signInPage }) => {

    signInPage.visit()
    signInPage.fillUserName ('')
    signInPage.fillPassword ('secret_sauce')
    signInPage.clickLogin ()
    signInPage.checkUrlAfterLogin('/')    

});

Scenario('type nothing to passworf', ({ I, signInPage }) => {

    signInPage.visit()
    signInPage.fillUserName ('standard_user')
    signInPage.fillPassword ('')
    signInPage.clickLogin ()
    signInPage.checkUrlAfterLogin('/')    

});