import React from 'react';
import { useLocation } from 'react-router-dom';

function Boletin() {
  const location = useLocation();

  // Verifica si existe el estado en la ubicación antes de intentar acceder a sus propiedades
  const rutaImagen = location.state ? location.state.imagen : null;
  const rutaHTML = location.state ? location.state.html : null;

  return (
    <div className='flex flex-col items-center h-full'>
        <div className='w-3/4'>
            {rutaImagen && <img src={rutaImagen} alt="Imagen pasada desde otra página" />}
        </div>
        <div className='w-3/4'>
            {rutaHTML && (
                <div dangerouslySetInnerHTML={{ __html: rutaHTML }} />
            )}
        </div>
    </div>
  );
}

export default Boletin;
