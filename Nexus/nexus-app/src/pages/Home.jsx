import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <section style={styles.hero}>
        <div style={styles.overlay}>
          <div style={styles.heroContent}>
            <h1 style={styles.title}>Bienvenido a Nexus</h1>
            <p style={styles.subtitle}>Librería universitaria y coworking</p>
            <button style={styles.button} onClick={() => navigate('/catalogo')}>
              Explorar Catálogo
            </button>
          </div>
        </div>
      </section>

      <div className="info">
        <p>Encuentra libros universitarios, reserva tu espacio de estudio y disfruta la experiencia Nexus.</p>
      </div>

      <section style={styles.features}>
        <div style={styles.card} onClick={() => navigate('/catalogo')}>
          <span style={styles.icon}>
            <i className="ri-book-line" style={styles.icon}></i>
          </span>
          <h3>Libros</h3>
        </div>
        <div style={styles.card} onClick={() => navigate('/coworking')}>
          <span style={styles.icon}>
            <i className="ri-cup-line" style={styles.icon}></i>
          </span>
          <h3>Coworking + Café</h3>
        </div>
        <div style={styles.card}>
          <span style={styles.icon}>
            <i className="ri-time-line" style={styles.icon}></i>
          </span>
          <h3>Abierto 24/7</h3>
        </div>
      </section>
    </main>
  );
};

const styles = {
  hero: {
    height: '60vh', 
    width: '100%',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroContent: {
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '30px',
  },
  button: {
    backgroundColor: '#D97B59', 
    color: 'white',
    padding: '15px 40px',
    border: 'none',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },
  features: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    padding: '20px 20px 80px 20px',
    backgroundColor: '#F2F2F2',
  },
  card: {
    backgroundColor: '#D97B59',
    color: 'white',
    padding: '40px',
    borderRadius: '12px',
    width: '280px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  icon: {
    fontSize: '3rem',
    display: 'block',
    marginBottom: '15px',
  }
};

export default Home;