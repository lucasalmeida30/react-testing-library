import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('teste se as informações do component é exibida', () => {
  test('se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos', () => {
    renderWithRouter(<App />);
    const linkFavorite = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });
    userEvent.click(linkFavorite);
    const title = screen.getByText(/no favorite pokémon found/i);
    expect(title).toBeInTheDocument();
  });
});
