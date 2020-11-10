# language: pt
Funcionalidade: Listar Notas

    Apresenta uma lista de projetos juntamente com seu andamento 
    na unidade selecionada, indice de desempenho de custo (IDC) e prazo (IDP)
    (conforme protótipo lista de projetos). Possibilita o acesso as ações
    de inclusão e alteração de projetos e permite a exclusão de projetos.
    
    Notas podem ser criadas, editadas e visualizadas. Na tela "Your Archive" o usuário pode
    criar uma nova nota; pode ter acesso a uma lista delas, onde ao clicar numa nota a mesma
    é aberta, e posteriormente pode ser editada. Na tela de edição é possível deletar a nota também.
    O usuário pode desistir de criar ou de editar uma nota.
    

    Contexto: 
        PEGAR OS DADOS DAS NOTAS. CREIO EU QUE NOTA NO SISTEMA É UM OBJETO.
            | id  | nome        |  unidade  |  unidadeAtual  | unidadesTotais | idc | idp |
            | 1   | Projeto X   |  Semana   |  2             |  4             | 0.8 | 0.9 |
            | 2   | Projeto Y   |  Mês      |  4             |  6             | 1.3 | 1.0 |
            | 3   | Projeto Z   |  Semana   |  3             |  10            | 1.0 | 1.0 |

    Cenário: Nova nota
        Dado que um usuário esteja na tela "Your Archive"
        quando o usuário clicar em "new note"
        entao deve ser aberta uma tela que tenha o nome da nota;
         o espaço de texto onde deve estar o conteúdo; e um botão "Choose file",
         que permite anexar arquivos; um espaço para os anexos; um botão para 
         cancelar, caso o usuário não queira mais criar aquela nota;
         e um botão para salvá-la.

    Cenário: Editar uma nota existente
        Dado que o usuário esteja na tela de visualizar a nota
        quando o usuário clicar em "Edit"
        então aquela nota deve ser aberta em sua tela de edição. 
         Esta tela deve conter um espaço para se editar o nome da nota,
         outro espaço para se editar seu conteúdo, deve conter um espaço 
         "Attachments" para os anexos, um botão "Choose file" para ser feito
         upload de arquivos; e um botão para deletar e outro botão para salvar. 

    Cenário: Upload de Arquivos nas Notas
        Dado que o usuário esteja criando ou editando uma nota
        quando clicar em "Choose File"
        então deve ser aberto o sistema de arquivos do celular 
         para que o usuário possa escolher um arquivo. 

    Cenário: Visualizar Nota
        Dado que o usuário esteja na tela de "Your Archive"
        quando ele clicar em uma nota
        então a nota deve ser aberta para visualização.
         Tal tela deve conter um botão de "Editar" 

    Cenário: Excluir uma nota
        Dado que um usuário esteja na tela de edição de notas
        quando clicar em "Delete"
          e confirmar a exclusão
        então a aplicação retornará para "Your Archive" e a nota será excluída.

    Cenário: Cancelar a criação de uma nova nota
       Dado que um usuário esteja com uma nota aberta, após ser clicado "new note" em "Your Archive"
       quando clicar em "Cancelar"
       então a aplicação retorna para a tela de "Your Archive" 

    Cenário: Cancelar Edição de Nota
       Dado que um usuário esteja na tela de edição de nota
       quando o mesmo clicar num botão de "setinha" no canto 
        superior esquerdo da tela
       então a aplicação retornará à tela de "Your Archive" 
    	