const el = require('./elements').ELEMENTS

const faker = require('faker')

import Routes from "../../support/routes"

class Cadastro {


    preencherFormularioCadastro(){
        cy.get(el.inputUsername).type(faker.name.firstName() + faker.name.lastName());
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type(12345678);
    }

    submeterFormularioCadastro(){
        cy.get(el.buttonSubmit).click();
    }

    verificarSeOCadastroFoiCriadoComSucesso(){
        cy.wait(`@${Routes.as.postUsers}`).then((postUsersResponse) => {
            expect(postUsersResponse.status).to.eq(200)
        });

        cy.wait(`@${Routes.as.getTags}`).then((getTagsResponse) => {
            expect(getTagsResponse.status).to.eq(200)
        });

        cy.wait(`@${Routes.as.getArticlesFeed}`).then((getArticlesFeed) => {
            expect(getArticlesFeed.status).to.eq(200)
        });
    }
}

export default new Cadastro()