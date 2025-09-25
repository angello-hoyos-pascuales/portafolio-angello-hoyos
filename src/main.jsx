
// Importa StrictMode para detectar problemas potenciales en la app
import { StrictMode } from 'react';
// Importa createRoot para inicializar la app en el DOM
import { createRoot } from 'react-dom/client';
// Importa componentes de React Router para navegación SPA
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importa los estilos globales
import './index.css';
// Importa los componentes principales de la app
import App from './App.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';


// Monta la aplicación React en el elemento con id 'root'
createRoot(document.getElementById('root')).render(
  // StrictMode ayuda a detectar errores y prácticas inseguras
  <StrictMode>
    {/* BrowserRouter habilita la navegación SPA */}
    <BrowserRouter>
      {/* Navbar se muestra en todas las páginas */}
      <Navbar />
      {/* Definición de rutas principales de la app */}
      <Routes>
        {/* Ruta de inicio */}
        <Route path="/" element={<Home />} />
        {/* Ruta de la sección Sobre mí */}
        <Route path="/about" element={<About />} />
        {/* Ruta de la sección Proyectos */}
        <Route path="/projects" element={<Projects />} />
        {/* Ruta de la sección Contacto */}
        <Route path="/contact" element={<Contact />} />
        {/* Puedes agregar más rutas aquí */}
      </Routes>
      {/* Footer se muestra en todas las páginas */}
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
