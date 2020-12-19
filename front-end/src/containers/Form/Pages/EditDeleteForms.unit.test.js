//Editar um formulário

import {React} from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {useSelector} from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Route } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import {EditForm} from './EditForm';

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


const fieldTest = async (nomeParam, tipoParam, tituloParam, conteudoParam, tipoPerguntaParam, tituloPerguntaParam, conteudoPerguntaParam, multiplaEscolhaParam, isNameValido, isTipoValido, isTituloValido, isConteudoValido, isTipoPerguntaValido, isTituloPerguntaValido, isConteudoPerguntaValido, isMultiplaEscolhaValido, msgEsperada = null, path = "/", containerParam = null, historyParam = null) => {
    const history = historyParam ? historyParam : createMemoryHistory();
    const { container } = containerParam ? containerParam : render(<Router history={history}><EditForm/></Router>);

    const nome = container.querySelector("#form_10");
    const tipo = container.querySelector("#botao_25");
    const titulo = container.querySelector("#form_11");
    const conteudo = container.querySelector("#form_12");
    const tipoPergunta = container.querySelector("#form_26");
    const tituloPergunta = container.querySelector("#form_13");
    const conteudoPergunta = container.querySelector("#form_14");
    const multiplaEscolha = container.querySelector("#botao_27");

    const submitButton = container.querySelector("#botao_29");
    
    fireEvent.input(nome, {target: {value: nomeParam}});
    fireEvent.input(tipo, {target: {value: tipoParam}});
    fireEvent.input(titulo, {target: {value: tituloParam}});
    fireEvent.input(conteudo, {target: {value: conteudoParam}});      
    fireEvent.input(tipoPergunta, {target: {value: tipoPerguntaParam}});
    fireEvent.input(tituloPergunta, {target: {value: tituloPerguntaParam}});
    fireEvent.input(conteudoPergunta, {target: {value: conteudoPerguntaParam}});
    fireEvent.input(multiplaEscolha, {target: {value: multiplaEscolhaParam}});

    if(isNameValido && isTipoValido && isTituloValido && isConteudoValido && isTipoPerguntaValido && isTituloPerguntaValido && isConteudoPerguntaValido && isMultiplaEscolhaValido){
        await act(async () => {
            fireEvent.submit(submitButton);
        });
        
        expect(history.location.pathname).toBe(path);
    }else{
        expect(container.querySelector("#botao_29")).toHaveAttribute('disabled');
    }
}

const buttonSaveTest = async (isFormValido, isUniqueForm,  containerParam = null, historyParam = null) => {
    const history = historyParam ? historyParam : createMemoryHistory();
    const { container } = containerParam ? containerParam : render(<Router history={history}><EditForm/></Router>);

    const nome = container.querySelector("#form_10");
    const tipo = container.querySelector("#botao_25");
    const titulo = container.querySelector("#form_11");
    const conteudo = container.querySelector("#form_12");
    const tipoPergunta = container.querySelector("#form_26");
    const tituloPergunta = container.querySelector("#form_13");
    const conteudoPergunta = container.querySelector("#form_14");
    const multiplaEscolha = container.querySelector("#botao_27");

    const submitButton = container.querySelector("#botao_29");
    if(isFormValido && isUniqueForm){
        fireEvent.input(nome, {target: {value: 'nomeParam'}});
        fireEvent.input(tipo, {target: {value: 'tipoParam'}});
        fireEvent.input(titulo, {target: {value: 'tituloParam'}});
        fireEvent.input(conteudo, {target: {value: 'conteudoParam'}});      
        fireEvent.input(tipoPergunta, {target: {value: 'tipoPerguntaParam'}});
        fireEvent.input(tituloPergunta, {target: {value: 'tituloPerguntaParam'}});
        fireEvent.input(conteudoPergunta, {target: {value: 'conteudoPerguntaParam'}});
        fireEvent.input(multiplaEscolha, {target: {value: 'multiplaEscolhaParam'}});

        expect(submitButton.getAttribute("disabled")).toBe("");
    }else{
        expect(submitButton).toHaveAttribute('disabled');
    }

}

