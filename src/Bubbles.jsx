
// Importa React y los estilos de burbujas
import React from 'react';
import './Bubbles.css';

// Función utilitaria: genera un número aleatorio entre a y b
function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

// Paleta de colores para las burbujas binarias
const binaryColors = [
  '#00e676', '#00b0ff', '#ffea00', '#ff3d00', '#d500f9', '#00c853', '#ff1744', '#2979ff', '#ffd600', '#76ff03'
];

// Componente de fondo animado de burbujas binarias
export default function Bubbles({ count = 28 }) {
  // Genera un arreglo de burbujas con propiedades aleatorias
  const bubbles = Array.from({ length: count }).map((_, i) => {
    // Tamaño, posición, duración y color aleatorios
    const size = randomBetween(18, 32);
    const left = randomBetween(0, 100);
    const duration = randomBetween(6, 14);
    const delay = randomBetween(0, 8);
    const color = binaryColors[Math.floor(Math.random() * binaryColors.length)];
    // Dígito binario aleatorio (0 o 1)
    const digit = Math.random() > 0.5 ? '1' : '0';
    // Renderiza el span de la burbuja
    return (
      <span
        key={i}
        className="bubble binary-bubble"
        style={{
          left: `${left}%`,
          color,
          fontSize: `${size}px`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          fontWeight: 700,
          filter: 'drop-shadow(0 0 6px ' + color + ')',
        }}
      >{digit}</span>
    );
  });
  // Contenedor de todas las burbujas
  return <div className="bubbles-bg">{bubbles}</div>;
}
