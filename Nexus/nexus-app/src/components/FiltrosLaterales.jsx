import { useState } from 'react';

const FiltrosLaterales = ({ categorias, filtroActual, setFiltro, busqueda, setBusqueda }) => {
  const [estaAbierto, setEstaAbierto] = useState(true);

  return (
    <aside style={{ 
      ...styles.sidebar, 
      width: estaAbierto ? '250px' : '60px',
      transition: 'width 0.3s ease' 
    }}>
      <button 
        onClick={() => setEstaAbierto(!estaAbierto)} 
        style={styles.toggleBtn}
        title={estaAbierto ? "Cerrar filtros" : "Abrir filtros"}
      >{estaAbierto ? '❮' : '❯'}
      </button>

      {estaAbierto && (
        <div style={styles.content}>
          <h3 style={styles.title}>Categorías</h3>
          <ul style={styles.list}>
            <li 
              onClick={() => setFiltro('Todos')}
              style={filtroActual === 'Todos' ? styles.itemActive : styles.item}
            >
              Todos los ejemplares
            </li>
            {categorias?.map(cat => (
              <li 
                key={cat.id}
                onClick={() => setFiltro(cat.category)}
                style={filtroActual === cat.category ? styles.itemActive : styles.item}
              >
                {cat.category}
              </li>
            ))}
          </ul>

          <hr style={styles.hr} />

          <h3 style={styles.title}>Otros Filtros</h3>
          <div style={styles.filterGroup}>
            <label style={styles.label}>Año o Autor:</label>
            <input 
              type="text" 
              placeholder="Buscar..." 
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={styles.input}
            />
          </div>
        </div>
      )}
    </aside>
  );
};

const styles = {
  sidebar: {
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    height: 'fit-content',
    position: 'sticky',
    top: '20px',
    overflow: 'hidden',
    border: '1px solid #eee',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center' 
  },
  toggleBtn: {
    width: '40px',   
    height: '40px',
    cursor: 'pointer',
    backgroundColor: '#0D0D0D',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    marginBottom: '15px',
    display: 'flex',   
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    transition: 'background 0.3s'
  },
  content: { 
    width: '100%', 
    animation: 'fadeIn 0.5s' 
  },
  title: { 
    fontSize: '1.1rem', 
    marginBottom: '10px', 
    width: '100%' 
  },
  list: { 
    listStyle: 'none', 
    padding: 0, 
    width: '100%' 
  },
  item: { 
    padding: '8px 12px', 
    cursor: 'pointer', 
    borderRadius: '5px', 
    marginBottom: '5px' 
  },
  itemActive: { 
    padding: '8px 12px', 
    cursor: 'pointer', 
    borderRadius: '5px', 
    backgroundColor: '#D97B59', 
    color: 'white', 
    fontWeight: 'bold', 
    marginBottom: '5px' 
  },
  hr: { 
    margin: '20px 0', 
    border: '0', 
    borderTop: '1px solid #ddd', 
    width: '100%' 
  },
  label: { 
    fontSize: '0.9rem', 
    color: '#666', 
    display: 'block', 
    marginBottom: '5px' 
  },
  input: { 
    width: '100%', 
    padding: '10px', 
    borderRadius: '5px', 
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  }
};

export default FiltrosLaterales;