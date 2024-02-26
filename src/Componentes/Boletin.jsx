import React, { useState, useEffect } from 'react';
import HeadlessHtmlComponent from './HeadlessHtmlComponent';

function Boletin() {
  const [titulo, setTitulo] = useState('');
  const [rutaImagen, setRutaImagen] = useState('');
  const [rutaHtml, setRutaHtml] = useState('');

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const titulo = params.get('T');
  const imagen = params.get('I');
  const html = params.get('H');

  setTitulo(titulo);
  setRutaImagen(imagen);
  setRutaHtml(html);
}, []);

  return (
    <div className='flex flex-col items-center'>
      <div className='lg:w-3/4 md:w-5/6 md:px-0 px-2'>
        <div className='py-4'>
          <h1 className='md:text-3xl text-2xl text-justify font-bold'>{titulo}</h1>
        </div>
        <div className='w-full h-96 overflow-hidden'>
          <img 
            className="w-full h-full object-cover"
            src={`/${rutaImagen}.jpeg`}
            alt="imagen"
          />
        </div>
        <div className='py-4'>
          <HeadlessHtmlComponent filePath={`/${rutaHtml}.html`} />
        </div>
      </div>
    </div>
  );
}

export default Boletin;
