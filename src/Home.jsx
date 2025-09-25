// Importa React para usar JSX y componentes
import React from 'react';

// Componente principal de la página de inicio
export default function Home() {
  return (
    // Contenedor principal con flexbox para centrar contenido
    <main className="presentacion" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '3rem' }}>
      {/* Columna de texto de presentación */}
      <div className="presentacion-texto" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem', maxWidth: 500, textAlign: 'center' }}>
        {/* Título principal */}
        <h1 style={{ textAlign: 'center', width: '100%' }}>¡Hola, soy el <strong className="titulo-destacado">Ing. Angello A. Hoyos Pascuales!</strong></h1>
        {/* Descripción corta */}
        <p className="d" style={{ textAlign: 'center', width: '100%' }}>Soy un Ingeniero desarrollador de software</p>
        {/* Botón para ir a la sección 'Sobre mí' */}
        <a className="boton" href="/about">más sobre mi</a>
        {/* Íconos de redes sociales */}
        <ul className="social-media" style={{ display: 'flex', gap: '2rem', marginTop: '2rem', justifyContent: 'center', width: '100%' }}>
          <li>
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            {/* GitHub */}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      {/* Columna de la imagen/logo grande */}
      <div style={{ flex: '0 0 240px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Imagen de logo destacada */}
  <img className="imagen" src="logo.png" alt="imagen html" style={{ width: '440px', borderRadius: '22px', boxShadow: '-1px -1px 12px 0 rgb(122, 221, 102), 6px 6px 32px 4px rgb(92, 162, 235)' }} />
      </div>
    </main>
  );
}
