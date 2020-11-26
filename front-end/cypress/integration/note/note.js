import { Given as Dado, When as Quando, Then as Entao, And } from "cypress-cucumber-preprocessor/steps";

const URL = 'http://192.168.15.4:3004/';

Dado('que temos notas cadastradas', async function (notas) {
    this.notas = notas.hashes();
    var i = 0;

    //aqui deveria incluir os dados em um banco de dados de teste.
    for(let u of this.notas){
        
        let u_cast = {
            ...p,
            id: parseInt(u.id)
        }

        this.notas[i] = u_cast;
        await window.fetch(URL +'notas/' + u.id, {method: 'DELETE'})
        await window.fetch(URL +'notas', {method: 'POST', body: JSON.stringify(u_cast),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });

        i++;
    }
});

Dado(`que um usuário {string} e senha {string}`, (email,senha) => {
    cy.visit('/login');
    cy.get('#form_06').type(email);
    cy.get('#form_07').type(senha);
    cy.get('#botao_07').click();
    cy.wait(500);
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

