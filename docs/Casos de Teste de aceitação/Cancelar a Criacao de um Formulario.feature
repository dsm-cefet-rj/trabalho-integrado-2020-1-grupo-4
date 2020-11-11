# language: pt
Funcionalidade: Cancelar a Criação de um Formulário

    Como​ um usuário do sistema
    Eu gostaria de​ poder cancelar a criação de um formulário
    para caso eu queira desistir de criá-lo.

    Cenário: Cancelar a Criação de um Formulário
        Dado que um usuário "grupo4@teste.com" esteja na tela de criação do formulário "Your Archive"
        Quando o usuário clicar em cancelar
        Então a aplicação retornará à tela de "Your Archive".