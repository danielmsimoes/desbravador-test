Feature: Seleção de data e hóspedes

  Cenário: Buscar acomodações com dados válidos
    Dado que o usuário acessa a página inicial de reservas
    Quando seleciona uma data de entrada válida
    E seleciona uma data de saída válida
    E informa 1 adulto
    E clica no botão de busca
    Então o sistema deve redirecionar para a página de tarifas

  Cenário: Buscar acomodações com dados inválidos
    Dado que o usuário acessa a página inicial de reservas
    Quando clica no botão de busca sem informar a quantidade de adultos
    Então o sistema deve exibir a mensagem "Por favor, informe a quantidade de adultos."


    Quando seleciona um período inválido para a quantidade de pernoites permitida
    E informa 1 adulto
    E clica no botão de busca
    Então o sistema deve exibir a mensagem de limite máximo de pernoites para o período