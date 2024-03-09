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

    const tituloNoticiaG7 = "Taboada prioriza en sus ejes de gobierno a las mujeres";
    const rutaImagenG7 = "C7Taboada";
    const rutaHtmlG7 = "C7Taboada";

    const tituloNoticiaG8 = "Proyecto de gobierno de Clara Brugada humanista e incluyente: Sebastián Ramírez";
    const rutaImagenG8 = "C8SebastianRamirez";
    const rutaHtmlG8 = "C8SebastianRamirez";

    const tituloNoticiaG9 = "Integra Fernando Mercado equipo de trabajo para la elaboración de proyecto de plan de gobierno en La Magdalena Contreras";
    const rutaImagenG9 = "C9Fernando";
    const rutaHtmlG9 = "C9Fernando";

    const tituloNoticiaG10 = "Jóvenes que apoyan a Claudia Sheinbaum presentan la campaña “Por La Primera Presidenta de México”";
    const rutaImagenG10 = "C10PrimeraPresidenta";
    const rutaHtmlG10 = "C10PrimeraPresidenta";

    const tituloNoticiaG11 = "PAN exige dar de baja a diputados faltistas de la Comisión de Gestión Integral del Agua";
    const rutaImagenG11 = "C11BajaDiputados";
    const rutaHtmlG11 = "C11BajaDiputados";
    const fechaG11 = "29 de Febrero 2024";

    const tituloNoticiaG12 = "Demandan a Santiago Taboada acciones para frenar y prevenir todo tipo de violencia hacia las mujeres";
    const rutaImagenG12 = "C12DemandanSantiago";
    const rutaHtmlG12 = "C12DemandanSantiago";
    const fechaG12 = "8 de Marzo de 2024";

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

    const queryParamsG7 = new URLSearchParams();
    queryParamsG7.append('T', tituloNoticiaG7);
    queryParamsG7.append('I', rutaImagenG7);
    queryParamsG7.append('H', rutaHtmlG7);

    const queryParamsG8 = new URLSearchParams();
    queryParamsG8.append('T', tituloNoticiaG8);
    queryParamsG8.append('I', rutaImagenG8);
    queryParamsG8.append('H', rutaHtmlG8);

    const queryParamsG9 = new URLSearchParams();
    queryParamsG9.append('T', tituloNoticiaG9);
    queryParamsG9.append('I', rutaImagenG9);
    queryParamsG9.append('H', rutaHtmlG9)

    const queryParamsG10 = new URLSearchParams();
    queryParamsG10.append('T', tituloNoticiaG10);
    queryParamsG10.append('I', rutaImagenG10);
    queryParamsG10.append('H', rutaHtmlG10)

    const queryParamsG11 = new URLSearchParams();
    queryParamsG11.append('T', tituloNoticiaG11);
    queryParamsG11.append('I', rutaImagenG11);
    queryParamsG11.append('H', rutaHtmlG11);
    queryParamsG11.append('F', fechaG11)

    const queryParamsG12 = new URLSearchParams();
    queryParamsG12.append('T', tituloNoticiaG12);
    queryParamsG12.append('I', rutaImagenG12);
    queryParamsG12.append('H', rutaHtmlG12);
    queryParamsG12.append('F', fechaG12)

  return (
    <div>
      <div className='flex flex-col items-center pt-4'>
        <div>
          <h1 className='text-5xl pb-4'>CDMX</h1>
        </div>
        <div className='pb-4 lg:w-3/4 md:w-5/6'>
            <div className='md:px-0 px-2'>
            <Link to={`/Nota/${idNoticia}?${queryParamsG12.toString()}`}>
                <NoticiaGeneral imagen={rutaImagenG12} titulo={tituloNoticiaG12} rutaHtml={rutaHtmlG12}/>
            </Link>
            </div>
            <div className='md:px-0 px-2'>
            <Link to={`/Nota/${idNoticia}?${queryParamsG11.toString()}`}>
                <NoticiaGeneral imagen={rutaImagenG11} titulo={tituloNoticiaG11} rutaHtml={rutaHtmlG11}/>
            </Link>
            </div>
            <div className='md:px-0 px-2'>
            <Link to={`/Nota/${idNoticia}?${queryParamsG10.toString()}`}>
                <NoticiaGeneral imagen={rutaImagenG10} titulo={tituloNoticiaG10} rutaHtml={rutaHtmlG10}/>
            </Link>
            </div>
            <div className='md:px-0 px-2'>
            <Link to={`/Nota/${idNoticia}?${queryParamsG9.toString()}`}>
                <NoticiaGeneral imagen={rutaImagenG9} titulo={tituloNoticiaG9} rutaHtml={rutaHtmlG9}/>
            </Link>
            </div>
            <div className='md:px-0 px-2'>
            <Link to={`/Nota/${idNoticia}?${queryParamsG8.toString()}`}>
                <NoticiaGeneral imagen={rutaImagenG8} titulo={tituloNoticiaG8} rutaHtml={rutaHtmlG8}/>
            </Link>
            </div>
            <div className='md:px-0 px-2'>
            <Link to={`/Nota/${idNoticia}?${queryParamsG7.toString()}`}>
                <NoticiaGeneral imagen={rutaImagenG7} titulo={tituloNoticiaG7} rutaHtml={rutaHtmlG7}/>
            </Link>
            </div>
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