
// Importa React y el hook useState para manejar el estado del menú
import React, { useState } from 'react';
// Importa Link y NavLink para navegación SPA
import { Link, NavLink } from 'react-router-dom';
// Importa los estilos de la barra de navegación
import './Navbar.css';


// Componente Navbar: barra de navegación superior
export default function Navbar() {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      {/* Barra de navegación principal */}
      <nav className="navbar">
        {/* Logo y nombre a la izquierda, enlaza a inicio */}
        <div className="nav-logo-left">
          <NavLink to="/" className="active nav-logo">
            {/* Imagen pequeña del logo */}
            <img className="imagen-pequena" src="icono.png" alt="Logo" /> Angello A. Hoyos Pascuales
          </NavLink>
        </div>
        {/* Botón hamburguesa para abrir/cerrar menú en móvil */}
        <button className="hamburger" aria-label="Abrir menú" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars"></i>
        </button>
        {/* Menú de navegación: cambia clase según estado */}
        <ul className={menuOpen ? "menu open" : "menu"}>
          {/* Enlace a Inicio, cierra menú al hacer click */}
          <li>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-house" style={{ marginRight: 6 }}></i>Inicio
            </NavLink>
          </li>
          {/* Enlace a Sobre mí */}
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-user" style={{ marginRight: 6 }}></i>Sobre mí
            </NavLink>
          </li>
          {/* Enlace a Proyectos */}
          <li>
            <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-folder" style={{ marginRight: 6 }}></i>Proyectos
            </NavLink>
          </li>
          {/* Enlace a Contacto */}
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-address-book" style={{ marginRight: 6 }}></i>Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
