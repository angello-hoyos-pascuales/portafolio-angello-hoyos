// Importa React para usar JSX
import React from 'react';

// Lista de proyectos a mostrar en la sección
const projects = [
  {
    title: 'SEO y Marketing Digital',
    desc: 'Mejoramos la visibilidad de su sitio web en los motores de búsqueda, atrayendo más clientes potenciales.',
  img: 'logo.png',
    link: '/',
    color: 'linear-gradient(135deg, #EBF4F6 0%, #088395 100%)',
    icon: 'fa-chart-line'
  },
  {
    title: 'App de Tareas',
    desc: 'Organiza tus tareas diarias con una interfaz intuitiva y notificaciones inteligentes.',
  img: 'icono.png',
    link: '/',
    color: 'linear-gradient(135deg, #f8fafc 0%, #00b0ff 100%)',
    icon: 'fa-list-check'
  },
  {
    title: 'E-commerce Moderno',
    desc: 'Tienda online con pagos seguros, catálogo dinámico y panel de administración.',
  img: 'logo.png',
    link: '/',
    color: 'linear-gradient(135deg, #fffde4 0%, #ff3d00 100%)',
    icon: 'fa-cart-shopping'
  },
  {
    title: 'Portafolio Interactivo',
    desc: 'Presenta tus proyectos y habilidades con animaciones y diseño responsive.',
  img: 'icono.png',
    link: '/',
    color: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    icon: 'fa-user-astronaut'
  },
  {
    title: 'Blog Personal',
    desc: 'Publica artículos, comparte ideas y conecta con tu audiencia fácilmente.',
  img: 'logo.png',
    link: '/',
    color: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    icon: 'fa-blog'
  },
  {
    title: 'Dashboard de Analítica',
    desc: 'Visualiza métricas clave en tiempo real con gráficos modernos y filtros avanzados.',
  img: 'icono.png',
    link: '/',
    color: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
    icon: 'fa-chart-pie'
  },
];


// Página de proyectos
export default function Projects() {
  return (
    // Sección principal de proyectos
    <main className="projects-section" style={{ padding: '2rem', background: 'transparent', minHeight: '80vh' }}>
      {/* Encabezado de la sección */}
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h4>Mis Proyectos</h4>
        <hr style={{ width: '50%', margin: '10px auto', border: '1px solid #ccc' }} />
        <p>Estamos capacitados y proveemos servicios que son fundamentales a la hora de buscar el máximo pico de rendimiento en un producto.</p>
      </div>
      {/* Contenedor de tarjetas de proyectos */}
      <div className="container">
        {projects.map((p, i) => (
          // Tarjeta individual de proyecto
          <div key={i} className="service-card" style={{ margin: '0 auto 2.5rem auto' }}>
            <div className="card" style={{ padding: '22px 15px 10px 15px', textAlign: 'center', width: '100%', position: 'relative' }}>
              {/* Imagen del proyecto */}
              <img src={p.img} alt={p.title} className="service-icon" style={{ maxWidth: '110px', marginBottom: '10px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginTop: 10 }} />
              {/* Icono decorativo */}
              <div style={{
                position: 'absolute',
                top: 10,
                right: 10,
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.85)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                zIndex: 2
              }}>
                <i className={`fa-solid ${p.icon}`} style={{ fontSize: 16, color: '#088395' }}></i>
              </div>
            </div>
            {/* Contenido textual de la tarjeta */}
            <div className="card-content" style={{
              padding: '0 18px 22px 18px',
              width: '100%',
              background: '#fff',
              borderRadius: '12px',
              boxShadow: '0 2px 12px 0 rgba(80,60,20,0.08)',
              marginTop: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '120px',
            }}>
              {/* Título del proyecto */}
              <h4 style={{ margin: '16px 0 10px 0', fontWeight: 700, fontSize: '1.15rem', color: '#071952', textAlign: 'center' }}>
                <a href={p.link} style={{ color: '#088395', textDecoration: 'none' }}>{p.title}</a>
              </h4>
              {/* Descripción del proyecto */}
              <p style={{ fontSize: '1.01rem', color: '#222', lineHeight: 1.6, textAlign: 'center', marginBottom: 0 }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
