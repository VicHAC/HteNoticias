import React from 'react'
import { Link } from 'react-router-dom';
import NoticiaPrincipal from '../NoticiaPrincipal'
import NoticiaPrincipalPeque from '../NoticiaPrincipalPeque'
import NoticiaGeneral from '../NoticiaGeneral';

function Inicio() {
    const idNoticia = '1';

    const tituloNoticiaG = "Vamos por más democracia, por más libertades y más justicia para el pueblo de México: Claudia Sheinbaum desde San Pedro Cholula, Puebla";
    const rutaImagenG = "N3Claudia";
    const rutaHtmlG = "N3Claudia";
    const fechaG = "10 de Marzo de 2024";
    
    const tituloNoticiaI = "Jóvenes que apoyan a Claudia Sheinbaum presentan la campaña “Por La Primera Presidenta de México”";
    const rutaImagenI = "C10PrimeraPresidenta";
    const rutaHtmlI = "C10PrimeraPresidenta";
    const fechaI = "";

    const tituloNoticiaC = "La comunidad de Azcapotzalco respalda a la Doctora Claudia Sheinbaum rumbo a la Presidencia de México";
    const rutaImagenC = "C6AzcapotzalcoClaudia";
    const rutaHtmlC = "C6AzcapotzalcoClaudia";
    const fechaC = "";

    const tituloNoticiaD = "Integra Fernando Mercado equipo de trabajo para la elaboración de proyecto de plan de gobierno en La Magdalena Contreras";
    const rutaImagenD = "C9Fernando";
    const rutaHtmlD = "C9Fernando";
    const fechaD = "";


    const tituloNoticiaG1 = "Solicita PAN conocer déficit de tarjetas inteligentes en el Metro";
    const rutaImagenG1 = "deficitTarjetasMetro";
    const rutaHtmlG1 = "DeficitTarjetasMetro";

    const tituloNoticiaG2 = 'La CDMX debe aplicar la estrategia de seguridad "blindar" que implementó Santiago Taboada en Benito Juárez: Lía Limón';
    const rutaImagenG2 = 'seguridadLiaLimon';
    const rutaHtmlG2 = 'SeguridadLiaLimon';

    const tituloNoticiaG3 = "Organizaciones anti taurinos reclaman avanzar con dictamen que prohíbe esta práctica en CDMX";
    const rutaImagenG3 = "organizacionesAntitaurinos";
    const rutaHtmlG3 = "OrganizacionesAntitaurinos";

    const tituloNoticiaG4 = "Lineamientos garantizan en el PJCDMX respeto a derechos humanos de indígenas";
    const rutaImagenG4 = "lineamientosRespeto";
    const rutaHtmlG4 = "LineamientosRespeto";

    const tituloNoticiaG5 = "Se Registra Octavio Rivero Como Candidato de MORENA a la Alcaldía de Milpa Alta";
    const rutaImagenG5 = "registraOctavio";
    const rutaHtmlG5 = "RegistraOctavio";

    const tituloNoticiaG6 = "Taboada prioriza en sus ejes de gobierno a las mujeres";
    const rutaImagenG6 = "C7Taboada";
    const rutaHtmlG6 = "C7Taboada";

    const tituloNoticiaG7 = "Proyecto de gobierno de Clara Brugada humanista e incluyente: Sebastián Ramírez";
    const rutaImagenG7 = "C8SebastianRamirez";
    const rutaHtmlG7 = "C8SebastianRamirez";

 /*######################## COSAS RARAS ###############################################*/   
    const queryParamsG = new URLSearchParams();
    queryParamsG.append('T', tituloNoticiaG);
    queryParamsG.append('I', rutaImagenG);
    queryParamsG.append('H', rutaHtmlG);
    queryParamsG.append('F', fechaG)

    const queryParamsI = new URLSearchParams();
    queryParamsI.append('T', tituloNoticiaI);
    queryParamsI.append('I', rutaImagenI);
    queryParamsI.append('H', rutaHtmlI);
    queryParamsI.append('F', fechaI)
    
    const queryParamsC = new URLSearchParams();
    queryParamsC.append('T', tituloNoticiaC);
    queryParamsC.append('I', rutaImagenC);
    queryParamsC.append('H', rutaHtmlC);
    queryParamsC.append('F', fechaC)

    const queryParamsD = new URLSearchParams();
    queryParamsD.append('T', tituloNoticiaD);
    queryParamsD.append('I', rutaImagenD);
    queryParamsD.append('H', rutaHtmlD);
    queryParamsD.append('F', fechaD)


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

export default Inicio