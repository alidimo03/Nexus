import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: libro, loading } = useFetch(`http://localhost:3001/libros/${id}`);

  if (loading) return <p>Cargando pedido...</p>;

  const finalizarCompra = () => {
    const comprasActuales = JSON.parse(localStorage.getItem('mis-libros')) || [];
    if (!comprasActuales.find(item => item.id === libro.id)) {
      localStorage.setItem('mis-libros', JSON.stringify([...comprasActuales, libro]));
    }
    alert("¡Pago realizado con éxito!");
    navigate('/mis-libros');
  };

  return (
    <main style={{ padding: '50px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Finalizar Compra</h1>
      <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
        <h3>Resumen del pedido</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
          <span>{libro.title}</span>
          <span>{libro.price}€</span>
        </div>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
          <span>Total:</span>
          <span style={{ color: '#D97B59', fontSize: '1.5rem' }}>{libro.price}€</span>
        </div>
        
        <div style={{ marginTop: '30px' }}>
          <h4>Método de Pago</h4>
          <p>💳 Tarjeta guardada (Visa **** 1234)</p>
        </div>

        <button 
          onClick={finalizarCompra}
          style={{ width: '100%', backgroundColor: '#D97B59', color: 'white', padding: '15px', border: 'none', borderRadius: '5px', marginTop: '20px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Pagar Ahora
        </button>
      </div>
    </main>
  );
};

export default Checkout;