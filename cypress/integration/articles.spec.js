/// <reference types="cypress" />

import Articles from "../pages/articles/index"

context('Publicação', () => {

    beforeEach(() => {
        cy.backgroudLogin()
        Articles.acessarFormularioDeNovaPublicacao()
    });

    it('Criar uma nova publicação', () => {

        //Ação
        Articles.preencherFormulario();
        Articles.submeterPublicacao();
        
        //Verificação
        Articles.verificarSeAPublicacaoFoiCriadaComSucesso();

    });
});