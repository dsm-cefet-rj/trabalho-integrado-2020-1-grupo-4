# language: pt
Funcionalidade: Visualizar Formulário

    Como um usuário do sistema
    Eu gostaria de visualizar meus formulários
    para gerenciar itens.

    Cenário: Visualizar Formulario
        Dado que eu esteja autenticado como o usuário "grupo4@teste.com"
        E esteja na tela "Your Archive"
        Quando clicar em um formulário existente
        Então deve ser aberta uma tela contendo o formulário. Essa tela deve ter um botão "Editar" que abra uma tela que permita o usuário editar o formulário
