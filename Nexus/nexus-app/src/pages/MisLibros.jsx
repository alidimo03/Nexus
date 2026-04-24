import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MisLibros = () => {
  const [compras, setCompras] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem('mis-libros')) || [];
    setCompras(guardados);
  }, []);

  return (
    <main style={{ padding: '40px', minHeight: '70vh' }}>
      <div className="info">
        <h1>Mi Biblioteca</h1>
        <p className="info_cursiva">Aquí aparecen los libros que has adquirido.</p>
      </div>

      <section className="catalogo-container">
        {compras.length === 0 ? (
          <div style={{ textAlign: 'center', width: '100%', marginTop: '50px' }}>
            <p>Aún no has comprado ningún libro.</p>
            <button 
              onClick={() => navigate('/catalogo')}
              style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#D97B59', color: 'white', border: 'none', borderRadius: '5px' }}
            >
              Ir al catálogo
            </button>
          </div>
        ) : (
          compras.map((libro, index) => (
            <article key={index} className="libro-card">
              <img src={libro.imagen} alt={libro.title} />
              <h3>{libro.title}</h3>
              <p className="info_cursiva">{libro.author}</p>
              <p><span style={{ color: 'green', fontWeight: 'bold' }}>✓ Adquirido</span></p>
            </article>
          ))
        )}
      </section>
    </main>
  );
};

export default MisLibros;