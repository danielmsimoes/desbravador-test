class HospedagemPage {
    url = 'https://reservas.desbravador.com.br/1111'

    elements = {
        dataEntradaValida: () => cy.get(':nth-child(1) > .datepickerViewDays > .datepickerDays > :nth-child(3) > :nth-child(4) > a'),
        dataSaidaValida: () => cy.get(':nth-child(1) > .datepickerViewDays > .datepickerDays > :nth-child(4) > :nth-child(2) > a'),
        dataSaidaInvalida: () => cy.get(':nth-child(3) > .datepickerViewDays > .datepickerDays > :nth-child(3) > .datepickerSaturday > a'),
        selectAdultos: () => cy.get('[name="cdadultos"]'),
        selectCriancasFree: () => cy.get('[name="cdchdfree"]'),
        botaoContinuarReserva: () => cy.get('[name="button"]'),
        modalMensagem: () => cy.get('#jquery-msg-content')
    }

    acessarPaginaInicial() {
        cy.visit(this.url)
    }

    selecionarDataEntrada() {
        this.elements.dataEntradaValida().click()
    }

    selecionarDataSaidaValida() {
        this.elements.dataSaidaValida().click()
    }

    selecionarDataSaidaInvalida() {
        this.elements.dataSaidaInvalida().click()
    }

    selecionarQuantidadeAdultos(qtdAdultos) {
        this.elements.selectAdultos().select(qtdAdultos)
    }

    selecionarQuantidadeCriancasFree(qtdCriancas) {
        this.elements.selectCriancasFree().select(qtdCriancas)
    }

    continuarReserva() {
        this.elements.botaoContinuarReserva().click()
    }

    buscarHospedagemValida(qtdAdultos) {
        this.selecionarDataEntrada()
        this.selecionarDataSaidaValida()
        this.selecionarQuantidadeAdultos(qtdAdultos)
        this.continuarReserva()
    }

    buscarHospedagemComCriancas(qtdAdultos, qtdCriancas) {
        this.selecionarDataEntrada()
        this.selecionarDataSaidaValida()
        this.selecionarQuantidadeAdultos(qtdAdultos)
        this.selecionarQuantidadeCriancasFree(qtdCriancas)
        this.continuarReserva()
    }

    buscarHospedagemComPeriodoInvalido(qtdAdultos) {
        this.selecionarDataEntrada()
        this.selecionarDataSaidaInvalida()
        this.selecionarQuantidadeAdultos(qtdAdultos)
        this.continuarReserva()
    }

    validarRedirecionamentoTarifas() {
        cy.url().should('include', '/page_tarifas.php')
    }

    validarMensagemAdultosObrigatorio() {
        this.elements.modalMensagem().should('contain', 'Por favor, informe a quantidade de adultos.')
    }

    validarMensagemPeriodoInvalido() {
        this.elements.modalMensagem().should('contain', 'Desculpe, mas para este período a quantidade de pernoites é de no máximo, não temos apartamentos disponíveis para os dias ')
    }
}

export default new HospedagemPage()
