import { Given as Dado, When as Quando, Then as Entao} from "cypress-cucumber-preprocessor/steps";

Dado(`que estou autenticado com email {string} e senha {string}`, (email, senha) => {
    cy.visit('./login');
    cy.get('#form_06').type(email);
    cy.get('#form_07').type(senha);
    cy.server();
    cy.route('/users?email*').as('getUser');
    cy.get('#botao_07').click();
    cy.wait('@getUser');
});

Dado(`que é exibida a tela de "Your Archive"`, () =>{
    cy.visit('./dashboard');
});

Quando('clico no botão sair', () =>{
    cy.get('#botao_07').click();
});

Entao('a tela de login é exibida', () => {
    cy.url().should('contain', '/login');
});