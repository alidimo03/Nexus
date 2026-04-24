import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Header from '../components/Header';

describe('Header Component', () => {
  it('debe mostrar "Entrar" cuando no hay usuario', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Header />
        </AuthProvider>
      </BrowserRouter>
    );
    expect(screen.getByText(/Entrar/i)).toBeInTheDocument();
  });
});