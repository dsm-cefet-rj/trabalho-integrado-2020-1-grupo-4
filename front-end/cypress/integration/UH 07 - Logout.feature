# language: pt
Funcionalidade: Logout

    Como​ um usuário do sistema 
    eu gostaria de​ ter a opção de deslogar 
    para​ que eu possa sair da aplicação

    Contexto: 
        Dado que temos usuarios cadastrados
            | id  | nome    | email              |  senha     |
            | 1   | Grupo 4 | grupo4@teste.com   |  grupo4321 |
            | 2   | Grupo 5 | grupo5@teste.com   |  grupo5321 |
            | 3   | Grupo 6 | grupo6@teste.com   |  grupo6321 |

    Cenário: Realizar Logout
        Dado que estou autenticado com email "grupo4@teste.com" e senha "grupo4321"
        E que é exibida a tela de "Your Archive"
        Quando clico no botão sair
        Então a tela de login é exibida
    