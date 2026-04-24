import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FiltrosLaterales from '../components/FiltrosLaterales.jsx';

describe('FiltrosLaterales', () => {
  it('debe mostrar el titulo de categorias', () => {
    render(<FiltrosLaterales onFiltrar={() => {}} />);
    expect(screen.getByText(/Categorías/i)).toBeInTheDocument();
  });
});
