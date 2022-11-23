import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';

describe('testa as informações dos cards dos pokemon', () => {
  test('se é renderizado um card com as informações de determinado Pokémon', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');
    const { name, type, averageWeight, image } = pokemonList[0];
    const { value, measurementUnit } = averageWeight;

    const namePokemon = screen.getByText(name);
    const typePokemon = screen.getByTestId('pokemon-type');
    const weight = screen.getByText(`Average weight: ${value} ${measurementUnit}`);
    const img = screen.getByRole('img', { name: `${name} sprite` });

    expect(namePokemon).toBeInTheDocument();
    expect(typePokemon).toHaveTextContent(type);
    expect(weight).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img.src).toBe(image);
    expect(img.alt).toBe(`${name} sprite`);
  });

  test('se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon', () => {
    const { history } = renderWithRouter(<App />);
    const { id, name } = pokemonList[0];
    expect(history.location.pathname).toBe('/');
    const linkDetails = screen.getByRole('link', { name: 'More details' });
    expect(linkDetails).toBeInTheDocument();
    userEvent.click(linkDetails);
    expect(history.location.pathname).toBe(`/pokemon/${id}`);

    const check = screen.getByRole('checkbox', { name: /pokémon favoritado/i });
    userEvent.click(check);

    const icon = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });

    expect(icon).toBeInTheDocument();
    expect(icon.src).toBe('http://localhost/star-icon.svg');
    expect(icon.alt).toBe(`${name} is marked as favorite`);
  });
});
