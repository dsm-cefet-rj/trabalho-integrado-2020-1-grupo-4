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
        Dado que o usuário esteja na tela de "Your Archive"
        Quando clicar em uma pasta
        Então a pasta deve ser aberta. 
          Essa tela deve conter o nome 
          da pasta acompanhado de um ícone 
          e da data de criação; pode conter uma 
          lista de arquivos; e deve possuir um 
          botão de upload de arquivo.

    Cenário: Criar pasta
        Dado que o usuário esteja na tela de "Your Archive"
        Quando clicar em "New Folder"
        Então deve ser aberta uma tela da pasta recém-criada. 
         Nesta tela deve ter a opção de "Upload" dos arquivos.

    Cenário: Upload de arquivo numa pasta
        Dado que um usuário do sistema esteja navegando dentro de uma pasta 
        Quando clicar no botão de "Upload"
        Então deverá ser aberto o sistema de arquivos do telefone para que
         o usuário possa escolher um arquivo para upload.

    Cenário: Deletar um arquivo presente numa pasta
        Dado que o usuário tenha aberto um arquivo
        Quando clicar em "Deletar"
        Então a aplicação retorna para a raiz da pasta,
            E o arquivo é removido.
