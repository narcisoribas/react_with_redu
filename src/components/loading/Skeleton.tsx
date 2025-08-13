

import React from 'react';
import './Skeleton.css'; // Importa os estilos que acabamos de criar

// Definimos as props que nosso componente pode receber
interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string; // Para permitir classes CSS customizadas, se necessário
}

const Skeleton: React.FC<SkeletonProps> = ({ width, height, borderRadius, className }) => {
  // Criamos um objeto de estilo inline para definir as dimensões dinamicamente
  const style = {
    width,
    height,
    borderRadius,
  };

  // Retornamos uma div com a classe base 'skeleton' e quaisquer outras classes/estilos
  return <div className={`skeleton ${className || ''}`} style={style}></div>;
};

export default Skeleton;