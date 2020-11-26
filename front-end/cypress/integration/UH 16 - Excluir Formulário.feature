# language: pt
Funcionalidade: Exclusão de Formulário

    Como​ um usuário do sistema
    eu gostaria de ​poder deletar um formulário
    para​ que eu possa excluir um formulário já existente
    
    

    Contexto: 
        Dado que temos Formulários cadastrados
            | id  | nome        |  tipoForm |  tituloForm    | textoForm      |
            | 1   | Formulario X|  Text     |  Titulo x      |  Texto x       |

    Cenário: Confirmar exclusão
        Dado que o usuário esteja na tela de edição do formulário de id "1"
        Quando clicar em "Deletar"
           E confirma a exclusão
        Então a aplicação retornará a tela "Your Archive"
           E o formulário de id "1" será excluído

    Cenário: Cancelar exclusão
        Dado que o usuário esteja na tela de edição do formulário de id "1"
        Quando clicar em "Deletar"
           E cancela a exclusão
        Então a aplicação retornará à edição do formulário de id "1"
