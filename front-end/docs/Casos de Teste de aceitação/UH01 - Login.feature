# language: pt
Funcionalidade: Login
	
	Como​ um usuário do sistema 
    eu gostaria de​ me autenticar 
    para​ poder usar as funcionalidades do sistema
  
    Cenário: Realizar Login
        Dado que é exibida a tela de login
        Quando insiro email "grupo4@teste.com" e senha "grupo4321"
        E clico no botão entrar
        Então a tela Your Archive é exibida
