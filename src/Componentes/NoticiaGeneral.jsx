import React from 'react'

function NoticiaGeneral({imagen, titulo, descripcion}) {
  return (
    <div>
        <div className='border-t border-solid border-black md:py-4 py-3'></div>
        <div className='md:flex hover:brightness-50 transition duration-300'>
            <div className="md:w-4/6 h-56">
                <img 
                    className="w-full h-full object-cover"
                    src={imagen}
                    alt="imagen"
                />
            </div>
            <div className="md:px-2 items-center w-full">
                <h1 className='md:text-2xl font-bold'>{titulo}</h1>
                <p className='text-justify font-mono'>{descripcion}</p>
            </div>
        </div>
    </div>
  )
}

export default NoticiaGeneral