const el = require('./elements').ELEMENTS

class Login {

    acessarLogin(){
        cy.visit('login');
    }

    preencherFormulario(){
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputPassword).type(12345678);
    }

    submeterFormulario(){
        cy.get(el.buttonSubmit).click();
    }
        
}

export default new Login()