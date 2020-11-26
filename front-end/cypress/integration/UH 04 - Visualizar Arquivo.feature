# language: pt
Funcionalidade: Visualizar Arquivo

    Como​ um usuário do sistema, 
    eu gostaria de​ visualizar meus arquivos 
    para​ poder acessar em outros dispositivos ou liberar espaço no meu dispositivo
    
    Contexto:
        Dado que estou autenticado com email "grupo4@teste.com" e senha "grupo4321"

    Cenário: Visualizar Arquivo
        Dado que o usuário tenha entrado numa pasta
        Quando clico em um arquivo
        Então deve ser exibida a tela com as informações do arquivo
        