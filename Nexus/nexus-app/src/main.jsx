import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext'
import './styles/global.css';
import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> 
      <App />
    </AuthProvider>
  </StrictMode>,
)