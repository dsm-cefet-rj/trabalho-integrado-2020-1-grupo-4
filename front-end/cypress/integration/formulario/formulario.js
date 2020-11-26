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

Dado('esteja na tela "Your Archive"', (nome, senha) => {
    cy.visit('/');
})

Quando(`clicar em um formulário existente`, () => {
    cy.get('#tabela_02 > .form').first().click(); //TODO pegar campo form certo quando for implementado
});

Entao(`deve ser aberta uma tela contendo o formulário.`,() => {
    cy.url().should('include', '/forms/1');
    cy.get('#form_10').should('eq', 'Formulario X');
});

Dado(`que o usuário esteja na tela de edição do formulario de id {string}`, (id) => {
    cy.visit('/forms/'+id);
    cy.get('#botao_31').click();
});

Quando(`definir um nome {string} para o formulario`, (nomeNovo) => {
    cy.get('#form_10').clear();
    cy.get('#form_10').type(nomeNovo);
});

Quando(`definir um tipo de formulario {string} para o formulario`, (nomeNovo) => {
    cy.get('#form_10').clear();
    cy.get('#form_10').type(nomeNovo);
});

Quando(`definir um titulo {string} para o formulario`, (nomeNovo) => {
    cy.get('#form_10').clear();
    cy.get('#form_10').type(nomeNovo);
});

Quando(`clicar no botão "Save"`, (nomeNovo) => {
    cy.get('#botao_29').click();
});

Entao(`então a aplicação retornará à tela "Your Archive"`,() => {
    cy.url().should('eq', 'http://localhost:3000/');
});

Entao(`o formulário de id {string} tem o nome alterado para {string}`,(id, nome) => {
    await window.fetch(URL +'forms?id=' + u.id, {method: 'GET'}).then((response) => {
        await window.fetch(URL +'forms', {method: 'PUT', body: JSON.stringify(response),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });
    });
    //fazer um assert pra ver se o nome mudou
});