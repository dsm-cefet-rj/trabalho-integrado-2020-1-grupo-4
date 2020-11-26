import { Given as Dado, When as Quando, Then as Entao} from "cypress-cucumber-preprocessor/steps";

const URL = 'http://localhost:3001/';

Dado(`que temos Formulários cadastrados`, async function (forms) {
    this.forms = forms.hashes();
    var i = 0;

    //aqui deveria incluir os dados em um banco de dados de teste.
    for(let u of this.forms){
        
        let u_cast = {
            ...u,
            id: parseInt(u.id)
        }

        this.forms[i] = u_cast;
        await window.fetch(URL +'forms/' + u.id, {method: 'DELETE'})
        await window.fetch(URL +'forms', {method: 'POST', body: JSON.stringify(u_cast),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });

        i++;
    }
});

Dado('esteja na tela "Your Archive"', () => {
    cy.visit('/home/dashboard');
});

Quando(`clicar em um formulário existente`, () => {
    cy.get('#tabela_02 > .form').first().click(); //TODO pegar campo form certo quando for implementado
});

Entao(`deve ser aberta uma tela contendo o formulário.`,() => {
    cy.url().should('include', '/forms/1');
    cy.get('#form_10').should('eq', 'Formulario X');
});

Dado('que é exibida a tela de formulários', () => {
    cy.visit('/dashboard/forms');
});

Quando('confirma a exclusão', () =>{
    //cy.get('#botao_').click(); // QUAL O ID DO BTN SIM
});

Quando('cancela a exclusão', () =>{
    //cy.get('#botao_').click(); // QUAL O ID DO BTN NAO
});

Dado(`que o usuário esteja na tela de edição do formulario de id {string}`, (id) => {
    cy.visit('/forms/edit/'+id);
});

Quando(`definir um nome {string} para o formulario`, (text) => {
    cy.get('#form_10').clear();
    cy.get('#form_10').type(text);
});

Quando(`definir um tipo de formulario {string} para o formulario`, (text) => {
    cy.get('#botao_foo').select(text); //botao de placeholder, pois nao foi apresentado na listagem de ID disponibilizada
});

Quando(`definir um titulo {string} para o formulario`, (text) => {
    cy.get('#form_11').clear();
    cy.get('#form_11').type(text);
});

Quando(`definir um texto {string} para o formulario`, (text) => {
    cy.get('#form_12').clear();
    cy.get('#form_12').type(text);
});

Quando(`definir um tipo {string} para a pergunta {string} do formulario`, (text) => {
    cy.get('#botao_26').select(text);
});

Quando(`definir um titulo {string} para a pergunta {string} do formulario`, (text) => {
    cy.get('#form_13').clear();
    cy.get('#form_13').type(text);
});

Quando(`definir um texto {string} para a pergunta {string} do formulario`, (text) => {
    cy.get('#form_14').clear();
    cy.get('#form_14').type(text);
});

Quando(`clicar no botão "Save"`, () => {
    cy.get('#botao_29').click();
});

Entao(`então a aplicação retornará à tela "Your Archive"`,() => {
    cy.url().should('include', '/home/dashboard');
});

Entao(`o formulário de id {string} tem o nome alterado para {string}`,(id, nome) => {
    window.fetch(URL +'forms?id=' + id, {method: 'GET'}).then((response) => { //checa no banco
        expect(response.nome).to.equal(nome);
    });
    cy.get('#tabela_02 > .form').first().should('have.value', nome) //checa na tela
});

Quando(`clicar no botão de "setinha" no canto superior esquerdo da tela`, () => {
    cy.get('#botao_30').click();
});

Entao(`nenhum dado será alterado`,() => {
    window.fetch(URL +'forms?id=' + id, {method: 'GET'}).then((response) => { //checa no banco
        expect(response).to.equal(this.forms[0]);
    });
});

Dado('que esteja na tela de criação de formulário', () => {
    cy.visit('/forms/new');
});

Quando(`clicar no botão de "setinha" no canto superior esquerdo da tela`, () => {
    cy.get('#botao_30').click();
});