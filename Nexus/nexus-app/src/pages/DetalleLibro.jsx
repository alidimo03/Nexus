import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const DetalleLibro = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { data: libro, loading, error } = useFetch(`http://localhost:3001/libros/${id}`);

  if (loading) return <div className="info"><p>Cargando detalles del libro...</p></div>;
  if (error || !libro) return <div className="info"><p>Hubo un error o el libro no existe.</p></div>;

  // "PASARELA DE PAGO"
  const manejarCompra = () => {
    navigate(`/checkout/${libro.id}`);
  };

  return (
    <main style={{ padding: '40px', minHeight: '60vh' }}>
      <div style={styles.container}>
        <div style={styles.imageBox}>
          {}
          <img src={libro.imagen.replace('./', '/')} alt={libro.title} style={styles.img} />
        </div>
        
        <div style={styles.infoBox}>
          <h1>{libro.title}</h1>
          <p className="info_cursiva">Escrito por: {libro.author}</p>
          <hr style={{ margin: '20px 0', opacity: '0.1' }} />
          
          <div style={styles.details}>
            <p><strong>Categoría:</strong> {libro.category}</p>
            <p><strong>Año:</strong> {libro.year}</p>
            <p><strong>Stock:</strong> {libro.stock} unidades</p>
          </div>
          
          <p style={styles.price}>{libro.price}€</p>
          
          <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
            <button style={styles.buyBtn} onClick={manejarCompra}>
                <i className="ri-shopping-cart-line"></i> Confirmar Compra
            </button>
            <button onClick={() => navigate('/catalogo')} style={styles.backBtn}>
                Volver al catálogo
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

// ESTILOS
const styles = {
  container: {
    display: 'flex',
    gap: '50px',
    maxWidth: '1000px',
    margin: 'auto',
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
  },
  imageBox: { 
    flex: '1', 
    display: 'flex', 
    justifyContent: 'center' 
  },
  img: { 
    width: '100%', 
    borderRadius: '8px', 
    objectFit: 'contain', 
    maxHeight: '450px' 
  },
  infoBox: { 
    flex: '1.2', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center' 
  },
  details: { 
    lineHeight: '2',
    fontSize: '1.1rem'
  },
  price: { 
    fontSize: '2.5rem', 
    fontWeight: 'bold', 
    color: '#D97B59', 
    margin: '15px 0' 
  },
  buyBtn: {
    backgroundColor: '#D97B59',
    color: 'white',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    flex: '1'
  },
  backBtn: {
    background: 'none',
    border: '1px solid #ddd',
    padding: '12px 25px',
    borderRadius: '8px',
    cursor: 'pointer',
    flex: '1'
  }
};

export default DetalleLibro;