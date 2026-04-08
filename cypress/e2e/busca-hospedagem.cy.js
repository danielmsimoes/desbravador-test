import hospedagemPage from '../pages/HospedagemPage'

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes("reading 'constructor'")) {
    return false
  }
})

describe('Página de seleção de data e hóspedes', () => {
    beforeEach(() => {
        hospedagemPage.acessarPaginaInicial()
    })

    it('Buscar acomodações com dados válidos', () => {
        hospedagemPage.buscarHospedagemValida('1')
        hospedagemPage.validarRedirecionamentoTarifas()
    })

    it('Buscar acomodações com dados inválidos', () => {
        hospedagemPage.continuarReserva()
        hospedagemPage.validarMensagemAdultosObrigatorio()
    })
})
