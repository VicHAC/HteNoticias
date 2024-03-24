import React, { useState, useEffect } from 'react';
import { PiCoffee } from 'react-icons/pi';

function Autor({ nombreDeLaColumna, autorDeLaNota, fotoDelAutor }) {

  return (
    <div className='py-2'>
      <div className='md:flex'>
        <div className="md:px-0 items-center w-full">
          <div className='flex py-1'>
          <div>
              {nombreDeLaColumna === "Café con Adorno" && <PiCoffee className='text-6xl text-red-800'/>}
          </div>
          <div className='pl-2'>
            <div className='text-left'>
              {nombreDeLaColumna && <h1 className='text-lg font-semibold underline'>{nombreDeLaColumna}</h1>}
            </div>
            <div className='text-left'>
              {autorDeLaNota && <h1 className='text-lg'>Por: {autorDeLaNota}</h1>}
            </div>
          </div>
          <div className="ml-2">
              {fotoDelAutor && 
                <div className="w-10 rounded overflow-hidden">
                <img
                src={`Img/${fotoDelAutor}`}
                className="w-full h-full object-cover"
                />
                </div>}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}



export default Autor;