const buttonAddQuestionTest = async (isFormValido,  containerParam = null, historyParam = null) => {
    const history = historyParam ? historyParam : createMemoryHistory();
    const { container } = containerParam ? containerParam : render(<Router history={history}><EditForm/></Router>);

    const nome = container.querySelector("#form_10");
    const tipo = container.querySelector("#botao_25");
    const titulo = container.querySelector("#form_11");
    const conteudo = container.querySelector("#form_12");
    const tipoPergunta = container.querySelector("#form_26");
    const tituloPergunta = container.querySelector("#form_13");
    const conteudoPergunta = container.querySelector("#form_14");
    const multiplaEscolha = container.querySelector("#botao_27");

    const addButton = container.querySelector("#botao_38");
    if(isFormValido){
        fireEvent.input(nome, {target: {value: 'nomeParam'}});
        fireEvent.input(tipo, {target: {value: 'tipoParam'}});
        fireEvent.input(titulo, {target: {value: 'tituloParam'}});
        fireEvent.input(conteudo, {target: {value: 'conteudoParam'}});      
        fireEvent.input(tipoPergunta, {target: {value: 'tipoPerguntaParam'}});
        fireEvent.input(tituloPergunta, {target: {value: 'tituloPerguntaParam'}});
        fireEvent.input(conteudoPergunta, {target: {value: 'conteudoPerguntaParam'}});
        fireEvent.input(multiplaEscolha, {target: {value: 'multiplaEscolhaParam'}});

        expect(addButton.getAttribute("disabled")).toBe("");
    }else{
        expect(addButton).toHaveAttribute('disabled');
    }

}

const buttonDeleteTest = async (isFormValido,  containerParam = null, historyParam = null) => {
    const history = historyParam ? historyParam : createMemoryHistory();
    const { container } = containerParam ? containerParam : render(<Router history={history}><EditNote/></Router>);

    const nome = container.querySelector("#form_10");
    const tipo = container.querySelector("#botao_25");
    const titulo = container.querySelector("#form_11");
    const conteudo = container.querySelector("#form_12");
    const tipoPergunta = container.querySelector("#form_26");
    const tituloPergunta = container.querySelector("#form_13");
    const conteudoPergunta = container.querySelector("#form_14");
    const multiplaEscolha = container.querySelector("#botao_27");

    const deleteButton = container.querySelector("#botao_32");
    if(isFormValido){
        fireEvent.input(nome, {target: {value: 'nomeParam'}});
        fireEvent.input(tipo, {target: {value: 'tipoParam'}});
        fireEvent.input(titulo, {target: {value: 'tituloParam'}});
        fireEvent.input(conteudo, {target: {value: 'conteudoParam'}});      
        fireEvent.input(tipoPergunta, {target: {value: 'tipoPerguntaParam'}});
        fireEvent.input(tituloPergunta, {target: {value: 'tituloPerguntaParam'}});
        fireEvent.input(conteudoPergunta, {target: {value: 'conteudoPerguntaParam'}});
        fireEvent.input(multiplaEscolha, {target: {value: 'multiplaEscolhaParam'}});

        // Talvez um pop-up de confirmação de exclusão deveria aparecer, pois tem itens preenchidos.
        await act(async () => {
            fireEvent.submit(deleteButton);
        });

        expect(history.location.pathname).toBe(path);
    }else{
        await act(async () => {
            fireEvent.submit(deleteButton);
        });

        expect(history.location.pathname).toBe(path);
    }

}

