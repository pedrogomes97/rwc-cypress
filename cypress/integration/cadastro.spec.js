/// <reference types="cypress" />

import Cadastro from "../pages/cadastro"

context('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {
        cy.visit('register');

        Cadastro.preencherFormularioCadastro();
        Cadastro.submeterFormularioCadastro();

        //Verificação
        Cadastro.verificarSeOCadastroFoiCriadoComSucesso();
    });
});