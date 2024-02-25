import React from 'react'
import { Link } from 'react-router-dom';
import NoticiaPrincipal from '../NoticiaPrincipal'
import NoticiaPrincipalPeque from '../NoticiaPrincipalPeque'
import NoticiaGeneral from '../NoticiaGeneral';

function Inicio() {
    const tituloNoticiaG = 'La CDMX debe aplicar la estrategia de seguridad "blindar" que implementó Santiago Taboada en Benito Juárez: Lía Limón';
    const rutaImagenG = 'seguridadLiaLimon.jpeg';
    const rutaHtmlG = 'SeguridadLiaLimon.html';

    const tituloNoticiaI = "Organizaciones anti taurinos reclaman avanzar con dictamen que prohíbe esta práctica en CDMX";
    const rutaImagenI = "organizacionesAntitaurinos.jpeg";
    const rutaHtmlI = "OrganizacionesAntitaurinos.html";

    const tituloNoticiaC = "Lineamientos garantizan en el PJCDMX respeto a derechos humanos de indígenas";
    const rutaImagenC = "lineamientosRespeto.jpeg";
    const rutaHtmlC = "LineamientosRespeto.html";

    const tituloNoticiaD = "Se Registra Octavio Rivero Como Candidato de MORENA a la Alcaldía de Milpa Alta";
    const rutaImagenD = "registraOctavio.jpeg";
    const rutaHtmlD = "RegistraOctavio.html";


    const tituloNoticiaG1 = "Solicita PAN conocer déficit de tarjetas inteligentes en el Metro";
    const rutaImagenG1 = "deficitTarjetasMetro.jpeg";
    const rutaHtmlG1 = "DeficitTarjetasMetro.html";
    const descripcionG1 = "Legisladores del PAN cuestionan la falta de tarjetas recargables en el Metro, atribuyendo problemas a decisiones apresuradas del Gobierno de MORENA y exigen transparencia y mejoras en el servicio.";

  return (
    <div className=''>
        <div className='flex flex-col items-center pt-4 '>

{/* ################################# NOTICIA PRINCIPAL GRANDE ################################# */}           
            
            <div className='lg:w-3/5 md:w-5/6 md:h-96 w-full h-auto md:px-0 px-2 pb-2'>
                <Link to='/Boletin' state={{ titulo: tituloNoticiaG, imagen: rutaImagenG, html: rutaHtmlG }}>
                    <NoticiaPrincipal imagen={rutaImagenG} titulo={tituloNoticiaG} />
                </Link>
            </div>

{/* ################################# NOTICIAS PRINCIPALES PEQUE ################################# */}            
            
            <div className='md:flex lg:w-3/5 md:w-5/6 md:h-auto w-full md:space-x-2 md:px-0 px-2 md:pb-8 pb-4'>
                <div className='md:w-1/3 w-full h-auto md:pb-0 pb-2'>
                <Link to='/Boletin' state={{ titulo: tituloNoticiaI, imagen: rutaImagenI, html: rutaHtmlI }}>
                    <NoticiaPrincipalPeque imagen={rutaImagenI} titulo={tituloNoticiaI}/>
                </Link>                
                </div>
                <div className='md:w-1/3 w-full h-auto md:pb-0 pb-2'>
                <Link to='/Boletin' state={{ titulo: tituloNoticiaC, imagen: rutaImagenC, html: rutaHtmlC }}>
                    <NoticiaPrincipalPeque imagen={rutaImagenC} titulo={tituloNoticiaC}/>
                </Link>                
                </div>
                <div className='md:w-1/3 w-full h-auto md:pb-0 pb-2'>
                <Link to='/Boletin' state={{ titulo: tituloNoticiaD, imagen: rutaImagenD, html: rutaHtmlD }}>
                    <NoticiaPrincipalPeque imagen={rutaImagenD} titulo={tituloNoticiaD}/>
                </Link>
                </div>
            </div>

{/* ################################# NOTICIAS GENERALES ################################# */}
            <div className='pb-4 lg:w-3/4 md:w-5/6'>
            <div className='md:px-0 px-2'>
            <Link to='/Boletin' state={{ titulo: tituloNoticiaG1, imagen: rutaImagenG1, html: rutaHtmlG1 }}>
                <NoticiaGeneral imagen={rutaImagenG1} titulo={tituloNoticiaG1} descripcion={descripcionG1}/>
            </Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Inicio