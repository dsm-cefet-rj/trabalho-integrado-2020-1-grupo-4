# language: pt
Funcionalidade: Login
	
	O login deve permitir que o usuario informe seu email e senha para
	poder acessar sua conta no sistema.
    

    Contexto: 
        Dado que temos projetos cadastrados
            | id  | email       |  
            | 1   | Projeto X   |  
            | 2   | Projeto Y   | 
            | 3   | Projeto Z   |  

    Cenário: Realizar Login
        Dado que o usuário esteja na tela de login, 
	quando os dados de email e senha estiverem corretos, e o usuário clicar no botão “Entrar”
	então o app deve abrir a tela de “Your Archive”.

    
