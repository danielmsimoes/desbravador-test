class LoginPage {
    url = 'https://reservas.desbravador.com.br/1111'

    elements = {
        botaoAbrirLogin: () => cy.get('.cadeado_fechado'),
        inputEmail: () => cy.get('[name="usuario"]'),
        inputSenha: () => cy.get('[name="senha"]'),
        botaoEntrar: () => cy.get('.largura_site > .cx'),
        iconeLogado: () => cy.get('.cadeado_aberto')
    }

    acessarPaginaInicial() {
        cy.visit(this.url)
    }

    irParaLogin() {
        this.elements.botaoAbrirLogin().click()
    }

    preencherEmail(email) {
        this.elements.inputEmail().type(email)
    }

    preencherSenha(senha) {
        this.elements.inputSenha().type(senha)
    }

    submeterLogin() {
        this.elements.botaoEntrar().click()
    }

    realizarLogin(email, senha) {
        this.irParaLogin()
        this.preencherEmail(email)
        this.preencherSenha(senha)
        this.submeterLogin()
    }

    validarLoginSucesso() {
        this.elements.iconeLogado().should('be.visible')
    }

    validarAlertaLoginObrigatorio() {
        Cypress.once('window:alert', (text) => {
            expect(text).to.equal('Informe seu login ( e-mail )')
        })
    }

    validarAlertaSenhaObrigatoria() {
        Cypress.once('window:alert', (text) => {
            expect(text).to.equal('Informe sua senha')
        })
    }
}

export default new LoginPage()
