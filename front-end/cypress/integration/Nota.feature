# language: pt
Funcionalidade: Listar Notas
    
    Notas podem ser criadas, editadas e visualizadas. Na tela "Your Archive" o usuário pode
    criar uma nova nota. O nome das notas deve ter um tamanho entre 8char e 128char. O conteúdo deve ter um
    tamanho entre 0 e 3000char. O usuário pode ter acesso a uma lista das notas, onde ao clicar numa delas a mesma
    é aberta, e posteriormente pode ser editada. A tela de edição obedece aos mesmos requisitos de tamanho de nome e de conteúdo exigidos na criação de nota.
    Nessa tela é possível deletar a nota também.
    O usuário pode desistir de criar ou de editar uma nota.
    

    Contexto: 
        Dados que temos notas cadastradas
            | id  | nome_nota   |  Anexos                 |  
            | 1   | Nota1       |  anexo1.mp3, anexo2.jpg |  
            | 2   | Nota2       |  sem anexos             | 
            | 3   | Nota3       |  anexo4.jpg             |
        E que estou autenticado com email "grupo4@teste.com" e senha "grupo4321"    

    Cenário: Nova nota 
        Dado esteja na tela de Criar nota
        Quando o usuário definir um nome "Teste" para a nota 
        E um conteúdo "Conteúdo de nota de teste" para a nota
        E clicar no botão salvar nova nota
        Então a tela "Your Archive" será aberta e a nota foi criada.

    Cenário: Editar uma nota existente
        Dado esteja na tela de Editar nota
        Quando o usuário definir um nome "Teste alterando" para a nota
        E um conteúdo "Conteúdo de nota de teste alterando" para a nota
        E clicar no botão salvar nota editada
        Então o usuário poderá ver sua nota editada na lista de notas existentes. 

    Cenário: Upload de Arquivos nas Notas
        Dado esteja na tela de Editar nota
        Quando clicar no botão Choose File, seleciona o arquivo
        E clicar no botão salvar nota editada 
        Entao o usuário poderá ver sua nota editada na lista de notas existentes. 

    Cenário: Visualizar Nota
        Dado esteja na tela de "Your Archive"
        Quando ele clicar em uma nota
        Entao a nota deve ser aberta para visualização.

    Cenário: Excluir uma nota
        Dado esteja na tela de Editar nota
        Quando clicar no botão Delete para deletar nota
        E confirmar a exclusão de nota
        Entao a aplicação retornará para "Your Archive" e a nota será excluída.
