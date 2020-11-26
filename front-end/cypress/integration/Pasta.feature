# language: pt
Funcionalidade: Pastas

       O usuário pode criar pastas para acessar arquivos nelas, 
       pode ver uma listagem delas, para clicar numa e 
       ver seu conteúdo. Dentro das pastas, o usuário pode visualizar arquivos
       adicionar novos, e excluí-los.
    

    Contexto: 
       Dados
            | id  | Nome     |
            | 1   | PastaA   |  
            | 2   | PastaB   |  
            | 3   | PastaC   |  

    Cenário: Visualizar pasta
        Dado que um usuário "grupo4@teste.com" esteja na tela de "Your Archive"
        Quando clicar em uma pasta
        Então a tela de pasta deve ser aberta. 
          .

    Cenário: Criar pasta
        Dado que um usuário "grupo4@teste.com" esteja na tela de "Your Archive"
        Quando clicar em "New Folder"
        Então deve ser aberta uma tela da pasta recém-criada. 

    Cenário: Upload de arquivo numa pasta
        Dado que um usuário "grupo4@teste.com" do sistema esteja navegando dentro de uma pasta 
        Quando clicar no botão de "Upload"
        Então a tela de pasta deverá conter um novo arquivo.

    Cenário: Deletar um arquivo presente numa pasta
        Dado que um usuário "grupo4@teste.com" tenha aberto um arquivo
        Quando clicar em "Deletar"
        Então a aplicação retornará para "Pasta" e o arquivo será excluído
            
