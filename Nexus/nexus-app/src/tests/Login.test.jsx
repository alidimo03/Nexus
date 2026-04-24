import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Login from '../pages/Login';

test('actualiza el valor del input de nombre', () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </BrowserRouter>
  );
  const input = screen.getByPlaceholderText(/Tu nombre/i);
  fireEvent.change(input, { target: { value: 'Ali' } });
  expect(input.value).toBe('Ali');
});