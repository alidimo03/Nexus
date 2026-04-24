import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Nexus</h2>
          <p>Tu espacio de cultura y coworking.</p>
        </div>

        <div className="footer-line"></div>

        <div className="footer-links">
          <h3>Navegación</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/catalogo">Catálogo</Link></li>
            <li><Link to="/coworking">Coworking</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Contacto</h3>
          <ul>
            <li>Email: contacto@nexus.com</li>
            <li>Tel: +34 900 000 000</li>
            <li>Aranjuez, Madrid, España</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;