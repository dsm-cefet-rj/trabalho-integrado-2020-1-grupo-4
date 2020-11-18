import { Given as Dado, When as Quando, Then as Entao, And } from "cypress-cucumber-preprocessor/steps";

const URL = 'http://192.168.15.4:3004/';

Dado('que temos usuarios cadastrados', async function (usuarios) {
    this.usuarios = usuarios.hashes();
    var i = 0;

    //aqui deveria incluir os dados em um banco de dados de teste.
    for(let u of this.usuarios){
        
        let u_cast = {
            ...p,
            id: parseInt(u.id)
        }

        this.usuarios[i] = u_cast;
        await window.fetch(URL +'usuarios/' + u.id, {method: 'DELETE'})
        await window.fetch(URL +'usuarios', {method: 'POST', body: JSON.stringify(u_cast),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });

        i++;
    }
});

Dado('que é exibida a tela de login', () => {
    cy.visit('./');
    cy.get('#botao_01').click();
});

Quando(`insiro email {string} e senha {string}`, (email, senha) =>{
    cy.get('#form_06').type(email);
    cy.get('#form_07').type(senha);
});

Quando(`clico no botão entrar`, () => {
    cy.get('#botao_07').click();
});

Entao(`a tela Your Archive é exibida`,() => {

});