import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {useSelector} from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Route } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import {Signup} from './Signup';

window.alert = jest.fn();

// Mocking redux module
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn( () => jest.fn((param) => param) )
}));

// Mocking the state
const mockAppState = {
    users: [
        {email: "grupo4@teste.com", 
        password: "$2a$10$NI/hL/IqIaZTQce5olXsAuu9G6cowlyp2tZqYJtsszFUVC/HBGCL.", 
        id: "f560ba87-b8df-4c70-bfc5-7fb112309b07"
    }]    
}

const fieldTest = async (nomeParam, emailParam, confirmEmailParam, senhaParam, confirmSenhaParam, 
                        isNomeValido, isEmailValido, isConfirmEmailValido, isSenhaValida, isConfirmSenhaValida, 
                        msgEsperada = null, path = "/", containerParam = null, historyParam = null) => {

    const history = historyParam ? historyParam : createMemoryHistory();
    const { container } = containerParam ? containerParam : render(<Router history={history}><Signup/></Router>);

    const nome = container.querySelector("#form_01");
    const email = container.querySelector("#form_02");
    const confirmEmail = container.querySelector("#form_03");
    const senha = container.querySelector("#form_04");
    const confirmSenha = container.querySelector("#form_05");
    const submitButton = container.querySelector("#botao_04");
    
    fireEvent.input(nome, {target: {value: nomeParam}});
    fireEvent.input(email, {target: {value: emailParam}});
    fireEvent.input(confirmEmail, {target: {value: confirmEmailParam}});
    fireEvent.input(senha, {target: {value: senhaParam}});
    fireEvent.input(confirmSenha, {target: {value: confirmSenhaParam}});
    
    let valid = isNomeValido && isEmailValido && isConfirmEmailValido && isSenhaValida && isConfirmSenhaValida;
    
    if(valid){
        await act(async () => {
            fireEvent.submit(submitButton);
        });
        
        expect(history.location.pathname).toBe(path);
    }else{
        expect(submitButton).toHaveAttribute('disabled');
    }
}


