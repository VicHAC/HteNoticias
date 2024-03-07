import React, { useState, useEffect } from 'react';
import HeadlessHtmlComponent from './HeadlessHtmlComponent';

function Nota() {
  const [titulo, setTitulo] = useState('');
  const [rutaImagen, setRutaImagen] = useState('');
  const [rutaHtml, setRutaHtml] = useState('');
  const [fecha, setFecha] = useState(null); // Nuevo estado para la fecha

  useEffect(() => {
    // Obtén la parte de la URL después del hash (#)
    const hashParams = window.location.hash.split('?')[1];
    const params = new URLSearchParams(hashParams);

    const titulo = params.get('T');
    const imagen = params.get('I');
    const html = params.get('H');
    const fechaParam = params.get('F');

    setTitulo(titulo);
    setRutaImagen(imagen);
    setRutaHtml(html);
    setFecha(fechaParam); 
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <div className='lg:w-3/4 md:w-5/6 md:px-0 px-2'>
        <div className='py-4'>
          <h1 className='md:text-3xl text-2xl text-justify font-bold'>{titulo}</h1>
        </div>
        <div className='flex justify-between'>
          <div>
            <h2 className='text-left'>Foto: Cortesia</h2>
          </div>
          <div className='text-right'>
            {fecha && <div>{fecha}</div>}
          </div>
        </div>
        <div className='w-full h-96 overflow-hidden'>
          <img 
            className="w-full h-full object-cover"
            src={`Img/${rutaImagen}.jpeg`}
            alt="imagen"
          />
        </div>
        <div className='py-4 font-mono text-justify'>
          <HeadlessHtmlComponent filePath={`Bol/${rutaHtml}.html`} />
        </div>
      </div>
    </div>
  );
}

export default Nota;
