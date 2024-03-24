import React from 'react';

function NoticiaPrincipal({ imagen, titulo }) {
  return (
    <div className='w-full h-auto flex flex-col items-center'>
      <div className='w-full h-full overflow-hidden'>
        <img
          className='w-full md:h-52 h-52 object-cover'
          src={`Img/${imagen}`}
          alt='Descripción de la imagen'
        />
      </div>
      <div className='w-full px-2'>
        <h1 className='text-justify text-lg font-semibold'>{titulo}</h1>
      </div>
    </div>
  );
}

export default NoticiaPrincipal;
