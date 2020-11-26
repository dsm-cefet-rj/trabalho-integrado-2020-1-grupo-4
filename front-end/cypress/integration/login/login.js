import { Given as Dado, When as Quando, Then as Entao, And } from "cypress-cucumber-preprocessor/steps";

const URL = 'http://localhost:3001/';

Dado('que temos usuarios cadastrados', async function (usuarios) {
    this.usuarios = usuarios.hashes();
    var i = 0;

    //aqui deveria incluir os dados em um banco de dados de teste.
    for(let u of this.usuarios){
        
        let u_cast = {
            ...u,
            id: parseInt(u.id)
        }

        this.usuarios[i] = u_cast;
        //await window.fetch(URL +'users/' + u.id, {method: 'DELETE'}) //NAO TEM METODO DELETE PARA USERS
        await window.fetch(URL +'users', {method: 'POST', body: JSON.stringify(u_cast),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });

        i++;
    }
});

Dado('que é exibida a tela de login', () => {
    cy.visit('/login');
});

Quando(`insiro email {string} e senha {string}`, (email, senha) =>{
    cy.get('#form_06').type(email);
    cy.get('#form_07').type(senha);
});

Quando(`clico no botão entrar`, () => {
    cy.server();
    cy.route('/users?email*').as('getUser');
    cy.get('#botao_07').click();
    cy.wait('@getUser');
});

Entao(`a tela Your Archive é exibida`,() => {
    cy.url().should('eq', 'http://localhost:3000/'); // ALTERAR ESSE ASSERT
});