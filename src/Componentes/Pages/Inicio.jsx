import React from 'react'
import NoticiaPrincipal from '../NoticiaPrincipal'

function Inicio() {
  return (
    <div className=''>
        <div className='flex flex-col items-center pt-4 '>
            <div className='lg:w-3/5 md:w-5/6 md:h-96 w-full h-56 md:px-0 px-4 pb-2'>
                <NoticiaPrincipal imagen="DeficitTarjetasMetro.jpeg" titulo="Seguridad Lia Limon"/>
            </div>
            <div className='md:flex lg:w-3/5 md:w-5/6 md:h-48 w-full md:space-x-2 md:px-0 px-4 '>
                <div className='md:h-auto h-56 md:pb-0 pb-2'>
                    <NoticiaPrincipal imagen="DeficitTarjetasMetro.jpeg" titulo="Seguridad Lia Limon"/>
                </div>
                <div className='md:h-auto h-56 md:pb-0 pb-2'>
                    <NoticiaPrincipal imagen="DeficitTarjetasMetro.jpeg" titulo="Seguridad Lia Limon"/>
                </div>
                <div className='md:h-auto h-56 md:pb-0 pb-2'>
                    <NoticiaPrincipal imagen="DeficitTarjetasMetro.jpeg" titulo="Seguridad Lia Limon"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Inicio