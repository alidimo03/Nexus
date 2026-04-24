import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (user) {
      logout();
      navigate('/');
    } else {
      navigate('/login');
    }
    setMenuAbierto(false);
  };

  return (
    <header className="header-container">
      <div className="header-main">
        <h1 className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>NEXUS</h1>
        <button className="hamburger" onClick={() => setMenuAbierto(!menuAbierto)}>
          {menuAbierto ? '✕' : '☰'}
        </button>
      </div>

      <nav className={`nav-menu ${menuAbierto ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuAbierto(false)}>INICIO</Link></li>
          <li><Link to="/catalogo" onClick={() => setMenuAbierto(false)}>CATÁLOGO</Link></li>
          <li><Link to="/coworking" onClick={() => setMenuAbierto(false)}>COWORKING</Link></li>
          <li><Link to="/mis-libros" onClick={() => setMenuAbierto(false)}>MIS LIBROS</Link></li>
          <li>
            <button className="login-btn" onClick={handleAuthClick}>
              {user ? 'Salir' : 'Entrar'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;