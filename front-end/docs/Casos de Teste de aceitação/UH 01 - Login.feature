# language: pt
Funcionalidade: Login
	
	Como​ um usuário do sistema 
    eu gostaria de​ me autenticar 
    para​ poder usar as funcionalidades do sistema

    Contexto: 
        Dado que temos usuarios cadastrados
            | id  | nome    | email              |  Senha     |
            | 1   | Grupo 4 | grupo4@teste.com   |  grupo4321 |
            | 2   | Grupo 5 | grupo5@teste.com   |  grupo5321 |
            | 3   | Grupo 6 | grupo6@teste.com   |  grupo6321 |
  
    Cenário: Realizar Login
        Dado que é exibida a tela de login
        Quando insiro email "grupo4@teste.com" e senha "grupo4321"
        E clico no botão entrar
        Então a tela Your Archive é exibida
