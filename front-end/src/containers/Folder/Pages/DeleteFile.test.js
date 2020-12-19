import {React} from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {useSelector} from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Route } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import  ViewFolder  from './Folder';

describe('Delete file Integration With Menu', function () {
    test('Excluir Arquivo - Botão Excluir Arquivo integrado com Menu', () => {
        
        const deleteFile = jest.fn();

        let dom = render(<divMenu onClickExcluirProjeto={deleteFile} />, { wrapper: MemoryRouter });
            expect(screen.getByText("#botao_deleteFolder")).toBeInTheDocument();
          
        const leftClick = { button: 0 };
        userEvent.click(dom.container.querySelector("#botao_deleteFolder"), leftClick);

        expect(deleteFile).toHaveBeenCalledTimes(1); //botão ter sido clicado 
        expect(deleteFile).toHaveBeenCalledWith(1); //Ter criado a pasta "1" por exemplo
        expect(history.location.pathname).toBe('/files/'); //retornar à raiz da pasta (arquivo terá sido excluido)
    });
}