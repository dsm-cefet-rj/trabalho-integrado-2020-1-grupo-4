import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {useSelector} from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Route } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import {Login} from './Login';

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


const fieldTest = async (emailParam, senhaParam, isEmailValido, isSenhaValida, msgEsperada = null, path = "/", containerParam = null, historyParam = null) => {
    const history = historyParam ? historyParam : createMemoryHistory();
    const { container } = containerParam ? containerParam : render(<Router history={history}><Login/></Router>);

    const email = container.querySelector("#form_06");
    const senha = container.querySelector("#form_07");
    const submitButton = container.querySelector("#botao_07");
    
    fireEvent.input(email, {target: {value: emailParam}});
    fireEvent.input(senha, {target: {value: senhaParam}});      
    
    if(isEmailValido && isSenhaValida){
        await act(async () => {
            fireEvent.submit(submitButton);
        });
        
        expect(history.location.pathname).toBe(path);
    }else{
        expect(submitButton).toHaveAttribute('disabled');
    }
}

const buttonTest = async (isFormValido,  containerParam = null, historyParam = null) => {
    const history = historyParam ? historyParam : createMemoryHistory();
    const { container } = containerParam ? containerParam : render(<Router history={history}><Login/></Router>);

    const email = container.querySelector("#form_06");
    const senha = container.querySelector("#form_07");

    const submitButton = container.querySelector("#botao_07");
    if(isFormValido){
        fireEvent.input(email, {target: {value: 'emailParam'}});
        fireEvent.input(senha, {target: {value: 'senhaParam'}});

        expect(container.querySelector("#botao_07").getAttribute("disabled")).toBe("");
    }else{
        expect(container.querySelector("#botao_07")).toHaveAttribute('disabled');
    }

}

describe("Login unit", () => {

    beforeEach(() => {
        useSelector.mockImplementation(callback => {
          return callback(mockAppState);
        });
    });
    
    afterEach(() => {
        useSelector.mockClear();
        //addProjetoServer.mockClear();
    });


    //####### CAMPO EMAIL ################################

    test('Email válido, cadastrado',  async () => {
        fieldTest('grupo4@teste.com', 'grupo4321', true, true);
    });

    test('Email inválido, não cadastrado',  async () => {
        fieldTest('grupo5@teste.com', 'grupo4321', false, true);
    });

    test('Email vazio',  async () => {
        fieldTest('', 'abc1234', false, true);
    });

    //####### CAMPO SENHA ################################

    test('Senha válida, correspondente ao email',  async () => {
        fieldTest('grupo4@teste.com', 'grupo4321', true, true);
    });

    test('Senha inválida, incorreta',  async () => {
        fieldTest('grupo4@teste.com', 'grupo54321', true, false);
    });

    test('Senha vazia',  async () => {
        fieldTest('grupo4@teste.com', '', true, false);
    });

    //####### BOTAO ENTRAR ################################

    test('Clicar no botão entrar sem campos preenchidos',  async () => {
        buttonTest(false);
    });
    test('Clicar no botão entrar com os campos preenchidos',  async () => {
        buttonTest(true);
    });

});
