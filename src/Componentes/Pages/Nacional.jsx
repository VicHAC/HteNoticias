import React from 'react'
import NoticiaGeneral from '../NoticiaGeneral'
import { Link } from 'react-router-dom'

function Nacional() {
    const idNoticia = '1';
  
    const tituloNoticiaG1 = "Urge que alcaldías destinen un porcentaje de su presupuesto para esterilizar perros y gatos callejeros: Javier Ramos";
    const rutaImagenG1 = "N1JavierRamos";
    const rutaHtmlG1 = "N1JavierRamos";

    const tituloNoticiaG2 = "Incluido el Presidente de la República, ningún político ganará más de 50 mil pesos mensuales, primera propuesta de Sandra Cueva al Senado";
    const rutaImagenG2 = "N2SandraCuevas";
    const rutaHtmlG2 = "N2SandraCuevas";


    const queryParamsG1 = new URLSearchParams();
    queryParamsG1.append('T', tituloNoticiaG1);
    queryParamsG1.append('I', rutaImagenG1);
    queryParamsG1.append('H', rutaHtmlG1);

    const queryParamsG2 = new URLSearchParams();
    queryParamsG2.append('T', tituloNoticiaG2);
    queryParamsG2.append('I', rutaImagenG2);
    queryParamsG2.append('H', rutaHtmlG2);

  return (
    <div>
      <div className='flex flex-col items-center pt-4'>
        <div>
          <h1 className='text-5xl pb-4'>Nacional</h1>
        </div>
        <div className='pb-4 lg:w-3/4 md:w-5/6'>
            <div className='md:px-0 px-2'>
            <Link to={`/Boletin/${idNoticia}?${queryParamsG2.toString()}`}>
                <NoticiaGeneral imagen={rutaImagenG2} titulo={tituloNoticiaG2} rutaHtml={rutaHtmlG2}/>
            </Link>
            </div>
            <div className='md:px-0 px-2'>
            <Link to={`/Boletin/${idNoticia}?${queryParamsG1.toString()}`}>
                <NoticiaGeneral imagen={rutaImagenG1} titulo={tituloNoticiaG1} rutaHtml={rutaHtmlG1}/>
            </Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Nacional