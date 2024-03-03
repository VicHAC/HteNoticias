import React from 'react'
import { Link } from 'react-router-dom';
import NoticiaPrincipal from '../NoticiaPrincipal'
import NoticiaPrincipalPeque from '../NoticiaPrincipalPeque'
import NoticiaGeneral from '../NoticiaGeneral';

function Inicio() {
    const tituloNoticiaG = 'La CDMX debe aplicar la estrategia de seguridad "blindar" que implementó Santiago Taboada en Benito Juárez: Lía Limón';
    const rutaImagenG = 'seguridadLiaLimon';
    const rutaHtmlG = 'SeguridadLiaLimon';
    const idNoticia = '1';

    const tituloNoticiaI = "Organizaciones anti taurinos reclaman avanzar con dictamen que prohíbe esta práctica en CDMX";
    const rutaImagenI = "organizacionesAntitaurinos";
    const rutaHtmlI = "OrganizacionesAntitaurinos";

    const tituloNoticiaC = "Lineamientos garantizan en el PJCDMX respeto a derechos humanos de indígenas";
    const rutaImagenC = "lineamientosRespeto";
    const rutaHtmlC = "LineamientosRespeto";

    const tituloNoticiaD = "Se Registra Octavio Rivero Como Candidato de MORENA a la Alcaldía de Milpa Alta";
    const rutaImagenD = "registraOctavio";
    const rutaHtmlD = "RegistraOctavio";


    const tituloNoticiaG1 = "Solicita PAN conocer déficit de tarjetas inteligentes en el Metro";
    const rutaImagenG1 = "deficitTarjetasMetro";
    const rutaHtmlG1 = "DeficitTarjetasMetro";

 /*######################## COSAS RARAS ###############################################*/   
    const queryParamsG = new URLSearchParams();
    queryParamsG.append('T', tituloNoticiaG);
    queryParamsG.append('I', rutaImagenG);
    queryParamsG.append('H', rutaHtmlG);

    const queryParamsI = new URLSearchParams();
    queryParamsI.append('T', tituloNoticiaI);
    queryParamsI.append('I', rutaImagenI);
    queryParamsI.append('H', rutaHtmlI);
    
    const queryParamsC = new URLSearchParams();
    queryParamsC.append('T', tituloNoticiaC);
    queryParamsC.append('I', rutaImagenC);
    queryParamsC.append('H', rutaHtmlC);

    const queryParamsD = new URLSearchParams();
    queryParamsD.append('T', tituloNoticiaD);
    queryParamsD.append('I', rutaImagenD);
    queryParamsD.append('H', rutaHtmlD);

    const queryParamsG1 = new URLSearchParams();
    queryParamsG1.append('T', tituloNoticiaG1);
    queryParamsG1.append('I', rutaImagenG1);
    queryParamsG1.append('H', rutaHtmlG1);
  return (
    <div className=''>
        <div className='flex flex-col items-center pt-4 '>

{/* ################################# NOTICIA PRINCIPAL GRANDE ################################# */}           
            
            <div className='lg:w-3/5 md:w-5/6 md:h-96 w-full h-auto md:px-0 px-2 pb-2'>
                <Link to={`/Nota/${idNoticia}?${queryParamsG.toString()}`}>
                    <NoticiaPrincipal imagen={rutaImagenG} titulo={tituloNoticiaG} />
                </Link>
            </div>

{/* ################################# NOTICIAS PRINCIPALES PEQUE ################################# */}            
            
            <div className='md:flex lg:w-3/5 md:w-5/6 md:h-auto w-full md:space-x-2 md:px-0 px-2 md:pb-8 pb-4'>
                <div className='md:w-1/3 w-full h-auto md:pb-0 pb-2'>
                <Link to={`/Nota/${idNoticia}?${queryParamsI.toString()}`}>
                    <NoticiaPrincipalPeque imagen={rutaImagenI} titulo={tituloNoticiaI}/>
                </Link>                
                </div>
                <div className='md:w-1/3 w-full h-auto md:pb-0 pb-2'>
                <Link to={`/Nota/${idNoticia}?${queryParamsC.toString()}`}>
                    <NoticiaPrincipalPeque imagen={rutaImagenC} titulo={tituloNoticiaC}/>
                </Link>                
                </div>
                <div className='md:w-1/3 w-full h-auto md:pb-0 pb-2'>
                <Link to={`/Nota/${idNoticia}?${queryParamsD.toString()}`}>
                    <NoticiaPrincipalPeque imagen={rutaImagenD} titulo={tituloNoticiaD}/>
                </Link>
                </div>
            </div>

{/* ################################# NOTICIAS GENERALES ################################# */}
            <div className='pb-4 lg:w-3/4 md:w-5/6'>
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

export default Inicio