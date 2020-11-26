import { Given as Dado, When as Quando, Then as Entao } from "cypress-cucumber-preprocessor/steps";

const URL = 'http://localhost:3001/';

Dado('que temos pastas cadastradas', async function (pastas) {
    this.pastas = pastas.hashes();
    var i = 0;

    //aqui deveria incluir os dados em um banco de dados de teste.
    for(let p of this.pastas){
        
        let p_cast = {
            ...p,
            id: parseInt(p.id)
        }

        this.pastas[i] = p_cast;
        await window.fetch(URL +'folders/' + u.id, {method: 'DELETE'})
        await window.fetch(URL +'folders', {method: 'POST', body: JSON.stringify(p_cast),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });

        i++;
    }
});

Quando (`clicar no botão New Folder`, () => {
    cy.get('#btn-new-folder').click(); //solicitar a id do botão New Folder
});

Entao(`A tela de pasta deve ser aberta, uma nova pasta foi criada`,() => {
    cy.url().should('include', '/newPaste'); //solicitar a rota de Nova Pasta
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

Quando (`clicar em uma pasta`, () => {
    cy.get('#btn_pasta').click(); //obter um id correto para um botão de pasta
});

Entao(`a tela de pasta deve ser aberta`,() => {
    cy.url().should('contain', '/folder');
});

Quando (`clicar em "New Folder"`, () => {
    cy.get('#botao_11').click();
});


Dado('esteja navegando dentro de uma pasta', () =>{
    //TODO
});

Quando('clicar no botão de "Upload"', () =>{
    cy.get('#botao_33').click();
});

Entao('a tela de pasta deverá conter um novo arquivo', () => {
    //TODO
});

Dado('tenha aberto um arquivo' , () =>{
    //TODO
});

Quando('clicar em "Deletar"', () =>{
    cy.get('#botao_35').click();
});

Dado('que é exibida a tela de pastas', () => {
    cy.visit('/dashboard/folders');
});