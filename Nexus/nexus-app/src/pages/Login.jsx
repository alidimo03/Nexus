import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [nombre, setNombre] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name: nombre }); 
    navigate('/catalogo');  
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Iniciar Sesión en Nexus</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Tu nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          required 
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;