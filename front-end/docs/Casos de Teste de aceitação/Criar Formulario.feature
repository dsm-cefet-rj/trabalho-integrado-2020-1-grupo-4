# language: pt
Funcionalidade: Criar Formúlario

    Como​ um usuário do sistema
    Eu gostaria de​ poder escolher que tipo de formulário desejo criar
    para cadastrar um novo formulário.

    Cenário: Criar Formulário
        Dado que o usuário "grupo4@teste.com" esteja na tela de "Your Archive"
        Quando o usuário clicar em "New Form"
        Então deve ser aberta uma tela com uma lista de tipos de formulário, onde o usuário deve escolher um para ser criado.