
// Importa React y el componente de ojos animados
import React from 'react';
import Eyes from './Eyes';

// Página de contacto
export default function Contact() {
  return (
    // Contenedor principal de la página de contacto
    <main style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '2.5rem' }}>
      {/* Ojos animados decorativos */}
      <Eyes />
      {/* Sección del formulario de contacto */}
      <section id="contact" style={{ maxWidth: 600, width: '100%', minWidth: 0, margin: '40px auto', padding: 20, background: '#071952', borderRadius: 8, boxShadow: '0 0 10px rgba(0,0,0,0.1)', boxSizing: 'border-box' }}>
        {/* Título */}
        <h1 style={{ textAlign: 'center', color: '#EBF4F6' }}>Contacto</h1>
        {/* Formulario de contacto */}
        <form id="contact-form" action="#" method="POST">
          {/* Campo nombre */}
          <div style={{ marginBottom: 15 }}>
            <label htmlFor="nombre" style={{ color: '#EBF4F6', fontSize: '1.3rem' }}>Nombre:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Escriba su nombre" required style={{ width: '100%', boxSizing: 'border-box', padding: 10, border: '1px solid #ccc', borderRadius: 4, fontSize: '1rem' }} />
          </div>
          {/* Campo email */}
          <div style={{ marginBottom: 15 }}>
            <label htmlFor="email" style={{ color: '#EBF4F6', fontSize: '1.3rem' }}>Correo electrónico:</label>
            <input type="email" id="email" name="email" placeholder="Escriba su correo" required style={{ width: '100%', boxSizing: 'border-box', padding: 10, border: '1px solid #ccc', borderRadius: 4, fontSize: '1rem' }} />
          </div>
          {/* Campo asunto */}
          <div style={{ marginBottom: 15 }}>
            <label htmlFor="asunto" style={{ color: '#EBF4F6', fontSize: '1.3rem' }}>Asunto:</label>
            <input type="text" id="asunto" name="asunto" placeholder="Elija el asunto" required style={{ width: '100%', boxSizing: 'border-box', padding: 10, border: '1px solid #ccc', borderRadius: 4, fontSize: '1rem' }} />
          </div>
          {/* Campo mensaje */}
          <div style={{ marginBottom: 15 }}>
            <label htmlFor="mensaje" style={{ color: '#EBF4F6', fontSize: '1.3rem' }}>Mensaje:</label>
            <textarea id="mensaje" name="mensaje" placeholder="Escriba su mensaje" required style={{ width: '100%', boxSizing: 'border-box', padding: 10, border: '1px solid #ccc', borderRadius: 4, fontSize: '1rem', minHeight: 100 }} />
          </div>
          {/* Botón de envío */}
          <div>
            <button type="submit" style={{ background: '#fff', color: '#071952', border: 'none', borderRadius: 4, padding: 10, width: '100%', fontSize: 16, fontFamily: 'Krona One, sans-serif', fontWeight: 400, cursor: 'pointer', transition: 'background 0.3s, color 0.3s' }}>Enviar</button>
          </div>
        </form>
      </section>
    </main>
  );
}
