import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ModalReserva from '../components/ModalReserva';

describe('Pruebas en <ModalReserva />', () => {
    it('debe mostrar el nombre de la mesa seleccionada cuando está abierto', () => {
    const mesaEjemplo = "Mesa VIP 1";
    render(<ModalReserva mesa={mesaEjemplo} isOpen={true} />);
    
    expect(screen.getByText(new RegExp(mesaEjemplo, 'i'))).toBeInTheDocument();
    });

  it('no debe mostrar nada si isOpen es false', () => {
    render(<ModalReserva nombreMesa="Mesa 5" isOpen={false} />);
    
    const titulo = screen.queryByText(/Reservar/i);
    expect(titulo).not.toBeInTheDocument();
  });
});