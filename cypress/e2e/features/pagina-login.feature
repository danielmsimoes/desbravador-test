Feature: Página de login

  Cenário: Preencher os campos de login com sucesso
    Dado que o usuário acessa a página de reservas
    Quando clica no ícone de login
    E preenche o campo usuário com um email válido
    E preenche o campo senha
    E clica no botão para entrar
    Então o sistema deve exibir o ícone de cadeado aberto

  Cenário: Tentar enviar o login sem preencher os campos obrigatórios
    Dado que o usuário acessa a página de reservas
    Quando clica no ícone de login
    E clica no botão para entrar sem preencher os campos
    Então o sistema deve exibir o alerta "Informe seu login ( e-mail )"

    Quando preenche apenas o campo usuário com um email válido
    E clica novamente no botão para entrar
    Então o sistema deve exibir o alerta "Informe sua senha"

    Quando preenche o campo senha
    E clica no botão para entrar
    Então o sistema deve exibir o ícone de cadeado aberto