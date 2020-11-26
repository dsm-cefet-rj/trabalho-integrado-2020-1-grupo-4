# language: pt
Funcionalidade: Criar Formúlario

    Como​ um usuário do sistema
    Eu gostaria de​ poder escolher que tipo de formulário desejo criar, criar um formulário e cancelar a criação
    para cadastrar um novo formulário.
    
    Contexto:
        Dado que estou autenticado com email "grupo4@teste.com" e senha "grupo4321"

    Cenário: Selecionar Formulário para criação
        Dado que esteja na tela de criação de formulário "Your Archive"
        Quando o usuário clicar em "New Form"
        Então deve ser aberta uma tela com uma lista de tipos de formulário, onde o usuário deve escolher um para ser criado.

    Cenário: Criar Formulário
        Dado que esteja na tela de criação de formulário
        Quando definir um nome "teste" para o formulario
            E definir um tipo de formulario "1" para o formulario
            E definir um titulo "teste" para o formulario
            E definir um texto "teste" para o formulario
            E definir um tipo "1" para a pergunta "1" do formulario
            E definir um titulo "teste" para a pergunta "1" do formulario
            E definir um texto "teste" para a pergunta "1" do formulario
            E clicar no botão "Save"
        Então o usuário terá acesso ao seu formulário salvo na lista de formulários em "Your Archive".

    Cenário: Cancelar a Criação de um Formulário
        Dado que esteja na tela de criação do formulário
        Quando o usuário clicar em cancelar
        Então a aplicação retornará à tela de "Your Archive".