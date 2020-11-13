# language: pt
Funcionalidade: Editar Formúlario

    Como​ um usuário do sistema
    Eu gostaria de​ poder editar um formulário
    para modificar algo que eu queira.

    Cenário: Editar Formulário
        Dado que um usuário "grupo4@teste.com" esteja na tela de edição de formulário
        Quando realizar as alterações desejadas nos campos, como mudar os seus tipos ou adicionar mais; ou trocar o nome do formulário com tamanho entre 8char e 128char e clicar em salvar
        Então o usuário poderá ver seu formulário salvo na lista de formulários
