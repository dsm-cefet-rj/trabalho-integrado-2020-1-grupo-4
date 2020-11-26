//cenario: Criar pasta
Dado(`que um usuário {string} e senha {string}`, (email,senha) => {
    cy.visit('/login');
    cy.get('#form_06').type(email);
    cy.get('#form_07').type(senha);
    cy.server();
    cy.route('/users?email*').as('getUser');
    cy.get('#botao_07').click();
    cy.wait('@getUser');
});

Dado('esteja na tela de Criar nota', () => {
    cy.visit('/notes/new');
});

Quando (`o usuário definir um nome {string}`, (nome) => {
    cy.get('#form_08').type(nome);
});

Quando (`um conteúdo {string}`, (conteudo) => {
    cy.get('#form_09').type(conteudo);
});

Quando ('clicar no botão salvar nova nota', () => {
    cy.get('#botao_09').click();
});

Entao(`a tela "Your Archive" será aberta e a nota foi criada`,() => {
    cy.url().should('contain', '/');
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

Dado('esteja na tela de Criar nota', () => {
    cy.visit('/notes/new');
});

Quando (`o usuário definir um nome {string}`, (nome) => {
    cy.get('#form_08').type(nome);
});

Quando (`um conteúdo {string}`, (conteudo) => {
    cy.get('#form_09').type(conteudo);
});

Quando ('clicar no botão salvar nova nota', () => {
    cy.get('#botao_09').click();
});

Entao(`a tela "Your Archive" será aberta e a nota foi criada`,() => {
    cy.url().should('contain', '/');
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

Dado('esteja na tela de Criar nota', () => {
    cy.visit('/notes/new');
});

Quando (`o usuário definir um nome {string}`, (nome) => {
    cy.get('#form_08').type(nome);
});

Quando (`um conteúdo {string}`, (conteudo) => {
    cy.get('#form_09').type(conteudo);
});

Quando ('clicar no botão salvar nova nota', () => {
    cy.get('#botao_09').click();
});

Entao(`a tela "Your Archive" será aberta e a nota foi criada`,() => {
    cy.url().should('contain', '/');
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

Dado('esteja na tela de Criar nota', () => {
    cy.visit('/notes/new');
});

Quando (`o usuário definir um nome {string}`, (nome) => {
    cy.get('#form_08').type(nome);
});

Quando (`um conteúdo {string}`, (conteudo) => {
    cy.get('#form_09').type(conteudo);
});

Quando ('clicar no botão salvar nova nota', () => {
    cy.get('#botao_09').click();
});

Entao(`a tela "Your Archive" será aberta e a nota foi criada`,() => {
    cy.url().should('contain', '/');
});

