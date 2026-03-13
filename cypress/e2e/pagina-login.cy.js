describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://reservas.desbravador.com.br/1111')
    })
    it('Preencher os campos de login com sucesso', () => {
        cy.get('.cadeado_fechado').click()
        cy.get('[name="usuario"]').type('danielmsimoes77@gmail.com')
        cy.get('[name="senha"]').type('senha')
        cy.get('.largura_site > .cx').click()
        cy.get('.cadeado_aberto').should('be.visible')
    })


    it('Não preencher os campos de login', () => {
          const alerts = []

        cy.on('window:alert', (text) => {
            alerts.push(text)
        })
        cy.get('.cadeado_fechado').click()
        cy.get('.largura_site > .cx').click().then(() => {
            expect(alerts[0]).to.equal('Informe seu login ( e-mail )')
        })

        cy.get('[name="usuario"]').type('danielmsimoes77@gmail.com')
        cy.get('.largura_site > .cx').click().then(() => {
            expect(alerts[1]).to.equal('Informe sua senha')
        })
        cy.get('[name="senha"]').type('senha')
        
        cy.get('.largura_site > .cx').click()   
        cy.get('.cadeado_aberto').should('be.visible')
    })
})