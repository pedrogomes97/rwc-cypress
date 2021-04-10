/// <reference types="cypress" />

const faker = require('faker')

const el = require('./elements').ELEMENTS

import Routes from "../../support/routes"

class Articles {

    acessarFormularioDeNovaPublicacao(){
        cy.get(el.linkNovaPublicacao).click();
    }

    preencherFormulario(){
        cy.get(el.inputTitle).type('Agilizei Title');
        cy.get(el.inputDescription).type('Cypress');
        cy.get(el.textAreaContext).type(faker.lorem.paragraph());
        cy.get(el.inputTags).type('Cypress');
    }

    submeterPublicacao(){
        cy.get(el.buttonSubmit).click();
    }

    verificarSeAPublicacaoFoiCriadaComSucesso() {
        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.status).to.eq(200)
        });

        cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesTitle) => {
            expect(getArticlesTitle.status).to.eq(200)
        });

        cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((getArticlesTitleComments) => {
            expect(getArticlesTitleComments.status).to.eq(200)
        });
    }
    
}

export default new Articles