import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('testa se tem as informações correta na tela do componente', () => {
  test('se a página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const title = screen.getByRole('heading', { name: /Page requested not found/i });
    const img = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i });
    expect(title).toBeInTheDocument();
    expect(img.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
