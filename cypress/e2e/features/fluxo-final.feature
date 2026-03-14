Feature: Fluxo completo de reserva


  Cenário: Realizar fluxo completo de reserva com dados válidos
    Dado que o usuário acessa a página de reservas
    E realiza login com credenciais válidas
    Quando seleciona uma data válida
    E informa 1 adulto
    E clica no botão de busca
    Então o sistema deve redirecionar para a página de tarifas
    E deve exibir pelo menos 1 quarto disponível
    Quando o usuário adiciona a acomodação ao carrinho
    E clica no botão "Pagar"
    E concorda com as condições da reserva
    E clica no botão "Continuar Reserva"
    Então o sistema deve exibir a etapa de escolha do cartão para pagamento