import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import DetalleLibro from './pages/DetalleLibro';
import MisLibros from './pages/MisLibros';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Coworking from './pages/Coworking';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<ProtectedRoute><Catalogo /></ProtectedRoute>} />
        <Route path="/catalogo/:id" element={<ProtectedRoute><DetalleLibro /></ProtectedRoute>} />
        <Route path="/mis-libros" element={<ProtectedRoute><MisLibros /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/coworking" element={<ProtectedRoute><Coworking /></ProtectedRoute>}/>
        <Route path="/checkout/:id" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;