const buttonCancelTest = async (isFormValido,  containerParam = null, historyParam = null) => {
    const history = historyParam ? historyParam : createMemoryHistory();
    const { container } = containerParam ? containerParam : render(<Router history={history}><EditForm/></Router>);

    const nome = container.querySelector("#form_10");
    const tipo = container.querySelector("#botao_25");
    const titulo = container.querySelector("#form_11");
    const conteudo = container.querySelector("#form_12");
    const tipoPergunta = container.querySelector("#form_26");
    const tituloPergunta = container.querySelector("#form_13");
    const conteudoPergunta = container.querySelector("#form_14");
    const multiplaEscolha = container.querySelector("#botao_27");

    const cancelButton = container.querySelector("#botao_28");
    if(isFormValido){
        fireEvent.input(nome, {target: {value: 'nomeParam'}});
        fireEvent.input(tipo, {target: {value: 'tipoParam'}});
        fireEvent.input(titulo, {target: {value: 'tituloParam'}});
        fireEvent.input(conteudo, {target: {value: 'conteudoParam'}});      
        fireEvent.input(tipoPergunta, {target: {value: 'tipoPerguntaParam'}});
        fireEvent.input(tituloPergunta, {target: {value: 'tituloPerguntaParam'}});
        fireEvent.input(conteudoPergunta, {target: {value: 'conteudoPerguntaParam'}});
        fireEvent.input(multiplaEscolha, {target: {value: 'multiplaEscolhaParam'}});

        // Talvez um pop-up de confirmação de cancelamento deveria aparecer, pois tem itens preenchidos.
        await act(async () => {
            fireEvent.submit(cancelButton);
        });

        expect(history.location.pathname).toBe(path);
    }else{
        await act(async () => {
            fireEvent.submit(cancelButton);
        });

        expect(history.location.pathname).toBe(path);
    }

}


