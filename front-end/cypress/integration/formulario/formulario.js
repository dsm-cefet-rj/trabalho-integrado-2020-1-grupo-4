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

Dado(`que eu esteja autenticado como o usuário {string} com senha {string}`, (nome, senha) => {
    //TODO ver se ja está logado
    cy.visit('/login');
    cy.get('#form_06').type(email);
    cy.get('#form_07').type(senha);
    cy.get('#botao_07').click();
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
