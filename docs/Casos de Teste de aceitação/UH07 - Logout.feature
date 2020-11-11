# language: pt
Funcionalidade: Logout

    Como​ um usuário do sistema 
    eu gostaria de​ ter a opção de deslogar 
    para​ que eu possa sair da aplicação

    Cenário: Realizar Logout
        Dado que estou autenticado
        E que é exibida a tela de "Your Archive"
        Quando clico no botão sair
        Então a tela inicial é exibida
    