import React, { useState, useEffect } from 'react';
import { PiCoffee } from 'react-icons/pi';
import HtmlViewer from './HtmlViewer';
import Autor from './Autor';

function NoticiaSinFoto({ titulo, rutaHtml, nombreColumna, notaAutor, foto }) {

  return (
    <div className='md:pb-6 pb-4'>
      <div className='border-t border-solid border-black md:py-4 py-3'></div>
      <div className='md:flex'>
        <div className="md:px-2 items-center w-full">
          <h1 className='text-2xl font-bold text-left'>{titulo}</h1>
          <Autor nombreDeLaColumna={nombreColumna}
          autorDeLaNota={notaAutor}
          fotoDelAutor={foto}/>
          <div className="text-justify font-mono text-gray-800 lg:h-40 md:h-32 h-28 overflow-hidden">
            <HtmlViewer htmlFilePath={`Bol/${rutaHtml}.html`} />
          </div>
            <p className="text-blue-700 cursor-pointer">
              ... Leer más
            </p>
        </div>
      </div>
    </div>
  );
}



export default NoticiaSinFoto;
