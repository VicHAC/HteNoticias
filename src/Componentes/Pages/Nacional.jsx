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

    const tituloNoticiaG3 = "Vamos por más democracia, por más libertades y más justicia para el pueblo de México: Claudia Sheinbaum desde San Pedro Cholula, Puebla";
    const rutaImagenG3 = "N3Claudia";
    const rutaHtmlG3 = "N3Claudia";
    const fechaG3 = "10 de Marzo de 2024";

    const tituloNoticiaG4 = "Este 2 de junio será una fiesta democrática gracias al pueblo de México: Claudia Sheinbaum llama a defender la democracia y a la 4T en las urnas";
    const rutaImagenG4 = "N4Claudia";
    const rutaHtmlG4 = "N4Claudia";
    const fechaG4 = "12 de Marzo de 2024";


    const queryParamsG1 = new URLSearchParams();
    queryParamsG1.append('T', tituloNoticiaG1);
    queryParamsG1.append('I', rutaImagenG1);
    queryParamsG1.append('H', rutaHtmlG1);

    const queryParamsG2 = new URLSearchParams();
    queryParamsG2.append('T', tituloNoticiaG2);
    queryParamsG2.append('I', rutaImagenG2);
    queryParamsG2.append('H', rutaHtmlG2);

    const queryParamsG3 = new URLSearchParams();
    queryParamsG3.append('T', tituloNoticiaG3);
    queryParamsG3.append('I', rutaImagenG3);
    queryParamsG3.append('H', rutaHtmlG3);
    queryParamsG3.append('F', fechaG3)

    const queryParamsG4 = new URLSearchParams();
    queryParamsG4.append('T', tituloNoticiaG4);
    queryParamsG4.append('I', rutaImagenG4);
    queryParamsG4.append('H', rutaHtmlG4);
    queryParamsG4.append('F', fechaG4)

  return (
    <div>
      <div className='flex flex-col items-center pt-4'>
        <div>
          <h1 className='text-5xl pb-4'>Nacional</h1>
        </div>
        <div className='pb-4 lg:w-3/4 md:w-5/6'>
            <div className='md:px-0 px-2'>
            <Link to={`/Nota/${idNoticia}?${queryParamsG4.toString()}`}>
                <NoticiaGeneral imagen={rutaImagenG4} titulo={tituloNoticiaG4} rutaHtml={rutaHtmlG4}/>
            </Link>
            </div>
            <div className='md:px-0 px-2'>
            <Link to={`/Nota/${idNoticia}?${queryParamsG3.toString()}`}>
                <NoticiaGeneral imagen={rutaImagenG3} titulo={tituloNoticiaG3} rutaHtml={rutaHtmlG3}/>
            </Link>
            </div>
            <div className='md:px-0 px-2'>
            <Link to={`/Nota/${idNoticia}?${queryParamsG2.toString()}`}>
                <NoticiaGeneral imagen={rutaImagenG2} titulo={tituloNoticiaG2} rutaHtml={rutaHtmlG2}/>
            </Link>
            </div>
            <div className='md:px-0 px-2'>
            <Link to={`/Nota/${idNoticia}?${queryParamsG1.toString()}`}>
                <NoticiaGeneral imagen={rutaImagenG1} titulo={tituloNoticiaG1} rutaHtml={rutaHtmlG1}/>
            </Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Nacional