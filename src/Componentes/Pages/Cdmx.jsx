import React from 'react'
import NoticiaGeneral from '../NoticiaGeneral'
import { Link } from 'react-router-dom'

function Cdmx() {
    const idNoticia = '1';
  
    const tituloNoticiaG1 = "Diputada gestiona venta accesible de tinacos para la ciudadanía";
    const rutaImagenG1 = "C1VentaTinacos";
    const rutaHtmlG1 = "C1VentaTinacos";

    const tituloNoticiaG2 = "Federico Chávez señala a Sebastián Ramírez de ordenar el acoso político a vecinos de alcaldías de oposición";
    const rutaImagenG2 = "C2AcosoPolitico";
    const rutaHtmlG2 = "C2AcosoPolitico";

    const tituloNoticiaG3 = "Tras denuncia ciudadana, Sandra Cuevas ordena retiro de puesto cuyo dueño, con cuchillo en mano, intentó atacar a una mujer";
    const rutaImagenG3 = "C3SandraCuevas";
    const rutaHtmlG3 = "C3SandraCuevas";

    const tituloNoticiaG4 = "Ana Villagrán renuncia al PAN e irá ante el INE a presentar denuncia por violencia política de género";
    const rutaImagenG4 = "C4AnaVillagran";
    const rutaHtmlG4 = "C4AnaVillagran";

    const tituloNoticiaG5 = "Registra PRD CDMX a Rita Contreras Ocampo como su candidata al Distrito 12 local de la Alcaldía Cuauhtémoc";
    const rutaImagenG5 = "C5RitaContreras";
    const rutaHtmlG5 = "C5RitaContreras";

    const tituloNoticiaG6 = "La comunidad de Azcapotzalco respalda a la Doctora Claudia Sheinbaum rumbo a la Presidencia de México";
    const rutaImagenG6 = "C6AzcapotzalcoClaudia";
    const rutaHtmlG6 = "C6AzcapotzalcoClaudia";

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

    const queryParamsG4 = new URLSearchParams();
    queryParamsG4.append('T', tituloNoticiaG4);
    queryParamsG4.append('I', rutaImagenG4);
    queryParamsG4.append('H', rutaHtmlG4);

    const queryParamsG5 = new URLSearchParams();
    queryParamsG5.append('T', tituloNoticiaG5);
    queryParamsG5.append('I', rutaImagenG5);
    queryParamsG5.append('H', rutaHtmlG5);

    const queryParamsG6 = new URLSearchParams();
    queryParamsG6.append('T', tituloNoticiaG6);
    queryParamsG6.append('I', rutaImagenG6);
    queryParamsG6.append('H', rutaHtmlG6);

  return (
    <div>
      <div className='flex flex-col items-center pt-4'>
        <div>
          <h1 className='text-5xl pb-4'>CDMX</h1>
        </div>
        <div className='pb-4 lg:w-3/4 md:w-5/6'>
            <div className='md:px-0 px-2'>
            <Link to={`/Nota/${idNoticia}?${queryParamsG6.toString()}`}>
                <NoticiaGeneral imagen={rutaImagenG6} titulo={tituloNoticiaG6} rutaHtml={rutaHtmlG6}/>
            </Link>
            </div>
            <div className='md:px-0 px-2'>
            <Link to={`/Nota/${idNoticia}?${queryParamsG5.toString()}`}>
                <NoticiaGeneral imagen={rutaImagenG5} titulo={tituloNoticiaG5} rutaHtml={rutaHtmlG5}/>
            </Link>
            </div>
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

export default Cdmx