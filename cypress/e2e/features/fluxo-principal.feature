Feature: Fluxo completo de reserva

  Cenário: Realizar busca de reserva com parâmetros válidos
    Dado que o usuário acessa a página de reservas
    Quando seleciona uma data de entrada válida
    E seleciona uma data de saída válida
    E informa 2 adultos
    E informa 1 criança
    E clica no botão para buscar disponibilidade
    Então o sistema deve redirecionar para a página de tarifas
    E deve exibir pelo menos 1 quarto disponível
    