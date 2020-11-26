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

// Cenário: Nova nota
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

Quando (`o usuário definir um nome {string} para a nota`, (nome) => {
    cy.get('#form_08').type(nome);
});

Quando (`um conteúdo {string} para a nota`, (conteudo) => {
    cy.get('#form_09').type(conteudo);
});

Quando ('clicar no botão salvar nova nota', () => {
    cy.get('#botao_09').click();
});

Entao(`a tela "Your Archive" será aberta e a nota foi criada`,() => {
    cy.url().should('contain', '/');
});


// Cenário: Editar uma nota existente
Dado('esteja na tela de Editar nota', () => {
    cy.visit('/notes/edit');
});

Quando ('clicar no botão salvar nota editada', () => {
    cy.get('#botao_15').click();
});

Entao('o usuário poderá ver sua nota editada na lista de notas existentes',() => {
    cy.url().should('contain', '/');
});


// Cenário: Upload de Arquivos nas Notas
Quando ('clicar no botão Choose File, seleciona o arquivo', () => {
   // Caminho do arquivo a ser anexado.
   const filePath = 'anexo2.jpg';
   cy.get('#botao_13').attachFile(filePath);
});


// Cenário: Visualizar Nota
Dado(`esteja na tela de "Your Archive"`, () => {
    cy.visit('/');
});

Quando ('ele clicar em uma nota', () => {
    cy.get('#tabela_02 > .note').first().click();
});

Entao('a nota deve ser aberta para visualização',() => {
    cy.url().should('include', '/notes/1');
    cy.get('#form_08').should('eq', 'Nota1');
});


// Cenário: Excluir uma nota
Quando ('clicar no botão Delete para deletar nota', () => {
    cy.get('#botao_14').click();
});

Quando ('confirmar a exclusão de nota', () => {
    cy.get('#botao_36').click();
});

Entao(`a aplicação retornará para "Your Archive" e a nota será excluída`,() => {
    cy.url().should('contain', '/');
});
