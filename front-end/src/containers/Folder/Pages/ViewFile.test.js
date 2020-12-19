import {React} from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {useSelector} from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Route } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import  ViewFolder  from './Folder';

describe('View File Integration With Menu', function () {
    test('View File - Botão ViewFile integrado com Menu', () => {
        
        const ViewFile = jest.fn();

        let dom = render(<divMenu onClickExcluirProjeto={ViewFile} />, { wrapper: MemoryRouter });
            expect(screen.getByText("#botao_ViewFile")).toBeInTheDocument();
          
        const leftClick = { button: 0 };
        userEvent.click(dom.container.querySelector("#botao_ViewFile"), leftClick);

        expect(ViewFile).toHaveBeenCalledTimes(1); //botão view file ter sido clicado 
        expect(ViewFile).toHaveBeenCalledWith(1); //Ter aberto o arquivo "1" por exemplo
        expect(history.location.pathname).toBe('/files/1'); //abrir um arquivo
    });
}

//--------------------Testes de Defeito Visualizar Arquivo-------------------------------------------
test('Clicar em Deletar', () => {throw 'Not implemented yet'});