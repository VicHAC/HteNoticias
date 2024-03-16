import React from 'react'
import { Link } from 'react-router-dom';
import NoticiaPrincipal from '../NoticiaPrincipal'
import NoticiaPrincipalPeque from '../NoticiaPrincipalPeque'
import NoticiaGeneral from '../NoticiaGeneral';

function Inicio() {

    const noticiaPrincipal = [
        {
            id: 'N3',
            titulo: "Vamos por más democracia, por más libertades y más justicia para el pueblo de México: Claudia Sheinbaum desde San Pedro Cholula, Puebla",
            imagen: "N3.jpeg",
            texto: "N3"
        }
    ];

    const noticiasPrincipalesPeques = [
        {
            id: 'C10',
            titulo: "Jóvenes que apoyan a Claudia Sheinbaum presentan la campaña “Por La Primera Presidenta de México”",
            imagen: "C10.jpeg",
            texto: "C10"
        },
        {
            id: 'C6',
            titulo: 'La comunidad de Azcapotzalco respalda a la Doctora Claudia Sheinbaum rumbo a la Presidencia de México',
            imagen: 'C6.jpeg',
            texto: 'C6'
        },
        {
            id: 'C9',
            titulo: "Integra Fernando Mercado equipo de trabajo para la elaboración de proyecto de plan de gobierno en La Magdalena Contreras",
            imagen: "C9.jpeg",
            texto: "C9"
        }
    ];

    const noticiasGenerales = [
        {
            id: 'C8',
            titulo: "Proyecto de gobierno de Clara Brugada humanista e incluyente: Sebastián Ramírez",
            imagen: "C8.jpeg",
            texto: "C8"
        },
        {
            id: 'C7',
            titulo: "Taboada prioriza en sus ejes de gobierno a las mujeres",
            imagen: "C7.jpeg",
            texto: "C7"
        },
        {
            id: '5',
            titulo: "Solicita PAN conocer déficit de tarjetas inteligentes en el Metro",
            imagen: "deficitTarjetasMetro.jpeg",
            texto: "DeficitTarjetasMetro"
        },
        {
            id: '4',
            titulo: 'La CDMX debe aplicar la estrategia de seguridad "blindar" que implementó Santiago Taboada en Benito Juárez: Lía Limón',
            imagen: 'seguridadLiaLimon.jpeg',
            texto: 'SeguridadLiaLimon'
        },
        {
            id: '3',
            titulo: "Organizaciones anti taurinos reclaman avanzar con dictamen que prohíbe esta práctica en CDMX",
            imagen: "organizacionesAntitaurinos.jpeg",
            texto: "OrganizacionesAntitaurinos"
        },
        {
            id: '2',
            titulo: "Lineamientos garantizan en el PJCDMX respeto a derechos humanos de indígenas",
            imagen: "lineamientosRespeto.jpeg",
            texto: "LineamientosRespeto"
        },
        {
            id: '1',
            titulo: "Se Registra Octavio Rivero Como Candidato de MORENA a la Alcaldía de Milpa Alta",
            imagen: "registraOctavio.jpeg",
            texto: "RegistraOctavio"
        }
    ];

    // Función para formatear el título de la noticia para la URL
    const formatTitleForURL = (title) => {
        // Reemplazar espacios por guiones
        let formattedTitle = title.replace(/ /g, '-');
        // Eliminar acentos
        formattedTitle = formattedTitle.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return formattedTitle;
    };

  return (
    <div className=''>
        <div className='flex flex-col items-center pt-4 '>

{/* ################################# NOTICIA PRINCIPAL GRANDE ################################# */}           
            
            <div className='lg:w-3/5 md:w-5/6 md:h-96 w-full h-auto md:px-0 px-2 pb-2'>
                <Link to={`/Nota/${noticiaPrincipal[0].id}/${formatTitleForURL(noticiaPrincipal[0].titulo)}`}>
                    <NoticiaPrincipal imagen={noticiaPrincipal[0].imagen} titulo={noticiaPrincipal[0].titulo} />
                </Link>
            </div>

{/* ################################# NOTICIAS PRINCIPALES PEQUE ################################# */}            
            
            <div className='md:flex lg:w-3/5 md:w-5/6 md:h-auto w-full md:space-x-2 md:px-0 px-2 md:pb-8 pb-4'>
                <div className='md:w-1/3 w-full h-auto md:pb-0 pb-2'>
                <Link to={`/Nota/${noticiasPrincipalesPeques[0].id}/${formatTitleForURL(noticiasPrincipalesPeques[0].titulo)}`}>
                    <NoticiaPrincipalPeque imagen={noticiasPrincipalesPeques[0].imagen} titulo={noticiasPrincipalesPeques[0].titulo}/>
                </Link>                
                </div>
                <div className='md:w-1/3 w-full h-auto md:pb-0 pb-2'>
                <Link to={`/Nota/${noticiasPrincipalesPeques[1].id}/${formatTitleForURL(noticiasPrincipalesPeques[1].titulo)}`}>
                    <NoticiaPrincipalPeque imagen={noticiasPrincipalesPeques[1].imagen} titulo={noticiasPrincipalesPeques[1].titulo}/>
                </Link>                
                </div>
                <div className='md:w-1/3 w-full h-auto md:pb-0 pb-2'>
                <Link to={`/Nota/${noticiasPrincipalesPeques[2].id}/${formatTitleForURL(noticiasPrincipalesPeques[2].titulo)}`}>
                    <NoticiaPrincipalPeque imagen={noticiasPrincipalesPeques[2].imagen} titulo={noticiasPrincipalesPeques[2].titulo}/>
                </Link>
                </div>
            </div>

{/* ################################# NOTICIAS GENERALES ################################# */}
            <div className='pb-4 lg:w-3/4 md:w-5/6'>
                {noticiasGenerales.map((noticiaGeneral, index) => (
                    <div key={index} className='md:px-0 px-2'>
                        <Link to={`/Nota/${noticiaGeneral.id}/${formatTitleForURL(noticiaGeneral.titulo)}`}>
                            <NoticiaGeneral 
                                imagen={noticiaGeneral.imagen} 
                                titulo={noticiaGeneral.titulo} 
                                rutaHtml={noticiaGeneral.texto} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Inicio