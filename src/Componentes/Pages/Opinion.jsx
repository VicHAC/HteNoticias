import React from 'react'
import NoticiaSinFoto from '../NoticiaSinFoto'
import { Link } from 'react-router-dom'

function Opinion() {
    const idNoticia = '1';
  
    const tituloNoticiaG1 = "Programas sociales ¿bandera de la oposición?";
    const rutaHtmlG1 = "O1ProgramasSociales";
    const nombreColumnaG1 = "Café con Adorno";
    const notaAutorG1 = "Raúl Adorno Jiménez";
    const fotoG1 = "RaulAdorno"


    const queryParamsG1 = new URLSearchParams();
    queryParamsG1.append('T', tituloNoticiaG1);
    queryParamsG1.append('H', rutaHtmlG1);
    queryParamsG1.append('NA', notaAutorG1);
    queryParamsG1.append('NC', nombreColumnaG1);
    queryParamsG1.append('Fo', fotoG1);

  return (
    <div>
      <div className='flex flex-col items-center pt-4'>
        <div>
          <h1 className='text-5xl pb-4'>Opinion</h1>
        </div>
          <div className='pb-4 lg:w-3/4 md:w-5/6'>
            <div className='md:px-0 px-2'>
            <Link to={`/Nota/${idNoticia}?${queryParamsG1.toString()}`}>
                <NoticiaSinFoto titulo={tituloNoticiaG1} rutaHtml={rutaHtmlG1} 
                nombreColumna={nombreColumnaG1} notaAutor={notaAutorG1} foto={fotoG1}/>
            </Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Opinion