import hospedagemPage from '../pages/HospedagemPage'
import selecaoQuartoPage from '../pages/SelecaoQuartoPage'
import politicasPage from '../pages/PoliticasPage'
import loginPage from '../pages/LoginPage'

Cypress.on('uncaught:exception', (err) => {
  if (
    err.message.includes("reading 'value'") ||
    err.message.includes("reading 'style'")
  ) {
    return false
  }
})

describe('Fluxo principal de reserva', () => {
    beforeEach(() => {
        hospedagemPage.acessarPaginaInicial()
        loginPage.acessarPaginaInicial()
        loginPage.realizarLogin('danielmsimoes77@gmail.com', 'senha')
        loginPage.validarLoginSucesso()
    })

    it('Valida busca e ausencia de quartos conforme parametros informados', () => {
        hospedagemPage.buscarHospedagemComCriancas('2', '1')
        selecaoQuartoPage.validarPaginaSelecaoQuarto()
        selecaoQuartoPage.validarPaginaSelecaoQuarto()
        selecaoQuartoPage.validarQuantidadeQuartosMaiorQueZero()
        selecaoQuartoPage.selecionarQuarto()
        selecaoQuartoPage.clicarEmPagar()
        cy.wait(2000)

        politicasPage.aceitarPoliticas()
        politicasPage.continuarReserva()
        politicasPage.validarMensagemEscolhaCartao()
    })
})
