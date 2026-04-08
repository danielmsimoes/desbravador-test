class PoliticasPage {
    elements = {
        framePoliticas: () => cy.get('iframe[name="frame_politicas"]')
    }

    obterBodyDoFrame() {
        return this.elements.framePoliticas()
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
    }

    aceitarPoliticas() {
        this.obterBodyDoFrame()
            .find('#lido')
            .check({ force: true })
    }

    continuarReserva() {
        this.obterBodyDoFrame()
            .contains('button', 'Continuar Reserva')
            .click()
    }

    validarMensagemEscolhaCartao() {
        cy.contains('Escolha um cart').should('be.visible')
    }
}

export default new PoliticasPage()
