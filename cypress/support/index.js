Cypress.Commands.add('backgroudLogin', () => {
    // Processo de login em background
        // 1. Realizar uma requisição do tipo Post com email e senha
        // 2. Capturar o token que é recebido da nossa requisição
        // 3. Usar token recebido para salvar no localstorage
        cy.request({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/users/login`,
            body: {
                user: {
                    email: 'agilizei-rwc@mail.com',
                    password: '12345678'
                }
            }
        }).then((loginResponse) => {
            console.log(loginResponse.body)
            cy.log(loginResponse.body.user.token)

            cy.visit('/', {
                onBeforeLoad: (win) => {
                    win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
                }
            })
        })
})

import Routes from "../support/routes"

before(() => {
    Routes.init()
});