# language: pt
Funcionalidade: Exclusão de Formulário

    Permite que o usuário exclua o formulário escolhido, apagando 
    as suas informações do banco de dados.
    
    

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
        Dado que o usuário esteja na tela de edição de formulário de id "1"
        Quando clicar em "Deletar"
           E cancela a exclusão
        Então a aplicação retornará à edição do formulário de id "1"
