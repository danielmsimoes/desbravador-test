Cypress.on('uncaught:exception', (err) => {
  if (
    err.message.includes("reading 'value'") ||
    err.message.includes("reading 'style'")
  ) {
    return false
  }
})

describe('Fluxo completo de uma reserva', () => {
    beforeEach(() => {
        cy.visit('https://reservas.desbravador.com.br/1111')
        cy.get('.cadeado_fechado').click()
        // Preenche os campos com dados válidos
        cy.get('[name="usuario"]').type('danielmsimoes77@gmail.com')
        cy.get('[name="senha"]').type('senha')

        // Confirma e verifica se está logado
        cy.get('.largura_site > .cx').click()
        cy.get('.cadeado_aberto').should('be.visible')
    })
    it('Fluxo completo', () => {
        // Selecionar data válida
        cy.get(':nth-child(1) > .datepickerViewDays > .datepickerDays > :nth-child(3) > :nth-child(4) > a').click()
        cy.get(':nth-child(1) > .datepickerViewDays > .datepickerDays > :nth-child(4) > :nth-child(2) > a').click()

        // Selecionar números de hóspedes
        cy.get('[name="cdadultos"]').select(1)

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
        
        // Adiciona ao carrinho
        cy.get('#bt_compra-ST2').click()
        // Clica em "Pagar"
        cy.get('#bt_pagar').click()
      
        // Concorda com as politicas
        cy.get('iframe[name="frame_politicas"]')
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)
        .find('#lido')
        .check({ force: true })
        
        // Clica em "Continuar Reserva"
        cy.get('iframe[name="frame_politicas"]')
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)
        .contains('button', 'Continuar Reserva')
        .click()
        
        // Mostra um erro caso não tenha continuidade para finalizar o pagamento
        cy.contains('Escolha um cartão para pagamento').should('be.visible')

    })
})