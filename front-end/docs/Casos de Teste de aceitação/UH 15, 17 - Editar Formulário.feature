# language: pt
Funcionalidade: Edição de Formulário

    Permite que o usuário altere as informações do formulário
    escolhido
    

    Contexto: 
        Dado que temos Formulários cadastrados
            | id  | nome        |  tipoForm |  tituloForm    | textoForm      |
            | 1   | Formulario X|  Text     |  Titulo x      | Texto x        |
            
    Cenario: Edicao de um formulário
        Dado que o usuário esteja na tela de edição do formulario de id "1"
        Quando alterar um campo, por exemplo o "nome" para "Formulario Y"
            E clicar no botão "Save"
        Então então a aplicação retornará à tela "Your Archive"
            E o formulário de id "1" tem o nome alterado para "Formulario Y"
            
    Cenario: Edicao de um formulário -- Cancelar edição
        Dado que o usuário esteja na tela de edição do formulário de id "1"
        Quando clicar no botão de "setinha" no canto superior esquerdo da tela
        Então então a aplicação retornará à tela "Your Archive"
            E os dados não serão alterados