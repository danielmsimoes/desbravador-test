Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes("reading 'constructor'")) {
    return false
  }
})

describe('Página de seleção de data e hóspedes', () => {
    beforeEach(() => {
    cy.visit('https://reservas.desbravador.com.br/1111')
    })
    it('Buscar acomodações com dados válidos', () => {
        // Selecionar data válida
        cy.get(':nth-child(1) > .datepickerViewDays > .datepickerDays > :nth-child(3) > :nth-child(4) > a').click()
        cy.get(':nth-child(1) > .datepickerViewDays > .datepickerDays > :nth-child(4) > :nth-child(2) > a').click()

        // Selecionar números de hóspedes e clicar em "Continuar Reserva"
        cy.get('[name="cdadultos"]').select(1)
        cy.get('[name="button"]').click()
        cy.url().should('include', '/page_tarifas.php')
    })
    
    it('Buscar acomodações com dados inválidos', () => {
        // Clica em "Continuar Reserva" com os campos vazios e verifica mensagem de erro
        cy.get('[name="button"]').click()
        cy.get('#jquery-msg-content').should('contain', 'Por favor, informe a quantidade de adultos.')
        
        // Seleciona a data maior que 14 dias e verifica mensagem de erro
        cy.get(':nth-child(1) > .datepickerViewDays > .datepickerDays > :nth-child(3) > :nth-child(4) > a').click()
        cy.get(':nth-child(3) > .datepickerViewDays > .datepickerDays > :nth-child(3) > .datepickerSaturday > a').click()
        cy.get('[name="cdadultos"]').select(1)
        cy.get('[name="button"]').click()
        cy.get('#jquery-msg-content').should('contain', 'Desculpe, mas para este período a quantidade de pernoites é de no máximo ')
    })
})