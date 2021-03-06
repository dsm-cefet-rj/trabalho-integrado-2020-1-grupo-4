# language: pt
Funcionalidade: Visualizar Formulário

    Como um usuário do sistema
    Eu gostaria de visualizar meus formulários
    para gerenciar itens.

    Contexto: 
        Dado que temos Formulários cadastrados
            | id  | nome        |  tipoForm |  tituloForm    | textoForm      |
            | 1   | Formulario X|  Text     |  Titulo x      | Texto x        |

    Cenário: Visualizar Formulario
        Dado que estou autenticado com email "grupo4@teste.com" e senha "grupo4321"
        E esteja na tela "Your Archive"
        Quando clicar em um formulário existente
        Então deve ser aberta uma tela contendo o formulário
