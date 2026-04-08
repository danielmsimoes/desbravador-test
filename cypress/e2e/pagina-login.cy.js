import loginPage from '../pages/LoginPage'

describe('Pagina de login', () => {
    beforeEach(() => {
        loginPage.acessarPaginaInicial()
    })

    it('Preencher os campos de login com sucesso', () => {
        loginPage.realizarLogin('danielmsimoes77@gmail.com', 'senha')
        loginPage.validarLoginSucesso()
    })

    it('Nao preencher os campos de login', () => {
        const alerts = []

        cy.on('window:alert', (text) => {
            alerts.push(text)
        })

        loginPage.irParaLogin()

        loginPage.submeterLogin()
        cy.then(() => {
            expect(alerts[0]).to.equal('Informe seu login ( e-mail )')
        })

        loginPage.preencherEmail('danielmsimoes77@gmail.com')

        loginPage.submeterLogin()
        cy.then(() => {
            expect(alerts[1]).to.equal('Informe sua senha')
        })

        loginPage.preencherSenha('senha')
        loginPage.submeterLogin()
        loginPage.validarLoginSucesso()
    })
})
