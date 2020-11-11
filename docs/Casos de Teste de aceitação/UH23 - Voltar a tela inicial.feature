# language: pt
Funcionalidade: Voltar a tela inicial

    Como​ um usuário do sistema
    eu gostaria de​ poder ter a opção de voltar a tela inicial 
    para​ que eu possa manter meu controle na aplicação.

    Contexto: 
        Dado que estou autenticado com email "grupo4@teste.com" e senha "grupo4321"

    Esquema do Cenário: Voltar
        Dado que é exibida a tela de <tela>
        Quando clico no botão voltar
        Então a tela Your Archive é exibida

        Exemplos:
            |    tela     |
            |    notas    |
            | formulários |
            |   pastas    |
