# language: pt
Funcionalidade: Listar Notas
    
    Notas podem ser criadas, editadas e visualizadas. Na tela "Your Archive" o usuário pode
    criar uma nova nota. O nome das notas deve ter um tamanho entre 8char e 128char. O conteúdo deve ter um
    tamanho entre 0 e 3000char. O usuário pode ter acesso a uma lista das notas, onde ao clicar numa delas a mesma
    é aberta, e posteriormente pode ser editada. A tela de edição obedece aos mesmos requisitos de tamanho de nome e de conteúdo exigidos na criação de nota.
    Nessa tela é possível deletar a nota também.
    O usuário pode desistir de criar ou de editar uma nota.
    

    Contexto: 
    Dados de teste:
            | id  | nome_nota   |  Anexos                 |  
            | 1   | Nota1       |  anexo1.pdf, anexo2.jpg |  
            | 2   | Nota2       |  sem anexos             | 
            | 3   | Nota3       |  anexo4.jpg             |  

    Cenário: Nova nota
        Dado que um usuário "grupo4@teste.com"esteja na tela de criar nota
        Quando o usuário definir um nome com faixa de tamanho entre 8char e 128char e um conteúdo para nota com tamanho de caracteres entre  0 e 3000char
        Então a tela "Your Archive" será aberta, e o usuário poderá ver sua nota recém criada no espaço da lista de notas criadas.

    Cenário: Editar uma nota existente
        Dado que um usuário "grupo4@teste.com" esteja na tela de Editar nota
        Quando o usuário alterar o nome da nota,  obedecendo o tamanho entre 8char e 128char; ou o seu conteúdo, obedecendo o tamanho entre 0 e 3000char;
           ou seus anexos e clicar em "salvar"
        Então o usuário poderá ver sua nota editada na lista de notas existentes. 

    Cenário: Upload de Arquivos nas Notas
        Dado que um usuário "grupo4@teste.com" esteja criando ou editando uma nota
        Quando clicar em "Choose File"
        Entao deve ser aberto o sistema de arquivos do celular 
         para que o usuário possa escolher um arquivo. 

    Cenário: Visualizar Nota
        Dado que um usuário  "grupo4@teste.com" esteja na tela de "Your Archive"
        Quando ele clicar em uma nota
        Entao a nota deve ser aberta para visualização.
         Tal tela deve conter um botão de "Editar" 

    Cenário: Excluir uma nota
        Dado que um usuário "grupo4@teste.com" esteja na tela de edição de notas
        Quando clicar em "Delete"
          e confirmar a exclusão
        Entao a aplicação retornará para "Your Archive" e a nota será excluída.

    Cenário: Cancelar a criação de uma nova nota
       Dado que um usuário "grupo4@teste.com" esteja com uma nota aberta, após ser clicado "new note" em "Your Archive"
       Quando clicar em "Cancelar"
       Entao a aplicação retorna para a tela de "Your Archive" 

    Cenário: Cancelar Edição de Nota
       Dado que um usuário esteja na tela de edição de nota
       Quando o mesmo clicar num botão de "setinha" no canto 
        superior esquerdo da tela
       Entao a aplicação retornará à tela de "Your Archive" 
    	
