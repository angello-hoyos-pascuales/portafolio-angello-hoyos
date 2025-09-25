import React, { useEffect, useRef, useState } from 'react';


// Componente decorativo de ojos animados con cejas y boca
export default function Eyes({ smile = false }) {
  // Referencias a los elementos DOM de los ojos
  const leftEye = useRef(null);
  const rightEye = useRef(null);

  // Efecto: los ojos siguen el mouse moviendo las pupilas
  useEffect(() => {
    function handleMouseMove(e) {
      const eyes = [leftEye.current, rightEye.current];
      eyes.forEach(eye => {
        if (!eye) return;
        // Calcula el centro del ojo
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        // Calcula el ángulo y la distancia al mouse
        const dx = e.clientX - eyeX;
        const dy = e.clientY - eyeY;
        const angle = Math.atan2(dy, dx);
        const radius = 8; // Máximo desplazamiento de la pupila
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        // Mueve la pupila
        eye.style.transform = `translate(${x}px, ${y}px)`;
      });
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    // Contenedor general (columnas: ojos y boca)
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
      {/* Fila de ojos y cejas */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', width: 170, height: 80 }}>
        {/* Cejas (dos líneas curvas arriba de los ojos) */}
        <div style={{ position: 'absolute', left: 32, top: 8, width: 36, height: 10, borderTop: '4px solid #222', borderRadius: '20px 20px 0 0', transform: 'rotate(-12deg)' }} />
        <div style={{ position: 'absolute', right: 32, top: 8, width: 36, height: 10, borderTop: '4px solid #222', borderRadius: '20px 20px 0 0', transform: 'rotate(12deg)' }} />
        {/* Ojo izquierdo (blanco y pupila) */}
        <div style={{ width: 60, height: 60, background: '#fff', borderRadius: '50%', margin: '0 18px', position: 'relative', boxShadow: '0 2px 12px rgba(0,0,0,0.16)' }}>
          <div ref={leftEye} style={{ width: 26, height: 26, background: '#222', borderRadius: '50%', position: 'absolute', top: 17, left: 17, transition: 'transform 0.1s' }} />
        </div>
        {/* Ojo derecho (blanco y pupila) */}
        <div style={{ width: 60, height: 60, background: '#fff', borderRadius: '50%', margin: '0 18px', position: 'relative', boxShadow: '0 2px 12px rgba(0,0,0,0.16)' }}>
          <div ref={rightEye} style={{ width: 26, height: 26, background: '#222', borderRadius: '50%', position: 'absolute', top: 17, left: 17, transition: 'transform 0.1s' }} />
        </div>
      </div>
      {/* Boca: línea curva que puede ser sonrisa o neutra */}
      <div style={{
        width: 60,
        height: 30,
        marginTop: -10,
        borderBottom: smile ? '6px solid #222' : '4px solid #888', // Sonrisa si smile=true
        borderRadius: smile ? '0 0 40px 40px' : '0 0 30px 30px',
        transition: 'border-radius 0.3s, border-bottom 0.3s',
        background: 'transparent',
      }} />
    </div>
  );
}
