# language: pt
Funcionalidade: Cadastro

    Como​ um usuário do sistema 
    eu gostaria de​ informar meus dados na tela de cadastro 
    para​ que eu possa realizar o meu cadastro

    Cenário: Realizar Cadastro
        Dado que é exibida a tela de cadastro
        Quando insiro nome "Grupo 4", email "grupo4@teste.com" e senha "grupo4321"
        E clico no botão cadastrar
        Então a tela Your Archive é exibida
