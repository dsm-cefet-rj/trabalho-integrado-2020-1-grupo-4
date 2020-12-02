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
        await window.fetch(URL +'folders/' + p.id, {method: 'DELETE'})
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
        Quando (`o usuário clicar em Deletar`, () => {
            cy.get('#btn_deletar').click() //obter o id correto do botão deletar
        });
        Entao(`a aplicação retornará para "Pasta" e o arquivo será excluído `,() => {
            cy.url().should('contain', '/')
        });
        E(`O arquivo excluído não deve mais estar nessa pasta`,() => {
            cy.get('#1').should('Não existe')
        });


Dado('esteja na tela da Pasta', () => {

    cy.visit('/yourarchive', {
        qs: {
            pasta: '1'
        }
    }) //solicitar a rota de uma pasta existente, verificar se existem parametros na rota
        //aqui eu considerei como tendo parâmetros, pois existem varias pastas com seus ids
});
        Quando (`o usuário clicar em Upload`, () => {
            cy.get('#btn_upload').click() //solicitar a id de Botão Upload.
        });
        Entao(`A tela de pasta deverá conter um novo arquivo`,() => {
            cy.url().should('contain', '/') //ver um jeito de saber como um novo arquivo estará lá
        });


        Quando('clico em um arquivo', () =>{
            cy.get('#tabela_06 > .file').first().click() //TODO pegar campo file certo quando for implementado
        });
        Entao('deve ser exibida a tela com as informações do arquivo', () => {
            cy.url().should('include', '/file/1')
            cy.get('#botao_34').should('be.visible') // nao tem ID do nome do arquivo
        });

