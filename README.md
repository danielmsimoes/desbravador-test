# Desafio Técnico Desbravador - Daniel Simões
---
Projeto de automação de testes End-to-End (E2E) utilizando Cypress, com foco na validação do fluxo de login do sistema de reservas da Desbravador Software.
https://reservas.desbravador.com.br/1111

## Tecnologias Utilizadas
---
* Cypress
* JavaScript
* Node.js
* Mocha / Chai (framework de testes e assertions integrados ao Cypress)

## Instalação
---
É necessário ter o Node.js instalado.

```bash
git clone https://github.com/seu-repositorio.git
cd nome-do-projeto
npm install
```

## Execução
---
Para executar os testes em modo interativo:

```bash
npx cypress open
```

Para executar os testes em modo headless:

```bash
npm test
```

## Estrutura

```text
desbravador-tests/
├─ cypress/
│  ├─ e2e/
│  │  └─ pagina-login.cy.js   # Teste E2E do fluxo de login
│  ├─ fixtures/
│  │  └─ example.json         # Fixture de exemplo gerada pelo Cypress
│  └─ support/
│     ├─ commands.js          # Arquivo para comandos customizados
│     └─ e2e.js               # Configuracoes globais carregadas antes dos testes
├─ cypress.config.js          # Arquivo principal de configuracao do Cypress
├─ package.json               # Dependencias e metadados do projeto
├─ package-lock.json          # Controle de versoes exatas das dependencias
└─ .gitignore                 # Arquivos e pastas ignorados pelo Git
```

## Breve explicação dos testes

### e2e
`cypress/e2e/pagina-login.cy.js` contém o cenário automatizado de login. O teste valida o acesso à página e o comportamento do sistema ao tentar autenticar o usuário, cobrindo tanto o cenário de sucesso quanto o de erro no login.

## Cenário de testes
---
Os cenários de teste utilizados neste desafio podem ser encontrados [aqui](https://docs.google.com/spreadsheets/d/12aQk_5Aiz1MCXUVBdfrKC8zmsiciidALH4tdl8B4xnU/edit?gid=0#gid=0).

## Caso de testes  
---
Os casos de teste utilizados neste desafio podem ser encontrados [aqui](https://docs.google.com/spreadsheets/d/12aQk_5Aiz1MCXUVBdfrKC8zmsiciidALH4tdl8B4xnU/edit?gid=73055023#gid=73055023).

## Bug Report  
---
O relatório de bugs identificados durante a execução dos testes pode ser encontrado [aqui](https://docs.google.com/spreadsheets/d/12aQk_5Aiz1MCXUVBdfrKC8zmsiciidALH4tdl8B4xnU/edit?gid=1727522153#gid=1727522153).