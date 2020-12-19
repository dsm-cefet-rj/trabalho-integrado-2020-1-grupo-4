import {React} from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {useSelector} from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Route } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import  ViewFolder  from './ViewFolder';

describe('New folder Integration With Menu', function () {
    test('Chamada da New Folder - Botão New Folder integrado com Menu', () => {
        
        const mockNewFolder = jest.fn();

        let dom = render(<divMenu onClickExcluirProjeto={mockNewFolder} />, { wrapper: MemoryRouter });
            expect(screen.getByText("#botao_NewFolder")).toBeInTheDocument();
          
        const leftClick = { button: 0 };
        userEvent.click(dom.container.querySelector("#botao_NewFolder"), leftClick);

        expect(mockNewFolder).toHaveBeenCalledTimes(1); //botão ter sido clicado 
        expect(mockNewFolder).toHaveBeenCalledWith(1); //Ter criado a pasta "1" por exemplo
        expect(history.location.pathname).toBe('/folder/1'); //nova pasta
    });
}


//-----------------------------Testes de Defeito---------------------------------

test('Nome Pasta limite superior válido -1', () => {throw 'Not implemented yet'});

test('Nome Pasta limite superior válido', () => {throw 'Not implemented yet'});

test('Nome Pasta limite superior inválido', () => {throw 'Not implemented yet'});

test('Nome Pasta limite inferior inválido', () => {throw 'Not implemented yet'});