describe("EditForm unit", () => {

    beforeEach(() => {
        useSelector.mockImplementation(callback => {
          return callback(mockAppState);
        });
    });
    
    afterEach(() => {
        useSelector.mockClear();
        //addProjetoServer.mockClear();
    });

    //#### CAMPO NOME FORMULÁRIO #####
    test('Nome de formulário vazio', () => {
        fieldTest('', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', false, true, true, true, true, true, true, true);
    });

    test('Nome de formulário limite inferior válido', () => {
        fieldTest('TesteInf', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    test('Nome de formulário limite superior -1 válido', () => {
        fieldTest('Teste limite superior -1 valido &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    test('Nome de formulário limite superior válido', () => {
        fieldTest('Teste limite superior valido &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    test('Nome de formulário limite superior inválido', () => {
        fieldTest('Teste limite superior -1 valido &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', false, true, true, true, true, true, true, true);
    });

    test('Nome de formulário entre limites válido', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    //#### CAMPO TIPO FORMULÁRIO####
    test('Tipo de formulário vazio', () => {
        fieldTest('Nome Teste válido', '', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, false, true, true, true, true, true, true);
    });

    test('Tipo de formulário entre limites válido', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    //#### CAMPO TITULO#####
    test('Título de formulário vazio', () => {
        fieldTest('Nome Teste válido', '1', '', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, false, true, true, true, true, true);
    });

    test('Título de formulário limite inferior válido', () => {
        fieldTest('Nome Teste válido', '1', 'tituloIf', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    test('Título de formulário limite superior -1 válido', () => {
        fieldTest('Nome Teste válido', '1', 'Teste titulo limite superior -1 valido &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    test('Título de formulário limite superior válido', () => {
        fieldTest('Nome Teste válido', '1', 'Teste titulo limite superior valido &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    test('Título de formulário limite superior inválido', () => {
        fieldTest('Nome Teste válido', '1', 'Teste titulo limite superior invalido &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, false, true, true, true, true, true);
    });

    test('Título de formulário entre limites válido', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    //#### CAMPO TEXTO####
    test('Texto de formulário vazio', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', '', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, false, true, true, true, true);
    });

    test('Texto de formulário limite inferior válido', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'c', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    test('Texto de formulário limite superior -1 válido', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste com limite superior -1 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    test('Texto de formulário limite superior válido', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste com limite superior &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    test('Texto de formulário limite superior inválido', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste com limite superior invalido &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, false, true, true, true, true);
    });

    test('Texto de formulário entre limites válido', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    //#### CAMPO TIPO PERGUNTA ####
    test('Tipo de pergunta texto vazia', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, true, false, true, true, true);
    });

    test('Tipo de pergunta múltipla escolha, campos aparecem corretamente', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    //#### CAMPO TITULO DE PERGUNTA #####
    test('Título de pergunta do formulário vazio', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '1', '', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, false, true, true);
    });

    test('Título de pergunta do formulário limite inferior válido', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '1', 'tituloPI', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    test('Título de pergunta do formulário limite superior -1 válido', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste com limite superior valido -1 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    test('Título de pergunta do formulário limite superior válido', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste com limite superior valido &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    test('Título de pergunta do formulário limite superior inválido', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste com limite superior invalido &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, false, true, true);
    });

    test('Título de pergunta do formulário entre limites válido', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    //#### CAMPO TEXTO PERGUNTA ####
    test('Texto de pergunta do formulário vazio', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', '', '1', true, true, true, true, true, true, false, true);
    });

    test('Texto de pergunta do formulário limite inferior válido', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'c', '1', true, true, true, true, true, true, true, true);
    });

    test('Texto de pergunta do formulário limite superior -1 válido', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste com limite superior valido -1 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', '1', true, true, true, true, true, true, true, true);
    });

    test('Texto de pergunta do formulário limite superior válido', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste com limite superior valido &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', '1', true, true, true, true, true, true, true, true);
    });

    test('Texto de pergunta do formulário limite superior inválido', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste com limite superior invalido &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', '1', true, true, true, true, true, true, false, true);
    });

    test('Texto de pergunta do formulário entre limites válido', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    //#### TEXTO MULTIPLA ESCOLHA ####
    test('Texto de alternativa da múltipla escolha vazio', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '', true, true, true, true, true, true, true, false);
    });

    test('Texto de alternativa da múltipla escolha entre limites válido', () => {
        fieldTest('Nome Teste válido', '1', 'titulo de teste', 'conteudo de Teste', '1', 'titulo de Pergunta de Teste', 'conteudo de Pergunta de Teste', '1', true, true, true, true, true, true, true, true);
    });

    //#### BOTÃO ADICIONAR PERGUNTA ####
    test('Clicar no botão para adicionar pergunta com limite de perguntas alcançado', () => {
        buttonAddQuestionTest(false);
    });

    test('Clicar no botão para adicionar pergunta sem limite de perguntas alcançado', () => {
        buttonAddQuestionTest(true);
    });

    //#### BOTAO DELETAR ####
    test('Clicar no botão para deletar formulário, depois confirmar a exclusão', () => {
        buttonDeleteTest(true);
    });

    test('Clicar no botão para deletar formulário, depois cancelar a exclusão', () => {
        buttonDeleteTest(false);
    });

    // #### BOTAO SALVAR ####
    test('Clicar no botão para salvar formulário com os campos únicos existentes no banco (ou seja não únicos) e com pelo menos um campo inválido', () => {
        buttonSaveTest(false, false);
    });

    test('Clicar no botão para salvar formulário com os campos únicos não existentes no banco e todos os campos válidos', () => {
        buttonSaveTest(true, true);
    });

    test('Clicar no botão para salvar com todos os campos válidos porém não únicos', () => {
        buttonSaveTest(true, false);
    });

    test('Clicar no botão para salvar com pelo menos um campo inválido', () => {
        buttonSaveTest(false, true);
    });

    // #### BOTAO RETORNAR ####
    test('Clicar no botão para retornar sem campos preenchidos', () => {
        buttonCancelTest(false);
    });

    test('Clicar no botão para retornar com campos preenchidos', () => {
        buttonCancelTest(true);
    });    

});

//#### TESTE DE ESTADOS ####
//test('Entrar na página de edição de formulário de um formulário excluído', () => {throw 'Not implemented yet'});
