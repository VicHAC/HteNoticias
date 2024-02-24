import React from 'react';

function NoticiaPrincipal({ imagen, titulo }) {
  return (
    <div className='w-full h-full flex flex-col items-center mb-3 border border-solid border-gray-500 shadow rounded hover:brightness-50 transition duration-300'>
      <div className='w-full h-full overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src={`${imagen}`}
          alt='Descripción de la imagen'
        />
      </div>
      <div className='w-full p-1 flex-1'>
        <h1 className='text-center text-lg'>{titulo}</h1>
      </div>
    </div>
  );
}

export default NoticiaPrincipal;
