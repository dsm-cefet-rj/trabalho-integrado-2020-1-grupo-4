import { Given as Dado, When as Quando, Then as Entao } from "cypress-cucumber-preprocessor/steps";

Dado('que é exibida a tela de cadastro', () => {
    cy.visit('./signup');
});

Quando(`insiro nome {string}, email {string} e senha {string}`, (nome, email, senha) =>{
    //cy.get('#form_01').type(nome);
    cy.get('#form_02').type(email);
    //cy.get('#form_03').type(email);//confirmacao
    cy.get('#form_04').type(senha);
    cy.get('#form_05').type(senha);//confirmacao
});

Quando(`clico no botão cadastrar`, () => {
    cy.get('#botao_04').click();//cadastrar
    cy.get('#botao_05').click();//fechar modal
});

//FUNCTION DO ENTAO JA IMPLEMENTADA NO ARQUIVO DE LOGIN