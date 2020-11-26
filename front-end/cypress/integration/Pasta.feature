# language: pt
Funcionalidade: Pastas

       O usuário pode criar pastas para acessar arquivos nelas, 
       pode ver uma listagem delas, para clicar numa e 
       ver seu conteúdo. Dentro das pastas, o usuário pode visualizar arquivos
       adicionar novos, e excluí-los.
    

    Contexto: 
       Dado que temos pastas cadastradas
            | id  | Nome     |
            | 1   | PastaA   |  
            | 2   | PastaB   |  
            | 3   | PastaC   |  
        E que estou autenticado com email "grupo4@teste.com" e senha "grupo4321"

    Cenário: Visualizar pasta
        E que é exibida a tela de "Your Archive"
        Quando clicar em uma pasta
        Então a tela de pasta deve ser aberta

    Cenário: Criar pasta 
        E que é exibida a tela de "Your Archive"
        Quando clicar em "New Folder"
        Então deve ser aberta uma tela da pasta recém-criada 

    Cenário: Upload de arquivo numa pasta 
        E esteja navegando dentro de uma pasta 
        Quando clicar no botão de "Upload"
        Então a tela de pasta deverá conter um novo arquivo

    Cenário: Deletar um arquivo presente numa pasta 
        E tenha aberto um arquivo
        Quando clicar em "Deletar"
        Então a aplicação retornará para "Pasta" e o arquivo será excluído
            
