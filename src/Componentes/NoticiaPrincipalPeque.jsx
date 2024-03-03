import React from 'react';

function NoticiaPrincipal({ imagen, titulo }) {
  return (
    <div className='w-full h-full flex flex-col items-center border border-solid border-gray-500 shadow rounded hover:brightness-50 transition duration-300'>
      <div className='w-full h-full overflow-hidden'>
        <img
          className='w-full md:h-52 h-52 object-cover'
          src={`Img/${imagen}.jpeg`}
          alt='Descripción de la imagen'
        />
      </div>
      <div className='w-full p-1 flex-1'>
        <h1 className='md:text-left text-justify text-lg font-bold'>{titulo}</h1>
      </div>
    </div>
  );
}

export default NoticiaPrincipal;
