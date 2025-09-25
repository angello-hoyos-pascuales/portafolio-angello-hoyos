
// Importa el fondo animado de burbujas y sus estilos
import Bubbles from './Bubbles';
import './Bubbles.css';

// Componente principal de la app (puede ser plantilla o página de ejemplo)
function App() {
  return (
    // Contenedor general con fondo animado y contenido centrado
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Fondo animado de burbujas */}
      <Bubbles count={28} />
      {/* Contenido principal centrado */}
      <main style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        {/* Sección de presentación personal */}
        <section style={{ background: 'rgba(255,255,255,0.92)', borderRadius: 18, boxShadow: '0 4px 24px 0 rgba(80,60,20,0.10)', padding: '2.5rem 2.5rem 2.5rem 2.5rem', maxWidth: 800, width: '100%', margin: '2rem auto', textAlign: 'left' }}>
          {/* Título principal */}
          <h1 style={{ color: '#088395', fontFamily: 'Libre Baskerville, serif', fontWeight: 700, fontStyle: 'italic', fontSize: '2.3rem' }}>Sobre mí</h1>
          {/* Texto de presentación y experiencia */}
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

export default App;
