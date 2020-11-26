//cenario: Criar pasta
    Dado(`que um usuário {string} e senha {string} esteja logado`, (email,senha) => {
        cy.visit('/login');
        cy.get('#form_06').type(email);
        cy.get('#form_07').type(senha);
        cy.server();
        cy.route('/users?email*').as('getUser');
        cy.get('#botao_07').click();
        cy.wait('@getUser');
    });

    Dado('esteja na tela de Your Archive', () => {
        cy.visit('/yourarchive'); //solicitar a rota de "your archive"
    });

    Quando (`clicar no botão New Folder`, () => {
        cy.get('#btn-new-folder').click(); //solicitar a id do botão New Folder
    });

    Entao(`A tela de pasta deve ser aberta, uma nova pasta foi criada`,() => {
        cy.url().should('include', '/newPaste'); //solicitar a rota de Nova Pasta
    });

//Cenario: Deletar  Arquivo
Dado(`que um usuário {string} e senha {string}`, (email,senha) => {
    cy.visit('/login');
    cy.get('#form_06').type(email);
    cy.get('#form_07').type(senha);
    cy.server();
    cy.route('/users?email*').as('getUser');
    cy.get('#botao_07').click();
    cy.wait('@getUser');
});

Dado('esteja na tela de Arquivo', () => {
    cy.visit('/Archive',{
        qs: {
            id: '1'
        }
    }); //checar a rota correta de um arquivo existente
});

Quando (`o usuário clicar em Deletar`, (nome) => {
    cy.get('#btn_deletar').click(); //obter o id correto do botão deletar
});

Entao(`a aplicação retornará para "Pasta" e o arquivo será excluído `,() => {
    cy.url().should('contain', '/'); //Verificar a asserção de um arquivo excluído, garantir que ele foi excluído
});

//Cenário: Upload Arquivo
    Dado(`que um usuário {string} e senha {string}`, (email,senha) => {
        cy.visit('/login');
        cy.get('#form_06').type(email);
        cy.get('#form_07').type(senha);
        cy.server();
        cy.route('/users?email*').as('getUser');
        cy.get('#botao_07').click();
        cy.wait('@getUser');
    });

    Dado('esteja na tela da Pasta', () => {

        cy.visit('/yourarchive', {
            qs: {
                pasta: '1'
            }
        }); //solicitar a rota de uma pasta existente, verificar se existem parametros na rota
            //aqui eu considerei como tendo parâmetros, pois existem varias pastas com seus ids
    });

    Quando (`o usuário clicar em Upload`, () => {
        cy.get('#btn_upload').click(); //solicitar a id de Botão Upload.
    });

    Entao(`A tela de pasta deverá conter um novo arquivo`,() => {
        cy.url().should('contain', '/'); //ver um jeito de saber como um novo arquivo estará lá
    });

//Cenário: Visualizar Pasta
Dado(`que um usuário {string} e senha {string}`, (email,senha) => {
    cy.visit('/login');
    cy.get('#form_06').type(email);
    cy.get('#form_07').type(senha);
    cy.server();
    cy.route('/users?email*').as('getUser');
    cy.get('#botao_07').click();
    cy.wait('@getUser');
});

Dado('esteja na tela de Your Archive', () => {
    cy.visit('/yourarchive'); //solicitar a rota correta de 'your archive'
});

Quando (`o usuário clicar em uma pasta`, () => {
    cy.get('#btn_pasta').click(); //obter um id correto para um botão de pasta
});

Entao(`a tela de pasta deve ser aberta`,() => {
    cy.url().should('contain', '/');
});

