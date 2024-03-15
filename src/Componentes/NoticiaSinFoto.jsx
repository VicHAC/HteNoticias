import React, { useState, useEffect } from 'react';
import HeadlessHtmlComponent from './HeadlessHtmlComponent';
import { PiCoffee } from 'react-icons/pi';

function NoticiaSinFoto({ titulo, rutaHtml, nombreColumna, notaAutor, foto }) {

  return (
    <div className='md:pb-6 pb-4'>
      <div className='border-t border-solid border-black md:py-4 py-3'></div>
      <div className='md:flex'>
        <div className="md:px-2 items-center w-full">
          <h1 className='text-2xl font-bold text-left'>{titulo}</h1>
          <div className='flex py-2'>
          <div>
              {nombreColumna && <PiCoffee className='text-6xl text-red-800'/>}
          </div>
          <div className='pl-2'>
            <div className='text-left'>
              {nombreColumna && <h1 className='text-lg font-bold underline'>{nombreColumna}</h1>}
            </div>
            <div className='text-left'>
              {notaAutor && <h1 className='text-lg'>Por: {notaAutor}</h1>}
            </div>
          </div>
          <div className="ml-2">
              {foto && 
                <div className="w-10 rounded overflow-hidden">
                <img
                src={`Img/${foto}.jpeg`}
                className="w-full h-full object-cover"
                />
                </div>}
          </div>
        </div>
          <div className="text-justify font-mono text-gray-800 lg:h-40 md:h-32 h-28 overflow-hidden">
            <HeadlessHtmlComponent filePath={`Bol/${rutaHtml}.html`} />
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
