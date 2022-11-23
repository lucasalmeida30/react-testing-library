import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se a aplicação é redirecionada para a página inicial, na URL "/" ao clicar no link Home da barra de navegação', () => {
  renderWithRouter(<App />);
  const linkHome = screen.getByRole('link', { name: 'Home' });
  userEvent.click(linkHome);
  expect(linkHome).toBeInTheDocument();
//   expect(history).toBe('/');
});

test('se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação', () => {
  renderWithRouter(<App />);
  const linkAbout = screen.getByRole('link', { name: 'About' });
  userEvent.click(linkAbout);
  expect(linkAbout).toBeInTheDocument();
//   expect(history).toBe('/about');
});

test('se a aplicação é redirecionada para a página de Pokémon Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação', () => {
  renderWithRouter(<App />);
  const linkFavoritePokemon = screen.getByRole('link', { name: 'Favorite Pokémon' });
  userEvent.click(linkFavoritePokemon);
  expect(linkFavoritePokemon).toBeInTheDocument();
  // expect(history).toBe('/favorites');
});

test('se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida.', () => {
  const { history } = renderWithRouter(<App />);
  act(() => {
    history.push('/xablau');
  });
  const title = screen.getByRole('heading', { name: /Page requested not found/i });
  const img = screen.getByRole('img', {
    name: /pikachu crying because the page requested was not found/i });
  expect(title).toBeInTheDocument();
  expect(img.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
