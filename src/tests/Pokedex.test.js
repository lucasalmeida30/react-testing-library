import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('testa informações do componente', () => {
  test('se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);
    const title = screen.getByRole('heading', { name: /Encountered Pokémon/i, level: 2 });
    expect(title).toBeInTheDocument();
  });

  test('se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    renderWithRouter(<App />);
    const button = screen.getByRole('button', { name: 'Próximo Pokémon' });
    userEvent.click(button);
    expect(button).toBeInTheDocument();
  });

  test('se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const buttonFilter = screen.getAllByTestId('pokemon-type-button');
    userEvent.click(buttonFilter[0]);
    expect(buttonFilter).toHaveLength(7);

    const buttonAll = screen.getByRole('button', { name: 'All' });
    userEvent.click(buttonAll);
    expect(buttonAll).toBeInTheDocument();

    const buttonEletric = screen.getByRole('button', { name: 'Electric' });
    userEvent.click(buttonEletric);
    expect(buttonEletric).toBeInTheDocument();

    const buttonFire = screen.getByRole('button', { name: 'Fire' });
    userEvent.click(buttonFire);
    expect(buttonFire).toBeInTheDocument();
  });
});
