class SelecaoQuartoPage {
    elements = {
        quantidadeQuartosDisponiveis: () => cy.get('#quartos-selecao-num_quartos'),
        botaoSelecionarQuarto: () => cy.get('#bt_compra-ST2, #bt_compra-ST1'),
        botaoPagar: () => cy.get('#bt_pagar')
    }

    validarPaginaSelecaoQuarto() {
        cy.url().should('include', '/page_tarifas.php')
    }

    validarQuantidadeQuartosMaiorQueZero() {
        this.elements.quantidadeQuartosDisponiveis()
            .invoke('text')
            .then((text) => {
                const numero = Number(text.trim())
                expect(numero).to.be.greaterThan(0)
            })
    }

    validarQuantidadeQuartosIgualAZero() {
        this.elements.quantidadeQuartosDisponiveis()
            .invoke('text')
            .then((text) => {
                const numero = Number(text.trim())
                expect(numero).to.equal(0)
            })
    }

    selecionarQuarto() {
        this.elements.botaoSelecionarQuarto().click()
    }

    clicarEmPagar() {
        this.elements.botaoPagar().click()
    }
}

export default new SelecaoQuartoPage()
