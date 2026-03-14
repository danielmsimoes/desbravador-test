Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes("reading 'value'")) {
    return false
  }
})

describe('Fluxo completo de uma reserva', () => {
    beforeEach(() => {
    cy.visit('https://reservas.desbravador.com.br/1111')
    })
    it('Fluxo completo com os parâmetros conforme descrito no email', () => {
        // Selecionar data válida
        cy.get(':nth-child(1) > .datepickerViewDays > .datepickerDays > :nth-child(3) > :nth-child(4) > a').click()
        cy.get(':nth-child(1) > .datepickerViewDays > .datepickerDays > :nth-child(4) > :nth-child(2) > a').click()

        // Selecionar números de hóspedes
        cy.get('[name="cdadultos"]').select(2)
        cy.get('[name="cdchdfree"]').select(1)

        // Prosseguir para a etapa de escolher hotel
        cy.get('[name="button"]').click()
        cy.url().should('include', '/page_tarifas.php')

        // Verificar hotéis correspondentes
        // Levanta erro se não tiver quartos disponíveis 
        cy.get('#quartos-selecao-num_quartos')
        .invoke('text')
        .then((text) => {
            const numero = Number(text.trim())
            expect(numero).to.be.greaterThan(0)
        })
    })
})