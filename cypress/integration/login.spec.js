/// <reference types="cypress" />

import Login from "../pages/login"

context('Login', () => {
    it('Realizar login com sucesso', () => {
        Login.acessarLogin()
        Login.preencherFormulario()
        Login.submeterFormulario()
    });
});