import {React} from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {useSelector} from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Route } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import {Notes} from './Notes';
import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // Configurar um elemento como alvo do teste
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Limpar para os testes não interferirem uns nos outros
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("A nota deve poder ser visualizada", () => {
    const onChange = jest.fn();
    act(() => {
      render(<testaSalvar onChange={onChange} />, container);
    });
    const history = createMemoryHistory();
    const button = document.querySelector("[data-testid=testaSalvar]");
    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(history.location.pathname).toBe('/note/viewnote/1'); //ver uma nota 
});

it("A nota deve poder ser Excluida", () => {
    const onChange = jest.fn();
    act(() => {
      render(<testaDeletar onChange={onChange} />, container);
    });
    const history = createMemoryHistory();
    const button = document.querySelector("[data-testid=testaDeletar]");
    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(history.location.pathname).toBe('/'); //retornar a tela de notas 
});
