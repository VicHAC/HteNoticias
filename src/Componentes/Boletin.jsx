import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeadlessHtmlComponent from './HeadlessHtmlComponent';

function Boletin() {
  const location = useLocation();
  const [titulo, setTitulo] = useState('');
  const [rutaImagen, setRutaImagen] = useState('');
  const [rutaHtml, setRutaHtml] = useState('');

  useEffect(() => {
    // Verifica si existe el estado en la ubicación antes de intentar acceder a sus propiedades
    if (location.state) {
      setTitulo(location.state.titulo);
      setRutaImagen(location.state.imagen);
      setRutaHtml(location.state.html);
    }
  }, [location.state]);

  return (
    <div className='flex flex-col items-center'>
      <div className='lg:w-3/4 md:w-5/6 md:px-0 px-2'>
        <div className='py-4'>
          <h1 className='md:text-3xl text-2xl text-justify font-bold'>{titulo}</h1>
        </div>
        <div className='w-full h-96 overflow-hidden'>
          <img 
            className="w-full h-full object-cover"
            src={rutaImagen}
            alt="imagen"
          />
        </div>
        <div className='py-4'>
          <HeadlessHtmlComponent filePath={rutaHtml} />
        </div>
      </div>
    </div>
  );
}

export default Boletin;