describe("Singup unit", () => {

    beforeEach(() => {
        useSelector.mockImplementation(callback => {
          return callback(mockAppState);
        });
    });
    
    afterEach(() => {
        useSelector.mockClear();
        //addProjetoServer.mockClear();
    });

    //####### CAMPO NOME ################################

    test('Nome vazio',  async () => {
        fieldTest('', "teste@gmail.com", "teste@gmail.com", "Teste123", "Teste123",
                  false, true, true, true, true);
    });

    test('Nome limite inferior válido',  async () => {
        fieldTest('abc', "teste@gmail.com", "teste@gmail.com", "Teste123", "Teste123",
                  true, true, true, true, true);
    });

    test('Nome válido',  async () => {
        fieldTest('Teste Grupo', "teste@gmail.com", "teste@gmail.com", "Teste123", "Teste123",
                  true, true, true, true, true);
    });

    test('Nome limite superior válido -1',  async () => {
        fieldTest('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw', "teste@gmail.com", "teste@gmail.com", "Teste123", "Teste123",
                  true, true, true, true, true);
    });

    test('Nome limite superior válido',  async () => {
        fieldTest('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwx', "teste@gmail.com", "teste@gmail.com", "Teste123", "Teste123",
                  true, true, true, true, true);
    });

    test('Nome limite superior inválido',  async () => {
        fieldTest('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy', "teste@gmail.com", "teste@gmail.com", "Teste123", "Teste123",
                  false, true, true, true, true);
    });

    //####### CAMPO EMAIL ################################

    test('Email vazio',  async () => {
        fieldTest('Teste Grupo', "", "", "Teste123", "Teste123",
                  true, false, true, true, true);
    });

    test('Email limite inferior válido',  async () => {
        fieldTest('Teste Grupo', "abc@de.com", "abc@de.com", "Teste123", "Teste123",
                  true, false, true, true, true);
    });

    test('Email válido',  async () => {
        fieldTest('Teste Grupo', "teste@gmail.com", "teste@gmail.com", "Teste123", "Teste123",
                  true, true, true, true, true);
    });

    test('Email limite superior válido -1',  async () => {
        fieldTest('Teste Grupo', "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklm@teste.com", "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklm@teste.com", "Teste123", "Teste123",
                  true, true, true, true, true);
    });

    test('Email limite superior válido',  async () => {
        fieldTest('Teste Grupo', "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmn@teste.com", "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmn@teste.com", "Teste123", "Teste123",
                  true, true, true, true, true);
    });

    test('Email limite superior inválido',  async () => {
        fieldTest('Teste Grupo', "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmno@teste.com", "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmno@teste.com", "Teste123", "Teste123",
                  true, false, true, true, true);
    });

    test('Email inválido',  async () => {
        fieldTest('Teste Grupo', "testegmail.com", "testegmail.com", "Teste123", "Teste123",
                  true, false, true, true, true);
    });

    //####### CAMPO CONFIRMACAO EMAIL ################################

    test('Confirmação de Email inválido, diferente do email anterior',  async () => {
        fieldTest('Teste Grupo', "teste@gmail.com", "teste1@gmail.com", "Teste123", "Teste123",
                  true, true, false, true, true);
    });

    test('Confirmação de Email válida',  async () => {
        fieldTest('Teste Grupo', "teste@gmail.com", "teste@gmail.com", "Teste123", "Teste123",
                  true, true, true, true, true);
    });

    //####### CAMPO SENHA ################################

    test('Senha vazia',  async () => {
        fieldTest('Teste Grupo', "teste@gmail.com", "teste@gmail.com", "", "",
                  true, true, true, false, true);
    });

    test('Senha limite inferior válido',  async () => {
        fieldTest('Teste Grupo', "teste@gmail.com", "teste@gmail.com", "Te123456", "Te123456",
                  true, true, true, true, true);
    });

    test('Senha válida',  async () => {
        fieldTest('Teste Grupo', "teste@gmail.com", "teste@gmail.com", "Teste123", "Teste123",
                  true, true, true, true, true);
    });

    test('Senha limite superior válido -1',  async () => {
        fieldTest('Teste Grupo', "teste@gmail.com", "teste@gmail.com", "Abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrst123", "Abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrst123",
                  true, true, true, true, true);
    });

    test('Senha limite superior válido',  async () => {
        fieldTest('Teste Grupo', "teste@gmail.com", "teste@gmail.com", "Abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrst1234", "Abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrst1234",
                  true, true, true, true, true);
    });

    test('Senha limite superior inválido',  async () => {
        fieldTest('Teste Grupo', "teste@gmail.com", "teste@gmail.com", "Abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrst12345", "Abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrst12345",
                  true, true, true, false, true);
    });

    test('Senha inválida, sem números',  async () => {
        fieldTest('Teste Grupo', "teste@gmail.com", "teste@gmail.com", "Senhateste", "Senhateste",
                  true, true, true, false, true);
    });

    test('Senha inválida, sem letras minúsculas',  async () => {
        fieldTest('Teste Grupo', "teste@gmail.com", "teste@gmail.com", "SENHATESTE123", "SENHATESTE123",
                  true, true, true, false, true);
    });

    test('Senha inválida, sem letras maísculas',  async () => {
        fieldTest('Teste Grupo', "teste@gmail.com", "teste@gmail.com", "senhateste123", "senhateste123",
                  true, true, true, false, true);
    });

    test('Senha inválida, com caractere especial',  async () => {
        fieldTest('Teste Grupo', "teste@gmail.com", "teste@gmail.com", "Teste@123", "Teste@123",
                  true, true, true, false, true);
    });

    //####### CAMPO CONFIRMACAO SENHA ################################

    test('Confirmação de Senha inválida, diferente da senha anterior',  async () => {
        fieldTest('Teste Grupo', "teste@gmail.com", "teste@gmail.com", "Teste1234", "Teste123",
                  true, true, true, true, false);
    });

    test('Confirmação de Senha válida',  async () => {
        fieldTest('Teste Grupo', "teste@gmail.com", "teste@gmail.com", "Teste1234", "Teste1234",
                  true, true, true, true, true);
    });

    //####### BOTAO CADASTRAR ################################

    test('Clicar no botão cadastrar sem campos preenchidos', () => {throw 'Not implemented yet'});

    test('Clicar no botão cadastrar com os campos preenchidos', () => {throw 'Not implemented yet'});

});