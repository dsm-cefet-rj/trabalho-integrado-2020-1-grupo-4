# language: pt
Funcionalidade: Edição de Formulário

    Como​ um usuário do sistema
    eu gostaria de​ poder editar um formulário
    para​ que eu possa manter o controle de suas informações
    

    Contexto: 
        Dado que estou autenticado com email "grupo4@teste.com" e senha "grupo4321"
            E que temos Formulários cadastrados
                | id  | nome        |  tipoForm |  tituloForm    | textoForm      |
                | 1   | Formulario X|  Text     |  Titulo x      | Texto x        |
            
    Cenario: Concluir edição
        Dado que o usuário esteja na tela de edição do formulario de id "1"
        Quando definir um nome "teste" para o formulario
        Então então a aplicação retornará à tela "Your Archive"
            E o formulário de id "1" tem o nome alterado para "teste"
            
    Cenario: Cancelar edição
        Dado que o usuário esteja na tela de edição do formulario de id "1"
        Quando clicar no botão de "setinha" no canto superior esquerdo da tela
        Então então a aplicação retornará à tela "Your Archive"
            E nenhum dado será alterado
