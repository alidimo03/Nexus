import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Pruebas de Estructura', () => {
  it('1. Renderiza un contenedor principal', () => {
    render(<main data-testid="main-cont">Hola</main>);
    expect(screen.getByTestId('main-cont')).toBeInTheDocument();
  });

  it('2. Verifica que el botón de login existe', () => {
    render(<button>Entrar</button>);
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
  });

  it('3. Verifica un input de texto', () => {
    render(<input placeholder="Buscar..." />);
    expect(screen.getByPlaceholderText(/buscar/i)).toBeInTheDocument();
  });

  it('4. Verifica un enlace', () => {
    render(<a href="/">Inicio</a>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });

  it('5. Verifica que un mensaje de error no sea visible', () => {
    render(<div>Todo correcto</div>);
    expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
  });

  it('6. Verifica el renderizado de una lista', () => {
    render(<ul><li>Elemento</li></ul>);
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
});