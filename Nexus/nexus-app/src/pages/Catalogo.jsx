import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import FiltrosLaterales from '../components/FiltrosLaterales';
import { useNavigate } from 'react-router-dom';

const Catalogo = () => {
  const navigate = useNavigate();
  const { data: libros, loading: loadLibros } = useFetch('http://localhost:3001/libros');
  const { data: categorias, loading: loadCats } = useFetch('http://localhost:3001/categorias');
  
  const [filtro, setFiltro] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');
  
  // VER FILTROS EN MÓVIL
  const [filtrosVisibles, setFiltrosVisibles] = useState(false);

  if (loadLibros || loadCats) return <div className="info"><p>Cargando catálogo...</p></div>;

  const librosFiltrados = libros?.filter(libro => {
    const coincideCategoria = filtro === 'Todos' || libro.category === filtro;
    const coincideBusqueda = 
      libro.author.toLowerCase().includes(busqueda.toLowerCase()) || 
      libro.year.toString().includes(busqueda) ||
      libro.title.toLowerCase().includes(busqueda.toLowerCase());
    
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <main className="catalogo-main">
      <div className="info">
        <h1>Catálogo de Libros y Revistas</h1>
      </div>

      {}
      <button 
        className="btn-toggle-filtros" 
        onClick={() => setFiltrosVisibles(!filtrosVisibles)}
      >
        {filtrosVisibles ? '✕ Ocultar Filtros' : '☰ Mostrar Filtros'}
      </button>

      <div className="catalogo-layout" style={styles.mainLayout}>
        
        {}
        <aside className={`filtros-sidebar ${filtrosVisibles ? 'active' : ''}`}>
          <FiltrosLaterales 
            categorias={categorias}
            filtroActual={filtro}
            setFiltro={setFiltro}
            busqueda={busqueda}
            setBusqueda={setBusqueda}
          />
        </aside>

        {}
        <section className="catalogo-container libros-grid" style={styles.gridContainer}>
          {librosFiltrados.length > 0 ? (
            librosFiltrados.map(libro => (
              <article 
                key={libro.id} 
                className="libro-card" 
                onClick={() => navigate(`/catalogo/${libro.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <img src={libro.imagen.replace('./', '/')} alt={libro.title} />
                <h3>{libro.title}</h3>
                <p className="info_cursiva">{libro.author} ({libro.year})</p>
                <p><strong>{libro.price}€</strong></p>
                <button className="buyBtn-card">Ver detalle</button>
              </article>
            ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </section>
      </div>
    </main>
  );
};

const styles = {
  mainLayout: {
    display: 'flex',
    flexDirection: 'row', 
    gap: '30px',
    padding: '0 40px',
    marginTop: '20px',
    alignItems: 'flex-start'
  },
  gridContainer: {
    flex: 1, 
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px'
  }
};

export default Catalogo;