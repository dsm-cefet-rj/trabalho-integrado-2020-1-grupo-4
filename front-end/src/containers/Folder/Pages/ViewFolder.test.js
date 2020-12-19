import {React} from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {useSelector} from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Route } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import  ViewFolder  from './Folder';

describe('View folder Integration With Menu', function () {
    test('View Folder - Botão View Folder integrado com Menu', () => {
        
        const viewFolder = jest.fn();

        let dom = render(<divMenu onClickExcluirProjeto={viewFolder} />, { wrapper: MemoryRouter });
            expect(screen.getByText("#botao_viewFolder")).toBeInTheDocument();
          
        const leftClick = { button: 0 };
        userEvent.click(dom.container.querySelector("#botao_viewFolder"), leftClick);

        expect(viewFolder).toHaveBeenCalledTimes(1); //botão viewFolder ter sido clicado 
        expect(viewFolder).toHaveBeenCalledWith(1); //Ter aberto a pasta "1" por exemplo
        expect(history.location.pathname).toBe('/folders/1'); //abrir uma pasta existente
    });
}

//Visualizar Pasta
test('Visualizar uma Pasta Existente', () => {throw 'Not implemented yet'});

//#### BOTÃO UPLOAD ####
test('Clicar em Upload', () => {throw 'Not implemented yet'});

//#### BOTÃO ARQUIVO ####
test('Clicar em um arquivo', () => {throw 'Not implemented yet'});




