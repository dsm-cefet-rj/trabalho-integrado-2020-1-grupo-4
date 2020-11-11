# language: pt
Funcionalidade: Listar Notas

    Apresenta uma lista de projetos juntamente com seu andamento 
    na unidade selecionada, indice de desempenho de custo (IDC) e prazo (IDP)
    (conforme protótipo lista de projetos). Possibilita o acesso as ações
    de inclusão e alteração de projetos e permite a exclusão de projetos.
    
    Notas podem ser criadas, editadas e visualizadas. Na tela "Your Archive" o usuário pode
    criar uma nova nota. O nome das notas deve ter um tamanho entre 8char e 128char. O conteúdo deve ter um
    tamanho entre 0 e 3000char. O usuário pode ter acesso a uma lista das notas, onde ao clicar numa delas a mesma
    é aberta, e posteriormente pode ser editada. A tela de edição obedece aos mesmos requisitos de tamanho de nome e de conteúdo exigidos na criação de nota.
    Nessa tela é possível deletar a nota também.
    O usuário pode desistir de criar ou de editar uma nota.
    

    Contexto: 
    Dados de teste:
            | id  | nome_nota   |  Anexos   |  
            | 1   | Nota1       |  anexo1.   |  
            | 2   | Nota2       |  Mês      | 
            | 3   | Nota3       |  Semana   |  

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
    	
