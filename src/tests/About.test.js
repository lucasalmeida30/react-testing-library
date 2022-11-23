import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('Teste das informações do component', () => {
  test('se a página contém as informações sobre a Pokédex', () => {
    render(<About />);
    const title = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
    const info1 = screen.getByText(/this application simulates a pokédex, a digital encyclopedia containing all pokémon/i);
    const info2 = screen.getByText(/one can filter pokémon by type, and see more details for each one of them/i);
    const img = screen.getByRole('img', { name: /pokédex/i });

    expect(title).toBeInTheDocument();
    expect(info1).toBeInTheDocument();
    expect(info2).toBeInTheDocument();
    expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
