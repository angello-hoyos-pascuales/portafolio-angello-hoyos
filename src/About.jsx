
// Importa React y hooks para efectos y referencias
import React, { useEffect, useRef, useState } from 'react';
import Bubbles from './Bubbles'; // Fondo animado de burbujas

// Página "Sobre mí"
export default function About() {
  // Estado para el scroll (parallax)
  const [offset, setOffset] = useState(0);
  const bgRef = useRef(); // Referencia a la imagen de fondo

  // Efecto: actualiza el offset al hacer scroll
  useEffect(() => {
    function handleScroll() {
      setOffset(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax: la imagen de fondo se mueve más lento que el scroll
  const parallaxY = offset * 0.25;

  return (
    // Contenedor principal con fondo y burbujas
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background: '#f8fafc' }}>
      <Bubbles count={28} />
      {/* Imagen de fondo con efecto parallax */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          top: parallaxY,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none',
          opacity: 0.65,
          filter: 'blur(1.2px)'
        }}
      >
        {/* Logo desenfocado de fondo */}
        <img src="/icono.png" alt="icono fondo" style={{ maxWidth: '60vw', maxHeight: '70vh', objectFit: 'contain' }} />
      </div>
      {/* Contenido principal */}
      <main style={{ 
        position: 'relative', 
        zIndex: 1, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
      }}>
        <section style={{ background: 'none', maxWidth: 800, width: '100%', margin: '2rem auto', textAlign: 'left' }}>
          {/* Título */}
          <h1 style={{ color: '#088395', fontFamily: 'Libre Baskerville, serif', fontWeight: 700, fontStyle: 'italic', fontSize: '2.3rem' }}>Sobre mí</h1>
          {/* Texto de presentación */}
          <p style={{ fontSize: '1.25rem', color: '#222', lineHeight: 1.7 }}>
            Hola, mi nombre es <strong style={{ color: '#088395' }}>Angello Andrés Hoyos Pascuales.</strong> Nací y crecí en un entorno que siempre fomentó la curiosidad y el aprendizaje. Desde una edad temprana, me sentí atraído por la tecnología y la manera en que esta transformaba nuestro día a día. Esta fascinación me llevó a explorar el mundo de la computación y, eventualmente, a querer convertirme en ingeniero de software.<br /><br />
            En el año 2018, di un paso decisivo en mi vida al ingresar a la Universidad de Cartagena para estudiar Ingeniería de Software. Esta experiencia marcó un antes y un después en mi trayectoria personal y profesional. A lo largo de mi carrera, tuve la oportunidad de aprender de grandes docentes y compartir momentos inolvidables con compañeros que compartían mis mismas inquietudes y pasiones.<br /><br />
            El último año de mi carrera fue especialmente relevante. En medio de desafíos académicos y proyectos colaborativos, logré graduarme en el año 2023, un logro que representa no solo el esfuerzo personal, sino también el apoyo incondicional de mi familia y amigos. Durante mi formación, adquirí habilidades en diversos lenguajes de programación, desarrollo web, bases de datos y metodologías ágiles, lo que me permitió desarrollarme como un profesional versátil y comprensivo de los desafíos del mundo digital.<br /><br />
            Fuera del ámbito académico, siempre he buscado nutrirme de experiencias prácticas. Participé en diversas pasantías y proyectos, donde pude aplicar mis conocimientos y aprender sobre el trabajo en equipo y la solución de problemas en situaciones reales. Además, mi involucramiento en grupos de estudio y organizaciones estudiantiles me enseñó la importancia de la colaboración y el liderazgo en el entorno profesional.<br /><br />
            Hoy en día, como ingeniero de software, estoy entusiasmado por contribuir al desarrollo de soluciones innovadoras que tengan un impacto positivo en la vida de las personas. Aspiro a trabajar en proyectos que desafíen mis habilidades y me permitan seguir creciendo profesionalmente, además de fomentar un ambiente de aprendizaje constante.<br /><br />
            Agradezco cada momento vivido durante mi formación y estoy listo para enfrentar los desafíos que el futuro me depare. Estoy convencido de que mi pasión por la tecnología y mi compromiso con la excelencia me llevarán a alcanzar mis metas y a dejar una huella significativa en el mundo del software.<br /><br />
            ¡Gracias por tomarte el tiempo de conocerme!
          </p>
        </section>
      </main>
    </div>
  );
}
