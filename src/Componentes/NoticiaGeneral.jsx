import React, { useState, useEffect } from 'react';
import HeadlessHtmlComponent from './HeadlessHtmlComponent';

function NoticiaGeneral({ imagen, titulo, rutaHtml }) {

  return (
    <div className='md:pb-6 pb-4'>
      <div className='border-t border-solid border-black md:py-4 py-3'></div>
      <div className='md:flex hover:brightness-50 transition duration-300'>
        <div className="md:w-4/6 h-56">
          <img 
            className="w-full h-full object-cover"
            src={`${imagen}.jpeg`}
            alt="imagen"
          />
        </div>
        <div className="md:px-2 items-center w-full">
          <h1 className='md:text-2xl text-lg font-bold'>{titulo}</h1>
          <div className="text-justify font-mono lg:h-28 md:h-20 h-16 overflow-hidden">
            <HeadlessHtmlComponent filePath={`/${rutaHtml}.html`} />
          </div>
            <p className="text-blue-700 cursor-pointer">
              ... Leer más
            </p>
        </div>
      </div>
    </div>
  );
}

export default NoticiaGeneral;
