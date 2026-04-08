import loginPage from '../pages/LoginPage'
import hospedagemPage from '../pages/HospedagemPage'
import selecaoQuartoPage from '../pages/SelecaoQuartoPage'
import politicasPage from '../pages/PoliticasPage'

Cypress.on('uncaught:exception', (err) => {
  if (
    err.message.includes("reading 'value'") ||
    err.message.includes("reading 'style'")
  ) {
    return false
  }
})

describe('Fluxo final de reserva', () => {
    beforeEach(() => {
        loginPage.acessarPaginaInicial()
        loginPage.realizarLogin('danielmsimoes77@gmail.com', 'senha')
        loginPage.validarLoginSucesso()
    })

    it('Seleciona quarto, confirma pagamento e encerra nas politicas', () => {
        hospedagemPage.buscarHospedagemValida('1')
        selecaoQuartoPage.validarPaginaSelecaoQuarto()
        selecaoQuartoPage.validarQuantidadeQuartosMaiorQueZero()
        selecaoQuartoPage.selecionarQuarto()
        selecaoQuartoPage.clicarEmPagar()

        politicasPage.aceitarPoliticas()
        politicasPage.continuarReserva()
        politicasPage.validarMensagemEscolhaCartao()
    })
})
