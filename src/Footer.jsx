
// Importa React para usar JSX
import React from 'react';

// Componente de pie de página (footer)
export default function Footer() {
  return (
    // Footer con fondo oscuro, texto claro y centrado
    <footer className="footer" style={{ background: '#071952', color: '#EBF4F6', textAlign: 'center', padding: '1rem 0', marginTop: '2rem' }}>
      {/* Mensaje de derechos de autor */}
      <p>&copy; 2025 angello andres hoyos pascuales. Todos los derechos reservados.</p>
    </footer>
  );
}
